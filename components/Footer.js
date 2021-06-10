import {FaPlay} from "react-icons/fa";
import {GrFacebook, GrInstagram, GrSnapchat, GrSpotify, GrTwitter, GrYoutube} from "react-icons/gr";

import Link from "next/link";


export default function Footer(props) {
    return (
        <div className=" grid justify-items-center bg-footGray text-white text-xl py-10 px-24 text-center">
            <div className="transform -skew-y-6 leading-6 font-semibold text-3xl " >
                -----
              <br></br>
              Stay in 
              <br></br>
              the loop
              <br></br>

              ------
            </div>
                <div className="my-8 w-1/2 text-sm font-semibold  max-w-2xl" >
                Sign me up to Nando's emails for access to exclusive events and Extra Hot competitions!

            </div>
                   <div className="w-1/2 text-sm flex items-center " >
                    
                    <input type="text" placeholder="Pop your email address in here" className="bg-white text-center text-black border-white outline-none h-8 w-full" />
		            <FaPlay  className="-ml-7 text-3xl  cursor-pointer text-pink bg-yellow p-1.5" />
                </div>

                <div className="p-5 inline-flex flex-row justify-between"  >
                    <GrFacebook className="m-4 cursor-pointer hover:text-pink"/>
                    <GrTwitter className="m-4 cursor-pointer hover:text-pink"/>
                    <GrInstagram className="m-4 cursor-pointer hover:text-pink"/>
                    <GrSnapchat className="m-4 cursor-pointer hover:text-pink"/>
                    <GrYoutube className="m-4 cursor-pointer hover:text-pink"/>
                    <GrSpotify className="m-4 cursor-pointer hover:text-pink"/>
                </div>

        
            <div className="mt-10 text-xs "  >
                &copy;  Nando's &nbsp; {
                    new Date().getFullYear()
                } | Privacy Policy
            </div>
        </div>
    );
}
