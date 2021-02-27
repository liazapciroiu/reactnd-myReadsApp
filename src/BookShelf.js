import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const { title, books } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            {books.length ?
              <ol className="books-grid">
                {books.map((book, i) => (
                  <Book
                    key={i}
                    book={book} />
                ))}
              </ol>
              : <p>No books on this shelf</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;