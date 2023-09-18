import RouteName from "../RouteName";
import HomeScreen from "../../screens/HomeScreen";
import Setting from "../../screens/Setting";
import TimeStart from "../../screens/TimeStart";

const drawerComps = [
  {
    id: RouteName.Home,
    component: HomeScreen,
    title: 'Home'
  },
  {
    id: RouteName.Setting,
    component: Setting,
    title: 'Setting'
  }, 
]

export { drawerComps }