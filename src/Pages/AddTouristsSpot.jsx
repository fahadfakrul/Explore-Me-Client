import Swal from "sweetalert2";
const AddTouristsSpot = () => {
  const handleAddTouristsSpot = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const avg_cost = form.avg_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const visitors_per_year = form.visitors_per_year.value;
    const photo = form.photo.value;

    const newSpot = {
      name,
      email,
      tourists_spot_name,
      country_name,
      location,
      short_description,
      avg_cost,
      seasonality,
      travel_time,
      visitors_per_year,
      photo,
    };

    fetch("http://localhost:5000/spots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Data inserted successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mt-10 mb-20">
      <div className=" text-center lg:text-left mb-10 ">
        <h1 className="text-3xl font-semibold text-center font-merriweather">
          Add Tourist spots
        </h1>
      </div>
      <div className="flex items-center justify-center  ">
        <div className="max-w-3xl w-full px-4 md:px-0 ">
          <form onSubmit={handleAddTouristsSpot}>
            {/* row1 */}
            <div className="md:flex  mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* row2 */}
            <div className="md:flex  mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Spot Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="tourists_spot_name"
                    placeholder="Enter spot name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Country Name</span>
                </label>
                <label className="input-group">
                  <select
                    name="country_name"
                    className="select select-bordered w-full"
                  >
                    <option value="" disabled selected>
                      Choose a country
                    </option>
                    <option value="Jordan">Jordan</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="Iran">Iran</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                  </select>
                </label>
              </div>
            </div>
            {/* row3 */}
            <div className="md:flex  mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="short_description"
                    placeholder="Enter description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* row4 */}
            <div className="md:flex  mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Average Cost</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="avg_cost"
                    placeholder="Enter average cost"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Seasonality</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="seasonality"
                    placeholder="Enter seasonality"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* row5 */}
            <div className="md:flex  mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Travel Time</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="travel_time"
                    placeholder="Enter travel time"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Total Visitors Per Year</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="visitors_per_year"
                    placeholder="Enter visitors per year"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* row6 */}
            <div className="md:flex  mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Add "
              className="text-lg btn btn-block bg-[#54A15D] text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
