import Image from "next/image";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa6";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export default function Footer(){
  return(<footer>
    <div className="footer flex flex-col gap-10">
      <div className="setler ">
        <div className="flex flex-col items-center  gap-5">
          <div className="flex items-center justify-center flex-col">
        <h5>Subscribe to our newsletter</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-5"> <input type="email" placeholder="Enter your email" className="border border-black rounded p-3 text-center "></input>
          <p>By subscribing you agree to with our <u>Privacy Policy</u> </p>
          </div>
          <div>
           <button className="border border-black rounded pt-3 pb-3 pl-5 pr-5 text-center">Subscribe</button>
          </div>
          </div>
          
          
          
          </div>
          </div>
          
          <div className="links flex justify-between w-[98%] flex-col items-center gap-10">
            <div>
          <Image src="/Column.svg" alt="Logo" width={172} height={40}/>
          </div>
           <div className="flex flex-col items-center gap-2">
          <h5>Courses</h5>
          
            <Link href="#">Business</Link>
             <Link href="#">Development</Link>
              <Link href="#">Techonology</Link>
             <Link href="#">Design</Link>
              <Link href="#">Programming</Link>
          
         </div>
         
             <div className="flex flex-col items-center gap-2">
          <h5>Resources</h5>
          
            <Link href="#">Career</Link>
             <Link href="#">Resume</Link>
              <Link href="#">Learning</Link>
             <Link href="#">Interview Prepartions</Link>
              <Link href="#">Jobs</Link>
          
        </div>
        
        
        
          <div className="flex flex-col items-center gap-2">
          <h5>About Us</h5>
          
            <Link href="#">Contact</Link>
             <Link href="#">Help/Support</Link>
              <Link href="#">FAQ</Link>
             <Link href="#">Terms and conditions</Link>
              <Link href="#">Partners</Link>
          
        </div>
        </div>
        
     <div className="credits border-t-2 border-black flex flex-col gap-10 items-center text-2xl pt-14">
            <div>
              <p>2023 Ddsgnr. All right reserved.</p></div>
              <div className="flex gap-4">
          <p><u>Privacy Policy</u></p>
          <p><u>Terms of Service</u></p>
          <p><u>Cookies Settings</u></p>
         </div>
        
        <div className="flex gap-3 ">
            <FaFacebookF/>
          <FaInstagram/>
          <FaTwitter/>
          <FaLinkedin/>
        </div>
        </div>
        
        
        
</div>
   </footer>
    )
}