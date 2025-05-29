import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import {
  getAuthFromStorage,
  removeAuthFromStorage,
  setAuthToStorage,
} from "../../services/localStorage";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: getAuthFromStorage(),
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      setAuthToStorage(true);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      removeAuthFromStorage();
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;

// React phát sinh một action (ví dụ: từ sự kiện người dùng).

// Action được gửi đến store.

// Store chuyển action đến reducer.

// Reducer trả về state mới → store cập nhật state.

// React được thông báo về state mới và render lại giao diện.
