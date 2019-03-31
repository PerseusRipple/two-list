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
          <button
            className='edit-button'
            onClick={() => this.props.editItem(this.props.item)}
          >
            Edit
          </button>
          <button
            className='today-button'
            onCLick={() => this.props.changeItem(this.props.item)}
          >
            Due Today
          </button>
        </li>
      </section>
    )
  }
}

export default ListItem
