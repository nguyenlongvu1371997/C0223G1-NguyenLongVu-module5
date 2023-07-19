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
    this.setState({ item: event.target.value});
  }

  handleAddItem = () => {
    if (this.state.item !== "") {
      const newList = this.state.list;
      newList.push(this.state.item);
      const object = {list: newList,item: ""};
      this.setState(object);
    }
  }

  render() {
    return (
      <div>
        <input type='textfield' value={this.state.item} onChange={this.handleChange}></input>
        <button onClick={this.handleAddItem}>ADD</button>
        <ul>
          {this.state.list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps />);


