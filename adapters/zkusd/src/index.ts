import fs from "fs";
import { write } from "fast-csv";
import {Web3} from "web3";
import {BorrowerOperationsAbi} from "./BorrowerOperations";

const LINEA_RPC = "https://rpc.linea.build";
const BorrowOperationsAddress= "0xA2569C5660F878968307fe677886a533599c0DF3";
const TOPIC_CREATE_TROVE = "0x59cfd0cd754bc5748b6770e94a4ffa5f678d885cb899dcfadc5734edb97c67ab"
const TOPIC_UPDATE_TROVE  = "0xc3770d654ed33aeea6bf11ac8ef05d02a6a04ed4686dd2f624d853bbec43cc8b"

type OutputDataSchemaRow = {
    block_number: number;
    timestamp: number;
    user_address: string;
    token_address: string;
    token_balance: bigint;
    token_symbol: string;
};

interface BlockData {
    blockNumber: number;
    blockTimestamp: number;
}

interface PastLog {
    topics: string[];
    transactionHash: string;
}

export const getUserTVLByBlock = async (blocks: BlockData) => {
    const web3 = new Web3(LINEA_RPC)
    const { blockNumber, blockTimestamp } = blocks
    const pastLogs = await web3.eth.getPastLogs({
        fromBlock: blockNumber,
        toBlock: blockNumber,
        address: BorrowOperationsAddress,
        topics: [[TOPIC_CREATE_TROVE, TOPIC_UPDATE_TROVE]]
    })
    const txnSet = new Set<string>();
    const csvRows: OutputDataSchemaRow[] = [];
    for (let pastLog of pastLogs) {
        const log = pastLog as PastLog
        if (txnSet.has(log.transactionHash)) {
            continue
        }
        const txn = await web3.eth.getTransaction(log.transactionHash)
        const user = txn.from
        const depositEth = web3.utils.fromWei(txn.value, 'ether')
        console.log(`Block: ${blockNumber}, User: ${user}, Hash: ${log.transactionHash}, Deposit: ${depositEth}`)
        csvRows.push({
            block_number: blockNumber,
            timestamp: blockTimestamp,
            user_address: user,
            token_address: "0x",
            token_balance: BigInt(depositEth),
            token_symbol: "ETH",
        })
        txnSet.add(log.transactionHash)
    }
    return csvRows
};