import { useEffect, useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = prevCounter + 1;

          if (newCounter >= 10) {
            stopCounter();
            resetCounter();
            return 0; // Reinicia o contador automaticamente após atingir 30
          } else {
            return newCounter;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      
    };
  }, [isRunning]);

  const stopCounter = () => {
    setIsRunning(false);
  };

  const resetCounter = () => {
    setCounter(0);
    setIsRunning(true);
  };

  return (
    <div className='App'>
      <div className='counter'>{counter}</div>
      <button onClick={stopCounter}>Parar</button>
      <button onClick={resetCounter}>Reiniciar</button>
    </div>
  );
};
