import React from "react";
 import Image from "next/image";
 import { GiAmpleDress } from "react-icons/gi";
 import { IoSearchSharp } from "react-icons/io5";
 import { FaBolt } from "react-icons/fa";
 import { GiShoppingCart } from "react-icons/gi";
 const Navbar = () => {
   return (
     <div>
       <div className="grid xl:grid-cols-1 grid-cols-1">
         <div className="p-5">
           <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-900">
             <div className="flex justify-between items-center">
               <div className="flex justify-items-center items-center gap-2">
                 {/*logo perse*/}
                 <GiAmpleDress  className=" w-8 h-8 text-rose-500" />

                 {/*search icon*/}
                 <div style={{ position: "relative" }}>
                   <input
                     className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                     placeholder="Search your favourite bag for catloug"
                   />
                   <IoSearchSharp className="w-5 h-5 text-gray-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block"/>
                 </div>
               </div>
               <div className="flex justify-center items-center gap-2">
               <FaBolt className="w-5 h-5 text-pink-400 hidden lg:block md:block"/>
                 <p className="text-sm text-white hidden lg:block md:block">
                   {" "}
                   Order now and get it with
                
                 <span className="text-rose-400"> 15 minutes!</span>
                 </p>
               {/*Cart Icone*/}
               <GiShoppingCart className="w-8 h-8 text-purple-500 rounded-full ring-2 ring-pink-400 p-1 relative hover:text-pink-400" />
               <Image className="inline-block w-8 h-8 rounded-full ring-2 ring-pink-400 p-1 relative hover:text-rose-400"
               src="/logo-2.jpeg" 
              alt="user avtar"
              width={10}
               height={10}/>
              
             </div>
            </div>
          </div>
         </div>
      </div>
    </div>
   );
 };

 export default Navbar;