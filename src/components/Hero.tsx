import { BlurIn } from './TextComponents/Blur_in.tsx';

function Hero() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-25 ">
        <div className="flex flex-col w-200 items-center justify-center gap-1">
            <BlurIn>FRITZ PORTFOLIO</BlurIn>
            <p className="text-2xl font-google text-center mt-1">
              This is a collection of my Graphic design, UI design, and Website application projects and commissions. 
            </p>
        </div>
    </div>
  )
}

export default Hero; 