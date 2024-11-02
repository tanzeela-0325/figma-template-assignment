import Image from "next/image";
import img_4 from "../public/Frame 11.png";
import img_1 from "../public/Rectangle 8.png";
import img_2 from "../public/Rectangle 9.png";
import img_3 from "../public/Rectangle 10.png";
 
export default function About(){
  return(
  
        <div className="flex justify-around w-[1170px] h-[465px] ml-[10%]  bg-gray-200 p-4">

          <div className="flex flex-col gap-4">
          <Image src={img_2} alt="arrow" width={1000} height={1000} className="w-[270px] h-[265px] ml-8 "/>
          <Image src={img_3} alt="arrow" width={1000} height={1000} className="w-[270px] h-[140px] ml-8 "/>
          </div>

          <div className="h-[60%] mt-[2%]">
          <Image src={img_1} alt="image" width={1000} height={1000} className="w-[270px] h-[345px]"/>
          </div>

          <div className="flex flex-col  w-[40%]  ">

          <h2 className="text-[64px] text-gray-400 font-light">About</h2>
           <p className="text-justify ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
             Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
             leap into electronic typesetting, remaining essentially unchanged.</p><br />

            <Image src={img_4} alt="read more" width={1000} height={1000} className="h-[71px] w-[222px] hover:opacity-75"/>

           </div>

         
        </div>
    );
}