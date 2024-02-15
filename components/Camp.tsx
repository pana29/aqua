import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full  min-w-[600px] ${backgroundImage} bg-cover bg-no-repeat  rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-[#2EA1DA] p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Lake Harmony Retreat"
          subtitle="Nestled by the Tranquil Waters"
          peopleJoined="30+ Participating People"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Serenity Lake Haven"
          subtitle="A Sanctuary for Water Yoga and Paddle Boarding"
          peopleJoined="30+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-[#2EA1DA] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Seeking Balance and Serenity </strong> on the Water?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Embarking on a journey of paddle boarding and yoga by the serene lakes can be both exhilarating and daunting. The vastness of the lakes and the fusion of physical balance with mental tranquility bring a unique challenge. That's why we are here to guide you as you start this harmonious adventure, ensuring you find your way on the water and within yourself.
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp