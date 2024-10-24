import Image from 'next/image';
import React from 'react';
import MyContainer from '../Shared/MyContainer/MyContainer';
import Link from 'next/link';

const label = ["Football", "Cricket", "VolleyBall", "Badminton"];
const image = [
    "/categories/football.png",
    "/categories/cricket.png",
    "/categories/vollyball.jpg",
    "/categories/batminton.jpg"
];

const Categories = () => {
    return (
        <MyContainer>
            <div className='pt-2 ms-2 px-1 flex justify-center items-center lg:gap-6 gap-2 relative overflow-x-auto'>
                {label.map((item, index) => (
                    <Link href={`/${item.toLowerCase()}`} key={index}>
                        <div 
                            className="flex 
                            flex-col 
                            items-center 
                            justify-center 
                            gap-2
                            lg:p-4
                            border-b-2
                            hover:text-neutral-800
                            hover:border-cyan-600
                            transition
                            cursor-pointer">
                            <div className='h-3/4'>
                                <Image 
                                    src={image[index]} 
                                    alt={item} 
                                    width={100} 
                                    height={100}  
                                />
                            </div>
                            <div className='lg:font-bold font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>{item}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </MyContainer>
    );
};

export default Categories;
