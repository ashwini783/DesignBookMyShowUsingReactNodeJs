import axios from 'axios';
const token=localStorage.getItem("token")  //extracting token from local storage
export const axiosInstance=axios.create({
     headers:{
        "Content-Type":"application/json",
      //   "Authorization":token ? `Bearer ${token}`:""
     }
})
axiosInstance.interceptors.request.use(
   function(config){  // config contains all details of http request that is about to be sent
      const token=localStorage.getItem("token");
      if(token){
         config.headers.Authorization=`Bearer ${token}`  //Bearer is the type of token
      }
      return config
   },

   function(err){
      return Promise.reject(err)
   }
)

// export const axiosInstance=axios.create({   //when we add cookie then noneed to write above code
//    headers:{
//       "Content-Type":"application/json",
//    },
//    withCredentials:true
// })