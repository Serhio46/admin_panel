import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Login from "../pages/login/Login";
import New from "../pages/new/New";
import Single from "../pages/single/Single";

export const routesName =  {
    'HOME': '/',
    'LOGIN': '/login',
    'LIST': '/list',
    'NEW': '/new',
    'SINGLE': '/single'
};

export const publicRoutes = [
    { 'path': routesName.HOME, 'component': Home },
    { 'path': routesName.LOGIN, 'component': Login },
    { 'path': routesName.LIST, 'component': List },
    { 'path': routesName.NEW, 'component': New },
    { 'path': routesName.SINGLE, 'component': Single },
 ];
