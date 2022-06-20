import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import IndexPage from "./Pages/IndexPage/IndexPage";
import Add from "./Pages/Add/Add";


export default class App extends React.Component {

    render() {
        return (
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<IndexPage/>}/>
                    <Route path={'add'} element={<Add/>}/>
                    <Route path={'profile'} element={<ProfilePage/>}/>
                    <Route path={'/:id'} element={<ProfilePage/>}/>
                </Route>
            </Routes>
        );
    }
}

function Layout() {

    return (
        <div className={'App'}>
            <Navbar/>
            <Outlet/>
        </div>
    )
}




