import React from 'react'
import {Button} from "react-bootstrap";
import {useAuth} from "../Contexts/AuthContext"
import {useHistory} from "react-router-dom"
import "../home.css"
export default function Home() {
    
    const {logout} = useAuth()
    const history = useHistory()
   
    async function handleLogout()
    {
        
        try{
            await logout()
            history.push("/")
        }
        catch{
            console.error("Failed to log out")
        }
    }
   
    return (
<div>
    <h1>Your are logged in!!!!!!!!!!</h1>
             <Button style={{marginTop:'100px'}}  variant="success" onClick={handleLogout}>Log Out</Button>
             
        </div>
    )
}
