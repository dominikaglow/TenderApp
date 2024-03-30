import { default as Axios } from 'axios';
import './AddTender.css';
import { useState } from 'react';

function AddTender() {

    const [subject, setSubject] = useState('');
    const [institution, setInstitution] = useState('');
    const [desc, setDesc] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [budget, setBudget] = useState(0);

    const addTender = () => {
      Axios.post("http://localhost:5001/createTender", {
        subject: subject,
        institution: institution,
        description: desc,
        startDate: startDate,
        endDate: endDate,
        budget: budget
      }).then(() => {
        console.log("Success sending new tender");
      });
    };

    return (
      <div className="AddTender">
        <div className='tenderForm'>
          <label>Subject of tender </label>
          <input 
            type="text"
            onChange={(event) => {
                setSubject(event.target.value);
            }}
          />

          <label>Name of the institution </label>
          <input 
            type="text"
            onChange={(event) => {
                setInstitution(event.target.value);
            }}
          />

          <label>Description </label>
          <input 
            type="text" 
            id="desc"
            onChange={(event) => {
                setDesc(event.target.value);
            }}
          />

          <label>Start date </label>
          <input 
            type="datetime-local"
            lang="en"
            onChange={(event) => {
                setStartDate(event.target.value);
            }}
          />

          <label>End date </label>
          <input 
            type="datetime-local"
            lang="en"
            onChange={(event) => {
                setEndDate(event.target.value);
            }}
          />

          <label>Budget </label>
          <input 
            type="number"
            onChange={(event) => {
                setBudget(event.target.value);
            }}
          />

          <button onClick={addTender}>Add tender</button>
        </div>
      </div>
    );
}
  
export default AddTender;