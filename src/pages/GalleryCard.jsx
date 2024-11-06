/* eslint-disable react/prop-types */

const GalleryCard = ({ item }) => {
  const { name, image } = item;
  return (
    <div className="card">
      <div className="card__wrap">
        <div className="card__content w-full ">
          <div className="card__top mb-2">
            <img src={image} alt="" className="w-full lg:max-w-[695px] h-52 object-cover" />
          </div>

          <div className="card__bottom">
            <h4 className="font-semibold text-xl">{name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GalleryCard;
