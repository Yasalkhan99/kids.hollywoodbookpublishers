import Logo from './svg/logo';
import PhoneIcon from './svg/phoneIcon';
import Button from '../common/button';

const Header = () => {
    return (
        <>
            <div className="mt-10 max-sm:mt-4 absolute z-20 top-0 left-[50%] translate-x-[-50%] w-full container flex items-center justify-between">
                <div className='w-full flex items-center justify-center max-lg:justify-start'>
                    <Logo className="w-[250px] max-sm:w-[180px]"/>
                </div>
                <Button text="(832) 532-6366" leftIcon={<PhoneIcon />} />
            </div>
        </>
    )
}

export default Header;