import React, { useState } from "react";
import AssetList from "./AssetList"; 
import ComboBox from "./ComboBox"; 

const MyComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null); 

  const handleAddAsset = () => {
    setIsModalOpen(true);
  };

  const handleAssetSelect = (asset: string) => {
    setSelectedAsset(asset);
    setIsModalOpen(false);
  };

  const handleDepositButtonClick = () => {
  };

  return (
    <div>
      <h1>Asset Management</h1>
      <AssetList
        list={[
          {
            chainName: "Juno",
            imgSrc:
              "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png",
            isOtherChains: false,
            name: "Terra Classic",
            onDeposit: function Va() {},
            onWithdraw: function Va() {},
            symbol: "USTC",
            tokenAmount: "89.66",
            tokenAmountPrice: "10",
          },
          {
            chainName: "Juno",
            imgSrc:
              "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
            isOtherChains: false,
            name: "Teritori",
            onDeposit: function Va() {},
            onWithdraw: function Va() {},
            symbol: "TORI",
            tokenAmount: "102.61",
            tokenAmountPrice: "101.02",
          },
        ]}
        titles={["Asset", "Balance"]}
      />{" "}
      {isModalOpen && (
        <div>
          <h2>Add Asset</h2>
          <ComboBox onSelect={handleAssetSelect} />{" "}
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button onClick={() => handleAssetSelect(selectedAsset!)}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
