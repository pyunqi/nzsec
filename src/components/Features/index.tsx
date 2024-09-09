import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      {/* <section id="features" className="py-16 md:py-20 lg:py-28" style = {{border:'green 2px dushed'}}> */}
      {/* <section id="features" style = {{border:'green 0px dotted', padding: '0 0 40px 0', backgroundColor:'#293442' }}> */}
      <section id="features" className = "dark:bg-wbgcolor" style = {{border:'green 0px dotted', padding: '0 0 40px 0',}}>

        {/* <div className="container mx-auto"> */}
        <div className = "mx-auto lg:w-8/12">
          
          <SectionTitle
            title=">> New Zealand S.E.C. Centre "
            paragraph="The New Zealand S.E.C Centre is an independent legal entity registered in New Zealand.We are focus on work in the fields of education, technology, and culture! "
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 pt-8 pl-4 sm:pl-0 lg:pl-0" style = {{border:'yellow 0px dotted', margin:'0px 0 0px 0'}}>
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
