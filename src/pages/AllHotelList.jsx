import {Link} from "react-router-dom";


const AllHotelList = ({item}) => {
// eslint-disable-next-line react/prop-types
const {photo,_id,desc,title} = item
    return (
        <div>
            <div key={item._id} className="relative rounded-md">
                <div className='w-full h-[300px] min-w-[89%]'>
                    <img src={photo} alt="" className="rounded-sm w-full mt-4 sm:mt-0  object-cover"/>
                </div>
                <div className="absolute left-4   bottom-12 w-full">
                        <span className="text-[20px] text-red-600 dark:text-gray-50  font-[400]">
                          <Link to={`/hotels/${item._id}`}>{title}</Link>
                        </span>
                    <p className="text-[16px] text-gray-50 font-[300]">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default AllHotelList;