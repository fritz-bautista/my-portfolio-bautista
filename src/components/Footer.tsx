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
        {/* Changed h-80 to h-auto on mobile, lg:h-80 on desktop */}
        <footer className="text-white bg-white w-full h-auto lg:h-80 font-google">
            <div className="flex w-full h-full">
                
                {/* Changed grid-cols-2 to flex-col on mobile, lg:grid-cols-2 on desktop */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0.5 w-full h-full">
                    
                    {/* LOGO SECTION */}
                    {/* Adjusted padding from p-40 to p-12 on mobile to prevent squishing */}
                    <div className="bg-black flex flex-col items-center justify-center p-12 lg:p-40 h-full w-full">
                        <img src={MyLogo} className="object-cover w-40 lg:w-auto mb-4 lg:mb-0" alt="My Logo" />
                        <h1 className="text-xl lg:text-2xl font-medium text-center">Passion - Purpose - Identity</h1>
                    </div>

                    {/* RIGHT SIDE (Links & Contacts) */}
                    <div className="bg-white flex h-full">
                        <div className="flex flex-col gap-0.5 w-full items-center justify-center h-full">
                            
                            {/* Top empty spacer - Hidden on mobile, visible on desktop */}
                            <div className="hidden lg:flex w-full h-full items-center justify-center bg-black"></div>
                            
                            {/* LINKS GRID */}
                            {/* Changed to 2 columns on mobile, 3 on desktop. Added padding for mobile. */}
                            <div className="grid grid-cols-2 lg:grid-cols-3 w-full lg:h-full items-center justify-center text-lg lg:text-xl text-center p-8 lg:p-5 gap-6 lg:gap-10 bg-black">
                                <a onClick={() => navigate('/')} className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"> Home </a>
                                <a onClick={() => navigate('/projects')} className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"> Project Menu </a>
                                <a onClick={() => navigate('/projects/menu', {state: category.web})} className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"> Web Projects </a>
                                <a onClick={() => navigate('/projects/menu', {state: category.graph})} className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"> Graphic Projects </a>
                                <a onClick={() => navigate('/contact')} className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out col-span-2 lg:col-span-1"> Contact </a>
                            </div>
                            
                            {/* CONTACTS SECTION */}
                            {/* Changed flex row to flex-col on mobile so long emails don't overflow, sm:flex-row on tablets+ */}
                            <div className="w-full py-8 lg:py-0 lg:h-full flex flex-col sm:flex-row gap-4 lg:gap-5 items-center justify-center bg-black">
                                <div className="flex gap-2 items-center justify-center"> 
                                    <MdEmail className="text-2xl"/>
                                    <h1 className="text-base sm:text-lg lg:text-xl">{contacts.email}</h1>
                                </div>
                                <div className="flex gap-2 items-center justify-center"> 
                                    <FaPhone className="text-xl"/>
                                    <h1 className="text-base sm:text-lg lg:text-xl">{contacts.phone}</h1>
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