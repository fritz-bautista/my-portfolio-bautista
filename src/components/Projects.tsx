
import image1 from '../assets/images/ProjectHome/Raman1.png';
import image2 from '../assets/images/ProjectHome/Raman2.png';
import image3 from '../assets/images/ProjectHome/YES1.png';
import image4 from '../assets/images/ProjectHome/YES2.png';
import image5 from '../assets/images/ProjectHome/VerdeHub.png';
import image6 from '../assets/images/ProjectHome/CUISINE.png';

function Projects() {
    return (
        <>
        <div className="flex flex-col items-center w-full min-h-screen bg-bg2 text-white">
            <div className="size-full bg-repeat bg-[url(/grid-ellipsis.svg)] bg-[length:100px_100px]">
                <div className="relative size-full bg-gradient-to-tr from-zinc-950/100 via-zinc-950/90 to-zinc-950/100 overflow-hidden">
                    <div className="flex items-center justify-content w-full h-screen overflow-hidden p-20 gap-10">
                        <div className="carousel perspective [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] 
                            [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]">
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
                        <div className="flex flex-col w-full h-full">
                            <div>
                                <div className=" items-center justify-center w-full h-full">
                                    <h1 className="text-5xl font-bold text-white text-center">{pageInfo.title}</h1>
                                    <p className="text-lg text-white text-center mt-4">
                                        {pageInfo.description}
                                    </p>
                                </div>
                            </div>
                        </div>
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
    description: "Here are some of the projects I have worked on, showcasing my skills in web development and graphic design. Each project demonstrates my ability to create visually appealing and functional applications that meet the needs of users."
}


export default Projects;
