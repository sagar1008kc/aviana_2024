import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  selectedGame: string;
}

const initialState: GameState = {
  selectedGame: 'home',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    selectGame: (state, action: PayloadAction<string>) => {
      state.selectedGame = action.payload;
    },
  },
});

export const { selectGame } = gameSlice.actions;

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
