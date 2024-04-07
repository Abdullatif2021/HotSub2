import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
  lang: 'EN',
  isLocationModalOpen: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
    },
    setLang(state, action) {
      state.lang = action.payload;
    },
    openMenu(state) {
      state.isMenuOpen = true;
    },
    closeLocationModal(state) {
      state.isLocationModalOpen = false;
    },
    openLocationModal(state) {
      state.isLocationModalOpen = true;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  closeLocationModal,
  setLang,
  openLocationModal,
} = appSlice.actions;
export const selectdLang = (state) => state.app.lang;
export default appSlice.reducer;
