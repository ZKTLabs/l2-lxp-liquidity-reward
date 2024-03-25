export const BorrowerOperationsAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_activePoolAddress",
        "type": "address"
      }
    ],
    "name": "ActivePoolAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_collSurplusPoolAddress",
        "type": "address"
      }
    ],
    "name": "CollSurplusPoolAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "controller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "enabled",
        "type": "bool"
      }
    ],
    "name": "ControllerChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_defaultPoolAddress",
        "type": "address"
      }
    ],
    "name": "DefaultPoolAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_gasPoolAddress",
        "type": "address"
      }
    ],
    "name": "GasPoolAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newPriceFeedAddress",
        "type": "address"
      }
    ],
    "name": "PriceFeedAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_sortedTrovesAddress",
        "type": "address"
      }
    ],
    "name": "SortedTrovesAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_stabilityPoolAddress",
        "type": "address"
      }
    ],
    "name": "StabilityPoolAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "arrayIndex",
        "type": "uint256"
      }
    ],
    "name": "TroveCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newTroveManagerAddress",
        "type": "address"
      }
    ],
    "name": "TroveManagerAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_debt",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_coll",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "stake",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum BorrowerOperations.BorrowerOperation",
        "name": "operation",
        "type": "uint8"
      }
    ],
    "name": "TroveUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_zktStakingAddress",
        "type": "address"
      }
    ],
    "name": "ZKTStakingAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_ZKUSDFee",
        "type": "uint256"
      }
    ],
    "name": "ZKUSDBorrowingFeePaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_zkusdTokenAddress",
        "type": "address"
      }
    ],
    "name": "ZKUSDTokenAddressChanged",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "BORROWING_FEE_FLOOR",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "CCR",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DECIMAL_PRECISION",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MCR",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MIN_NET_DEBT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NAME",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PERCENT_DIVISOR",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ZKUSD_GAS_COMPENSATION",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_100pct",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "activePool",
    "outputs": [
      {
        "internalType": "contract IActivePool",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_upperHint",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lowerHint",
        "type": "address"
      },
      {
        "internalType": "bytes[]",
        "name": "_updateData",
        "type": "bytes[]"
      }
    ],
    "name": "addColl",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxFeePercentage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_collWithdrawal",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_ZKUSDChange",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_isDebtIncrease",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "_upperHint",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lowerHint",
        "type": "address"
      },
      {
        "internalType": "bytes[]",
        "name": "_updateData",
        "type": "bytes[]"
      }
    ],
    "name": "adjustTrove",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimCollateral",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes[]",
        "name": "_updateData",
        "type": "bytes[]"
      }
    ],
    "name": "closeTrove",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "controllers",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "defaultPool",
    "outputs": [
      {
        "internalType": "contract IDefaultPool",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_debt",
        "type": "uint256"
      }
    ],
    "name": "getCompositeDebt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEntireSystemColl",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "entireSystemColl",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEntireSystemDebt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "entireSystemDebt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isOwner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_borrower",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_upperHint",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lowerHint",
        "type": "address"
      },
      {
        "internalType": "bytes[]",
        "name": "_updateData",
        "type": "bytes[]"
      }
    ],
    "name": "moveETHGainToTrove",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxFeePercentage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_ZKUSDAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_upperHint",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lowerHint",
        "type": "address"
      },
      {
        "internalType": "bytes[]",
        "name": "_updateData",
        "type": "bytes[]"
      }
    ],
    "name": "openTrove",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "priceFeed",
    "outputs": [
      {
        "internalType": "contract IPriceFeed",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ZKUSDAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_upperHint",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lowerHint",
        "type": "address"
      },
      {
        "internalType": "bytes[]",
        "name": "_updateData",
        "type": "bytes[]"
      }
    ],
    "name": "repayZKUSD",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_troveManagerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_activePoolAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_defaultPoolAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_stabilityPoolAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_gasPoolAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_collSurplusPoolAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_priceFeedAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_sortedTrovesAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_zkusdTokenAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_zktStakingAddress",
        "type": "address"
      }
    ],
    "name": "setAddresses",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "controller",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "enabled",
        "type": "bool"
      }
    ],
    "name": "setController",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_gasCompensation",
        "type": "uint256"
      }
    ],
    "name": "setGasCompensation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_minNetDebt",
        "type": "uint256"
      }
    ],
    "name": "setMinNetDebt",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sortedTroves",
    "outputs": [
      {
        "internalType": "contract ISortedTroves",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "troveManager",
    "outputs": [
      {
        "internalType": "contract ITroveManager",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_collWithdrawal",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_upperHint",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lowerHint",
        "type": "address"
      },
      {
        "internalType": "bytes[]",
        "name": "_updateData",
        "type": "bytes[]"
      }
    ],
    "name": "withdrawColl",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxFeePercentage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_ZKUSDAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_upperHint",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lowerHint",
        "type": "address"
      },
      {
        "internalType": "bytes[]",
        "name": "_updateData",
        "type": "bytes[]"
      }
    ],
    "name": "withdrawZKUSD",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "zktStaking",
    "outputs": [
      {
        "internalType": "contract IZKTStaking",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "zktStakingAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "zkusdToken",
    "outputs": [
      {
        "internalType": "contract IZKUSDToken",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]