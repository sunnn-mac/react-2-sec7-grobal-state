import { Header } from "../atoms/layout/header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
