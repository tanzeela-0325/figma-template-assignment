import  Image   from "next/image";
import  picture from "../public/Rectangle 6.png";
import  pic_1   from "../public/Frame 8.png";
import  pic_2   from "../public/Frame 9.png";
import  pic_3   from "../public/Frame 10.png";
import  pic_4   from "../public/slide-numbers.png";  




export default function HeroSection(){
    return(
    
    <div className="flex flex-col md:flex-row justify-center gap-10 ml-[10%] w-[1170px] p-3 md:p-0">
         
      <div className="flex flex-col w-[40%] mt-[180px] items-center md:items-start space-y-20 ">

        <div className="flax flax-col mt-[220px] text-left  leading-none " >

            <p className="text-[64px] text-gray-400 font-light ">PROJECT</p>  
            <p className="text-[64px] font-bold">LORUM</p>

        </div>


        

        <div className="flex gap-10">
            <Image src={pic_1} alt="arro1" width={1000} height={1000} className="w-[53px] h-[53px]"/>
            <Image src={pic_2} alt="arro2" width={1000} height={1000} className="w-[53px] h-[53px]"/>
        </div>

        <div>
            <Image src={pic_4} alt="number-slid"  className="w-[141.88] h-[52]"/>
        </div>

      </div>

      <div className=" relative ">
            <Image src={picture} alt="Image" width={1000} height={1000} className="w-screen md:w-[774px] h-[842px] "/>
            <Image src={pic_3} alt="project" width={1000} height={1000} className="w-screen md:w-[215.81px] h-[75px] absolute right-[513px] top-[782px]  ml-15"/>
        </div>
            

    </div>
    
  );
}


