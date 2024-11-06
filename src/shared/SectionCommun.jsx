
/* eslint-disable react/prop-types */
const SectionCommon = ({ title }) => {
  return (
    <section className="md:max-w-7xl md:px-[50px] section__common w-full flex flex-col items-center justify-center relative">
      <div className="flex items-center justify-center">
        <h1 className="text-sm md:text-4xl text-gray-50">{title}</h1>
      </div>
      
    </section>
  );
};
export default SectionCommon;
