import Image from 'next/image';
import React from 'react';

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24 relative">
        <Image
          src="/paddle-mini.png"
          alt="camp"
          width={800}
          height={800}
          className="absolute left-[-140px] top-[-95px] rotate-45 w-10 lg:w-[400px]"
        />

        <p className="uppercase regular-18 -mt-1 mb-3 text-[#2EA1DA]">
          Guiding Your Peaceful Journey Always
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Navigate Serene Waters with Ease
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            With the unique aquayoga application, your lake adventures become
            seamless and more enjoyable. Whether you're paddleboarding,
            practicing lakeside yoga, or seeking relaxation by the water,
            aquayoga ensures you're always on track with its offline map
            feature. This tool is perfect for those tranquil moments when you
            want to disconnect and immerse yourself in nature without the worry
            of getting lost. Share the experience with friends and family for a
            memorable day of relaxation and fun at the lake.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/paddle-dog.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl max-h-[500px]"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%]  lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-[#2EA1DA]">4 hours</p>
              </div>
              <p className="bold-20 mt-2">Luna Lagoon</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Serenity Shores
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
