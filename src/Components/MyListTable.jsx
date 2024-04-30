import { Link } from "react-router-dom";

const MyListTable = ({spot}) => {
   
    const {name,tourists_spot_name,country_name,location,_id}=spot;
    return (
       
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p>{name}</p>
                </td>
                <td className="p-3">
                  <p>{tourists_spot_name}</p>
                </td>
                <td className="p-3">
                  <p>{country_name}</p>
                </td>
                <td className="p-3">
                  <p>{location}</p>
                </td>
                <td className="p-3 text-right">
                <Link to={`/updatespots/${_id}`} className="btn  px-4 py-1 font-semibold rounded-md dark:bg-[#54A15D] dark:text-gray-50">Update</Link>
                </td>
                <td className="p-3 text-right">
                    <button  className="btn  px-4 py-1 font-semibold rounded-md dark:bg-[#C12129] dark:text-gray-50">Delete</button>
                </td>
              </tr>
      
    );
};

export default MyListTable;