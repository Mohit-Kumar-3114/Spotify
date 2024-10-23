

const Signin = () => {
    return (
      <div className="bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            {/* Spotify Logo */}
            <div className="flex justify-center mb-4">
              <img
                src="data:image/png;base64,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"
                alt="Spotify Logo"
                className="h-16 w-16"
              />
            </div>
  
            {/* Sign In Heading */}
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Sign In to Spotify
            </h2>
  
            {/* Social Sign In Options */}
            <div className="mt-4">
              <div className="flex flex-col space-y-3 mt-4">
              <button className="w-full py-2 bg-neutral-800 text-white rounded-full font-semibold hover:bg-gray-100 flex items-center justify-center ">
              <img 
              src="data:image/jpeg;base64,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" 
              alt="Google Icon" 
              className="h-6 w-6 mr-6"
                />
          Continue with Google
             </button>

         {/* Facebook Button */}
          <button className="flex items-center justify-center bg-neutral-800 text-white font-semibold py-2 rounded-full shadow hover:shadow-lg transition duration-200">
          <img 
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqQBgQT1QykRaTRRfVKF131UJbBJ25y3GGyrd9b5rk1_Qvi76hWKqjow&s" 
           alt="Facebook Icon" 
           className="h-6 w-6 mr-2"
         />
           Continue with Facebook
       </button>

              </div>
            </div>
  
            <form className="space-y-4 mt-4">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border-none focus:ring-green-500 focus:ring-2 focus:outline-none"
                  placeholder="Email or Username"
                  required
                />
              </div>
  
              {/* Password */}
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
                  required
                />
              </div>
  
              {/* Sign In Button */}
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
  