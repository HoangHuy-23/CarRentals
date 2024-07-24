import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/types";

const API_BASE_URL = "http://localhost:2003";

interface AuthState {
  success: boolean;
  isLoading: boolean;
  error: boolean;
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  success: false,
  isLoading: false,
  error: false,
  isAuthenticated: false,
  user: null,
  token: null,
};

export const fetchUserLogin = createAsyncThunk(
  "auth/fetchUserLogin",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as { auth: AuthState };
    const token = state.auth.token;

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return rejectWithValue("Failed to fetch user");
      }

      const jsonResponse = await response.json();
      return jsonResponse.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return rejectWithValue("Login failed");
      }

      const jsonResponse = await response.json();
      const jwt = jsonResponse.jwt;
      sessionStorage.setItem("jwt", jwt); // Lưu trữ token vào sessionStorage
      dispatch(setToken(jwt));
      dispatch(setAuthenticated(true));
      const user = await dispatch(fetchUserLogin()).unwrap();
      return { user, jwt };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      sessionStorage.removeItem("jwt"); // Xóa token từ sessionStorage khi logout
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    loadTokenFromStorage: (state) => {
      const token = sessionStorage.getItem("jwt");
      if (token) {
        state.token = token;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(fetchUserLogin.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserLogin.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const {
  setAuthenticated,
  logout,
  setUser,
  setToken,
  loadTokenFromStorage,
} = authSlice.actions;

export default authSlice.reducer;
