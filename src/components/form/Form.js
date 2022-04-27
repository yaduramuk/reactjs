import React, { useState } from "react";

const Form = () => {
  const [state, setState] = useState({
    name: "",
    password: "",
    bio: "",
    version: "16.8",
    level: "master",
  });

  const handleSubmit = (e) => {
    console.log(state);
    e.preventDefault();
  };

  const handleChange = (evt) => {
    // console.log(e.target.name, e.target.value);
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Username :
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Username"
            name="name"
            value={state.name}
            // onChange={(e) => setName(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password :
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            value={state.password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="bio"
            value={state.bio}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label>
            Favorite version
            <select
              className="form-select"
              name="version"
              value={state.version}
              onChange={handleChange}
            >
              <option>Open this select menu</option>
              <option value="16.8">v16.8.0</option>
              <option value="16.7">v16.7.0</option>
              <option value="16.6">v16.6.0</option>
              <option value="16.5">v16.5.0</option>
            </select>
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="level"
            value="acolyte"
            onChange={handleChange}
            checked={state.level === "acolyte"}
            htmlFor="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Acolyte
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="level"
            value="master"
            onChange={handleChange}
            checked={state.level === "master"}
            htmlFor="flexRadioDefault2"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Master
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
