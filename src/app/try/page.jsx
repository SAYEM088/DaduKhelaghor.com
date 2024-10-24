import React from 'react';
import Image from 'next/image';
import { TbHorseToy } from "react-icons/tb";

const NewArrivals = () => {
    return (
        <div className=" p-4 max-w-screen-md mx-auto">
            {/* Title Section */}
            <div className="flex justify-center items-center relative pb-4">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 border-t border-black"></div>
                <h2 className="text-xl font-bold px-4">Khela HOK</h2>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 border-t border-black"></div>
            </div>
            <p className=' text-center pb-2'>
                Lorem ipsum dolor sit amet, Veniam, amet mollitia. Aliquam, nulla!
            </p>
            {/* Product Section */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 px-10  ">
                <div className="border-2 p-2 flex gap-1 items-center text-center"> <Image src="/categories/wholesale.png" width={20} height={20}></Image> Wholesale</div>
                <div className="border-2 p-2 flex gap-1 items-center text-center"> <Image src="/categories/gym.png" width={20} height={20}></Image> Exercise</div>
                <div className="border-2 p-2 col-span-2 flex items-center gap-2 lg:col-span-1 lg:m-0 m-auto">
                <TbHorseToy className='text-cyan-600' size={25}/>   Toys 
                </div>
            </div>
            
              
        </div>
    );
};

export default NewArrivals;
