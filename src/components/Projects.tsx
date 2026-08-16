function Projects() {
    return (
        <>
        <div className="flex flex-col items-center w-full h-screen">
            <div className="flex w-full h-screen">
                <div className="flex-1 items-center justify-center w-full h-screen gap-2 bg-gray-100 hover:flex-[3] cursor-pointer transition-all duration-300">
                    <h1>Placeholder 1</h1>
                </div>
                <div className="flex-1 items-center justify-center w-full h-screen gap-2 bg-gray-300 hover:flex-[3] cursor-pointer transition-all duration-300">
                    <h1>Placeholder 2</h1>
                </div>
                <div className="flex-1 items-center justify-center w-full h-screen gap-2 bg-gray-500 hover:flex-[3] cursor-pointer transition-all duration-300">
                    <h1>Placeholder 3</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;
