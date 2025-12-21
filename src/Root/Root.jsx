import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="container mx-auto px-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;