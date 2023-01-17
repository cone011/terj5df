import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [list, setList] = useState([]);

  const nameValueChanged = (event) => {
    setName(event.target.value);
  };

  const lastNameValueChanged = (event) => {
    setLastname(event.target.value);
  };

  const addGuestToList = (event) => {
    event.preventDefault();
    let newData = { id: Math.random(), name: name, lastName: lastname };
    setList([...list, newData]);
    setName("");
    setLastname("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={addGuestToList}>
            <div className="form-group">
              <label htmlFor="first-name">Nombre</label>
              <input
                onChange={nameValueChanged}
                type="text"
                className="form-control"
                name="first-name"
                value={name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Apellido</label>
              <input
                onChange={lastNameValueChanged}
                type="text"
                className="form-control"
                name="last-name"
                value={lastname}
              />
            </div>

            <div className="action">
              <button type="submit" className="btn btn-primary">
                Agregar Invitado
              </button>
            </div>
          </form>

          <table className="table bordered-table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-6 col-sm-offset-3">
//             <form>
//               <div className="form-group">
//                 <label htmlFor="first-name">Nombre</label>
//                 <input type="text" className="form-control" name="first-name" />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="last-name">Apellido</label>
//                 <input type="text" className="form-control" name="last-name" />
//               </div>

//               <div className="action">
//                 <button type="submit" className="btn btn-primary">Agregar Invitado</button>
//               </div>
//             </form>

//             <table className="table bordered-table table-striped">
//               <thead>
//                 <tr>
//                   <th>Nombre</th>
//                   <th>Apellido</th>
//                 </tr>
//               </thead>
//               <tbody>

//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default App;
