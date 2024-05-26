import { Navbar } from "./Navbar";
import Fotter from "./footer";
{
  /* <button type="submit"><Link to={"/about"}>Submit</Link></button> */
}

const Login = () => {
  // make the login page here
  return (
    <div className="h-screen flex flex-col justify-between ">
      <Navbar />
      <div className="h-full bg-[#F0F0F0] mt-10">
        <div className="h-full flex items-center justify-center">
          <form
            action=""
            className="flex flex-col bg-[#FFFFFF] w-[20%] h-[50%] shadow-lg rounded-lg p-4 gap-3"
          >
            <h1 className="text-zinc-800 text-2xl text-center font-bold pt-6">
              Login
            </h1>
            <div className="flex flex-col">
              <label htmlFor="username">username</label>
              <input
                type="text"
                placeholder="username"
                className="border p-2 bg-[#E9F0FF] rounded-md "
              />
              <label htmlFor="password">password</label>
              <input
                type="text"
                placeholder="password"
                className="border p-2 bg-[#E9F0FF] rounded-md "
              />
              <button type="submit" className="bg-[#4BAF4F] text-white font-bold mt- h-10 rounded-lg">Sgin up</button>
            </div>
          </form>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Login;
