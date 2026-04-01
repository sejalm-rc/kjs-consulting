import { configureStore, createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    navScrolled: false,
    mobileMenuOpen: false,
    contactFormStatus: 'idle', // idle | sending | success | error
  },
  reducers: {
    setNavScrolled: (state, action) => {
      state.navScrolled = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    setContactFormStatus: (state, action) => {
      state.contactFormStatus = action.payload;
    },
  },
});

export const {
  setNavScrolled, 
  toggleMobileMenu,
  closeMobileMenu,
  setContactFormStatus,
} = uiSlice.actions;

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});
