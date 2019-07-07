import React, { useState, useEffect } from "react";

export const SocialTimer = () => {
  const [minute, setMinute] = useState(4);
  const [second, setSecond] = useState(59);
  const [idInterval, setIdInterval] = useState();

  useEffect(() => {
    const interval = setInterval(() => startTick(), 1000);
    setIdInterval(interval);
    return () => clearInterval(interval);
  }, [minute, second]);

  function startTick() {
    if (minute === 0 && second === 0) {
      clearInterval(idInterval);
    } else if (second === 0) {
      setMinute(minute => minute - 1);
      setSecond(59);
    } else setSecond(second => second - 1);
  }

  return (
    <div>
      <p className="time">
        {minute}:{second}
      </p>
      <p className="timer_text">The social time!</p>
      <button className="stop_button" onClick={() => setInterval(startTick())}>
        Resume
      </button>
      <button className="stop_button" onClick={() => clearInterval(idInterval)}>
        Stop
      </button>
    </div>
  );
};
