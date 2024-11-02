import Image from "next/image";
import img_1 from "../public/Rectangle 12.png";
import img_2 from "../public/Rectangle 17.png";
import img_3 from "../public/Group 91.png";
import img_4 from "../public/image 15.png";
import img_5 from "../public/image 16.png";
import img_6 from "../public/image 17.png";
import img_7 from "../public/image 18.png";
import img_8 from "../public/Frame 11 (1).png";


export default function Projects(){
    return(
        <div className="w-[1170px] h-[765px]  ml-[10%]">
            <h3 className="text-[64px] text-gray-400 font-light">Our Projects</h3>

            <div className="flex flex-row gap-6">
               <Image src={img_1} alt="Rectangular-12" width={1000} height={1000} className="w-[570px] h-[255px] relative"/>
               <Image src={img_2} alt="Rectangular-17" width={1000} height={1000} className="w-[570px] h-[255px] absolute"/>
               <Image src={img_3} alt="simple-project" width={1000} height={1000} className="w-[237px] h-[160px] absolute ml-10 mt-10"/>
               <Image src={img_4} alt="image-15" width={1000} height={1000} className="w-[570px] h-[255px]"/>
            </div>

            <div className="flex flex-row gap-6 mt-4">
               <Image src={img_5} alt="image-16" width={1000} height={1000} className="w-[270px] h-[255px]"/>
               <Image src={img_6} alt="image-17" width={1000} height={1000} className="w-[470px] h-[255px]"/>
               <Image src={img_7} alt="image-18" width={1000} height={1000} className="w-[370px] h-[255px]"/>
                

            </div>

            <div>
                <Image src={img_8} alt="all projects" width={1000} height={1000} className="w-[222px] h-[71px] mt-4 ml-[80%]"/>
            </div>
        </div>
    );
}