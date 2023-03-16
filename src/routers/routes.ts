import Home from "../pages/Home";
import Loadings from "../pages/Loadings";
import Modals from "../pages/Modals";
import * as ROUTES from "./../constants/routes";

import Buttons from "./../pages/Buttons";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: ROUTES.HOME_PATH,
    component: Home,
    name: "Home Screen",
    protected: false,
  },
  {
    path: ROUTES.BUTTONS_PATH,
    component: Buttons,
    name: "Buttons Screen",
    protected: false,
  },
  {
    path: ROUTES.LOADINGS_PATH,
    component: Loadings,
    name: "Loadings Screen",
    protected: false,
  },
  {
    path: ROUTES.MODALS_PATH,
    component: Modals,
    name: "Modals Screen",
    protected: false,
  },
];

export default routes;