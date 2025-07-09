import React, { useState, useEffect } from 'react';

function App() {
  const [academias, setAcademias] = useState([]);
  
  useEffect(() => {
    // Simulação de busca (substitua pela sua API real)
    const fetchData = async () => {
      try {
        const response = await fetch('/api/academias?lat=-23.5505&lon=-46.6333');
        const data = await response.json();
        setAcademias(data);
      } catch (error) {
        console.error("Erro ao buscar academias:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <h1>Academias Próximas</h1>
      <ul>
        {academias.map(academia => (
          <li key={academia.id}>
            {academia.nome} - {academia.distancia.toFixed(0)} metros
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
