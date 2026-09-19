import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xyezzgrb");
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }
  return (
    <div className="flex w-full justify-center items-center bg-black font-google">
    <div className="grid grid-cols-5 grid-rows-5 gap-0.5 m-0.5 w-full">
        <div className="row-span-5 bg-white"></div>
        <div className="col-span-2 row-span-3 col-start-2 row-start-2 bg-white">
            <form onSubmit={handleSubmit} className="flex flex-col rounded-xl justify-center w-full p-10">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold">Want to reach out?</h1>
                    <p>Send me an email through this form</p>
                </div>
                <label htmlFor="email">
                    Email Address:
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    className="bg-gray-100 mt-2 p-2 text-xl rounded-lg border-2 border-gray-200"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    className="bg-gray-100 mt-5 p-2 text-xl rounded-lg border-2 border-gray-200"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-xl text-white mt-5 font-bold p-3 rounded-lg hover:cursor-pointer">
                    Submit
                </button>
            </form>
        </div>
        <div className="col-span-3 col-start-2 row-start-1 bg-white"></div>
        <div className="col-span-3 col-start-2 row-start-5 bg-white"></div>
        <div className="row-span-3 col-start-4 row-start-2 bg-white">
            <div className="grid grid-cols-1 grid-rows-5 w-full">
                <div className="bg-white flex justify-center items-center p-4">
                    <h1 className="text-3xl font-bold">My Socials</h1>
                </div>
                <div className="bg-blue-800 flex items-center p-4 h-25">
                    <FaFacebook className="text-5xl text-white"/>
                    <label className="text-3xl p-5 text-white">Facebook</label>
                </div>
                <div className="bg-blue-500 flex items-center p-4 h-25">
                    <FaLinkedin className="text-5xl text-white"/>
                    <label className="text-3xl p-5 text-white">LinkedIn</label>
                </div>
                <div className="bg-red-500 flex items-center p-4 h-25">
                    <FaInstagramSquare className="text-5xl text-white"/>
                    <label className="text-3xl p-5 text-white">Instagram</label>
                </div>
                <div className="bg-white"></div>
            </div>
        </div>
        <div className="row-span-5 col-start-5 row-start-1 bg-white"></div>
    </div>
    </div>
    );
}

export default Contact;
