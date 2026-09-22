import image1 from '../assets/images/ProjectHome/Raman1.png';
import image2 from '../assets/images/ProjectHome/Raman2.png';
import image3 from '../assets/images/ProjectHome/YES1.png';
import image4 from '../assets/images/ProjectHome/YES2.png';
import image5 from '../assets/images/ProjectHome/VerdeHub.png';
import image6 from '../assets/images/ProjectHome/CUISINE.png';
import { useNavigate } from "react-router-dom";

function Projects() {
    const navigate = useNavigate();
    const category = {
        web: "webProjectData",
        graph: "graphProjectData"
    }

    return (
        <>
        <div className="flex flex-col items-center w-screen min-h-screen bg-bg2 text-white font-google">
            {/* Changed size-full to w-full h-full min-h-screen to ensure backgrounds cover scrolling on mobile */}
            <div className="w-full h-full min-h-screen bg-repeat bg-[url(/grid-ellipsis.svg)] bg-[length:100px_100px]">
                <div className="relative w-full h-full min-h-screen bg-gradient-to-tr from-zinc-950/100 via-zinc-950/90 to-zinc-950/100 overflow-hidden">               
                    
                    {/* RESPONSIVE CONTAINER: flex-col on mobile, 6-col grid on lg screens */}
                    <div className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-5 gap-4 min-h-screen lg:h-screen w-full py-10 lg:py-0">
                        
                        {/* Hidden on mobile, acts as left margin spacer on desktop */}
                        <div className="hidden lg:block lg:row-span-5"></div>
                        
                        {/* CAROUSELS: Ordered 2nd on mobile (bottom), original position on desktop */}
                        <div className="order-2 lg:order-none lg:col-span-2 lg:row-span-5 gap-5 lg:gap-10 flex flex-row items-center justify-center h-[60vh] lg:h-full w-full overflow-hidden">
                            <div className="carousel perspective [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] 
                                mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]">
                                <div className="group">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                                <div aria-hidden="true" className="group">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                                <div aria-hidden="true" className="group">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="carousel perspectiveReverse [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] 
                                mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]">
                                <div className="groupReverse">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                                <div aria-hidden="true" className="groupReverse">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                                <div aria-hidden="true" className="groupReverse">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* TEXT & BUTTONS: Ordered 1st on mobile (top), original position on desktop */}
                        <div className="order-1 lg:order-none lg:col-span-2 lg:row-span-5 lg:col-start-4 w-full h-full mt-10 lg:mt-0">
                            <div className="flex flex-col w-full h-full items-center justify-center p-5">
                                <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center">
                                    <div className="items-center justify-center w-full h-full pointer-events-none">
                                        <h1 className="text-3xl lg:text-4xl font-bold text-white text-center">{pageInfo.title}</h1>
                                        <p className="text-base lg:text-lg text-white text-center mt-4">
                                            {pageInfo.description}
                                        </p>
                                    </div>
                                    {/* Buttons: Stacked on tiny mobile, side-by-side on sm+ */}
                                    <div className="flex flex-col sm:flex-row items-center justify-center w-full p-2 lg:p-5 gap-3 lg:gap-5">
                                        <button
                                        onClick={() => navigate('/projects/menu', {state: category.web})}
                                        className="bg-blue-500 hover:bg-blue-700 text-base lg:text-lg text-white font-bold py-3 px-5 lg:py-4 lg:px-6 rounded-lg hover:cursor-pointer transition duration-300 ease-in-out w-full sm:w-auto"
                                        >
                                            Software Projects
                                        </button>
                                        <button
                                        onClick={() => navigate('/projects/menu', {state: category.graph})}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-base lg:text-lg text-white font-bold py-3 px-5 lg:py-4 lg:px-6 rounded-lg hover:cursor-pointer transition duration-300 ease-in-out w-full sm:w-auto"
                                        >
                                            Graphic Projects
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hidden on mobile, acts as right margin spacer on desktop */}
                        <div className="hidden lg:block lg:row-span-5 lg:col-start-6"></div>
                    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const images = [image1, image2, image3, image4, image5, image6];
const pageInfo = {
    title: "MY PROJECTS",
    description: "Here are some of the projects I have worked on, showcasing my skills in web development and graphic design."
}

export default Projects;