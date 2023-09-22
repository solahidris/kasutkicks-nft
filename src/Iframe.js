import React from "react";

const Iframe = () => {
  return (
    <div className="p-5 bg-black">
      <iframe
        src="https://embed.ipfscdn.io/ipfs/bafybeigtqeyfmqkfbdu7ubjlwhtqkdqckvee7waks4uwhmzdfvpfaqzdwm/erc1155.html?contract=0x7af19225043eBBc1D7F373aD5eC6FC00E8E823b4&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=c5fea5b664d43d3cc559c75098bf09d9&tokenId=0&relayUrl=https%3A%2F%2Fapi.defender.openzeppelin.com%2Fautotasks%2F99844113-cdb7-479c-bb14-8c5f1a381824%2Fruns%2Fwebhook%2F0d1de83f-7dc5-478c-a616-ea20e32c0a1b%2FJc6Z8CNhK2HXiQdrwCwDPx&theme=dark&primaryColor=blue"
        className="w-full h-screen"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Iframe;