import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import FormLogin from "../pages/FormHome";
import Profile from "../pages/Profile";

const Routes = () => {
  const [data, setData] = useState();
  return (
    <Switch>
      <Route exact path="/">
        <FormLogin setData={setData}></FormLogin>
      </Route>
      <Route path="/profile">
        <Profile data={data}></Profile>
      </Route>
    </Switch>
  );
};

export default Routes;
