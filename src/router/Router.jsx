import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templetes/DefaultLayout";
import { HeaderOnly } from "../components/templetes/HeaderOnly";

// react-routere-dom のver6だとエラーになる。　ver5を使うこと
export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          </Route>
          <Route path="/users">
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
