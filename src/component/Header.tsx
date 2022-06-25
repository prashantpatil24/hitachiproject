import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Box } from "@mui/material"
import Login from "../component/Login"


// Primary app navigation
const Header = () => {

    const [username, setUsername] = useState<string | undefined>();

    useEffect(() => {
        if (typeof Storage !== "undefined") {
            const user = window.sessionStorage && window.sessionStorage.getItem('username')
            setUsername(user ?? '')
        } else {
            console.error('Sorry browser not support storage')
        }
    }, [])

    if (username) {
        return (<Box
            sx={{
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                    ml: 2,
                },
            }
            }
            style={{ textAlign: "center" }
            }
        >
            <Link to="/people">People</Link>
            <Link to="/starships"><strong>Starships</strong></Link>
            <span><em>{username}</em></span>
            <Link to="/logout">Logout</Link>
        </Box >)
    }
    else { return <Login /> }

}
export default Header;