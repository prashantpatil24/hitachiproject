import React from "react"
import { Navigate } from "react-router-dom"

// Logout username
const Logout = () => {
    if (typeof Storage !== "undefined") {
        window.sessionStorage && window.sessionStorage.removeItem('username');
    } else {
        console.error('Sorry browser not support storage');
    }
    return (
        <Navigate to='/' />
    )
}
export default Logout;