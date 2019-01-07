import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import {Route} from 'react-router-dom';

class BooksApp extends Component {
  state = {
    books : []
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }
  onMoveBook(bookId, shelf){
    BooksAPI.get(bookId)
      .then((book) => {
        BooksAPI.update(book, shelf)
      })
      .then(() => {
        BooksAPI.getAll()
          .then((books) => {
            this.setState(() => ({
              books
            }))
          })
      })
  }
  render() {
    const {books} = this.state;

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
            books={books}
            onMoveBook={(book, shelf) => this.onMoveBook(book, shelf)}
          />
        )}

        />
        <Route path='/search' render={({history}) => (
          <SearchPage
            books={books}
            onMoveBook={(book, shelf) => {
              this.onMoveBook(book, shelf)
              history.push('/')
            }}
          />
          )}
        />
        
      </div>
    )
  }
}

export default BooksApp
