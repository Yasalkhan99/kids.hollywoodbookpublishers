"use client";
import { useState } from 'react';
import Logo from './svg/logo';
import PhoneIcon from './svg/phoneIcon';
import Button from '../common/button';
import Modal from '../common/modal';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCallNow = () => {
        window.location.href = 'tel:+18325326366';
    };

    return (
        <>
            <div className="mt-10 max-sm:mt-4 absolute z-20 top-0 left-[50%] translate-x-[-50%] w-full container flex items-center justify-between">
                <div className='w-full flex items-center justify-center max-lg:justify-start'>
                    <Logo className="w-[250px] max-sm:w-[180px]" />
                </div>
                <div className='flex items-center gap-2 max-sm:flex-col max-sm:gap-1'>
                    <Button text="Get Started" onClick={openModal} className="max-sm:py-2 max-sm:!text-[8px]" />
                    <Button text="Call Now" leftIcon={<PhoneIcon className="max-sm:w-[10px] max-sm:h-[10px]" />} onClick={handleCallNow} className="max-sm:py-2 max-sm:!text-[8px]" />
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default Header;