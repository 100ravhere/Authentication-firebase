import React,{useRef,useState} from "react";
import {useHistory,Link} from "react-router-dom"
import {Form , Button,Alert} from 'react-bootstrap';
import {useAuth} from "../Contexts/AuthContext";
import "../styles.css";
export default function Login()
{
   
    const emailRef = useRef();
    const passwordRef = useRef();

   const {login} =useAuth()
   const [error,setError] = useState("")
   const [loading,setLoading] = useState(false)
   const history = useHistory()
   async function handleSubmit(e)
   {
    e.preventDefault()
 
    try
    {
         setError("")
        setLoading(true)
        await login(emailRef.current.value,passwordRef.current.value)
      
         history.push("/home")

    }
    catch{
        setError("Failed to Log in")
    }
    setLoading(false)

   }
     return(
        <div id="end">
         <div className="logcontainer">
     <div className="d-flex justify-content-center h-100">
         <div className="card">
         <div className="card-header">
                 <h1>Log in</h1>
               </div>
               {error && <Alert variant="danger">{error}</Alert>}
           <div className="card-body" >
        <Form onSubmit={handleSubmit}>
  
            <Form.Group id = "email" >
                <Form.Control placeholder="Email"  type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control placeholder="Password" type="password" ref={passwordRef} required />
            </Form.Group>
          
           
            <Button disabled={loading}  className = "w-100 btn-success" type="submit">
                Log in
            </Button>

        </Form>
  
  </div></div>
  </div>
  <div className="d-flex justify-content-center links">
      
                <p className="already">Need an account? <b><Link to="/signup" >Sign up</Link></b></p>
               </div>
            </div>
  </div>
				

    )}
