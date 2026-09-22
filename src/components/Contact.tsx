import { FaFacebook, FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xyezzgrb");
    
    // I wrapped this in a quick full-screen centered div so the success message doesn't look broken!
    if (state.succeeded) {
        return (
            <div className="flex w-full min-h-screen justify-center items-center bg-black font-google text-white text-2xl">
                <p>Thanks for reaching out!</p>
            </div>
        );
    }

    return (
        <div className="flex w-full justify-center items-center bg-black font-google">
            {/* RESPONSIVE CONTAINER: Stacks vertically on mobile, switches to 5x5 grid on large screens */}
            <div className="flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-0.5 lg:m-0.5 w-full min-h-screen lg:min-h-0">
                
                {/* Left Margin Spacer - Hidden on mobile */}
                <div className="hidden lg:block lg:row-span-5 bg-white"></div>
                
                {/* Top Margin Spacer - Hidden on mobile */}
                <div className="hidden lg:block lg:col-span-3 lg:col-start-2 lg:row-start-1 bg-white"></div>

                {/* FORM SECTION - First on mobile */}
                <div className="w-full lg:col-span-2 lg:row-span-3 lg:col-start-2 lg:row-start-2 bg-white flex flex-col justify-center">
                    <form onSubmit={handleSubmit} className="flex flex-col rounded-xl justify-center w-full p-6 lg:p-10">
                        <div className="mb-4">
                            <h1 className="text-2xl lg:text-3xl font-bold">Want to reach out?</h1>
                            <p className="text-sm lg:text-base text-gray-700">Send me an email through this form</p>
                        </div>
                        <label htmlFor="email" className="font-semibold lg:font-normal mt-2">
                            Email Address:
                        </label>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            className="bg-gray-100 mt-2 p-3 text-lg lg:text-xl rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <textarea
                            id="message"
                            name="message"
                            rows={4} // Added rows to give the text area a better default height on mobile
                            className="bg-gray-100 mt-5 p-3 text-lg lg:text-xl rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-lg lg:text-xl text-white mt-5 font-bold p-3 lg:p-4 rounded-lg hover:cursor-pointer transition-colors duration-200">
                            Submit
                        </button>
                    </form>
                </div>

                {/* SOCIALS SECTION - Second on mobile */}
                <div className="w-full lg:row-span-3 lg:col-start-4 lg:row-start-2 bg-white">
                    <div className="flex flex-col lg:grid lg:grid-cols-1 lg:grid-rows-5 w-full h-full">
                        <div className="bg-white flex justify-center items-center p-6 lg:p-4">
                            <h1 className="text-2xl lg:text-3xl font-bold">My Socials</h1>
                        </div>
                        {/* Loop through the Links const */}
                        {links.map((Links, index) => {
                            const Icon = Links.icon;
                            return (
                                <a key={index} href={Links.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                                    <div className={`${Links.colorBg} flex items-center justify-center lg:justify-start p-5 lg:p-4 h-full lg:h-25 hover:cursor-pointer hover:brightness-75 transition-all duration-200`}>
                                        <Icon className="text-4xl lg:text-5xl text-white"/>
                                        <label className="text-xl lg:text-3xl p-4 lg:p-5 text-white hover:cursor-pointer">{Links.name}</label>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom Margin Spacer - Hidden on mobile */}
                <div className="hidden lg:block lg:col-span-3 lg:col-start-2 lg:row-start-5 bg-white"></div>
                
                {/* Right Margin Spacer - Hidden on mobile */}
                <div className="hidden lg:block lg:row-span-5 lg:col-start-5 lg:row-start-1 bg-white"></div>
            </div>
        </div>
    );
}

const links = [
    {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/Fritz.Bautista.ThePB100/",
        colorBg: "bg-blue-800"
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/fritz-harold-bautista-27a83a37b/",
        colorBg: "bg-blue-500"
    },
    {
        name: "Instagram",
        icon: FaInstagramSquare,
        link: "https://www.instagram.com/fritz.harold",
        colorBg: "bg-red-500 "
    },
    {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/fritz-bautista",
        colorBg: "bg-black"
    }
]

export default Contact;