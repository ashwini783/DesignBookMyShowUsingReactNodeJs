const {axiosInstance}=require('.')

export const RegisterUser=async(values)=>{
    try{
             const response=await axiosInstance.post("http://localhost:5000/api/users/register",values)
             return response.data;
    }
    catch(error){
           console.log(error)
    }
}

export const LoginUser=async(values)=>{
        try{
          console.log("in login users..value ",values)
              // "proxy":"http://localhost:5000/"  we can add it in package.json of client
            const response=await axiosInstance.post("http://localhost:5000/api/users/login",values)
            console.log("in login",response)
            console.log("hey res+",response.data)
            return response.data
        }
        catch(error){
          console.log(error)
        }
}
export const GetCurrentUser=async()=>{
  try{
     const response=await axiosInstance.get("http://localhost:5000/api/users/get-current-user")
     return response.data
  }
  catch(error){
       console.log(error)
  }
}