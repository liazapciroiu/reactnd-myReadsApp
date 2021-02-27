import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class BookSearch extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
    errors: PropTypes.string.isRequired
  }

  onSubmitSearch = (event) => {
    event.preventDefault();
    const query = event.target.querySelector('input').value || "";
    if (query.trim().length > 0) this.props.onSearch(query);
  }

  render() {
    const { books, errors } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <form onSubmit={this.onSubmitSearch}>
              <input
                type="text"
                placeholder="Search by title or author"
                name="search"
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          {books.length ?
            <ol className="books-grid">
              {books.map((book, i) => (
                <Book key={i} book={book} />
              ))}
            </ol>
            : <p>{errors ? 'No books founded for this query' : 'Please search for a book'}</p>}
        </div>
      </div>
    )
  }
}

export default BookSearch;