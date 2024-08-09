// useStore.js
import create from 'zustand';

const useStore = create((set) => ({
  cells: Array(1000).fill({ content: '', style: { textAlign: 'left', fontSize: '14px' }, validation: 'text' }),
  history: [],
  future: [],
  currentPage: 1,
  pageSize: 100,
  totalPages: Math.ceil(1000 / 100),
  filteredCells: [],
  searchQuery: '',

  updateCell: (relativeIndex, value) =>
    set((state) => {
      const absoluteIndex = (state.currentPage - 1) * state.pageSize + relativeIndex;
      const isValid =
        state.cells[absoluteIndex].validation === 'number'
          ? !isNaN(value)
          : true;

      if (isValid) {
        const newCells = [...state.cells];
        newCells[absoluteIndex] = { ...newCells[absoluteIndex], content: value };

        return {
          cells: newCells,
          history: [...state.history, state.cells],
          future: [],
        };
      }
    }),

  setTextAlign: (align) =>
    set((state) => ({
      cells: state.cells.map((cell) => ({ ...cell, style: { ...cell.style, textAlign: align } })),
    })),

  setFontSize: (size) =>
    set((state) => ({
      cells: state.cells.map((cell) => ({ ...cell, style: { ...cell.style, fontSize: size } })),
    })),

  searchCells: (query) =>
    set((state) => {
      const filtered = state.cells.filter((cell) => cell.content.includes(query));
      return { filteredCells: filtered, searchQuery: query };
    }),

  setCurrentPage: (page) => set(() => ({ currentPage: page })),

  paginatedCells: (state) =>
    state.searchQuery
      ? state.filteredCells.slice(
          (state.currentPage - 1) * state.pageSize,
          state.currentPage * state.pageSize
        )
      : state.cells.slice(
          (state.currentPage - 1) * state.pageSize,
          state.currentPage * state.pageSize
        ),

  undo: () =>
    set((state) => {
      if (state.history.length > 0) {
        const previousState = state.history[state.history.length - 1];
        return {
          cells: previousState,
          history: state.history.slice(0, -1),
          future: [state.cells, ...state.future],
        };
      }
    }),

  redo: () =>
    set((state) => {
      if (state.future.length > 0) {
        const nextState = state.future[0];
        return {
          cells: nextState,
          history: [...state.history, state.cells],
          future: state.future.slice(1),
        };
      }
    }),
}));

export default useStore;
