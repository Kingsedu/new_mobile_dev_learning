import React, { createContext, useState } from "react";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {}

  async function register(email, password) {}

  async function logout() {}
  const value = { user, login, register, logout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
