import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import MyListTable from "./MyListTable";

const MyList = () => {
   
    const {user} = UseAuth();
    const [spots, setSpots] = useState([]);
    const fetchData = () => {
        fetch(`https://tourism-assignment-server.vercel.app/mySpots/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setSpots(data);
            console.log(data);
        })
    }
    useEffect(() => {
       fetchData();
    },[]);
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight dark:text-gray-500">
          My Tourist Spots
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Spot Name</th>
                <th className="p-3">Country</th>
                <th className="p-3">Location</th>
                <th className="p-3 text-right"></th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {
                spots?.map(spot => <MyListTable key={spot._id} spot={spot}  fetchData={fetchData}></MyListTable>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
