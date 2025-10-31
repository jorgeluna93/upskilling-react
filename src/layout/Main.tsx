import type { JSX } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Main(): JSX.Element{
    return(
        <>
            <Header title="Accenture Movie Catalog"/>
            <main className="flex-grow-1">
                <Outlet/>
            </main>
            <Footer title="Accenture 2025"/>
        </>
    );
}

export default Main;