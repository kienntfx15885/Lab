import Main from './components/MainComponent';
import Menu from './components/MenuComponent'
import { DISHES } from './shared/dishes';

function App() {
  return (
    <div className="App">
        <Menu dishes={DISHES}/>
        <Main />
    </div>
  );
}

export default App;
