import './App.css';
import './assets/fonts.css';
import Customers from './components/Customers';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app__wrapper">
      <div className='app_block'>
        <div className='sidebar__app'>
          <Sidebar />
        </div>
        <div className='customers__app'>
          <Customers />
        </div>
      </div>
    </div>
  );
}

export default App;
