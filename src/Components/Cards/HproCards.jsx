import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; 
import MyContainer from '../Shared/MyContainer/MyContainer';

const products = [
    {
        id: 1,
        img: "/newarr/i1.jpg", 
        label: "This is a shoe",
        mainprice: "800",
        currentPrice: "500"
    },
    {
        id: 2,
        img: "/newarr/i2.jpg", 
        label: "This is a shoe",
        mainprice: "800",
        currentPrice: "500"
    },
    {
        id: 3,
        img: "/newarr/i3.jpg", 
        label: "This is a shoe",
        mainprice: "800",
        currentPrice: "500"
    },
    {
        id: 4,
        img: "/newarr/i4.jpg", 
        label: "This is a shoe",
        mainprice: "800",
        currentPrice: "500"
    },
    {
        id: 5,
        img: "/newarr/i5.jpg", 
        label: "This is a shoe",
        mainprice: "800",
        currentPrice: "500"
    },
    {
        id: 6,
        img: "/newarr/i6.jpg",
        label: "This is a shoe",
        mainprice: "800",
        currentPrice: "500"
    },
    {
        id: 7,
        img: "/newarr/i1.jpg",
        label: "This is a shoe",
        mainprice: "800",
        currentPrice: "500"
    },
    {
        id: 8,
        img: "/newarr/i2.jpg",
        label: "This is a shoe",
        mainprice: "800",
        currentPrice: "500"
    },
    {
        id: 9,
        img: "/newarr/i3.jpg",
        label: "This is a shoe",
        mainprice: "800",
        currentPrice: "500"
    },
];

const HproCards = () => {
    return (
        <div className="mt-2">
            <MyContainer>
                <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
                    {products.map((product) => (
                          <Link href={product.img} key={product.id} passHref>
                        <div 
                            key={product.id} 
                            className='h-full border-2 p-3 '
                        >
                          
                                <div className="h-48 w-full overflow-hidden relative cursor-pointer">
                                    <Image 
                                        src={product.img} 
                                        width={200} 
                                        height={200} 
                                        alt={product.label} 
                                        className="object-cover h-full w-full transition-transform duration-300 hover:scale-125" 
                                    />
                                </div>
                            
                            <div className="mt-2">{product.label}</div>
                            <div className="flex gap-2 mt-1">
                                <div className="text-gray-400">
                                    <span className='text-xl'>&#2547;</span>
                                    <span>{product.mainprice}</span>
                                </div>
                                <div>
                                    <span className='text-xl'>&#2547;</span>
                                    <span>{product.currentPrice}</span>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </MyContainer>
        </div>
    );
};

export default HproCards;
