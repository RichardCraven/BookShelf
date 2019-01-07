import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import {Route} from 'react-router-dom';

class BooksApp extends Component {
  state = {
    // currentlyReading : [],
    // wantToRead : [],
    // read: []
    books : []
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      console.log('ALLLL book sare: ', books)
      this.setState(() => ({
        books
      }))
    })
  }
  onMoveBook(bookId, shelf){
    for(let b in this.state.books){
      let book = this.state.books[b]
      console.log(book.id)
      if(book.id === bookId){
        console.log('found book')
        BooksAPI.update(book, shelf)
        .then((res)=>{
          // I know there's probably a better way to refresh the Books.. but this works too
          BooksAPI.getAll()
          .then((books) => {
            this.setState(() => ({
              books
            }))
          })
        })
      }
    }
  }
  render() {
    const {books} = this.state
    console.log('THIS STATE IS NOW', this.state)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
            // currentlyReading={currentlyReading}
            // wantToRead={wantToRead}
            // read={read}
            books={books}
            onMoveBook={(book, shelf) => this.onMoveBook(book, shelf)}
          />
        )}

        />
        <Route path='/search' render={() => (
          <SearchPage
            books={books}
            onMoveBook={(book, shelf) => this.onMoveBook(book, shelf)}
          />
          )}
        />
        
      </div>
    )
  }
}

export default BooksApp
