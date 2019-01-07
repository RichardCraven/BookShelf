import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

class MainPage extends Component{
    render(){
        const {books, onMoveBook} = this.props
        const currentlyReading = [];
        const wantToRead = [];
        const read = [];

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
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                    <h1>MyReads</h1>
                        <Link to='/search'>
                        <div className="open-search">
                            <button >
                            </button>
                        </div>
                        </Link>
                        
                    </div>
                    <div className="list-books-content">
                    <div>
                        <Shelf
                            shelfName='currentlyReading'
                            books={currentlyReading}
                            onMoveBook = {(book, shelf) => onMoveBook(book, shelf)}
                        />
                        <Shelf
                            shelfName='wantToRead'
                            books={wantToRead}
                            onMoveBook = {(book, shelf) => onMoveBook(book, shelf)}
                        />    
                        <Shelf
                            shelfName='read'
                            books={read}
                            onMoveBook = {(book, shelf) => onMoveBook(book, shelf)}
                        />
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default MainPage;