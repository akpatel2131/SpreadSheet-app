// UndoRedoControls.js
import React from 'react';
import useStore from './useStore';

const UndoRedoControls = () => {
  const undo = useStore((state) => state.undo);
  const redo = useStore((state) => state.redo);

  return (
    <div className="mb-4">
      <button onClick={undo} className="border p-2 mr-2">
        Undo
      </button>
      <button onClick={redo} className="border p-2">
        Redo
      </button>
    </div>
  );
};

export default UndoRedoControls;
