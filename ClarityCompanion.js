import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ClarityCompanion = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []); // Empty dependency array means this effect runs once on mount

  // Your component logic here
  return (
    <div>
      {showConfetti && <Confetti />}
      {/* Your component JSX here */}
    </div>
  );
};

export default ClarityCompanion;
