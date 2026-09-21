
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// declaration of value type for the featuresData
interface FeaturesProp {
    featuresData: {
        name: string;
        image: string;
        description: string;
    }[];
}
// Retrieves the array from the ProjectPage
function ImageSlide({featuresData}: FeaturesProp) {

    return (
        <div className="flex flex-col items-center w-full h-full bg-bg2 text-white font-google">
            <div className="size-full bg-repeat bg-[url(/grid-ellipsis.svg)] bg-[length:100px_100px]">
                <div className="relative size-full bg-gradient-to-tr from-zinc-950/100 via-zinc-950/90 to-zinc-950/100 overflow-hidden"> 
                    <div className="flex w-full h-full items-center ">
                        <div className="w-full  flex flex-col pl-20 pr-20">
                            <Slide onChange={function Hs(){}} onStartChange={function Hs(){}}
                            easing="ease-out"
                            transitionDuration={300}>
                                {/* Loops the featuresData array to minimize lines */}
                                {featuresData.map((items, index) => (
                                    <div 
                                    key = {index}
                                    className="each-slide-effect p-20">
                                        <img src={items.image} alt={items.image} className="object-cover" />
                                        <div className="flex flex-col">
                                            <h1 className="text-3xl font-bold p-10">{items.name}</h1>
                                            <p className="text-xl font-medium text-center">{items.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slide>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                  
        </div>
    )
}

export default ImageSlide;