import Home from "@/components/Home";
import Login from "@/components/Login";

const routers = [{
    path: '/',
    redirect: '/login'
}, {
    path: '/login',
    component: Login,
    name: 'login'
}, {
    path: '/home',
    component: Home,
    name: 'home'
}];

export default routers
