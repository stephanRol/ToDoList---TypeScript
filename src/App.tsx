import './App.css';
import Home from './components/Home';
import { ThemeProvider } from './context/context';
import { Counter } from './context/Counter';
import Todolist from './reducers/Todolist';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h2>ToDoList - TypeScript</h2>
        {/* <Home /> */}
        {/* <Todolist /> */}
        <Counter />
      </div>
    </ThemeProvider>
  );
}

export default App;

