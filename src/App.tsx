import './App.css';
import Home from './components/Home';
import { ThemeProvider } from './context/context';
import Todolist from './reducers/Todolist';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h2>ToDoList - TypeScript</h2>
        <Home />
        {/* <Todolist /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

