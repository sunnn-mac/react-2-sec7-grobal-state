import { Footer } from "../atoms/layout/footer";
import { Header } from "../atoms/layout/header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
