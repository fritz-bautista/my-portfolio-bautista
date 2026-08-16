function About() {
    return (
        <>
        <div className="flex flex-col items-center w-full h-screen p-30 bg-bg2 text-white"> 
            <div className="grid grid-cols-3 gap-1">
                <div ></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl font-bold w-full text-center"> Fritz Harold P. Bautista </h1>
                <h2 className="text-2xl font-medium text-center"> Graphic Designer & UX Designer </h2>
                <p className="text-2xl font-google text-center mt-1 w-3/4">
                A passionate Graphic Designer and UX Designer, he graduated
                with a Bachelor of Science in Computer Science from Pamantasan 
                ng Lungsod ng Pasig. During his studies, he worked as a freelance 
                graphic designer, creating impactful visual content for promotions 
                and events.
                </p>
            </div>
        </div>
        </>
    )
}

export default About;
