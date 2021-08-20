import { Switch, Route } from "react-router-dom";
import routes from "../constants/routes.constants";
import LogIn from "../pages/LogIn.pages";

export default function UnAuthenticatedApp() {
  return (
    <Switch>
      <Route route={routes.login().route} component={LogIn} />
    </Switch>
  );
}
