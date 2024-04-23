import React from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Detail from "../pages/Detail"

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="home" element={<Home />} />
                <Route path="/home/detail" element={<Detail />} />
            </Routes>
        </>
    )
}

export default AppRouter