
interface ImageCarouselProps {
  images: string[];
}

function ImageCarousel ({ images }: ImageCarouselProps) {
    return (
        <div  className="w-full overflow-hidden py-8 relative flex">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 px-4">
                {images.map((img) => (
                    <img
                    key={'set1-${index}'}
                    src={img}
                    alt={'Carousel item ${index}'}
                    className="h-48 w-72 object-cover rounded-xl shadow-md flex-shrink-0"
                    />
                ))}

                {images.map((img) => (
                    <img
                    key={'set2-${index}'}
                    src={img}
                    alt={'Carousel item ${index}'}
                    className="h-48 w-72 object-cover rounded-xl shadow-md flex-shrink-0"
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel;