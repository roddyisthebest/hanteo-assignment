import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type initialStateProps = {
  nowPageIdx: number;
  maxPageIdx: number;
};

const { actions, reducer } = createSlice({
  name: 'store',
  initialState: {
    nowPageIdx: 0,
    maxPageIdx: 6,
  },
  reducers: {
    setPageIdx: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      nowPageIdx: payload,
    }),
    addPageIdx: (state) => ({
      ...state,
      nowPageIdx:
        state.nowPageIdx === state.maxPageIdx
          ? state.maxPageIdx
          : state.nowPageIdx + 1,
    }),
    minusPageIdx: (state) => ({
      ...state,
      nowPageIdx: state.nowPageIdx === 0 ? 0 : state.nowPageIdx - 1,
    }),
    setMaxPageIdx: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      maxPageIdx: payload,
    }),
  },
});

export const { setPageIdx, addPageIdx, minusPageIdx, setMaxPageIdx } = actions;
export default reducer;
