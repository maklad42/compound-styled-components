import React from 'react';
import { Card } from './components';
import movies from './data';

function App() {
  return (
    <main>
      {movies.map((movie) => (
        <Card className="mr">
          <Card.Image src={movie.image} alt={movie.title} />
        </Card>
      ))}
    </main>
  );
}

export default App;
