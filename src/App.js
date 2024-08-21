import React, { useState } from 'react';

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
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
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
    <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: 'auto' }}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
      </div>
      <div>
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formValues.middleName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
      </div>
      <div>
        <label>Birth Date</label>
        <input
          type="date"
          name="birthDate"
          value={formValues.birthDate}
          onChange={handleInputChange}
        />
        {errors.birthDate && <span style={{ color: 'red' }}>{errors.birthDate}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
        />
        {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
      </div>
      <div>
        <label>Select Gender</label>
        <select name="gender" value={formValues.gender} onChange={handleInputChange}>
          <option value="">Choose Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
      </div>
      <div>
        <label>Start Time</label>
        <input
          type="time"
          name="startTime"
          value={formValues.startTime}
          onChange={handleInputChange}
        />
        {errors.startTime && <span style={{ color: 'red' }}>{errors.startTime}</span>}
      </div>
      <div>
        <label>End Time</label>
        <input
          type="time"
          name="endTime"
          value={formValues.endTime}
          onChange={handleInputChange}
        />
        {errors.endTime && <span style={{ color: 'red' }}>{errors.endTime}</span>}
      </div>
      <div>
        <label>Job Position</label>
        <input
          type="text"
          name="jobPosition"
          value={formValues.jobPosition}
          onChange={handleInputChange}
        />
        {errors.jobPosition && <span style={{ color: 'red' }}>{errors.jobPosition}</span>}
      </div>
      <div>
        <label>Select Teams</label>
        <select name="teams" value={formValues.teams} onChange={handleInputChange}>
          <option value="">Select...</option>
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
        </select>
        {errors.teams && <span style={{ color: 'red' }}>{errors.teams}</span>}
      </div>
      <div>
        <label>Select Designation</label>
        <select name="designation" value={formValues.designation} onChange={handleInputChange}>
          <option value="">Select...</option>
          <option value="designation1">Designation 1</option>
          <option value="designation2">Designation 2</option>
        </select>
        {errors.designation && <span style={{ color: 'red' }}>{errors.designation}</span>}
      </div>
      <div>
        <label>Billable Hours</label>
        <input
          type="number"
          name="billableHours"
          value={formValues.billableHours}
          onChange={handleInputChange}
        />
        {errors.billableHours && <span style={{ color: 'red' }}>{errors.billableHours}</span>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="isBillable"
            checked={formValues.isBillable}
            onChange={(e) =>
              setFormValues({ ...formValues, isBillable: e.target.checked })
            }
          />
          Is Billable?
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default EmployeeForm;
