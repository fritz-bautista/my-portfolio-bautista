import { ScrollReveal } from './ScrollReveal';

function History() {
    return (
        <>
        <div className="flex flex-col items-center w-full h-full p-20">
            <div className="flex flex-col items-left w-full">
                <h1 className="text-4xl font-google font-bold">What have I been up to?</h1>
            </div>
            <div className="flex flex-col font-google items-center w-full h-full mt-10 pl-10">
                {content.map((item, index) => (
                    <ScrollReveal key={item.id} delay={index * 150}>
                        <div className="grid grid-cols-2 w-full border-l-4 border-secondary p-10 mb-10">
                            <div>
                                <h1 className="text-2xl font-bold">{item.title}</h1>
                                <p className="text-lg">{item.subtitle}</p>
                                <p className="text-base mt-4">{item.description}</p>
                            </div>
                            <div>
                                <p>Image Placeholder</p>
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
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry."
    },
    {id: 2, 
    title: "Graphic Designer 2", 
    subtitle: "PLP Computer Society (2023-2024)", 
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry."
    },
    {id: 3, 
    title: "Public Information Officer", 
    subtitle: "PLP Himig Chorale (2023-2024)", 
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry."
    },
    {id: 4, 
    title: "CCS Ambassador", 
    subtitle: "PLP Supreme Student Council (2024-2025)", 
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry."
    },
    {id: 5, 
    title: "Freelance Web Developer", 
    subtitle: "Cuisine Website and SulaTula Application (2025)", 
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry."
    },
    {id: 6, 
    title: "Freelance Graphic Designer", 
    subtitle: "PLP Computer Society (2023-2024)", 
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry."
    },
    {id: 7, 
    title: "Part-Time Graphic Designer", 
    subtitle: "PLP Computer Society (2023-2024)", 
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry."
    },
    {id: 8, 
    title: "MIS Web App Developer Intern", 
    subtitle: "PLP Computer Society (2023-2024)", 
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry."
    },
    {id: 9, 
    title: "Google x DTI UX Designer Certification Course", 
    subtitle: "2026 - ongoing", 
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry."
    },
    {id: 10, 
    title: "TESDA Visual Graphic Design NC II Certification Course", 
    subtitle: "2026 - ongoing", 
    description: "Started my programming career at Pamantasan ng Lungsod ng Pasig in 2022. I developed different systems and web applications with a diverse set of frameworks and languages. I was able to learn soft and technical skills through collaboration and leadership through organizations and key projects in the University. Graphic design and UI/UX have become my forte and focus throughout my studies and continuously improving in the industry."
    },
]

export default History;