import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const linkStyle = {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    margin: '20px 5px',
    padding: '5px 10px'
  }

  return (
    <div className='container text-center'>
      <header>
        <h1 className='display-1'>Tasks</h1>

        <nav>
          <div className="m-4">
            <Link style={linkStyle} to='/'>Tasks</Link>
            <Link style={linkStyle} to='/add'>Add Task</Link>
          </div>
        </nav>
      </header>

      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default App
