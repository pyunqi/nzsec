const SectionTitle = ({
  title,
  paragraph,
  // width = "570px",
  width = "100%",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        //  className={`md:w-5/6 ${center ? "mx-auto text-center" : ""}`}
        // style={{ maxWidth: width, marginBottom: mb, border:'yellow 1px solid', position:'relative'}}
        //className= "md: container max-auto"
        //className={'w-5/6'}
        

         //className={`display:flex md:w-8/9 ${center ? "mx-auto text-center" : ""}`}
      >
        <h2 className="relative text-left mb-3 pt-10 pl-4 md:pl-0 lg:pl-0 text-base md:text-1xl lg:text-2xl font-bold !leading-tight text-black dark:text-cblued sm:text-4xl md:text-[30px]">
          {title}
        </h2>
        <p className="indent-8 text-pretty pl-4 md:pl-0 lg:pl-0 text-left mb-8 text-sm !leading-relaxed text-body-color md:text-lg" style = {{border:'yellow 0px solid'}} >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
