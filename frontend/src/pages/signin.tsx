import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const url=import.meta.env.VITE_BACKEND_URL

const Signin = () => {
  const navigate=useNavigate()
  const [postInputs , setPostInputs] = useState({
    password:"",
    email:""
   })
   async function handleRequest(e: React.FormEvent<HTMLFormElement>){
   try{
     e.preventDefault()
     const response=await axios.post(`${url}/api/user/signin`, postInputs)
     const jwt=response.data.token
     const id=response.data.id
     localStorage.setItem("token",jwt)
     localStorage.setItem("id",id)
     console.log('Token stored:', jwt);
     console.log(id)
      setTimeout(() => {
       navigate("/dashboard");
     }, 1000);
   } catch(error){
     alert("Something went wrong")
   }
  }
    return (
      <div className="bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-center mb-4">
              <img
                src="data:image/png;base64,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"
                alt="Spotify Logo"
                className="h-16 w-16"
              />
            </div>
  
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Sign In to Spotify
            </h2>
  
     
            <div className="mt-4">
              <div className="flex flex-col space-y-3 mt-4">
          <button className="w-full py-2 bg-neutral-800 text-white rounded-full font-semibold hover:bg-neutral-700 flex items-center justify-center mt-2 "><img className="mr-2" width="20" height="20" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>Continue with Google</button>
          <button className="w-full py-2 bg-neutral-800 text-white rounded-full font-semibold hover:bg-neutral-700 flex items-center justify-center mt-2 "><img className="mr-2"width="20" height="20" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>Continue with Facebook</button>

              </div>
            </div>
  <div className=" border-t border-neutral-600 my-6 ">
    
  </div>
            <form className="space-y-4 mt-4" onSubmit={handleRequest}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border-none focus:ring-green-500 focus:ring-2 focus:outline-none"
                  placeholder="Email"
                  onChange={(e)=>{
                    setPostInputs({
                      ...postInputs,
                      email:e.target.value
                    })}}
                />
              </div>
  
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border-none focus:ring-green-500 focus:ring-2 focus:outline-none"
                  placeholder="Password"
                  onChange={(e)=>{
                    setPostInputs({
                      ...postInputs,
                      password:e.target.value
                    })
                  }}
                />
              </div>
  
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-green-500 text-white rounded-full font-semibold text-lg hover:bg-green-600 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Signin;
  