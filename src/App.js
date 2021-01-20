import React from 'react';
import { Card } from './components/Card';
import movies from './data';

function App() {
  return (
    <main>
      {movies.map((movie) => (
        <Card className="mr">
          <Card.Image src={movie.image} alt={movie.title} />
          <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.desc}</Card.Text>
          <Card.Button>{movie.ctaText}</Card.Button>
        </Card>
      ))}
    </main>
  );
}

export default App;
