import { useDispatch, useSelector } from "react-redux";

import {
  loginUser,
  logout,
  fetchUserLogin,
  setAuthenticated,
  setUser,
  setToken,
  loadTokenFromStorage,
} from "@/redux/reducer/authSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";

const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { success, isLoading, error, isAuthenticated, user, token } =
    useSelector((state: RootState) => state.auth);

  const login = async (email: string, password: string) => {
    await dispatch(loginUser({ email, password }));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  const refetch = async () => {
    if (token) {
      await dispatch(fetchUserLogin());
    }
  };

  useEffect(() => {
    dispatch(loadTokenFromStorage());
  }, [dispatch]);

  useEffect(() => {
    const initializeAuth = async () => {
      if (token) {
        try {
          dispatch(setAuthenticated(true));
          const user = await dispatch(fetchUserLogin()).unwrap();
          dispatch(setUser(user));
        } catch (error) {
          console.error("Failed to initialize authentication:", error);
          dispatch(logout());
        }
      }
    };

    initializeAuth();
  }, [dispatch, token]);

  return {
    success,
    isLoading,
    error,
    login,
    isAuthenticated,
    user,
    logout: logoutUser,
    refetch,
  };
};

export default useAuth;
