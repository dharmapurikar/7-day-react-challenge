import './App.css'

function App() {
  return (
    <>
      <h1>Task List</h1>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Add a task" aria-label="Add a task" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
          </div>
          <div className="col-12">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Task 1
                <button className="btn btn-danger">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
