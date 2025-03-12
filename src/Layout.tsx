import React from "react";
import { Outlet } from "react-router";

const Layout : React.FC = ()=> {
    return (
        <div>
            <h1>This is the Header</h1>
            <Outlet/>
            <h1>This is the Footer</h1>
        </div>


    )

}

export default Layout;