import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component{
    state = {
        query: '',
        foundBooks : []
    }
    idArr = [];
    updateQuery = (query) => {
        if(query.length){
            BooksAPI.search(query)
                .then((res) => {
                    this.setState({
                        query: query,
                        foundBooks : res
                    })
                })
            
        } else {
            this.setState({
                query,
                foundBooks : []
            })
        }
        
    }
    render(){
        const {query, foundBooks} = this.state
        const { onMoveBook, books} = this.props;
        if(foundBooks.length){
            for(let b in foundBooks){
                foundBooks[b].shelf = 'none'
                    for(let q in books){    
                        if(books[q].id === foundBooks[b].id){
                            foundBooks[b]['shelf'] = books[q].shelf
                        }
                    }
            }
        }
        const visibleBooks = query.length
                ? this.state.foundBooks : null

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                    <Link 
                        to='/'
                        className = 'add-contact'
                        >
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event)=> this.updateQuery(event.target.value)}
                        />
                    </div>
                    </div>
                    <div className="search-books-results">
                        {foundBooks && foundBooks.length? 
                            <Shelf
                                shelfName=''
                                books={visibleBooks}
                                onMoveBook = {(book, shelf) => onMoveBook(book, shelf)}
                            />
                        : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage;