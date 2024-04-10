import React, { useState } from "react";

interface Asset {
  chainName: string;
  imgSrc: string;
  isOtherChains: boolean;
  name: string;
  onDeposit: () => void;
  onWithdraw: () => void;
  symbol: string;
  tokenAmount: string;
  tokenAmountPrice: string;
}

interface AssetListProps {
  list: Asset[];
  titles: string[];
}

const AssetList: React.FC<AssetListProps> = ({ list, titles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDepositClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Asset list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #ccc",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
          }}
        >
          <div style={{ flex: 1 }}></div>
          <div style={{ flex: 2, textAlign: "center" }}>{titles[0]}</div>{" "}
          <div style={{ flex: 2, textAlign: "center" }}>{titles[1]}</div>{" "}
          <div style={{ flex: 2, textAlign: "center" }}>{titles[2]}</div>{" "}
        </div>
        {list.map((asset, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            <div style={{ flex: 1 }}>
              <img
                src={asset.imgSrc}
                alt={asset.name}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </div>
            <div style={{ flex: 2, textAlign: "center" }}>
              <div>{asset.symbol}</div>
              <div>{asset.name}</div>
            </div>{" "}
            <div style={{ flex: 2, textAlign: "center" }}>
              <div>Token Amount: {asset.tokenAmount}</div>
              <div>Token Amount Price: {asset.tokenAmountPrice}</div>
            </div>
            <div style={{ flex: 2, textAlign: "center" }}>
              <button style={{ marginRight: "5px" }} onClick={handleDepositClick}>
                Deposit
              </button>
              <button onClick={asset.onWithdraw}>Withdraw</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            background: "#fff",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
            zIndex: 9999,
          }}
        >
          <h2 style={{ textAlign: "center" }}>Deposit</h2>
          {/* Your modal content here */}
          <button style={{ position: "absolute", top: "10px", right: "10px" }} onClick={closeModal}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default AssetList;
