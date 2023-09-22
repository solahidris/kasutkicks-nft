import React from 'react';
import { ThirdwebSDKProvider } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';

// change the variables

const RELAYER_URL = 'YOUR_RELAYER_URL_HERE'; // Replace with your relayer URL

const MintButton = () => {
  const handleMint = async () => {
    // Here, you'd call the minting function of your NFT contract.
    // This is a placeholder and will need to be replaced with your actual minting logic.
    console.log('Minting NFT...');
  };

  return <button onClick={handleMint}>Mint NFT</button>;
};

const App = () => {
  return (
    <div>
      <h1>Mint Your NFT</h1>
      <MintButton />
    </div>
  );
};

const ThirdwebProviderWrapper = () => {
  const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();

  return (
    <ThirdwebSDKProvider
      desiredChainId={ChainId.Mainnet} // or ChainId.Mumbai or any other supported chain
      signer={signer}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: RELAYER_URL,
          },
        },
      }}
    >
      <App />
    </ThirdwebSDKProvider>
  );
};

export default ThirdwebProviderWrapper;
