import { useContext } from "react"
import { fetchCandyMachine, getMerkleProof, getMerkleRoot, mintV2, mplCandyMachine, route, safeFetchCandyGuard } from "@metaplex-foundation/mpl-candy-machine";
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { generateSigner, transactionBuilder, publicKey, some, sol } from '@metaplex-foundation/umi';
import { useMemo } from "react";
import { setComputeUnitLimit } from '@metaplex-foundation/mpl-toolbox';
import bs58 from 'bs58';
import { SignerContext } from 'contexts/Web3Context';
import { clusterApiUrl } from "@solana/web3.js";
import toast from "react-hot-toast";

const quicknodeEndpoint = process.env.REACT_APP_RPC || clusterApiUrl(process.env.REACT_APP_NETWORK ? (process.env.REACT_APP_NETWORK as 'mainnet-beta'|'devnet') : 'mainnet-beta');
const candyMachineAddress = publicKey(process.env.REACT_APP_CANDY_MACHINE_ID);
const treasury = publicKey(process.env.REACT_APP_TREASURY);

const allowList = [
    "7cp4eLRdSpLEwR26F1ihHisYud3hgFneAArrvAWeqgRt",
    "FYGYzfYZgxjhkADiXCxaExHaBZSWZ65LED4LnQSBk6nj",
    "C1QjJnrQqhiexnr3AEzs7yc9bLYSCK9jzfVU8jfB54JU",
    "DfSykrcAUh77RtACU1NB8FZd2XZJCbTKToZ1jQQXE7b9",
    "G6gqwm3TcXpiHhFotWbn8BWTvSF5WcXoD9nz6Vpubapm",
    "6xvcdu96Yy9WoftuLhm8a6BkvzNPXxj5tC16h9q6HKzQ",
    "4tXTwsmmiQqCYJW2gUvYHJxKsRVdhGfsNRAhsCsDyUbo",
    "Dh2NTqZ7SrzsAQNxQSuLpUdgRPndXXoij9mk5amm6i6b",
    "RdXupgLFCp9BS6BwWmZzfekYqJa3MxnpxuCNtuhDCM1",
    "6AGSfrGQ2gJUw2RHB6LC16i2n8K1M6VBxXVXKT89gcmE",
    "9VWb81TsY4Kr2hef1kzkRj9PSouhe1ep74eMiHLcL86g",
    "7cp4eLRdSpLEwR26F1ihHisYud3hgFneAArrvAWeqgRt",
    "FPUo5L3GPfRZoA35DkSGdAQGkHhebxNAXXF8EmaYwRxY",
    "FPwy1ehGTtmTciND7XCnxrRTnjrmtdfgcMsh1evJPqpk",
    "35kz6ZzPwLbvuXQjKbESHFF4LwfQ8hiDV64QmPMk978H",
    "BPu73zRk5ZKBT36yz6NC2QKXnrf4QnwQtqZimuHkmhR6",
    "C82m2QuRi41KyRcYDyi6Fahkzu1JiK31QrRmtKcocnBo",
    "C7zDAjMuHaDNELAwcYSnfBPnKfqJUznXTFSAitoyAuUY",
    "3CYEVSnVnb1WCutFJsz7ZTaFULxQogMfP9xr23DMzwrv",
    "44xS24AuP1pjKN8h8zkBnPJH1xLAt9VvJWdw8y1maTF4",
    "GKDAs2VNe8RSzKgQoAt9nk7fKPkWdnfChQvkTQGpv7df",
    "7cp4eLRdSpLEwR26F1ihHisYud3hgFneAArrvAWeqgRt",
    "5GtCX4rDPee49o9Zn1T9U96tFghXyG7LgDznKxK5rTsC",
    "98p5pugU7na2AiJLP439V9N1hZXtukErKgehRsARkeu8",
    "4PWQrEWCRXH2xtbV7VMKXuMC33RAVixe2vQpnoYWviL8",
    "99EsdZN8Gem3PtWKskncdDFesJNFNiDSnUcxtsQp9GgR",
    "7qVPRdxhUeWcUxo4brbHW7hNkUhTie1HQPf5fab1auMJ",
    "HUdLqUsdT2tjW961G64BLbtRcudzhcBFCgHsu4ffbZR1",
    "9BjsHd5mgC43cA7gbo1SioPbVx1pyNYtqjeQe5VmThLu",
    "5njZVEZfrEKgVsmKTB4PGkZSNFZXrb9Lkhz9MFhzaY52",
    "3KoTUMihzYeCA9k65oUJ3FwXLAqx61gyqxaUoHFjrWPb",
    "8MZCqLRcgdwKq3f9xBNkavoC9Grgou9ZqTThGgEL3add",
    "3LjRUaxHuE9j2pTCcxJSqSzxY8MMeXWBfb7BC7dA5433",
    "5iBW5ptYmPofwiEPrTMpMsgtMufWYAbeuTtUzBfH2smw",
    "DXs7tZcANHmDojJkSzu2Rfy5HbV5eDSV6c14jb6rjjwJ",
    "H69Sww9RCDhuRPEFC2AdDJG7q59WxA9mz17oNDbUDT9P",
    "BNZq3zvbciXNspgWK36z9mvEeqneJKfc8Br3kLbGZ69G",
    "9xFzVki4eMPoQMncd5RK794b3LCY2N9wznTGgBXMdr4i",
    "C9ec6Lv5j8D4TnDXFDjyr2wKcLKRPJtngARCQ8683LhG",
    "Cg1sAQLZYX14gCfq7ZGTmJCmEUWmFXrD5zLtiVGqp7H8",
    "oAhYtofnaTD76tDh5Gdb3Cb71CkySGmHYhFX8GnDSmA",
    "chjgZoQkmr9FDBVyNs4fwD1uo9VZucfz4fKwADhXj4t",
    "3oq4GpjKxN7mBGh9sYBuDNXgWk394mnSUFcF8DBV2Kze",
    "CLh9tNzoXf12PYGfaRC8gREZ7p5d9VjvDSazovUt3gEK",
    "3dMKphdQNY3pfYy8wjMCe3QSau3FdzuaPLwhfLxhyduM",
    "FYHzggXRjtZgorXv9dF2zkokwuJ5cbPx8RnfmhXWhQcj",
    "78kyG6K7jYMsHtD6yq3yWJGWrD7UN2AQZFqCecqoJWks",
    "J8qGyP6yq3BD3xuqimxrkhmfXfTdCVXez1SMbwJjLBNE",
    "1Za4PboSnpjdubXhGLsvQj64mQ5rpxgy9gDybknbYh7",
    "2QtUoCFCtQGBdD4EkPsKzTMiW3ZF6q4JWCufj2E1yvwX",
    "8gqBMuH6oAr4ooFFGB1cmphLLX24zxK6dNfH78rV49iR",
    "7qVPRdxhUeWcUxo4brbHW7hNkUhTie1HQPf5fab1auMJ",
    "GY59dkVhPZ7WNZ2a62dsXHL3j4GUHwceYo6DEPrfW2jS",
    "F8NUSdH4u5jPWFJrTpaMdtjEZ7uqWery1vsjq64GwwQ3",
    "EY6ozTLymhChwQgtnjiSrAUSeo2Z948DdEFmkvYcZ1Bh",
    "AXKFAYMUZ2NLZHiKKYVwphS1cbxfEmgrXXm4u4dejaS4",
    "3JxTdiFkr85HH9ad5A9hyDdeeBj9emQwcwR5WM6rKy6R",
    "6YqMsCDWvhyJAX6Bb2oUwHKAKZ7d3p2pKqqvsXwN8pxe",
    "0xAdaDbe2A52eA359eca64C1F7A0c35eF68e38b554",
    "3Lc4XFLkamaJWfjRXka7LYjPeNbnJSw3SytvtgfqhgNX",
    "63kW2qTddS9JQeF914TLGMdDLzziCdR4WtA1Hg7jJHWR",
    "9693qJHrck4p3ntpPLNHJa52DuuhdqiiBUCFSHqvXqLm",
    "2eSFQbuqQeNA9mgFBTpjoCsDVd7FeegGAS8jQe2fsw5e",
    "4Uw4q7XjEFHg176WNFi7gBHSMPTvsq7V5KtM9ENPUwiz",
    "6u8484jy15rYLsopGwykPRKa53AAEZmwkmGqpHGAwzDp",
    "C77vbyCwhvDRWntMPT3t6V5M1SY3UsMjY88rtBYJmfJS",
    "3JxTdiFkr85HH9ad5A9hyDdeeBj9emQwcwR5WM6rKy6R",
    "3B5gA9A8jK3AwNCog4cUeBY7cyMc4eemWYk9rULMLD6E",
    "EBs6J5XkW61exc3zWaW5v1rYMR3YaEGcS72PFFVMAULf",
    "57CTT8XvBz6tauy5ThKdRWSo6DGZ89ZFgsvraoJD3bpa",
    "3kZWJGhq21L1KGFjUerfUu4PBm3hoFXAWbkUQ9nUXGww",
    "8DtPYCRuBN9KB1wG2eTDg6TQybSwTk7ZJfixHtEiehtm",
    "4Q3sKJ6efhMihTQeCJUtNhgnQKQswqxxZ2mi357HksaQ"
]

export const useMintNFT = () => {

    const { signer } = useContext(SignerContext);
    const umi = useMemo(() =>
        createUmi(quicknodeEndpoint)
            .use(walletAdapterIdentity({
                publicKey: signer?.publicKey ? publicKey(signer?.publicKey) : '',
                ...signer
            }))
            .use(mplCandyMachine())
            .use(mplTokenMetadata()),
        [signer, mplCandyMachine, walletAdapterIdentity, mplTokenMetadata, quicknodeEndpoint, createUmi]
      );
    
    const mint = async () => {
        const candyMachine = await fetchCandyMachine(
            umi,
            candyMachineAddress,
        );
        // Fetch the Candy Guard.
        const candyGuard = await safeFetchCandyGuard(
            umi,
            candyMachine.mintAuthority,
        );
        console.log(candyMachine, candyGuard);
        try {
            // Mint from the Candy Machine.
            const nftMint = generateSigner(umi);
            let transaction;
            if (allowList.includes(signer?.publicKey?.toString())){
                transaction = await transactionBuilder()
                .add(setComputeUnitLimit(umi, { units: 800_000 }))
                .add(
                    route(umi, {
                        candyMachine: candyMachine.publicKey,
                        candyGuard: candyGuard?.publicKey,
                        // @ts-ignore
                        nftMint: nftMint,
                        collectionMint: candyMachine.collectionMint,
                        collectionUpdateAuthority: candyMachine.authority,
                        guard: "allowList",
                        group: allowList.includes(signer?.publicKey?.toString()) ? some('early') : some('normal'),
                        routeArgs: {
                          path: "proof",
                          merkleRoot: getMerkleRoot(allowList),
                          merkleProof: getMerkleProof(allowList, publicKey(umi.identity)),
                        },
                    })
                )
                .add(
                    mintV2(umi, {
                        candyMachine: candyMachine.publicKey,
                        candyGuard: candyGuard?.publicKey,
                        nftMint,
                        collectionMint: candyMachine.collectionMint,
                        collectionUpdateAuthority: candyMachine.authority,
                        group: some('early'),
                        mintArgs: {
                            solPayment: some({ destination: treasury, lamports: sol(0.02) }),
                            allowList: some({ merkleRoot: getMerkleRoot(allowList) }),
                        },
                    })
                );
            }
            else{
                transaction = await transactionBuilder()
                .add(setComputeUnitLimit(umi, { units: 800_000 }))
                .add(
                    mintV2(umi, {
                        candyMachine: candyMachine.publicKey,
                        candyGuard: candyGuard?.publicKey,
                        nftMint,
                        collectionMint: candyMachine.collectionMint,
                        collectionUpdateAuthority: candyMachine.authority,
                        group: some('normal'),
                        mintArgs: {
                            solPayment: some({ destination: treasury, lamports: sol(0.04) }),
                            // allowList: some({ merkleRoot: getMerkleRoot(allowList) }),
                        },
                    })
                );
            }
            const { signature } = await transaction.sendAndConfirm(umi, {
                confirm: { commitment: "confirmed" },
            });
            const txid = bs58.encode(signature);
            // const txid = bs58.encode([]);
            console.log('success', `Mint successful! ${txid}`)
            toast('Mint successful! Tx ID:' + txid );

            // getUserSOLBalance(wallet.publicKey, connection);
        } catch (error: any) {
            toast(`Error minting! ${error?.message}` );
            console.log('error', `Mint failed! ${error?.message}`);
        }
    }
    // , []);
    // },  [wallet, connection, umi, candyMachineAddress, treasury]);
    // const { getUserSOLBalance } = useUserSOLBalanceStore();

    // [account, contract, isWhiteListed])
    // return {mint, isWhiteListed}
    return { mint };
};
