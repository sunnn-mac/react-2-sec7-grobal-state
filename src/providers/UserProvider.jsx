import { createContext, useState } from "react";

export const UserContext = createContext({});

// グローバルstateを使ってみる
export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);

  // グローバルで参照できる値をプロバイダにvalueとして渡す
  // このプロバイダ配下で、valueに入れたものを参照できる
  // ここでは値（userInfo）  セット関数（setUserInfo）をグローバルで参照可能にする
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
