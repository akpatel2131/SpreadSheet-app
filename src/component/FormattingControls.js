// FormattingControls.js
import React from 'react';
import useStore from './useStore';

const FormattingControls = () => {
  const setTextAlign = useStore((state) => state.setTextAlign);
  const setFontSize = useStore((state) => state.setFontSize);

  return (
    <div className="mb-4">
      <label>
        Text Align:
        <select onChange={(e) => setTextAlign(e.target.value)} className="ml-2">
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>
      <label className="ml-4">
        Font Size:
        <input
          type="number"
          onChange={(e) => setFontSize(e.target.value + 'px')}
          className="ml-2 w-16"
        />
      </label>
    </div>
  );
};

export default FormattingControls;
