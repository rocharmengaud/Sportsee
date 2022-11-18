import { Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
