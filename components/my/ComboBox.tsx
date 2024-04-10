import React, { useState } from "react";

interface ComboBoxProps {
  onSelect: (asset: string) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({ onSelect }) => {
  const [selectedAsset, setSelectedAsset] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAsset(event.target.value);
  };

  const handleSubmit = () => {
    onSelect(selectedAsset);
  };

  return (
    <div>
      <select value={selectedAsset} onChange={handleChange}>
        <option value="">Select an asset</option>
        <option value="Asset 1">Asset 1</option>
        <option value="Asset 2">Asset 2</option>
        <option value="Asset 3">Asset 3</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ComboBox;
