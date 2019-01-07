import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import {Route} from 'react-router-dom';

class BooksApp extends Component {
  state = {
    currentlyReading : [],
    wantToRead : [],
    read: []
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      console.log('books are', books)
      let currentlyReading = [];
      let wantToRead = [];
      let read = [];
      for(let b in books){
        let book = books[b]
        if(book.shelf === 'currentlyReading'){
          currentlyReading.push(book)
        } else if(book.shelf === 'wantToRead'){
          wantToRead.push(book)
        } else if(book.shelf === 'read'){
          read.push(book)
        }
      }
      // console.log(currentlyReading)
      this.setState(() => ({
        currentlyReading: currentlyReading,
        wantToRead : wantToRead,
        read: read
      }))
    })
  }
  render() {
    const {currentlyReading, wantToRead, read} = this.state
    console.log('THIS STATE IS NOW', this.state)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
          />
        )}

        />
        <Route path='/search' render={() => (
          <SearchPage
            // allBooks={books}
          />
          )}
        />
        
      </div>
    )
  }
}

export default BooksApp
