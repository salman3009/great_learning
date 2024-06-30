import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskDetails from './components/TaskDetails/TaskDetails';
import TaskList from './components/TaskList/TaskList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/taskdetails/:id" element={<TaskDetails/>}/>
      <Route path="/create" element={<TaskForm/>}/>
      <Route path="/" element={<TaskList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
