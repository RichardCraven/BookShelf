import React from 'react'
import PropTypes from 'prop-types'

function Book (props) {
    const {title, image, authors, shelf, id, moveBook} = props
    // const shelf = 'Want To Read'
    console.log('in book instance, shelf is ', shelf)
    return (
        <div>
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${image})` }}></div>
                <div className="book-shelf-changer">
                <select defaultValue={shelf} onChange={(event) => moveBook(id, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
            </div>
        </div>
    )
}
Book.propTypes = { 
    id: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    image: PropTypes.string,
    moveBook: PropTypes.func.isRequired
}

export default Book;