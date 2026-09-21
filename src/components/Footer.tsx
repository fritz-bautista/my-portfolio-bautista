import MyLogo from "../assets/images/MyLogo.png"
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const contacts = {
    email: "fritzbautista@gmail.com",
    phone: "09297881589"
}


function Footer() {
    const category = {
        web: "webProjectData",
        graph: "graphProjectData"
    }
    const navigate = useNavigate();
    return (
        <>
        <footer className="text-white bg-white w-full h-80 font-google">
            <div className="flex w-full h-full">
                <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                    <div className="bg-black flex flex-col items-center justify-center p-40 h-full w-full">
                        <img src={MyLogo} className="object-cover"/>
                        <h1 className="text-2xl font-medium">Passion - Purpose - Identity</h1>
                    </div>
                    <div className="bg-white flex h-full">
                        <div className="flex flex-col gap-0.5 w-full items-center justify-center">
                            <div className="w-full h-full flex items-center justify-center bg-black"> </div>
                            <div className="grid grid-cols-3 w-full h-full flex items-center justify-center text-xl text-center p-5 gap-10 bg-black">
                                <a onClick={() => navigate('/')} className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" > Home </a>
                                <a onClick={() => navigate('/projects')} className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"  > Project Menu </a>
                                <a onClick={() => navigate('/projects/menu', {state: category.web})} className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" > Web Projects </a>
                                <a onClick={() => navigate('/projects/menu', {state: category.graph})} className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" > Graphic Projects </a>
                                <a onClick={() => navigate('/contact')} className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" > Contact </a>
                            </div>
                            <div className="w-full h-full flex gap-5 items-center justify-center bg-black">
                                <div className="flex gap-2 items-center justify-center" > 
                                    <MdEmail className="text-2xl"/>
                                    <h1>{contacts.email}</h1>
                                </div>
                                <div className="flex gap-2 items-center justify-center"> 
                                    <FaPhone className="text-xl"/>
                                    <h1>{contacts.phone}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>   
        </>
    )
}

export default Footer;