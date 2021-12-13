import './css/desktop.css';
import './css/global.css';
import './css/mobile.css';
import Home from './components/home/Home';
import Debugger from './components/common/Debugger';
import Mathematics from './components/mathematics/Mathematics';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Mathematics />
    </div>
  );
}

export default App;
