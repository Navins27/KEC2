import React from "react";
import "./Layout.css";
import { Outlet, Link } from "react-router-dom";
export default function Layout(){
    return(
        <div>
            <nav>
                <ul className="nav-bar">
                    <li><Link to="/">Homes</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/effect">Effect</Link></li>
                    <li><Link to="/callback">callback</Link></li>
                </ul>
                
            </nav>
            <Outlet/>
        </div>
    )
}