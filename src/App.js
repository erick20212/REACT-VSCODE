import './App.css';
import SpecieFetch from './service/Speciefetch';
import 'bootstrap/dist/css/bootstrap.css'
import SpeciePost from './service/Speciepost';

function App() {
  return (
    <div>
      <SpeciePost/>
      <SpecieFetch/>
    </div>
  );
}

export default App;
