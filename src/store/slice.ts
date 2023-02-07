import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type initialStateProps = {
  nowPageIdx: number;
};

const { actions, reducer } = createSlice({
  name: 'store',
  initialState: {
    nowPageIdx: 0,
  },
  reducers: {
    setPageIdx: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      nowPageIdx: payload,
    }),
  },
});

export const { setPageIdx } = actions;
export default reducer;
