import React, { useState, useEffect } from 'react';

const AutoReloadPage: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);

      if (counter >= 30) {
        clearInterval(intervalId);
        window.location.reload();
      }
    }, 1000);

    return () => {
      clearInterval(intervalId); // Limpa o intervalo se o componente for desmontado antes do reload
    };
  }, [counter]);

  return (
    <div>
      <p>Contador: {counter}</p>
      <p>A página será recarregada automaticamente após 30 segundos.</p>
      {/* O botão não é necessário neste exemplo, pois o reload é automático */}
    </div>
  );
};

export default AutoReloadPage;