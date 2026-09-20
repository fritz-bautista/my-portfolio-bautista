import technoverdeThumb from '../assets/images/Projects/Web Development/TechnoVerde/VerdeHub.png';

export interface Project {
    title: string;
    quickDes: string;
    thumbnail: string;
    techStack: string[];
    description: string;
    features: {
        name: string;
        image: string;
        description: string;
    }[];
    recommendation: string;
    color: string;
}

export const webProjectData: Project[] = [
    {
        title: "TechnoVerde Edge: Reducing PLP’s Institutional Footprint Through Smart Waste Management Systems and Sustainable Campus Practices",
        quickDes: "A Thesis Project as requirement of the Pamantasan ng Lungsod ng Pasig.",
        thumbnail: technoverdeThumb,
        description: "This study developed TechnoVerde Edge, an IoT-enabled smart waste management system designed to improve the recycling process at Pamantasan ng Lungsod ng Pasig. The project focused on addressing issues related to inaccurate waste sorting, delayed waste collection, and the absence of real-time monitoring by integrating automated waste classification, sensor-based tracking, and data-driven route planning.",
        techStack: [
        "Laravel PHP",
        "Laravel Blade",
        "CSS",
        "JavaScript",
        "MySQL",
        "Python",
        "C++"
        ],
        features: [
        {
            name: "Dashboard",
            image: "",
            description: "The Dashboard includes a Key Performance Indicator for the amount of trash accumulated and disposed of. It also includes a quick view of the smart bin status per floor. The dashboard also includes a ranking board for each college for the amount of waste recycled."
        },
        {
            name: "Bin Manager",
            image: "",
            description: "The Bin Manager provides an overview of all available smart bins on campus. The administrator can add smart bins manually, but personnel do not. The Bin Manager section as well can check the recent history records of each bin. Users can also edit particular details on any given bin record, such as the type of bin, physical location of the bin, and the staff member responsible for maintenance, enabling the system to maintain accurate, up-to-date, and actionable records to facilitate the upkeep of waste management."
        },
        {
            name: "Report Analytics",
            image: "",
            description: "The Report Analytics component produces reports that contain detailed information regarding recycling activity on campus. These reports include a rank-ordered listing of colleges based on overall recycling rate and total waste collected. The report also represents which college, campus floor, or smart bins generated the most recyclable waste over the reporting period, including paper, plastic bottles, and similar materials."
        },
        {
            name: "Utility Manager",
            image: "",
            description: "The Utility Manager allows administrators to manage accounts of utility staff efficiently through CRUD functionality for accounts, including the ability to create, view, update, and delete accounts. The module also allows the assignment of specific floors or areas of responsibility for each staff member in order to effectively organize and equitably distribute waste collection duties on the campus."
        },
        {
            name: "Account Manager",
            image: "",
            description: "The Account Manager supplies administrators with the necessary tools to manage user accounts more easily. CRUD operations (create, read, update, delete) are supported for accounts in the system, and all accounts are displayed in a table for easy tracking, organizing, and managing of user information."
        },
        {
            name: "College and Ranking Manager",
            image: "",
            description: "The Ranking Manager facilitates administrators in overseeing the ranking process based on each semester, so they can begin or stop rankings based on the recycling of data being collected. It also presents a table with the history of previous rankings, which provides them a place to review results, see if they have improved, and track changes in performance over time."
        }
        ],
        recommendation: "To further improve the system, the study recommends strengthening the area of portability, since the capability to replace existing software received the lowest rating at 76.5 percent. Improving system compatibility or simplifying integration with other digital platforms may help address this concern. It is also recommended to enhance maintenance features by adding automated alerts, more detailed diagnostic reports, and extended monitoring tools. Improving sensor calibration, adding additional waste categories, and upgrading the durability of hardware components may also help the system maintain long-term efficiency.",
        color: "bg-blue-800"
    },
    {
        title: "CUISINE Website",
        quickDes: "An academic and research base website, with CMS functionality.",
        thumbnail: technoverdeThumb,
        description: "This study developed TechnoVerde Edge, an IoT-enabled smart waste management system designed to improve the recycling process at Pamantasan ng Lungsod ng Pasig. The project focused on addressing issues related to inaccurate waste sorting, delayed waste collection, and the absence of real-time monitoring by integrating automated waste classification, sensor-based tracking, and data-driven route planning.",
        techStack: [
        "Laravel PHP",
        "Laravel Blade",
        "CSS",
        "JavaScript",
        "MySQL",
        "Python",
        "C++"
        ],
        features: [
        {
            name: "Dashboard",
            image: "",
            description: "The Dashboard includes a Key Performance Indicator for the amount of trash accumulated and disposed of. It also includes a quick view of the smart bin status per floor. The dashboard also includes a ranking board for each college for the amount of waste recycled."
        },
        {
            name: "Bin Manager",
            image: "",
            description: "The Bin Manager provides an overview of all available smart bins on campus. The administrator can add smart bins manually, but personnel do not. The Bin Manager section as well can check the recent history records of each bin. Users can also edit particular details on any given bin record, such as the type of bin, physical location of the bin, and the staff member responsible for maintenance, enabling the system to maintain accurate, up-to-date, and actionable records to facilitate the upkeep of waste management."
        },
        {
            name: "Report Analytics",
            image: "",
            description: "The Report Analytics component produces reports that contain detailed information regarding recycling activity on campus. These reports include a rank-ordered listing of colleges based on overall recycling rate and total waste collected. The report also represents which college, campus floor, or smart bins generated the most recyclable waste over the reporting period, including paper, plastic bottles, and similar materials."
        },
        {
            name: "Utility Manager",
            image: "",
            description: "The Utility Manager allows administrators to manage accounts of utility staff efficiently through CRUD functionality for accounts, including the ability to create, view, update, and delete accounts. The module also allows the assignment of specific floors or areas of responsibility for each staff member in order to effectively organize and equitably distribute waste collection duties on the campus."
        },
        {
            name: "Account Manager",
            image: "",
            description: "The Account Manager supplies administrators with the necessary tools to manage user accounts more easily. CRUD operations (create, read, update, delete) are supported for accounts in the system, and all accounts are displayed in a table for easy tracking, organizing, and managing of user information."
        },
        {
            name: "College and Ranking Manager",
            image: "",
            description: "The Ranking Manager facilitates administrators in overseeing the ranking process based on each semester, so they can begin or stop rankings based on the recycling of data being collected. It also presents a table with the history of previous rankings, which provides them a place to review results, see if they have improved, and track changes in performance over time."
        }
        ],
        recommendation: "To further improve the system, the study recommends strengthening the area of portability, since the capability to replace existing software received the lowest rating at 76.5 percent. Improving system compatibility or simplifying integration with other digital platforms may help address this concern. It is also recommended to enhance maintenance features by adding automated alerts, more detailed diagnostic reports, and extended monitoring tools. Improving sensor calibration, adding additional waste categories, and upgrading the durability of hardware components may also help the system maintain long-term efficiency.",
        color: "bg-green-800"
    }
];