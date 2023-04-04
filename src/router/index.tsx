import React from "react"
import Index from '@/pages/index'//index
import Home from '@/pages/Home'
import Liquidity from "@/pages/Liquidity";
// import About from '@/views/About'
import { Outlet, Navigate } from 'react-router-dom';
import { useRoutes } from "react-router-dom"
//懒加载
// const About = lazy(() => import('@/views/About'))
// const User = lazy(() => import('@/views/User'))
//懒加载的模式需要嵌套 React.Suspense fallback={<div>Loading..</div>  } lazy必须搭配 React.Suspense使用

const Routers = [{
    path: '/',
    element: <Navigate to='/Index'></Navigate>
},
{
    path: '/Index',
    element: <Index></Index>,
    children: [
        {
            path: '',
            element: <Outlet />,
            children: [
                { path: 'Swap', element: <Home /> },
                { path: 'Liquidity', element: <Liquidity /> },
            ],
        },]

},


]
const Router = () => {
	const routes = useRoutes(Routers);
	return routes;
};


export default Router