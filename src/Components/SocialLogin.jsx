import { FaGoogle,FaGithub,FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className=" flex flex-col md:flex-row gap-2 p-2">
      
       
        
        <button  className="btn bg-[#54A15D] text-white border-none rounded-xl p-4"><FaGoogle /> Google Login</button>
        <button  className="btn bg-[#54A15D] text-white border-none rounded-xl p-4"><FaGithub /> GitHub Login</button>
        <button  className="btn bg-[#54A15D] text-white border-none rounded-xl p-4"><FaFacebook /> Facebook Login</button>
      
    </div>
    );
};

export default SocialLogin;