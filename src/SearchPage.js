import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Shelf from './Shelf';

class SearchPage extends Component{
    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState({
            query: query
        })
    }
    render(){
        const {query} = this.state
        const {books, onMoveBook} = this.props;

        const visibleBooks = query === ''
                ? books
                : books.filter((b) => (
                    b.title.toLowerCase().includes(query.toLowerCase()) || b.authors.join().toLowerCase().includes(query.toLowerCase())
                ))

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
                        <Shelf
                            shelfName=''
                            books={visibleBooks}
                            onMoveBook = {(book, shelf) => onMoveBook(book, shelf)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage;