import { createContext, useState } from "react";

export const UserEmail = createContext();

export const UserEmailProvider = ({ children }) => {
  const [storeEmail, setstoreEmail] = useState("");
  return (
    <UserEmail.Provider value={{ storeEmail, setstoreEmail }}>
      {children}
    </UserEmail.Provider>
  );
};

// UseContext Step 1
