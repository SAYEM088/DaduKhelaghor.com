import React from 'react';
import { TbViewportWide } from "react-icons/tb";
import { MdReviews } from "react-icons/md";
import HproCards from '../Cards/HproCards';
import MyContainer from '../Shared/MyContainer/MyContainer';

const HomeArrival = () => {
    return (
            <div className="">
            <div className=" mt-5  border-b-2 border-t-2 border-gray-300 py-2 bg-gray-200 border-gray mx-1 lg:mx-8">
            <nav className="flex justify-between items-center">
            <div className="flex gap-4 items-center ps-2" >
            <div className="border-2 bg-gray-400  px-2 lg:ms-14 py-1 rounded-full hover:border-cyan-300"><button>Best Deal</button></div>
            <div className="border-2 bg-gray-400 px-2 py-1 rounded-full hover:border-cyan-300"><button>New Arrival</button></div>
            </div>
               {/* <div className="flex gap-1 items-center px-4 lg:me-14"> <TbFilterPlus size={20}></TbFilterPlus> <div className="">Filter</div></div> */}
               <div className="flex gap-1 items-center px-4 lg:me-14"> <  TbViewportWide size={25}></ TbViewportWide> 
               <div className="">View all</div></div>
            </nav>
            </div>
           <MyContainer>
           <HproCards></HproCards>
           </MyContainer>
            </div>
    );
};

export default HomeArrival;