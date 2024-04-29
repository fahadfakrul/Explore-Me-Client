import { useLoaderData, useParams } from "react-router-dom";


const SpotDetails = () => {
 const spots = useLoaderData();
 const {id} = useParams();
 const spot = spots.find(spot => spot._id === id);
 

    return (
        <div>
        <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={spot.photo} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-lg" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50 shadow-xl">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl font-merriweather">{spot.tourists_spot_name}</a>
				<p className="text-xs dark:text-gray-600">By
					<a rel="noopener noreferrer" href="#" className="text-sm hover:underline"> {spot.name}</a>

				</p>
                <div className="flex gap-4">
                    <p className="text-lg">Country: <span className="text-white bg-[#54A15D] px-2 rounded-lg">{spot.country_name}</span></p>
                    <p className="text-lg">Location: <span className="text-white bg-[#54A15D] px-2 rounded-lg">{spot.location}</span></p>
                </div>
                <p></p>
			</div>
			<div className="dark:text-gray-800">
				<p className="text-xl font-semibold">{spot.short_description}</p>
                <p className="text-xl font-semibold">Best season to travel here is in {spot.seasonality}.</p>
			</div>
            <div className="">
                <ul className="list-disc text-lg font-medium">
                    <li>Travel time: {spot.travel_time}</li>
                    <li>Visitors: {spot.visitors_per_year}/Year</li>
                </ul>
                <p className="mt-4 text-lg font-medium font-merriweather">Cost: {spot.avg_cost} Approximately</p>
            </div>
		</div>
	</div>
</div>
        </div>
    );
};

export default SpotDetails;