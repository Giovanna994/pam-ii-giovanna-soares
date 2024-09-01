import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import PrimeiroLink from '../routes/PrimeiroLink';
import SegundoLink from '../routes/SegundoLink';

function App() {

  return (

    <Router>

      <nav>
        <Link to="EntregarSegunda\app\routes\PrimeiroLink.tsx">Primeiro Link</Link>
        <br />
        <Link to="EntregarSegunda\app\routes\SegundoLink.tsx">Segundo link</Link>
      </nav>

      <Routes>
        <Route path="/EntregarSegunda\app\routes\PrimeiroLink.tsx" element={<PrimeiroLink />} />
        <Route path="EntregarSegunda\app\routes\SegundoLink.tsx" element={<SegundoLink />} />
      </Routes>   

    </Router>   

  );
}

export default App

