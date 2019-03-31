import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <section>
        <li
          onClick={() => this.props.deleteItem(this.props.item)}
          className={this.props.item.completed ? 'completed-item' : ''}
        >
          {this.props.text}
        </li>
        <button onClick={() => this.props.editItem(this.props.item)}>
          Edit
        </button>
        <button onCLick={() => this.props.changeItem(this.props.item)}>
          Due Today
        </button>
      </section>
    )
  }
}

export default ListItem
