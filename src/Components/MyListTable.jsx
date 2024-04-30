
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
const MyListTable = ({spot, fetchData}) => {
   
    const {name,tourists_spot_name,country_name,location,_id}=spot;
   
    const handleDelete = (id) =>{
        fetch(`https://tourism-assignment-server.vercel.app/delete/${id}`,{
            method:"DELETE",
        })
         .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: "Data deleted successfully",
                    icon: "success",
                    confirmButtonText: "Okay",
                  });
                fetchData();
            }
        })
    }
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
                    <button onClick={() => handleDelete(_id)} className="btn  px-4 py-1 font-semibold rounded-md dark:bg-[#C12129] dark:text-gray-50">Delete</button>
                </td>
              </tr>
      
    );
};

MyListTable.propTypes = {
  spot: PropTypes.object,
  fetchData: PropTypes.func,

}
export default MyListTable;