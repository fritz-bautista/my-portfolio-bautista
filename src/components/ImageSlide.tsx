import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// declaration of value type for the featuresData
interface FeaturesProp {
    featuresData: {
        name?: string;
        image: string;
        description?: string;
    }[];
}

// Retrieves the array from the ProjectPage
function ImageSlide({featuresData}: FeaturesProp) {

    return (
        <div className="flex flex-col items-center w-full h-full bg-bg2 text-white font-google">
            <div className="size-full bg-repeat bg-[url(/grid-ellipsis.svg)] bg-[length:100px_100px]">
                <div className="relative size-full bg-gradient-to-tr from-zinc-950/100 via-zinc-950/90 to-zinc-950/100 overflow-hidden"> 
                    {/* Added py-10 on mobile to give it top/bottom breathing room */}
                    <div className="flex w-full h-full items-center py-10 lg:py-0">
                        
                        {/* Changed pl-20 pr-20 to px-4 on mobile, lg:px-20 on desktop */}
                        <div className="w-full flex flex-col px-4 lg:px-20">
                            <Slide 
                                onChange={function Hs(){}} 
                                onStartChange={function Hs(){}}
                                easing="ease-out"
                                transitionDuration={300}
                            >
                                {/* Loops the featuresData array to minimize lines */}
                                {featuresData.map((items, index) => (
                                    <div 
                                        key={index}
                                        // Reduced inner padding from p-20 to p-4 on mobile
                                        className="each-slide-effect p-4 lg:p-20 flex flex-col items-center"
                                    >
                                        <div className="w-auto h-200">
                                            <img 
                                            src={items.image} 
                                            alt={items.name}
                                            className="object-contain w-full h-full shadow-lg" 
                                            />
                                        </div>
                                        {(items.name || items.description) && (
                                            <div className="flex flex-col items-center w-full mt-6 lg:mt-0">
                                                
                                                {/* Conditionally render the name <h1> */}
                                                {items.name && (
                                                    <h1 className="text-2xl lg:text-3xl font-bold p-4 lg:p-10 text-center">
                                                        {items.name}
                                                    </h1>
                                                )}
                                                
                                                {/* Conditionally render the description <p> */}
                                                {items.description && (
                                                    <p className="text-base sm:text-lg lg:text-xl font-medium text-center px-2 lg:px-10">
                                                        {items.description}
                                                    </p>
                                                )}
                                                
                                            </div>
                                        )}
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