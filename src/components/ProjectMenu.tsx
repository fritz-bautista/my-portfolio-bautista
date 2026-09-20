
import { webProjectData } from '../data/webProjectData.ts';

function ProjectMenu() {
    return (
        <div className="flex flex-col items-center w-full h-full bg-black font-google">
            <div className="grid grid-cols-6 grid-rows-1 gap-0.5 w-full h-full m-0.5">
                <div className="bg-white" >Back to Menu</div>
                <div className="col-span-4 bg-white w-full flex justify-center p-10">
                    <h1 className="text-4xl">Software Development Projects</h1>
                </div>
                <div className="col-start-6 bg-white"></div>
            </div>
            {/*  */}
            {webProjectData.map((project, index) => (
                <div key={index} className="grid grid-cols-6 grid-rows-3 gap-0.5 w-full h-full mb-0.5">
                    <div className="row-span-2 bg-white"></div>
                    <div className="col-span-2 row-span-2 bg-black p-10 flex items-center">
                        <img src={project.thumbnail} alt={project.thumbnail} className="w-auto"></img>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-4 flex flex-col h-full justify-center overflow-hidden">
                            <div className={`h-full flex flex-col p-10 gap-5 justify-center ${project.color}`}>
                                <h1 className="text-2xl text-white font-bold text-left">{project.title}</h1>
                                <p className="text-xl text-white font-medium">{project.quickDes}</p>
                            </div>
                    </div>
                    <div className="row-span-2 col-start-6 bg-white"></div>
                    <div className="row-start-3 bg-white"></div>
                    <div className="col-span-4 row-start-3 bg-white"></div>
                    <div className="col-start-6 row-start-3 bg-white"></div>
                </div>
            ))}
        </div>
    )
}

export default ProjectMenu;