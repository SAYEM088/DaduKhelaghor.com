"use client"
import React, { useState, useEffect } from 'react';
import NewFoot from '../NewArrival/NewFoot';
import Image from 'next/image';
import MyContainer from '@/Components/Shared/MyContainer/MyContainer';
import FootNav from '../FootNav/FootNav';

const FootHome = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div>
            {/* Navbar that hides on scroll down and shows on scroll up */}
            <div className={`${showNav ? 'block' : 'hidden'} fixed top-0 w-full z-50`}>
                <FootNav />
            </div>

            <div className="mt-20">
            <MyContainer >
                <div className="h-80 lg:h-96 w-full relative"> 
                    <Image 
                        src="/banner/footbanner.png" 
                        alt="Foot banner"
                        layout="fill"
                        objectFit="fit"
                        priority={true}
                        className='rounded'
                    />
                </div>
            </MyContainer>
            </div>

            <div>
                <NewFoot />
            </div>
        </div>
    );
};

export default FootHome;
