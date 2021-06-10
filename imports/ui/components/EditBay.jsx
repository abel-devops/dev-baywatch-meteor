import React from "react";

const editBay = () => {
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

export default editBay;
