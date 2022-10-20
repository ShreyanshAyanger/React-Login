import React from 'react'
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {

    // const handleClick=()=>{
    //     <Link to ="/home"/>
    // }


  return (
    <>
     <div className='container'>

        <div className='loginBox'>

            <div className='loginForm'>
            <form >
            <div className='form' >
               
                <input 
                type="text" 
                placeholder='Username'
                
                />
             
            </div>
            <div className='form' >
          
                <input 
                    type="password" 
                    placeholder='Password Here'

                    
                />
                
            </div>
           
            <div className='form' >
            <button type="submit" >
                <Link to="/home">Login
                </Link>
            </button>

            </div>
                
                
            </form>

            </div>
           
        </div>



     </div>


    </>
  )
}

export default LoginPage