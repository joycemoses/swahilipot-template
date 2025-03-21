import Image from "next/image";
import React from "react";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
            <Image
              src="/images/blog/vission.png"
              alt="about image"
              fill
              className="drop-shadow-three  dark:hidden dark:drop-shadow-none"
            />
              
              <Image
                src="/images/blog/vission.png"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
              
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Vission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We envision an East Africa where youth are at the forefront of technological innovation and cultural expression, creating solutions to local challenges and contributing to the global digital economy.

SwahiliPot Hub aims to be the leading hub for technology and arts in the region, known for nurturing talent, fostering innovation, and preserving cultural heritage through digital means..
                </p>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default AboutSectionTwo;
