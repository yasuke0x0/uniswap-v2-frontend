# Uniswap V2 Frontend: Swap & Liquidity

You've already cloned and deployed the **UniswapV2 Smart Contracts** (Core, Periphery & Multicall). Now it's time to bring the **frontend** to life.

This frontend is composed of:

- **SDK**: Abstractions to help interact with UniswapV2 smart contracts in a TypeScript/JavaScript environment.
- **Interface**: uses the SDK.

This frontend currently supports **Sepolia**.

| Contract  | Address                                                                                      |
|-----------|----------------------------------------------------------------------------------------------|
| Multicall | [0x7c9d5c2f52e3b5989e0d80f1982502465d1e83cb](https://sepolia.etherscan.io/address/0x7c9d5c2f52e3b5989e0d80f1982502465d1e83cb) |
| Factory   | [0xF62c03E08ada871A0bEb309762E260a7a6a880E6](https://sepolia.etherscan.io/address/0xF62c03E08ada871A0bEb309762E260a7a6a880E6) |
| Router    | [0xeE567Fe1712Faf6149d80dA1E6934E354124CfE3](https://sepolia.etherscan.io/address/0xeE567Fe1712Faf6149d80dA1E6934E354124CfE3) |
| Multicall | [0x25eef291876194aefad0d60dff89e268b90754bb](https://sepolia.etherscan.io/address/0x25eef291876194aefad0d60dff89e268b90754bb) |

---

## 🛠️ SDK Setup

### 1. Install Dependencies

```bash
yarn --cwd ./sdk install
```

### 2. Customize Constants

#### Modify `sdk/src/constants.ts`:

- Add your chain ID to the `ChainId` enum if missing.
- Update `FACTORY_ADDRESS` with your deployed factory contract address.
- Replace `INIT_CODE_HASH` with the one from your `UniswapV2Library`'s `pairFor` function (prepend with `0x`).

#### Modify `sdk/src/entities/token.ts`:

- Add your ChainId and WETH contract address to the `WETH` constant.

#### (Optional) Modify `sdk/src/entities/currency.ts`:

- Only required if your chain’s native token is not Ether (e.g., Polygon MATIC).
- Update the `ETHER` field (symbol, name, and decimals).

### 3. Build the SDK

```bash
yarn --cwd ./sdk build
```

Your SDK is now ready to integrate with the interface!

---

## 🖥️ Interface Setup

### 1. Install Dependencies

```bash
yarn --cwd ./interface install
```

### 2. Update Configuration

#### Modify `interface/src/constants/index.ts`:

- Update `ROUTER_ADDRESS` with your router address.
- Add your desired `chainId` in `WETH_ONLY`.

#### Modify `interface/src/connectors/index.ts`:

- Add your chain ID to `supportedChainIds` (You can keep the chains you want)
- (Optional) Update `appName` & `appLogo` from `walletlink` constant.

#### Modify `interface/src/constants/multicall/index.ts`:

- Add your chain to the `MULTICALL_NETWORKS` constant.

#### Modify `interface/src/components/Header/index.ts`:

- Add your chain to the `NETWORK_LABELS` constant.

#### Modify `interface/src/constants/v1/index.ts`:

- Add your factory address to the `V1_FACTORY_ADDRESSES` constant.

#### Modify `interface/src/state/lists/hooks.ts`:

- Add your chain to the `EMPTY_LIST` constant.

#### Modify `interface/src/utils/index.ts`:

- Update `ETHERSCAN_PREFIXES` with your block explorer prefix (or customize `getEtherscanLink()` for non-Etherscan explorers).

### 3. Check Node Version

Ensure you're using **Node.js v16**:

```bash
node ./interface/checkNodeVersion.js
```

If not, use a tool like `nvm` to switch to the required version.

### 4. Run the Interface

* If you are using nvm
```bash
nvm use 16 && YARN_IGNORE_NODE=1 yarn --cwd ./interface start
```

* Otherwise
```bash
YARN_IGNORE_NODE=1 yarn --cwd ./interface start
```
---

## 🔍 Resources

- **Uniswap Documentation**: [docs.uniswap.org](https://docs.uniswap.org/)
- **Uniswap Interface (v2)**: [GitHub](https://github.com/Uniswap/interface/tree/v2.6.4)
- **Uniswap SDK (v2)**: [GitHub](https://github.com/Uniswap/sdks/tree/main/sdks/v2-sdk)
- **Guide**: [Goldrush.dev](https://goldrush.dev/guides/how-to-clone-uniswapv2-frontend/)
