import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const handleClick = (val) => {
    setShow(val);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && status) {
      const newTask = { name, status };
      setTasks([...tasks, newTask]);
      setName("");
      setStatus("");
    }
  };
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.status === 'Active' && b.status !== 'Active') return -1;
    if (a.status === 'Completed' && b.status !== 'Active' && b.status !== 'Completed') return -1;
    if (b.status === 'Active' && a.status !== 'Active') return 1;
    if (b.status === 'Completed' && a.status !== 'Active' && a.status !== 'Completed') return 1;
    return a.status.localeCompare(b.status); 
  });
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form className="row gy-2 gx-3 align-items-center mb-4">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((task, index) => {
                if (show === "all" || task.status === show) {
                  return (
                    <tr key={index}>
                      <td>{task.name}</td>
                      <td>{task.status}</td>
                    </tr>
                  );
                }
                return null; 
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
