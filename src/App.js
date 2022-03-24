import Home from './pages/home/Home';
import Login from './pages/login/Login';
import AppRouter from './components/AppRouter/AppRouter';
import { Route, Routes, Navigate } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      admin panel
      <AppRouter />
    </div>
  );
}

export default App;
