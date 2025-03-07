import React from 'react'
import {Form, Button,Input,message} from "antd"
import {Link, useNavigate} from "react-router-dom"
import { LoginUser } from '../../api/users'
function Login() {
  const navigate=useNavigate();
  
   const onFinish=async(values)=>{
    console.log("in login client")
           try{
              const response=await LoginUser(values)
              console.log("response ",response)
              if(response.success){
                message.success(response.message)

                localStorage.setItem("token",response.data)
                setTimeout(() => {
                  navigate("/");
                }, 1000);
                // navigate('/')  //after successful it will navigate to Homepage
              }
              
              else{
                message.error(response.message)
              }
           }
           catch(error){
             console.log(error);
             message.error(message.error)
           }
   }
  return (
    <>
       <main className='App-header'>
           <h1>Login To Book My Show</h1>
           <section className='mw-500 text-center px-3'>
             <Form layout='vertical' onFinish={onFinish}>
                <Form.Item 
                 label="Email"
                 htmlFor='email'
                 name='email'
                 className='d-block'
                 rules={[{required:true,message:"Email is required"},{type:"email",message:"please enter valid email"}]}
                >
                    <Input id='email' type='text' placeholder='Enter your email here'></Input>
                </Form.Item>
                <Form.Item 
                 label="Password"
                 htmlFor='password'
                 name='password'
                 className='d-block'
                 rules={[{required:true,message:"Password is required"}]}
                >
                    <Input id='password' type='text' placeholder='Enter your password here'></Input>
                </Form.Item>
                <Form.Item className='d-block'>
                    <Button type='primary' block htmlType='submit' style={{fontSize:"1.5rem",fontWeight:"600"}}>
                      Login
                    </Button>
                </Form.Item>
                <div>
                  <p>New User?<Link to='/register'>Register</Link></p>
                </div>
             </Form>
           </section>
       </main>
    </>
  )
}

export default Login