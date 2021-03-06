import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component{
    static propTypes = {
        shelfName: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }
    // state = {
        //     books: [
            
            //     ]
            // }
    render(){
        const {shelfName, books, onMoveBook} = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{
                    shelfName === 'wantToRead' ? 'Want To Read' : (
                        shelfName === 'currentlyReading' ? 'Currently Reading' : (
                            shelfName === 'read' ? 'Have Read' : null
                        )
                    )
                }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                        <li key={book.id}>
                            <Book 
                                image={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                authors={book.authors}
                                title={book.title}
                                shelf={book.shelf ? book.shelf : 'none'}
                                id={book.id}
                                moveBook={(book, shelf) => onMoveBook(book, shelf)}
                            />
                        </li>
                        ))}
                    </ol>
                    </div>
                </div>
        )
    }
}

export default Shelf;