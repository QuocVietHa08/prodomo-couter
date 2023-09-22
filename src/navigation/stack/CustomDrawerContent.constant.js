import RouteName from "../RouteName";
import { Home, Setting, Dashboard} from '../../screens'

const drawerComps = [
  // {
  //   id: RouteName.Dashboard,
  //   component: Dashboard,
  //   title: 'Home'
  // },
  {
    id: RouteName.Home,
    component: Home,
    title: 'Home'
  },
  {
    id: RouteName.Setting,
    component: Setting,
    title: 'Setting'
  }, 
]

export { drawerComps }