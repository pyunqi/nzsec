import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );


return (
    <section id="about" className="mx-auto lg:w-8/12 md:pt-0 lg:pt-0 mt-6 " style={{border:'#fff 0px solid'}}>
       
       
       {/* SecondTitle -- Team Staff */}

       <div className = "pt-2 md:pt-4" style={{border:'#fff 0px solid'}}>
         <SectionTitle
                title="About US"
                paragraph=""
                mb="0px"
          />
       </div>
       <a href="#" className="block p-4 text-gray-100 border-2 border-transparent hover:rounded-lg hover:border-blue hover:text-blue-500 transition-all duration-300">
         <div className="mb-2 md:py-8 lg:py-8 flex items-center space-x-4 p-8 pl-2 pr-2 border-0 border-gray-300">
         <div className="relative w-[100px] h-[100px]">
        <Image
          src="/images/about/member1.svg"
          alt="member1-image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex-1 text-normalgray">
        <span className = "text-blue font-medium">Mr.Ourstaff</span>
        <span className = "indent-6 block text-gray leading-relaxed">A group of people employed to perform various tasks within an organization, institution, or company. The text will wrap and flow beside the SVG.A group of people employed to perform various tasks within an organization, institution, or company. The text will wrap and flow beside the SVG.</span>
      
      </div>
    </div>
    </a>

   <a href="#" className="block p-4 text-gray-100 border-2 border-transparent hover:rounded-lg hover:border-blue hover:text-blue-500 transition-all duration-300">
         <div className="mb-2 md:py-8 lg:py-8 flex items-center space-x-4 p-8 pl-2 pr-2 border-0 border-gray-300">
         <div className="relative w-[100px] h-[100px]">
        <Image
          src="/images/about/m.svg"
          alt="member1-image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex-1 text-normalgray">
        <span className = "text-blue font-medium">Mr.Ourstaff</span>
        <span className = "indent-6 block text-gray leading-relaxed">A group of people employed to perform various tasks within an organization, institution, or company. The text will wrap and flow beside the SVG.A group of people employed to perform various tasks within an organization, institution, or company. The text will wrap and flow beside the SVG.</span>
      
      </div>
    </div>
    </a>

    <a href="#" className="block p-4 text-gray-100 border-2 border-transparent hover:rounded-lg hover:border-blue hover:text-blue-500 transition-all duration-300">
         <div className="mb-2 md:py-8 lg:py-8 flex items-center space-x-4 p-8 pl-2 pr-2 border-0 border-gray-300">
         <div className="relative w-[100px] h-[100px]">
        <Image
          src="/images/about/member1.svg"
          alt="member1-image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex-1 text-normalgray">
        <span className = "text-blue font-medium">Mr.Ourstaff</span>
        <span className = "indent-6 block text-gray leading-relaxed">A group of people employed to perform various tasks within an organization, institution, or company. The text will wrap and flow beside the SVG.A group of people employed to perform various tasks within an organization, institution, or company. The text will wrap and flow beside the SVG.</span>
      
      </div>
    </div>
    </a>


    <a href="#" className="block p-4 text-gray-100 border-2 border-transparent hover:rounded-lg hover:border-blue hover:text-blue-500 transition-all duration-300">
         <div className="mb-2 md:py-8 lg:py-8 flex items-center space-x-4 p-8 pl-2 pr-2 border-0 border-gray-300">
         <div className="relative w-[100px] h-[100px]">
        <Image
          src="/images/about/m.svg"
          alt="member1-image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex-1 text-normalgray">
        <span className = "text-blue font-medium">Mr.Ourstaff</span>
        <span className = "indent-6 block text-gray leading-relaxed">A group of people employed to perform various tasks within an organization, institution, or company. The text will wrap and flow beside the SVG.A group of people employed to perform various tasks within an organization, institution, or company. The text will wrap and flow beside the SVG.</span>
      
      </div>
    </div>
    </a>

      
    </section>
  );
};

export default AboutSectionOne;
