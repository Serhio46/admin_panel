import classes from './app.module.scss'
import AppRouter from './components/AppRouter/AppRouter';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className={classes.app}>
        <Sidebar />
      <div className={classes.container}>
        <Navbar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
