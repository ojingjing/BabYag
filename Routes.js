import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Mypage from "./Mypage";
import Upload from "./Upload";

// ... import all other pages

const Routes = [
  {
    name: "home",
    component: Home,
  },
  {
    name: "signup",
    component: Signup,
  },
  {
    name: "login",
    component: Login,
  },
  {
    name: "mypage",
    component: Mypage,
  },
  {
    name: "upload",
    component: Upload,
  },
];

export default Routes;
