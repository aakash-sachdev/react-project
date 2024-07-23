import React, { useState, useEffect } from 'react';

const Advice = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div>
      <h1>Advice of the Day</h1>
      <p>{advice}</p>
      <button onClick={fetchAdvice}>Get New Advice</button>
    </div>
  );
};

export default Advice;
