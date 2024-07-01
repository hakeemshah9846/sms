import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function GetFaculty() {
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token');
        let user_type = localStorage.getItem('user_type');

        if(!token || user_type !== 'admin') {
            navigate('/auth-error');
        }
    });

    return (
        <>
        <h1>Get all users...</h1>
        </>
    )
}