import React, { useState } from "react";

const App = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);

  const calculate = () => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    setAge(age);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Age Calculator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculate();
        }}
        className="w-50 mx-auto"
      >
        <div className="form-group">
          <label htmlFor="day" className="fw-semibold">
            Day
          </label>
          <input
            type="number"
            className="form-control"
            id="day"
            name="day"
            min={1}
            max={31}
            placeholder="Enter Day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="month" className="fw-semibold">
            Month
          </label>
          <input
            type="number"
            className="form-control"
            id="month"
            name="month"
            min={1}
            max={12}
            placeholder="Enter Month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year" className="fw-semibold">
            Year
          </label>
          <input
            type="number"
            className="form-control"
            id="year"
            name="year"
            placeholder="Enter Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3">
          Calculate
        </button>
      </form>
      {age !== null && (
        <div className="mt-4 text-center">
          <h2>Your are {age} years old.</h2>
        </div>
      )}
    </div>
  );
};

export default App;
