import Image from "next/image";
import pic_1 from "../public/image 12.png";
import pic_2 from "../public/Frame 11.png";


export default function Contact(){
    return(
        <div className="w-[1170px] h-[603px] ml-[10%]">
            <h2 className="text-[64px] text-gray-400 font-light"> Contact Us </h2><br />

            <div className="flex flex-row gap-4">
                <form>
                <input type="text" name="My name" placeholder="Name" className="w-[391px] h-[45px] bg-gray-200 pl-4 pt-1" />
                <br />
                <br /> 
                <input type="number" name="phone number" placeholder="Number" className="w-[391px] h-[45px]  bg-gray-200 pl-4 pt-1" />
                <br />
                <br />
                <input type="email" name="email" placeholder="Email" className="w-[391px] h-[45px]  bg-gray-200 pl-4 pt-1" />
                <br />
                <br />
                <textarea placeholder="Message " className="w-[391px] h-[145px] bg-gray-200 pl-4 pt-2"></textarea>

                </form>

                <div>
                <Image src={pic_1} alt="contact-image" width={1000} height={1000} className="w-[749px] h-[355px]"/>
            </div>
            
            </div>

           

            <div className="flex mt-8">
               <Image src={pic_2} alt="send email" className="w-[221px] h-[71px] "/>
            </div>
        </div>
    )

}