import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <section>
        <li
          onClick={() => this.props.deleteItem(this.props.item)}
<<<<<<< HEAD
          className={this.props.item.completed ? 'completed-item' : ''}
        >
          {this.props.text}
        </li>
        <button
          className='edit-button'
          onClick={() => this.props.editItem(this.props.item)}
        >
          Edit
        </button>
        <button
          className='today-button'
          onCLick={() => this.props.changeItem(this.props.key)}
        >
=======
          className={this.props.item.completed ? 'completed-item' : ''}>
          {this.props.text}, Due Today = {this.props.dueDate.toString()}
        </li>
        {/* <button
          className="edit-button"
          onClick={() => this.props.editItem(this.props.item)}>
          Edit
        </button> */}

        <button
          className="today-button"
          onClick={() => this.props.editItem(this.props.item)}>
>>>>>>> b5451766856c78babadbce7fa17db6ee143a5e9f
          Due Today
        </button>
      </section>
    )
  }
}

export default ListItem
