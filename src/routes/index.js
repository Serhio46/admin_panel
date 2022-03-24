import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Login from "../pages/login/Login";
import New from "../pages/new/New";
import Single from "../pages/single/Single";

export const routesName =  {
    'HOME': '/',
    'LOGIN': '/login',
    'USERS': '/users',
    'NEW_USER': '/users/new',
    'SINGL_EUSER': '/users/:userId',
    'PRODUCTS': '/products',
    'SINGLE_PRODUCT': '/products/:productId',
    'NEW_PRODUCT': '/products/new'

};

export const publicRoutes = [
    { 'path': routesName.HOME, 'component': Home },
    { 'path': routesName.LOGIN, 'component': Login },
    { 'path': routesName.USERS, 'component': List },
    { 'path': routesName.NEW_USER, 'component': New },
    { 'path': routesName.SINGL_EUSER, 'component': Single },
    { 'path': routesName.PRODUCTS, 'component': List },
    { 'path': routesName.SINGLE_PRODUCT, 'component': Single },
    { 'path': routesName.NEW_PRODUCT, 'component': New },
 ];
