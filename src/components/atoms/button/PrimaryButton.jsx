import styled from "styled-components";
import { BaseButton } from "./BaseButton"; // baseのスタイルをインポート

export const PrimaryButton = (props) => {
  // children は、　PrimaryButtonタグで囲った中の文字列を表す
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// BasedButon の派生
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
