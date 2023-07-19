import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const students = [
  {
    id: 1,
    name: 'Vũ',
    age: 20,
    address: 'Đà Nẵng'
  },
  {
    id: 2,
    name: 'Ai đó',
    age: 20,
    address: 'Đâu Đó'
  },
  {
    id: 3,
    name: 'Kiệt',
    age: 20,
    address: 'Đà Nẵng'
  },
  {
    id: 4,
    name: 'Tài',
    age: 20,
    address: 'Đà Nẵng'
  },
  {
    id: 5,
    name: 'Thiện',
    age: 20,
    address: 'Đà Nẵng'
  }
];



class StudentInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students
    }
  }
  render() {
    const studentsRow = this.state.students.map((s) =>
      <tr key={s.id}>
        <td>{s.id}</td>
        <td>{s.name}</td>
        <td>{s.age}</td>
        <td>{s.address}</td>
      </tr>
    );
    return (
      <div>
        <h2>Student informations</h2>
        <table border={1}>
          <thead>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Address</td>
          </thead>
          <tbody>
            {studentsRow}
          </tbody>
        </table>
      </div>
    )

  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StudentInfoComponent />);


