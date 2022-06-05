import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home';

const App = () => {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
