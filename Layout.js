import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ minHeight: "70vh" }}>{children} </main>
            <Footer />
        </>
    );
};

export default Layout;