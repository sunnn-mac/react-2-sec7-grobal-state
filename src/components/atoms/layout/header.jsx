import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      {/* Linkを使う場合は、app.jsとか、親で BrowserRouter タグで囲ってあげる必要あり */}
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999a;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
