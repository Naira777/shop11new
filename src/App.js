
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BreadandCakesPage from './pages/BreadandCakesPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';


function App() {

  return (
<BrowserRouter>

<Routes>
  
       <Route path='/'  element={<CategoryPage /> } />

      <Route  path='/breadandcakes' element={<BreadandCakesPage />}  />

</Routes>

</BrowserRouter>







  );
}

export default App;
