/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.77.0
  Forc version: 0.51.1
  Fuel-Core version: 0.22.1
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { ProxyAbi, ProxyAbiInterface } from "../ProxyAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum Error",
      "components": [
        {
          "name": "AccessDenied",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidPythFeePayment",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "DebugModeRequired",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 5,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        5
      ]
    },
    {
      "typeId": 5,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct AssetId",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 15,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct I64",
      "components": [
        {
          "name": "value",
          "type": 15,
          "typeArguments": null
        },
        {
          "name": "negative",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 15,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "struct RawVec",
      "components": [
        {
          "name": "ptr",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 15,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        5
      ]
    },
    {
      "typeId": 13,
      "type": "struct SparkContracts",
      "components": [
        {
          "name": "version",
          "type": 15,
          "typeArguments": null
        },
        {
          "name": "account_balance_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "clearing_house_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "insurance_fund_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "treasury_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "perp_market_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "vault_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "pyth_address",
          "type": 7,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "struct Vec",
      "components": [
        {
          "name": "buf",
          "type": 12,
          "typeArguments": [
            {
              "name": "",
              "type": 5,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "len",
          "type": 15,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        5
      ]
    },
    {
      "typeId": 15,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [],
      "name": "debug_increment_timestamp",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "trader",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 10,
          "typeArguments": null
        }
      ],
      "name": "debug_modify_owed_realized_pnl",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "price_feed",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 15,
          "typeArguments": null
        }
      ],
      "name": "debug_set_price",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "base_token",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "current_twap",
          "type": 15,
          "typeArguments": null
        }
      ],
      "name": "debug_setup_twap",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "account_balance_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "clearing_house_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "insurance_fund_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "treasury_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "perp_market_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "vault_address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "pyth_address",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "publish_new_version",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "get_all_spark_contracts_versions",
      "output": {
        "name": "",
        "type": 14,
        "typeArguments": [
          {
            "name": "",
            "type": 13,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "price_feed",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "get_price",
      "output": {
        "name": "",
        "type": 15,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "get_spark_contracts",
      "output": {
        "name": "",
        "type": 13,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "version",
          "type": 15,
          "typeArguments": null
        }
      ],
      "name": "get_spark_contracts_by_version",
      "output": {
        "name": "",
        "type": 13,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "timestamp",
      "output": {
        "name": "",
        "type": 15,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "price_update_data",
          "type": 14,
          "typeArguments": [
            {
              "name": "",
              "type": 9,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "update_price",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [],
      "name": "version",
      "output": {
        "name": "",
        "type": 15,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "OWNER",
      "configurableType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      },
      "offset": 20548
    },
    {
      "name": "DEBUG_STEP",
      "configurableType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          {
            "name": "",
            "type": 15,
            "typeArguments": null
          }
        ]
      },
      "offset": 20300
    }
  ]
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "b48b753af346966d0d169c0b2e3234611f65d5cfdb57c7b6e7cd6ca93707bee0",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "f383b0ce51358be57daa3b725fe44acdb2d880604e367199080b4379c41bb6ed",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class ProxyAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): ProxyAbiInterface {
    return new Interface(_abi) as unknown as ProxyAbiInterface
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): ProxyAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as ProxyAbi
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<ProxyAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = ProxyAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as ProxyAbi;
  }
}
