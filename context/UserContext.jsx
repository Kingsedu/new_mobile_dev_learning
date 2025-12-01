import React, { createContext, useEffect, useState } from "react";
import { ID } from "react-native-appwrite";
import { account } from "../lib/appwrite";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      throw Error(error);
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      throw Error(error);
    }
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function getInitialUserValue() {
    try {
      const response = await account.get();
      setUser(response);
    } catch (e) {
      setUser(null);
    } finally {
      setAuthChecked(true);
    }
  }
  useEffect(() => {
    getInitialUserValue();
  }, []);
  const value = { user, login, register, logout, authChecked };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
