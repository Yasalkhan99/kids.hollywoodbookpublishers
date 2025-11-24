import ScribdLogo from "./svgs/scribdlogo";
import BarnersLogo from "./svgs/barners";
import KoboLogo from "./svgs/kobo";
import GoogleLogo from "./svgs/google";

const HeroBottomLogos = ({ text }) => {
  return (
    <div className="relative bg-secondary">
      <div className="container py-6 max-sm:py-4">
        <div
          className={`flex items-center flex-wrap  ${
            text ? "justify-between max-md:justify-around" : "justify-center gap-16 max-sm:gap-6"
          }`}
        >
          {text && (
            <div className="text-white text-3xl font-childhood max-lg:w-full max-lg:text-center">
              <div>Publish Your Children&apos;s Book</div>
              <div>Anywhere Without The Hassle</div>
            </div>
          )}
          <div className="text-white">
            <ScribdLogo className="max-xl:w-[130px] max-md:w-[80px] max-sm:w-[60px]"/>
          </div>
          <div className="text-white">
            <BarnersLogo className="max-xl:w-[130px] max-md:w-[80px] max-sm:w-[60px]"/>
          </div>
          <div className="text-white">
            <KoboLogo className="max-xl:w-[90px] max-md:w-[70px] max-sm:w-[60px]"/>
          </div>
          <div className="text-white">
            <GoogleLogo className="max-xl:w-[130px] max-md:w-[80px] max-sm:w-[60px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottomLogos;
