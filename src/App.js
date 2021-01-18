import React from 'react';
import { Card } from './components';
import movies from './data';

function App() {
  return (
    <main>
      {movies.map((movie) => (
        <Card className="mr" />
      ))}
    </main>
  );
}

export default App;
