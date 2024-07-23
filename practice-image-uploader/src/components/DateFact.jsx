import axios from 'axios';
import React, { useState } from 'react';

function DateFact() {
    const [fact, setFact] = useState('');
    const [dateInput, setDateInput] = useState('');

    const handleChange = (event) => {
        setDateInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const [month, day] = dateInput.split('-').map(Number);

        if (!isNaN(month) && !isNaN(day)) {
            axios.get(`http://numbersapi.com/${month}/${day}/date`)
                .then(response => {
                    setFact(response.data);
                })
                .catch(error => {
                    console.error('Error fetching date fact:', error);
                });
        } else {
            setFact('Please enter a valid date in MM-DD format.');
        }
    };

    return (
        <div>
            <h2>Today's Date Fact</h2>
            <p>{fact}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter a date (MM-DD):
                    <input
                        type="text"
                        value={dateInput}
                        onChange={handleChange}
                        placeholder="MM-DD"
                    />
                </label>
                <button type="submit">Get Fact</button>
            </form>
        </div>
    );
}

export default DateFact;
