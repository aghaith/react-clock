import React, { useEffect, useState } from 'react';
import Clock from 'Clock/Clock';
import './App.css';

const App = () => {

  const currentDate = new Date();
  const [secondRatio, setSecondRatio] = useState(0)
  const [minuteRatio, setMinuteRatio] = useState(0)
  const [hourRatio, setHourRatio] = useState(0)

  const setClockRatio = () => {
    setSecondRatio(currentDate.getSeconds() / 60)
    setMinuteRatio((secondRatio + currentDate.getMinutes()) / 60)
    setHourRatio((minuteRatio + currentDate.getHours()) / 12);
  }

  useEffect(() => {
    setClockRatio()
    // eslint-disable-next-line
  }, [currentDate, secondRatio, minuteRatio])

  const setClock = () => {
    setClockRatio()
  }
  
  setInterval(() => {
    setClock()
  }, 1000);

  return (
    <Clock 
      secondRatio={secondRatio}
      minuteRatio={minuteRatio}
      hourRatio={hourRatio} 
    />
  );
}

export default App;
