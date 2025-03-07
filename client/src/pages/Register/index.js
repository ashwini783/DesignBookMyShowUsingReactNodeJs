import React from 'react'
import {Form, Button,Input,message} from "antd"
import {Link} from "react-router-dom"
import {RegisterUser} from '../../api/users'

function Register() {

  const onFinish=async(value)=>{ //all values of the form,it will capture all form data
    try{
         const response=await RegisterUser(value);
         console.log(response)
         if(response.success){
           message.success(response.message)
         }
         else{
          message.error(response.message)
         }
    }
    catch(error){
     console.log(error)
     message.error(error.message)
    }
  }
  return (
    <>
    <main className='App-header'>
        <h1>Register To Book My Show</h1>
        <section className='mw-500 text-center px-3'>
          <Form layout='vertical' onFinish={onFinish}>
          <Form.Item 
              label="Name"
              htmlFor='name'
              name='name'
              className='d-block'
              rules={[{required:true,message:"Name is required"}]}
             >
                 <Input id='name' type='text' placeholder='Enter your Name here'></Input>
             </Form.Item>
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
                   Register
                 </Button>
             </Form.Item>
             <div>
               <p>Already a User?<Link to='/login'>Login</Link></p>
             </div>
          </Form>
        </section>
    </main>
 </>
  )
}

export default Register