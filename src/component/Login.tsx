import React, { useState, useCallback } from "react"
import { Button, TextField, Grid } from "@mui/material"
import Dashboard from "../component/Dashboard"

// Login for used for providing username and password
const Login = () => {

    const [username, setUsername] = React.useState<string | undefined>()
    const [password, setPassword] = React.useState<string | undefined>()
    const [isAccessValid, setIsAccessValid] = useState(false)
    const [isFormValid, setIsFormValid] = useState(true)

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target?.value ?? '')
    };
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target?.value ?? '')
    };

    const handleSubmit = useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsAccessValid(false)
        setIsFormValid(false)
        if (username && password) {
            if (username === 'demo' && password === 'demo') {
                setIsAccessValid(true)
                setIsFormValid(true)
                if (typeof Storage !== "undefined") {
                    window.sessionStorage && window.sessionStorage.setItem('username', username);
                } else {
                    console.error('Sorry browser not support storage');
                }
            } else {
                setUsername('')
                setPassword('')
            }
        }
    }, [username, password])

    return (
        <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
            {!isAccessValid ? <Grid container>
                <Grid item xs />
                <Grid item xs={6}>
                    <form onSubmit={handleSubmit} >
                        <div style={{ textAlign: "center" }}>
                            {!isFormValid && <span style={{ textAlign: "center", color: 'red' }}>{'Please enter valid details...'}</span>}
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <TextField onChange={handleUsername} id="standard-basic" label="Username" variant="standard" />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <TextField onChange={handlePassword} id="standard-basic" label="Password" variant="standard" />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Button type="submit" >Enter Site</Button>
                        </div>
                    </form>
                </Grid>
                <Grid item xs />
            </Grid> : <Dashboard />}
        </div>
    )
}
export default Login;