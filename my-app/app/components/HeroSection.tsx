import React from "react";
import governor from '../../public/governor.png';
import Image from "next/image";




const HeroSection = () => {
    return (
        <section className="text-white bg-slate-200 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-blue-800">
       Governor Sindh
        <br className="hidden lg:inline-block "/>
        <p className="text-blue-950 text-2xl font-medium">
        Kamran Khan Tessori
        </p>
      </h1>
      <p className="mb-8 leading-relaxed text-blue-500 font-extrabold text-2xl">
      Certified Cloud<br />
Applied Generative AI<br />
Engineer (GenEng)
</p>
<p className="mb-8 leading-relaxed text-blue-900 font-extrabold">
    
Earn up to $5,000 / month
<br />
<br />
Now admissions are open in <br />Hyderabad
</p>
      
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-800  text-1xl border-0 py-1 px-8 focus:outline-none  hover:bg-blue-950 rounded text-lg">
          Apply Now
        </button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:w-2/3 sm:justify-center sm:items-center ml-10 ">
      <Image
        alt="GovernorSindh"
        width={500}
        height={600}
        src={governor}
      />
    </div>
  </div>
</section>

    )
}
export default HeroSection