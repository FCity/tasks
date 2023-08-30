import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import './App.css'

function App() {
  return (
    <div className='container-fluid'>
      <header>
        <h1 className='display-1 text-center'>Tasks</h1>
      </header>

      <section>
        <AddTask />
        <Tasks />
      </section>
    </div>
  )
}

export default App
