import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState, useEffect} from 'react'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  const [showAddTask, setShowAddtask] = useState (false)
  const [tasks, setTasks] = useState([])

  useEffect(()=> {
    const getTask = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTask();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json()
    console.log(data)
    return data
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/posts', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/JSON'
      },
      body : JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks,data])

/*
    let id;
    if(tasks.length > 0) {
      id = Math.max(...tasks.map((task)=> task.id)) + 1;
    } else {
      id = 1
    }
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);*/
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/posts/${id}`, {
      method : 'DELETE'
    })
    const tasksFiltered = tasks.filter((item)=>{
      return item.id !== id;
    });
    setTasks(tasksFiltered);
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`)
    const data = await res.json()
    return data
  }

 // Toggle Reminder
 const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
  const res = await fetch(`http://localhost:5000/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })
  const data = await res.json()
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    )
  )
}
  
  return (
    <Router>
    <div className="container">
      <Header showAdd={showAddTask} buttonClick={() => setShowAddtask(!showAddTask)}/> 
      <Route path='/' exact render={(props)=>(
        <>
         {showAddTask /*questo è uno shorthand per ternary operator*/&& <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : <h2>No tasks</h2>}
        </>
      )}/>
      <Route path='/about' component={About}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
