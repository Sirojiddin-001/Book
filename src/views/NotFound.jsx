import React from 'react'
import Button from "../components/Login Form/Button";
import { useNavigate } from 'react-router';

const NotFound = () => {
    let navigator = useNavigate()
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-9xl font-bold">404</h1>
            <p>Oops! sorry page does not found</p>
            <Button onClick={()=>{navigator("/beginner")}}>Go Home</Button>
        </div>
    )
}

export default NotFound
