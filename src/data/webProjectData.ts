import technoverdeThumb from '../assets/images/Projects/Web Development/TechnoVerde/VerdeHubOfficialBG.png';
import cuisineThumb from '../assets/images/Projects/Web Development/CUISINE/CuisineOfficialBG.png';
import image1 from '../assets/images/Projects/Web Development/TechnoVerde/image_1.png';
import image2 from '../assets/images/Projects/Web Development/TechnoVerde/image_2.png';
import image3 from '../assets/images/Projects/Web Development/TechnoVerde/image_3.png';
import image4 from '../assets/images/Projects/Web Development/TechnoVerde/image_4.png';
import image5 from '../assets/images/Projects/Web Development/TechnoVerde/image_5.png';
import image6 from '../assets/images/Projects/Web Development/TechnoVerde/image_6.png';
import image7 from '../assets/images/Projects/Web Development/TechnoVerde/image_7.png';

import imageCuisine1 from '../assets/images/Projects/Web Development/CUISINE/image_1.png';
import imageCuisine2 from '../assets/images/Projects/Web Development/CUISINE/image_2.png';
import imageCuisine3 from '../assets/images/Projects/Web Development/CUISINE/image_3.png';
import imageCuisine4 from '../assets/images/Projects/Web Development/CUISINE/image_4.png';
import imageCuisine5 from '../assets/images/Projects/Web Development/CUISINE/image_5.png';
import imageCuisine6 from '../assets/images/Projects/Web Development/CUISINE/image_6.png';
import imageCuisine7 from '../assets/images/Projects/Web Development/CUISINE/image_7.png';



import { type IconType} from "react-icons"
import { FaHtml5, FaCss3, FaPhp, FaLaravel, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export interface Project {
    id: number;
    title: string;
    quickDes: string;
    thumbnail: string;
    techStack: IconType[];
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
        id: 1,
        title: "TechnoVerde Edge: Reducing PLP’s Institutional Footprint Through Smart Waste Management Systems and Sustainable Campus Practices",
        quickDes: "A Thesis Project as requirement of the Pamantasan ng Lungsod ng Pasig.",
        thumbnail: technoverdeThumb,
        description: "This study developed TechnoVerde Edge, an IoT-enabled smart waste management system designed to improve the recycling process at Pamantasan ng Lungsod ng Pasig. The project focused on addressing issues related to inaccurate waste sorting, delayed waste collection, and the absence of real-time monitoring by integrating automated waste classification, sensor-based tracking, and data-driven route planning.",
        techStack: [
            FaLaravel, FaHtml5, FaCss3, FaPhp, IoLogoJavascript, FaPython
        ],
        features: [
        {
            name: "Log In",
            image: image1,
            description: "Log In Page is the secure access point of the Verde Dashboard. To access the system, users must enter their credentials and only users with authorization will be able to log in. The page also accommodates multiple user roles (Administrator, Utility Staff, and Student)."
        },     
        {
            name: "Dashboard",
            image: image2,
            description: "The Dashboard includes a Key Performance Indicator for the amount of trash accumulated and disposed of. It also includes a quick view of the smart bin status per floor. The dashboard also includes a ranking board for each college for the amount of waste recycled."
        },
        {
            name: "Bin Manager",
            image: image3,
            description: "The Bin Manager provides an overview of all available smart bins on campus. The administrator can add smart bins manually, but personnel do not. The Bin Manager section as well can check the recent history records of each bin. Users can also edit particular details on any given bin record, such as the type of bin, physical location of the bin, and the staff member responsible for maintenance, enabling the system to maintain accurate, up-to-date, and actionable records to facilitate the upkeep of waste management."
        },
        {
            name: "Report Analytics",
            image: image4,
            description: "The Report Analytics component produces reports that contain detailed information regarding recycling activity on campus. These reports include a rank-ordered listing of colleges based on overall recycling rate and total waste collected. The report also represents which college, campus floor, or smart bins generated the most recyclable waste over the reporting period, including paper, plastic bottles, and similar materials."
        },
        {
            name: "Utility Manager",
            image: image5,
            description: "The Utility Manager allows administrators to manage accounts of utility staff efficiently through CRUD functionality for accounts, including the ability to create, view, update, and delete accounts. The module also allows the assignment of specific floors or areas of responsibility for each staff member in order to effectively organize and equitably distribute waste collection duties on the campus."
        },
        {
            name: "Account Manager",
            image: image6,
            description: "The Account Manager supplies administrators with the necessary tools to manage user accounts more easily. CRUD operations (create, read, update, delete) are supported for accounts in the system, and all accounts are displayed in a table for easy tracking, organizing, and managing of user information."
        },
        {
            name: "College and Ranking Manager",
            image: image7,
            description: "The Ranking Manager facilitates administrators in overseeing the ranking process based on each semester, so they can begin or stop rankings based on the recycling of data being collected. It also presents a table with the history of previous rankings, which provides them a place to review results, see if they have improved, and track changes in performance over time."
        }
        ],
        recommendation: "To further improve the system, the study recommends strengthening the area of portability, since the capability to replace existing software received the lowest rating at 76.5 percent. Improving system compatibility or simplifying integration with other digital platforms may help address this concern. It is also recommended to enhance maintenance features by adding automated alerts, more detailed diagnostic reports, and extended monitoring tools. Improving sensor calibration, adding additional waste categories, and upgrading the durability of hardware components may also help the system maintain long-term efficiency.",
        color: "bg-yellow-400"
    },
    {
        id: 2,
        title: "CUISINE Website",
        quickDes: "An academic and research base website, with CMS functionality.",
        thumbnail: cuisineThumb,
        description: "Culinary Innovation Studies & Industries Network is a platform designed to bridge the gap between culinary arts, food science, and industry practice. We empower students, professionals, and food lovers to share insights, stories, and research that shape the future of food.",
        techStack: [
            FaLaravel, FaHtml5, FaCss3, FaPhp, IoLogoJavascript
        ],
        features: [
        {
            name: "Home",
            image: imageCuisine1,
            description: ""
        },
        {
            name: "About",
            image: imageCuisine2,
            description: ""
        },
        {
            name: "About",
            image: imageCuisine3,
            description: ""
        },
        {
            name: "Submission",
            image: imageCuisine4,
            description: ""
        },
        {
            name: "Article & Blogs",
            image: imageCuisine5,
            description: ""
        },
        {
            name: "Admin Dashboard",
            image: imageCuisine6,
            description: ""
        },
        {
            name: "Article Manager",
            image: imageCuisine7,
            description: ""
        }
        ],
        recommendation: "The website provide an overview of the structure of the intended concept. The website could be improved by using dynamic content to the pages to prevent magic strings or variables. The visual or UI could be greatly improved by using tailwind instead of CSS or both could be combined to create a better output. Blade is already obselete as well, using react or vue framework is better. ",
        color: "bg-green-800"
    }
];