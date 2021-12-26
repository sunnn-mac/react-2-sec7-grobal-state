import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";

// [...Array(n).keys()]は、JavaScriptで0からn-1までの整数が順番に並んだ配列を得る記法
// val には、上記で作った配列各要素の値が入る
const users = [...Array(18).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけえ ${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "000-111-1111",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = (props) => {
  // stateを受け取るのはuseLocation
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  console.log(state);
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {/* たぶん、return部分でhtml element を返すため　()で囲っている */}
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
