import React, { useState } from 'react';
import './EmployeeForm.css';  
import ReactDOM from 'react-dom';

const EmployeeForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    teams: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let validationErrors = {};
    if (!formValues.firstName) validationErrors.firstName = 'First Name is required';
    if (!formValues.lastName) validationErrors.lastName = 'Last Name is required';
    if (!formValues.birthDate) validationErrors.birthDate = 'Date is required';
    if (!formValues.email) validationErrors.email = 'Email is required';
    if (!formValues.phoneNumber) validationErrors.phoneNumber = 'Phone Number is required';
    if (!formValues.gender) validationErrors.gender = 'Gender is required';
    if (!formValues.startTime) validationErrors.startTime = 'Start Time is required';
    if (!formValues.endTime) validationErrors.endTime = 'End Time is required';
    if (!formValues.jobPosition) validationErrors.jobPosition = 'Job Position is required';
    if (!formValues.teams) validationErrors.teams = 'Required';
    if (!formValues.designation) validationErrors.designation = 'Required';
    if (!formValues.billableHours || formValues.billableHours <= 0) {
      validationErrors.billableHours = 'Billable Hours is required and must be a positive number';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formValues);
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Employee Form</h2>
    <div className='forms'>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleInputChange}
          className={errors.firstName ? 'error' : ''}
          placeholder="Enter your First Name"
        />
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
      </div>
      <div className="form-group">
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formValues.middleName}
          onChange={handleInputChange}
          placeholder="Enter your Middle Name"
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
          className={errors.lastName ? 'error' : ''}
          placeholder="Enter your Last Name"
        />
        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
      </div>
      <div className="form-group">
        <label>Birth Date</label>
        <input
          type="date"
          name="birthDate"
          value={formValues.birthDate}
          onChange={handleInputChange}
          className={errors.birthDate ? 'error' : ''}
        />
        {errors.birthDate && <span className="error-message">{errors.birthDate}</span>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          className={errors.email ? 'error' : ''}
          placeholder="Enter your Email"
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
          className={errors.phoneNumber ? 'error' : ''}
          placeholder="Enter your Phone Number"
        />
        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
      </div>
      <div className="form-group">
        <label>Select Gender</label>
        <select
          name="gender"
          value={formValues.gender}
          onChange={handleInputChange}
          className={errors.gender ? 'error' : ''}
        >
          <option value="">Choose Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="error-message">{errors.gender}</span>}
      </div>
      <div className="form-group">
        <label>Start Time</label>
        <input
          type="time"
          name="startTime"
          value={formValues.startTime}
          onChange={handleInputChange}
          className={errors.startTime ? 'error' : ''}
        />
        {errors.startTime && <span className="error-message">{errors.startTime}</span>}
      </div>
      <div className="form-group">
        <label>End Time</label>
        <input
          type="time"
          name="endTime"
          value={formValues.endTime}
          onChange={handleInputChange}
          className={errors.endTime ? 'error' : ''}
        />
        {errors.endTime && <span className="error-message">{errors.endTime}</span>}
      </div>
      <div className="form-group">
        <label>Job Position</label>
        <input
          type="text"
          name="jobPosition"
          value={formValues.jobPosition}
          onChange={handleInputChange}
          className={errors.jobPosition ? 'error' : ''}
          placeholder="Enter the job position"
        />
        {errors.jobPosition && <span className="error-message">{errors.jobPosition}</span>}
      </div>
      <div className="form-group">
        <label>Select Teams</label>
        <select
          name="teams"
          value={formValues.teams}
          onChange={handleInputChange}
          className={errors.teams ? 'error' : ''}
        >
          <option value="">Select...</option>
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
        </select>
        {errors.teams && <span className="error-message">{errors.teams}</span>}
      </div>
      <div className="form-group">
        <label>Select Designation</label>
        <select
          name="designation"
          value={formValues.designation}
          onChange={handleInputChange}
          className={errors.designation ? 'error' : ''}
        >
          <option value="" disabled>Select...</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </select>
        {errors.designation && <span className="error-message">{errors.designation}</span>}
      </div>
      <div className="form-group">
        <label>Billable Hours</label>
        <input
          type="number"
          name="billableHours"
          value={formValues.billableHours}
          onChange={handleInputChange}
          className={errors.billableHours ? 'error' : ''}
          placeholder="Enter the billable hours"
        />
        {errors.billableHours && <span className="error-message">{errors.billableHours}</span>}
      </div>
      <div className="form-group">
        <label>
        Is Billable
          <input
            type="checkbox"
            name="isBillable"
            checked={formValues.isBillable}
            onChange={handleInputChange}
          />
        </label>
      </div>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

ReactDOM.render(<EmployeeForm/>,document.getElementById('root'));