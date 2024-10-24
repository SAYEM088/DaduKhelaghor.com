import React from 'react';
import MyContainer from '../Shared/MyContainer/MyContainer';
import { TbHorseToy } from "react-icons/tb";
import Image from 'next/image';
import Link from 'next/link';
const ExtraCategories = () => {
    return (
        <MyContainer>
        <div className='pt-20 mb-5 flex flex-col items-center justify-center'>
            <h2 className='text-2xl pb-2 font-bold'>Khela Hok</h2>
            <p className=' text-center pb-2'>
                Lorem ipsum dolor sit amet, Veniam, amet mollitia. Aliquam, nulla!
            </p>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <Link href="/category/wholesale"> 
                <div className="border-2 p-2 flex gap-1 items-center  justify-center rounded"> <Image src="/categories/wholesale.png" width={20} height={20}></Image> Wholesale</div></Link>
                <Link href="/category/exercise">
                <div className="border-2 p-2 flex gap-1 items-center  justify-center rounded"> <Image src="/categories/gym.png" width={20} height={20}></Image> Exercise</div></Link> 
                <Link className='col-span-2 lg:col-span-1 lg:m-0 m-auto' href="/category/toys">
                <div className="border-2 p-2  flex items-center gap-2 justify-center rounded "> 
                <TbHorseToy className='text-cyan-600' size={25}/>   Toys 
                </div>
                </Link>
            </div>
        </div>
        </MyContainer>
    );
};

export default ExtraCategories;
