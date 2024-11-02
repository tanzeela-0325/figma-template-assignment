import Image from "next/image";
import pic_1 from "../public/1.png";
import pic_2 from "../public/2.png";

export default function MainFocus(){
    return(
        <div className=" w-[1170px] h-[268px] ml-[10%] mr-[5%] ">
         
            
          <h2 className="text-[64px] text-gray-400 font-light">Main Focus/Mission Statement</h2>

        
            
         <div className="flex justify-between">

            <div className="w-[413px] h-[144px] flex gap-5 ">
                <Image src={pic_1} alt="image1"  className="w-[104px] h-[140px]"/>

                <p className="text-justify text-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur,
                     lectus et facilisis placerat.</p>
            </div>
                
            <div className="w-[570px] h-[144px] flex gap-4">
                <Image src={pic_2} alt="image2" className="w-[120px] h-[140px]"/>

                <p className="text-justify text-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna
                   mauris porttitor tortor, a auctor est felis ut nisl.</p>

            </div>
         </div>
  
        </div>
    )
}