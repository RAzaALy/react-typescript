import React, { useState } from 'react'
type AuthUser = {
    name: string,
    email: string
}
const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState<AuthUser | null>(null)
    // const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setIsLogin(true);
        setUser({
            name: 'ali',
            email: 'reaza@gmai.com'
        })
    };
    const handleLogout = () => {
        setIsLogin(false);

    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>{isLogin ? "Login" : "Logout"}</h1>
        </div>
    )
}

export default Login
