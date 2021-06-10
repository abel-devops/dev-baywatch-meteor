import React from "react";
import { useParams } from "react-router-dom";

const EditBay = () => {
  const params = useParams();
  console.log(params.bay); //this holds bay number passed into the url
  return (
    <div>
      <h1>Edit Bay:</h1>
      <form>
        <label>
          Production :
          <input type="text" name="production" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EditBay;
