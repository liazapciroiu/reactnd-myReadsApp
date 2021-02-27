import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class BookSearch extends Component {
  static propTypes = {
    bookStatus: PropTypes.func.isRequired,
    foundedBooks: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
    errors: PropTypes.string.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  }

  onSubmitSearch = (query) => {
    this.props.onSearch(query.trim());
  }

  render() {
    const { bookStatus, foundedBooks, errors, onBookUpdate } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <form onSubmit={(form) => {
              form.preventDefault();
              this.onSubmitSearch(form.target.querySelector('input').value)
            }}>
              <input
                autoFocus
                type="text"
                placeholder="Search by title or author"
                name="search"
                onChange={(input) => {
                  if (input.target.value === "") this.onSubmitSearch("");
                }}
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          {foundedBooks.length ?
            <ol className="books-grid">
              {foundedBooks.map((book, i) => (
                <Book
                  key={i}
                  book={book}
                  onBookChange={onBookUpdate}
                  status={bookStatus(book)}
                />
              ))}
            </ol>
            : <p>{errors ? 'No books founded for this query' : 'Please search for a book'}</p>}
        </div>
      </div>
    )
  }
}

export default BookSearch;