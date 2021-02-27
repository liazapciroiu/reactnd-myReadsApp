import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }
  render() {
    const { book } = this.props;
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{ width: 128, height: 193, 
                backgroundImage: `url("${book.imageLinks.thumbnail}")` }}>
            </div>
            <BookShelfChanger />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors.join(', ')}</div>
        </div>
      </li>
    )
  }
}

export default Book;