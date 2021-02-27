import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class MyReads extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  getShelves() {
    return [
      { title: 'Currently Reading', bookState: 'currentlyReading' },
      { title: 'Want to Read', bookState: 'wantToRead' },
      { title: 'Read', bookState: 'read' }
    ];
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.getShelves().map((shelf, i) => (
            <BookShelf
              key={i}
              title={shelf.title}
              books={this.props.books.filter((book) => (
                book.shelf === shelf.bookState
              ))}
            />
          ))}
        </div>
        <div className="open-search">
          <Link
            className="button"
            to="/search">
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default MyReads;