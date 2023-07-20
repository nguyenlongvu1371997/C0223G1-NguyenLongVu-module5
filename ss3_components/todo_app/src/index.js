import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['đi chợ', 'nấu cơm'],
      item: ""
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  }

  handleAddItem = () => {
    if (this.state.item !== "") {

      this.setState(() => {
        return ({
          list: [...this.state.list,this.state.item],
          item: ""
        }
         
        )
    } )
    ;
  }
}

render() {
  return (
    <div>
      <input type='textfield' value={this.state.item} onChange={this.handleChange}></input>
      <button onClick={this.handleAddItem}>ADD</button>
      <ul>
        {this.state.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps />);


