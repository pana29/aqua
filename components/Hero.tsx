import Image from 'next/image';
import Btn from './Btn';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row h-[800px]">
      <div className="hero-paddle opacity-90 md:rotate-0  rotate-45" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/paddle-mini.png"
          alt="camp"
          width={400}
          height={400}
          className="absolute left-[-200px] top-[-100px] w-10 lg:w-[400px]"
        />
        <h1 className="bold-52 lg:bold-88 md:max-w-[560px]">
          Aqua Cooled Yoga Offers
        </h1>
        <p className="regular-16 mt-6 text-gray-30 md:max-w-[520px]">
          Discover Aqua Cooled Yoga, a lakeside sanctuary for yoga and paddle
          boarding enthusiasts. Experience harmony and balance in a tranquil
          natural setting, revitalizing your body and mind.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row md:flex md:w-full md:gap-3 pt-56 md:pt-12">
          <Btn type="button" title="Download App" variant="btn_white" />
          <Btn
            type="button"
            title="Paddleboarding Secrets"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* <div className="relative flex flex-1 items-end">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-cyan-900 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
