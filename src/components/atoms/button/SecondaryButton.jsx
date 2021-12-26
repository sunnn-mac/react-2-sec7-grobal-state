import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  // children は、　PrimaryButtonタグで囲った中の文字列を表す
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
