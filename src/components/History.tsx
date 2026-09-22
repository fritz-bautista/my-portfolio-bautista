import { ScrollReveal } from './ScrollReveal';
import image1 from '../assets/images/History/PLP.webp';
import image3 from '../assets/images/History/PLPOJT.jpg';
import image4 from '../assets/images/History/CourseraCert.png';
import image5 from '../assets/images/History/CIICCJAVA.jpg';
import image6 from '../assets/images/History/WebDev.jpg';
import image7 from '../assets/images/History/Raman-1.png';

function History() {
    return (
        <>
        {/* Adjusted outer padding for mobile (p-6 lg:p-20) */}
        <div className="flex flex-col items-center w-full h-full p-6 lg:p-20 font-google bg-white pointer-events-none">
            <div className="flex flex-col items-left w-full">
                <h1 className="text-3xl lg:text-4xl font-bold">What have I been up to?</h1>
            </div>
            
            {/* Expanded width and adjusted left padding for mobile */}
            <div className="flex flex-col font-google items-center w-full lg:w-4/5 h-full mt-10 pl-4 lg:pl-10">
                {content.map((item, index) => (
                    <ScrollReveal key={item.id} delay={index * 150}>
                        {/* Changed from forced grid-cols-2 to flex-col on mobile, grid on desktop */}
                        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center border-l-4 border-secondary p-6 lg:p-10 mb-10 gap-6 lg:gap-10">
                            <div className="w-full">
                                <h1 className="text-xl lg:text-2xl font-bold">{item.title}</h1>
                                <p className="text-base lg:text-lg text-gray-700">{item.subtitle}</p>
                                <p className="text-sm lg:text-base mt-4 text-justify">{item.description}</p>
                            </div>
                            <div className="w-full h-full mt-4 lg:mt-0">
                                <img src={item.image} alt="History timeline point" className="w-full h-full object-cover rounded-lg lg:border-r-20 shadow-md lg:shadow-none" />
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
        </>
    )
}

const content  = [
    {id: 1, 
    title: "BS Computer Science", 
    subtitle: "Pamantasan ng Lungsod ng Pasig (2022-2026)", 
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry.",
    image: image1
    },
    {id: 2, 
    title: "Freelance Web Developer", 
    subtitle: "Cuisine Website (2025)", 
    description: "During college, I accepted commissions to further improve and apply my knowledge in developing software for clients. This gave me an experience in talking with clients and improving my soft-skills. I was able to utilize new tools and software as well, making way for growth in my technical and communication skills. ",
    image: image6
    },
    {id: 3, 
    title: "Freelance Graphic Designer", 
    subtitle: "RAMAN, YES, and Others (2025-2026)", 
    description: "I worked as marketing graphic designer for RAMAN and YES, creating their visual designs for the business, this includes posters, flyers, and social media ads. This work experience greatly improved my sense of art and creativity. ",
    image: image7
    },
    {id: 4, 
    title: "MIS Web App Developer Intern", 
    subtitle: "VST ECS Phils. Inc. (2026)", 
    description: "I took my internship at VST ECS Phils. Inc, this internship taught me how industry code standards and the agile methodology of developing softwares. I was tasked to refactor and add changes to two systems of the company, both front-end and back-end. The experience taught me valuable soft-skills and technical skills for the IT industry. ",
    image: image3
    },
    {id: 5, 
    title: "Google x DTI UX Designer Certification Course", 
    subtitle: "2026 - ongoing", 
    description: "I took a UX Designer certification course by Google and DTI to further enhance my technical understanding of design principles and UX research. Having UI/UX skills can be beneficial as well in developing the front-end of the systems I am working on.",
    image: image4
    },
    {id: 6, 
    title: "CIICC TESDA Java Programming NC3 Course", 
    subtitle: "2026 - ongoing", 
    description: "To further enhance my back-end skills in programming, I took the TESDA training for work program for Java with NC3 difficulty. The training includes the fundamentals of Java, OOP, and the use of Spring Boot. The training includes a supervised industry learning as well as our OJT, working with real companies and following industry work flow.",
    image: image5
    },
]

export default History;