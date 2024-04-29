import { FaGoogle,FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {googleLogin,  githubLogin} = UseAuth();

    const handleSocialLogin = socialprovider =>{
        socialprovider()
        .then((result) =>{
            if(result.user){
                navigate(location?.state ? location.state : '/');
                window.scrollTo(0, 0);
        }})
        .catch((err) =>{
            console.log(err);
        })
    }
    return (
        <div className=" flex flex-col md:flex-row gap-2 p-2">
      
       
        
        <button onClick={() =>handleSocialLogin(googleLogin)}  className="btn bg-[#54A15D] text-white border-none rounded-xl p-4"><FaGoogle /> Google Login</button>
        <button onClick={() => handleSocialLogin(githubLogin)}  className="btn bg-[#54A15D] text-white border-none rounded-xl p-4"><FaGithub /> GitHub Login</button>
       
      
    </div>
    );
};

export default SocialLogin;