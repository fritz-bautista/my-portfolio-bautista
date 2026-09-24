import { TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeAfterEffect } from "react-icons/tb";
//Thumbnail
import ramanThumbnail from '../assets/images/Projects/Graphic Design/RamanThumbnail.png';
import yesThumbnail from '../assets/images/Projects/Graphic Design/YESThumbnail.png';
import psscThumbnail from '../assets/images/Projects/Graphic Design/PSSCThumbnail.png';
import deepBlueThumbnail from '../assets/images/Projects/Graphic Design/DeepBlueThumbnail.png';
import comsocThumbnail from '../assets/images/Projects/Graphic Design/ComSocThumbnail.png';



// Deep Blue
import deepBlueDiveFest from '../assets/images/Projects/Graphic Design/Deep Blue/DiveFest Main Poster.png';
import deepBlueFbCover from '../assets/images/Projects/Graphic Design/Deep Blue/FB Cover Updated.png';
import deepBlueLedWall from '../assets/images/Projects/Graphic Design/Deep Blue/LED Wall 9x12.png';

// PSSC
import psscCheerdance from '../assets/images/Projects/Graphic Design/PSSC/Cheerdance Latest.png';
import psscLanyard from '../assets/images/Projects/Graphic Design/PSSC/Lanyard.png';
import psscTradDigital from '../assets/images/Projects/Graphic Design/PSSC/trad and digital comp.png';

//CCS
import birthdayPost1 from '../assets/images/Projects/Graphic Design/PCS/BirthdayPost.png';
import birthdayPost2 from '../assets/images/Projects/Graphic Design/PCS/BirthdayPost2.png';
import byte from '../assets/images/Projects/Graphic Design/PCS/BYTE.png';
import CCSAwards from '../assets/images/Projects/Graphic Design/PCS/CCSAwards.png';
import GenAsembly from '../assets/images/Projects/Graphic Design/PCS/GenAsemb.png';
import officers from '../assets/images/Projects/Graphic Design/PCS/officers.png';




// RAMAN
import ramanDeal2 from '../assets/images/Projects/Graphic Design/RAMAN/Deal2.png';
import ramanEventPlaceRent from '../assets/images/Projects/Graphic Design/RAMAN/EventPlaceRent.png';
import ramanFathersDay from '../assets/images/Projects/Graphic Design/RAMAN/FathersDayRaman.png';
import ramanKtvRoom from '../assets/images/Projects/Graphic Design/RAMAN/KTVRoomPoster.png';
import ramanMusicNight from '../assets/images/Projects/Graphic Design/RAMAN/MusicNight.png';
import ramanFatherDayDeal from '../assets/images/Projects/Graphic Design/RAMAN/RamanFatherDayDeal.png';
import ramanFoodTray from '../assets/images/Projects/Graphic Design/RAMAN/RamanFoodTray.png';
import ramanSharmaineMeme from '../assets/images/Projects/Graphic Design/RAMAN/RamanSharmaineMEME.png';
import ramanStartsAt179 from '../assets/images/Projects/Graphic Design/RAMAN/StartsAt179.png';

// YES
import yesArtboard1 from '../assets/images/Projects/Graphic Design/YES/Artboard 1.png';
import yesBudbod from '../assets/images/Projects/Graphic Design/YES/Budbod.png';
import yesDeal1 from '../assets/images/Projects/Graphic Design/YES/Deal1.png';
import yesDeal2 from '../assets/images/Projects/Graphic Design/YES/Deal2.png';
import yesDelivery from '../assets/images/Projects/Graphic Design/YES/Delivery.png';
import yesMeriendaSet from '../assets/images/Projects/Graphic Design/YES/MeriendaSetYES.png';
import yesPayDayJuly from '../assets/images/Projects/Graphic Design/YES/PayDayJuly.png';
import yesSharmaine from '../assets/images/Projects/Graphic Design/YES/Sharmaine.png';

import { type IconType } from "react-icons";

export interface Project {
    id: number;
    title: string;
    quickDes: string;
    thumbnail: string;
    techStack: IconType[];
    description: string;
    image: string[];
    color: string;
}

export const graphicProjectData: Project[] = [
    {
        id: 1,
        title: "RAMAN Restaurant",
        quickDes: "Designed appetizing digital and print marketing materials for restaurant promotions and seasonal events using Adobe Creative Suite.",
        description: "Aside from YES Restaurant, I was also doing another set of branding for their new Restaurant Raman. For this restaurant, we chose a more premium look for the advertisements and its visuals. The green also is chosen as the pallete as we want to emphasize the freshness of each dish that is being served. Also a much calmer color that fits the restaurants branding.",
        thumbnail: ramanThumbnail,
        techStack: [TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeAfterEffect],
        image: [
            ramanDeal2, 
            ramanEventPlaceRent, 
            ramanFathersDay, 
            ramanKtvRoom, 
            ramanMusicNight, 
            ramanFatherDayDeal, 
            ramanFoodTray, 
            ramanSharmaineMeme, 
            ramanStartsAt179
        ],
        color: "bg-green-900"
    },
    {
        id: 2,
        title: "YES Restaurant",
        quickDes: "Designed appetizing digital and print marketing materials for restaurant promotions and seasonal events using Adobe Creative Suite.",
        description: "During my part-time role at YES Efren's Resto Bar, I worked on giving the brand a fresh look that reflected its daring and energetic atmosphere. I established red as the main brand color for digital campaigns, leveraging its psychological connection to food and intense emotion to attract viewers. I also overhauled their existing graphics, which previously lacked structure and felt outdated. By introducing modern layouts and cohesive design elements, I successfully elevated their visual identity to better highlight their signature BBQ menu.",
        thumbnail: yesThumbnail,
        techStack: [TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeAfterEffect],
        image: [
            yesArtboard1, 
            yesBudbod, 
            yesDeal1, 
            yesDeal2, 
            yesDelivery, 
            yesMeriendaSet, 
            yesPayDayJuly, 
            yesSharmaine
        ],
        color: "bg-red-900"
    },
    {
        id: 3,
        title: "PLP Supreme Student Council",
        quickDes: "Developed engaging visual campaigns for student elections, university-wide events, and official council announcements.",
        description: "During my time in the PSSC, I actively assisted with event coordination and logistics. also served as the official spokesperson representing COS students to the council. Additionally, I helped design publication materials tor major events and promotional campaigns, creating numerous posters across various designs.",
        thumbnail: psscThumbnail,
        techStack: [TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeAfterEffect],
        image: [
            psscCheerdance,
            psscLanyard,
            psscTradDigital
        ],
        color: "bg-green-800"
    },
    {
        id: 4,
        title: "PLP Computer Society",
        quickDes: "Created visuals for organizations posters and promotions. Lead design decisions and branding of the organizations.",
        description: "During my term at the PLP Computer Society, I was in charge of creating visual content for the Facebook page, as well as designing numerous banners, tarpaulins, and other print materials. Beyond graphics, I also assisted with logistics and external communications, which significantly boosted my confidence and interpersonal skills.",
        thumbnail: comsocThumbnail, // Placeholder - add PCS imports if needed
        techStack: [TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeAfterEffect],
        image: [
            birthdayPost1, 
            birthdayPost2,
            byte,
            CCSAwards,
            GenAsembly,
            officers,
        ],
        color: "bg-gray-500"
    },
    {
        id: 5,
        title: "BGC Deep Blue Dive Fest",
        quickDes: "Created vibrant, ocean-themed visual assets for large-scale event banners and digital marketing collateral.",
        description: "This project was developed for an event called Deep Blue Dive Fest, an organization created for members who share a passion for marine life and scuba diving. All visual materials were created on-the-spot alongside the client during a design sprint, resulting in the official branding for the event. The deliverable includes social media posters, merchandise designs, and LED wall graphics.",
        thumbnail: deepBlueThumbnail,
        techStack: [TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeAfterEffect],
        image: [
            deepBlueDiveFest,
            deepBlueFbCover,
            deepBlueLedWall
        ],
        color: "bg-blue-800"
    }
];