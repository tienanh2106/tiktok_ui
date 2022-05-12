import HomePage from "../pages/Home";
import FollowingPage from "../pages/Following";
import ProfilePage from "../pages/Profile"
import Upload from "../pages/Upload";

const publicRoutes = [
  { path: '/', component: HomePage},
  { path: '/following', component: FollowingPage },
  { path: '/profile', component: ProfilePage },
  { path: '/upload', component: Upload , layout: null},

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
