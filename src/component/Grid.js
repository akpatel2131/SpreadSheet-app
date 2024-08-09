// Grid.js
import React from 'react';
import useStore from './useStore';

const Grid = () => {
  const paginatedCells = useStore((state) => state.paginatedCells(state));
  const updateCell = useStore((state) => state.updateCell);

  return (
    <div className="grid grid-cols-10 gap-1">
      {paginatedCells.map((cell, index) => (
        <input
          key={index}
          value={cell.content}
          onChange={(e) => updateCell(index, e.target.value)}
          style={cell.style}
          className="border p-2 text-sm"
        />
      ))}
    </div>
  );
};

export default Grid;
