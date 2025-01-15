import { useNavigate } from "react-router-dom";
function AdminLogin() {
  const navigate=useNavigate()

  const submitHandler = () => {
    navigate("/admin/Dashboard")
    
  }
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-32">
        <div className="max-w-md w-full mx-auto">
          {/* Logo/Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Admin Panel <span className="text-gray-400"> Login</span>
          </h1>

          {/* Login Form */}
          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-400 bg-gray-50"
              />
            </div>

              <button
              onClick={submitHandler} 
                type="button"
                className="w-full bg-gray-500 text-white py-3 rounded-full hover:bg-gray-600 transition-colors"
              >
                Login
              </button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-6 text-center">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Let’s Get Things Done!
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hidden md:block md:w-1/2 bg-gray-400 "
      >
        <div className="h-full flex flex-col justify-center px-12 lg:px-24 ">
          <h2 className="text-white text-4xl  font-bold mb-4 ">
            Your Gateway to Administration
          </h2>
          <p className="text-white text-2xl lg:text-2xl">Secure Admin Access</p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
