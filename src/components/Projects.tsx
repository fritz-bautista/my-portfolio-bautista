
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
        <div className="flex flex-col items-center w-full min-h-screen bg-bg2 text-white font-google">
            <div className="size-full bg-repeat bg-[url(/grid-ellipsis.svg)] bg-[length:100px_100px]">
                <div className="relative size-full bg-gradient-to-tr from-zinc-950/100 via-zinc-950/90 to-zinc-950/100 overflow-hidden">               
                    <div className="grid grid-cols-6 grid-rows-5 gap-4 h-screen w-full">
                        <div className="row-span-5"></div>
                        <div className="col-span-2 row-span-5 gap-10 flex flex-row items-center">
                            <div className="carousel perspective [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] 
                                mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]">
                                <div className="group">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={'Project ${index + 1}'} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                                <div aria-hidden="true" className="group">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={'Project ${index + 1}'} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                                <div aria-hidden="true" className="group">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={'Project ${index + 1}'} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="carousel perspectiveReverse [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] 
                                mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]">
                                <div className="groupReverse">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={'Project ${index + 1}'} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                                <div aria-hidden="true" className="groupReverse">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={'Project ${index + 1}'} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                                <div aria-hidden="true" className="groupReverse">
                                    {images.map((image, index) => (
                                        <div key={index} className="card">
                                            <img src={image} alt={'Project ${index + 1}'} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 row-span-5 col-start-4">
                            <div className="flex flex-col w-full h-full items-center justify-center p-5">
                                <div className="flex flex-col gap-10 items-center justify-center">
                                    <div className=" items-center justify-center w-full h-full pointer-events-none">
                                        <h1 className="text-4xl font-bold text-white text-center">{pageInfo.title}</h1>
                                        <p className="text-lg text-white text-center mt-4">
                                            {pageInfo.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center w-full p-5 gap-5">
                                        <button
                                        onClick={() => navigate('/projects/menu', {state: category.web})}
                                        className="bg-blue-500 hover:bg-blue-700 text-lg text-white font-bold py-4 px-6 rounded-lg hover:cursor-pointer transition duration-300 ease-in-out"
                                        >
                                            Software Projects
                                        </button>
                                        <button
                                        onClick={() => navigate('/projects/menu', {state: category.graph})}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-lg text-white font-bold py-4 px-6 rounded-lg hover:cursor-pointer transition duration-300 ease-in-out"
                                        >
                                            Graphic Projects
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-5 col-start-6"></div>
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
