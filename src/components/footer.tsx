import Image from "next/image";
import pic_1 from "../public/Group 11 1.png";
import pic_2 from "../public/Vector-2.png";
import pic_3 from "../public/Vector.png";
import pic_4 from "../public/Group.png";
import pic_5 from "../public/facebook.png";
import pic_6 from "../public/twitter.png";
import pic_7 from "../public/Linked In.png";
import pic_8 from "../public/pininterest.png";


export default function Footer(){
    return(
        <div className="flex flex-col w-[1440px] h-[417px] text-white bg-black ">
            <div className="flex">

            <div className="w-[145px] h-[94px] ml-20 mt-[2%]">
              <Image src={pic_1} alt="image" width={1000} height={1000} />
            </div>

            <div className="flex flex-row mt-[2%]">
                <ul className=" ml-40 space-y-5">
                    <li>Infomation</li>
                    <li>Main</li>
                    <li>Gallery</li>
                    <li>Projects</li>
                    <li>Cetifications</li>
                    <li>Contacts</li>
                </ul>
                <ul className=" ml-40 space-y-6 ">
                    <li>Contacts</li><br />
                  <li className="flex flex-row gap-2"><Image src={pic_2} alt="vector" className="w-[11px] h-[16px]  " />1234 Sample Street <br />
                    Austin Texas 78704</li>
                    
                    
                   <li className="flex flex-row gap-2"><Image src={pic_3} alt="vector-2" className="w-[16px] h-[16px] mt-1"/>512.333.2222</li>
                   <br />
                   <br />
                   <br />
                   <li className="flex flex-row gap-2 "><Image src={pic_4} alt="group" className="w-[16px] h-[11px] mt-2"/>sampleemail@gmail.com</li>
                </ul>
            </div>

            <div className="ml-40 mt-[2%]">
               <h2>Social Media</h2><br />  
               <div className="flex flex-row gap-8">
               <Image src={pic_5} alt="facebook"/>
               <Image src={pic_6} alt="twitter" className=""/>
               <Image src={pic_7} alt="linkedin" className=""/>
               <Image src={pic_8} alt="pininterest" className=""/>  
            </div>
        </div>
        </div>
         <br />
         <br />

         <hr /> 
         <div className=" text-[12px] text-gray-400 font-light text-center  mt-4">© 2021 All Rights Reserved </div>
            
        </div>
    )

}