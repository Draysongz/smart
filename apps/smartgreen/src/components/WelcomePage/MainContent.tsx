import React from 'react';
import Myimage from '../../assets/LPI 1.png';
import Icons from '../../assets/SOCIALS.png'

const MainContent: React.FC = () => {
    return (
        <section className='w-screen flex justify-center max-h-700:h-screen'>
            <div className='bg-custom-gradient w-full'>
                <img src={Myimage} alt="" className='w-full max-h-700:h-[60%]'/>
                <h1 className='text-white text-8xl font-bold text-center -mt-72 max-h-700:-mt-44 max-h-700:text-7xl'>
                    $SET
                </h1>
                <p className='text-custom-gold text-3xl font-bold text-center mt-4'>
                    Smart Energy Token
                </p>
                <p className='text-white text-base text-center mt-4 font-semibold'>
                    Listing on Exchanges Soon
                </p>
                <div className='w-full flex justify-center items-center py-8'>
                <button className='bg-custom-goldyellow w-8/12 h-14 justify-self-center self-center text-xl'>
                    Coming Soon
                </button>
                </div>
                <p className='text-white text-center text-lg'>
                    Stay Tuned
                </p>
                <div className='w-full flex justify-center items-center py-8'>
                    <img src={Icons} alt=""/>
                </div>
            </div>
        </section>
    );

};

export default MainContent;