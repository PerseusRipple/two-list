import React, { Component } from 'react'
import axios from 'axios'
import AddItemForm from './AddItemForm'
import ListItem from './ListItem'

class ToDoList extends Component {
  state = {
    newItemText: '',
    todoList: [],
    edited: false,
    changeItem: true
    // accessToken: 'cohort-xiii'
  }

  getApiUrl = () => {
    return 'https://localhost:5001/api/List'
    // `https://one-list-api.herokuapp.com/items?access_token=${
    // this.state.accessToken
    // }`
  }

  updateStateWithNewItem = event => {
    this.setState({
      newItemText: event.target.value
    })
  }

  componentDidMount() {
    this.getListFromAPI()
    // check local storage for a token
    // const token = localStorage.getItem('list-access-token')
    // if (token) {
    //   this.setState(
    //     {
    //       accessToken: token
    //     },
    //     () => {
    //       this.getListFromAPI()
    //     }
    //   )
    // }
  }

  getListFromAPI = () => {
    // go to the API
    axios.get(this.getApiUrl()).then(resp => {
      // populate state with the todo list
      this.setState({
        todoList: resp.data
      })
    })
  }

  deleteItem = item => {
    const url = `https://localhost:5001/api/list/${item.id}`

    // ?access_token=${this.state.accessToken}

    axios.delete(url).then(resp => {
      this.getListFromAPI()
    })
  }

  editItem = item => {
    axios
      .put(`https://localhost:5001/api/list/put/${item.id}`, {
        listItem: item.listItem,
        isDone: item.isDone,
        isDueToday: true,
        dateOfCompletion: item.dateOfCompletion
      })
      .then(resp => {
        // get lateset list form API
        this.getListFromAPI()
        console.log(resp)
        // update state to clear out the input field
      })
  }

  changeItem = key => {
    const url = `https://localhost:5001/api/list/${key}`
    axios.put(url).then(resp => {
      this.getListFromAPI()
    })
  }

  addItemToApi = event => {
    event.preventDefault()
    axios
      .post(this.getApiUrl(), {
        listItem: this.state.newItemText,
        isDone: false,
        dateOfCompletion: null
      })
      .then(resp => {
        // get lateset list form API
        this.getListFromAPI()
        // update state to clear out the input field
        this.setState({
          newItemText: ''
        })
      })
  }

  // generateRandomToken = () => {
  //   // creat a new string that is 20 random characters long
  //   return Math.floor(Math.random() * Math.pow(10, 20)).toString()
  // }

  resetList = () => {
    // reset the state
    // reset toDoList
    // reset the newItemText
    // create new token
    this.setState(
      {
        todoList: [],
        newItemText: ''
        // accessToken: this.generateRandomToken()
      },
      () => {
        // console.log(this.state.accessToken)
        this.getListFromAPI()
        // store the new token in localstorage
        // localStorage.setItem('list-access-token', this.state.accessToken)
      }
    )
  }

  render() {
    return (
      <>
        <button onClick={this.resetList}>RESET LIST</button>
        <AddItemForm
          addItemToApi={this.addItemToApi}
          newItemText={this.state.newItemText}
          updateStateWithNewItem={this.updateStateWithNewItem}
        />
        <p className="output" />
        <ol className="todo-list">
          {this.state.todoList.map(item => {
            return (
              <ListItem
                key={item.id}
                item={item}
                deleteItem={this.deleteItem}
                text={item.listItem}
                editItem={this.editItem}
                changeItem={this.changeItem}
                dueDate={item.isDueToday}
              />
            )
          })}
        </ol>
      </>
    )
  }
}

export default ToDoList
