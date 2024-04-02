import React, { useState } from 'react';

const Header = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
    // You can fire a query here to get news for the selected date
    console.log("Fetching news for date:", event.target.value);
  };

  const today = new Date().toISOString().split('T')[0];

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-lg font-semibold flex items-center">
        <div className="mx-auto">Welcome to News</div>
      </div>
      <div className="flex items-center">
        <label htmlFor="datePicker" className="mr-2">Select Date:</label>
        <input
          type="date"
          id="datePicker"
          name="datePicker"
          value={selectedDate.toISOString().split('T')[0]}
          max={today}
          onChange={handleDateChange}
          className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
      </div>
    </div>
  );
  
};

export default Header;
