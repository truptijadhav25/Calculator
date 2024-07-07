
import './App.css';
import Calculator from './components/Calculator';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Calculator />


    </div>
  );
}

export default App;
