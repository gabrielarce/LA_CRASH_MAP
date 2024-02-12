import { useState, useEffect } from 'react';

function DataFilter({ crashes, filtered, setFiltered, closeModal }) {
  //Define the state for the form fields
  const [formData, setFormData] = useState({});

  // Function to update the formData state and save it to localStorage
  const updateFormData = (name, value) => {
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
    localStorage.setItem('formData', JSON.stringify(newFormData));
  };

  // Function to reset the form data
  const resetForm = () => {
    closeModal();
    setFormData({});
    localStorage.removeItem('formData');
    setFiltered(crashes);
  };

  //Define the form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Step 6: Handle form submission, e.g., send data to an API
    const filteredArray = crashes.filter((item) => {
      for (const key in formData) {
        if (
          ((formData[key] !== null || !formData[key] || formData[key] !== '') &&
            item[key] !== formData[key]) ||
          item[key] === null
        )
          return false;
      }
      return true;
    });
    setFiltered(filteredArray);
    closeModal();
  };

  // Add event handlers to update the state
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    // Handle checkbox separately, as its value is 'checked' instead of 'value'
    let newValue;
    if (name === 'state_hwy_ind') {
      newValue = checked ? 'Y' : '';
    } else {
      newValue = type === 'checkbox' ? checked : value;
    }
    updateFormData(name, newValue);
  };

  // Load formData from localStorage when the component mounts
  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  return (
    <div className="">
      <h2>Filter Data </h2>
      {/* Step 3: Render form elements */}
      <form className="" onSubmit={handleSubmit}>
        <div className="w-full sm:w-1/2 my-1">
          <label>Acohol Involved:</label>
          <input
            type="checkbox"
            name="alcohol_involved"
            checked={formData?.alcohol_involved}
            onChange={handleChange}
            disabled={crashes.length === filtered.length ? false : true}
          />
        </div>
        <div className="w-full sm:w-1/2 my-1">
          <label>Bicycle Involved:</label>
          <input
            type="checkbox"
            name="bicycle_accident"
            checked={formData?.bicycle_accident}
            onChange={handleChange}
            disabled={crashes.length === filtered.length ? false : true}
          />
        </div>
        <div className="w-full sm:w-1/2 my-1">
          <label>Motorcycle Involved:</label>
          <input
            type="checkbox"
            name="motorcycle_accident"
            checked={formData?.motorcycle_accident}
            onChange={handleChange}
            disabled={crashes.length === filtered.length ? false : true}
          />
        </div>
        <div className="w-full sm:w-1/2 my-1">
          <label>Pedestrian Involved:</label>
          <input
            type="checkbox"
            name="pedestrian_accident"
            checked={formData?.pedestrian_accident}
            onChange={handleChange}
            disabled={crashes.length === filtered.length ? false : true}
          />
        </div>
        <div className="w-full sm:w-1/2 my-1">
          <label>Highways and Freeways:</label>
          <input
            type="checkbox"
            name="state_hwy_ind"
            checked={formData?.state_hwy_ind}
            onChange={handleChange}
            disabled={crashes.length === filtered.length ? false : true}
          />
        </div>
        {crashes.length === filtered.length ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Apply Filter
          </button>
        ) : (
          false
        )}
        <button
          className=" text-black  hover:text-red-600 ml-2"
          type="button"
          onClick={resetForm}
        >
          Clear Filters
        </button>
      </form>
    </div>
  );
}

export default DataFilter;
