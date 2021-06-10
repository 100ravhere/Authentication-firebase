import React,{useRef,useState} from "react";
import {useHistory,Link} from "react-router-dom"
import {Form , Button,Alert} from 'react-bootstrap';
import {useAuth} from "../Contexts/AuthContext";
import app from "../firebase"
export default function Signup()
{

    const emailRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef =useRef();
   const {signup} =useAuth()
   const [error,setError] = useState("")
   const [loading,setLoading] = useState(false)
   const history = useHistory()
   async function handleSubmit(e)
   {

    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value)
    {
        return setError("Password do not match")
    }

      try
    {
       
        setError("")
        setLoading(true)
        await signup(emailRef.current.value,passwordRef.current.value)
        let UserRef = app.database().ref('Users');
     let newUserRef = UserRef.push();
     newUserRef.set({
         Name: nameRef.current.value,
         email: emailRef.current.value,
         phone:phoneRef.current.value,
     })  
     
        history.push("/")
    }
    catch{
        setError("Failed to create an account")
    }
    setLoading(false)

   }
     return(
      <div id="end">
      <div className="logcontainer">
  <div className="d-flex justify-content-center h-100">
         <div className="card">
         <div className="card-header">
                 <h1>Sign up</h1>
               </div>
               {error && <Alert variant="danger">{error}</Alert>}
           <div className="card-body" >
        <Form onSubmit={handleSubmit}>
           
            <Form.Group id = "email" >
                <Form.Control placeholder="Email"  type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id = "name" >
                <Form.Control placeholder="Name"  type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id = "phone" >
                <Form.Control placeholder="Mobile Number"  type="phone" ref={phoneRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control placeholder="Password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control placeholder="Confirm Password" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading}  className = "w-100 btn-success" type="submit">
                Sign up
            </Button>

        </Form>
    
  </div></div>
 </div>
  <div className="d-flex justify-content-center links">
      
                <p className="already">Already have a account? <button className="btn"><Link to="/"><b>Login Now</b></Link></button></p>
               </div>
            </div>
  </div>
				

    )}
