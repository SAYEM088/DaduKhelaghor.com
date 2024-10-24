import MyContainer from '@/Components/Shared/MyContainer/MyContainer';
import Image from 'next/image';
import React from 'react';

const FootCategories = () => {
    const footProduct = [
        {
            id: 1,
            img: "/football/footjersey.jpg",
            label: "Jersey"
        },
        {
            id: 2,
            img: "/football/foottrouser.png",
            label: "Trouser"
        },
        {
            id: 3,
            img: "/football/footspike.png",
            label: "Spike Shoe"
        },
        // {
        //     id: 4,
        //     img: "/football/footbag.png",
        //     label: "Sports Bag"
        // },
    ];

    return (
        <MyContainer>
            <div className='ms-2 px-1 flex justify-center items-center lg:gap-6 gap-2 relative overflow-x-auto'>
                {footProduct.map((item) => (
                    <div 
                        key={item.id} 
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
                        
                        <div className='w-[100px] h-[80px] relative'>
                            <Image 
                                src={item.img} 
                                alt={item.label} 
                                layout='fill' 
                                objectFit='contain' // Ensures the image fits within the box without being cropped
                            />
                        </div>
                        
                        <div className='lg:font-bold font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </MyContainer>
    );
};

export default FootCategories;
