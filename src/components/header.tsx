import Image from "next/image"
import pic_1 from "../public/Group 11.png" 


export default function Header(){
    return(
        <div className="header">

            <div><Image src={pic_1} alt="logo" className="w-70 h-43.71" /></div>
            <ul className="header-button">
                    
                 <li>MAIN</li>
                 <li>GALLRY</li>
                 <li>PROJECTS</li>
                 <li>CERTIFICATION</li>
                 <li>CONTACTS</li>
            </ul>
            
        </div>
    )
}