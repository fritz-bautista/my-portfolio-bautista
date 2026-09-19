import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xyezzgrb");
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }
  return (
    <div className="flex w-full justify-center items-center font-google">
        <form onSubmit={handleSubmit} className="flex flex-col bg-gray-100 rounded-xl justify-center w-150 m-10 p-10">
            <h1 className="text-2xl font-bold mb-4">Want to reach out?</h1>
            <label htmlFor="email">
                Email Address:
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                className="bg-gray-300 mt-2 p-2 text-xl rounded-lg border-2 border-gray-400"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                className="bg-gray-300 mt-5 p-2 text-xl rounded-lg border-2 border-gray-400"
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
        <div className="border-l-1 h-full border-black w-auto">
            <div className="flex flex-col w-full h-full m-10 items-left">
                <h1 className="text-xl font-bold" >You may contact me as well through: </h1>
                <div className="flex items-center gap-2 mt-2">
                    <FaFacebook className="text-5xl"/>
                    <FaLinkedin className="text-5xl"/>
                    <FaInstagramSquare className="text-5xl"/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contact;
