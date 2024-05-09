import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://chimpu.xyz/api/post.php",
        { phonenumber: phoneNumber },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
console.log(response,"respoonsesssss");
setData(response.data.msg)
      const headers = response?.headers;
      console.log("Response Headers:", headers);


// Access the custom header directly from the headers object
    // const phoneorigenValue = response.headers["Phoneorigen"]
    // console.log("Phoneorigen:", phoneorigenValue);

    //   setResponseHeaders(headers);
    } catch (error) {
      console.error("Error:", error);
    }
  };

















  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-bold mb-2"
          >
            Phone Number:
          </label>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter phone number"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      <div>
        <h2 className="text-lg font-semibold mb-2">Response:</h2>
        <pre className="bg-gray-200 p-4 rounded-lg">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
