import { Favorites } from "./components/Favorites";
import { Home } from "./components/Home";
import { MyRepositories } from "./components/MyRepositores"
import { Challange } from "./components/Challenge2"

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/my-repositories',
    element: <MyRepositories />
  },
  {
    path: '/favorites-list',
    element: <Favorites />
  },
  {
    path: '/challenge',
    element: <Challange />
  }
];

export default AppRoutes;
