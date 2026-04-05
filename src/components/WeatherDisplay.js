import React from 'react';

const WeatherDisplay = ({ data }) => {

  const tempColor = data.temperature > 20 ? 'red' : 'blue';

  return (
    <>
      <p>
        Temperature: 
        <span style={{ color: tempColor }}>
          {data.temperature}
        </span>
      </p>

      <p>
        Conditions: {data.conditions}
      </p>
    </>
  );
};

export default WeatherDisplay;