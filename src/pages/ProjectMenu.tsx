import ExpandableComponent from '../components/ExpandableComponent.tsx'
import fritzBannerImg from '../assets/images/FritzBanner.png';

function ProjectMenu() {
    return (
        <>
        <div className="flex flex-col items-center w-full h-screen bg-white">
            <div className="w-full h-cover bg-black mt-25">
                <img src={fritzBannerImg} className=""></img>
            </div>
            <div className="flex flex-col w-full items-center">
                <div className="flex w-full h-10 items-center">
                    <button className="w-fit h-fit m-3 ">
                        <p> Graphic Design Project</p>
                    </button>
                </div>
                <ExpandableComponent />
            </div>
        </div>
        </>
    )
}

export default ProjectMenu;