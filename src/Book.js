import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
    onBookChange: PropTypes.func.isRequired
  }

  handleChange = (bookShelf) => {
    this.props.onBookChange({book: this.props.book, shelf: bookShelf.target.value})
  }

  render() {
    const { book, status } = this.props;
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{ width: 128, height: 193, 
                backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : "https://via.placeholder.com/128x193.png?text=No+cover"}")` }}>
            </div>
            <BookShelfChanger
              onSelectChange={this.handleChange}
              initialStatus={status}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors.join(', ') : <em>No author listed</em>}</div>
        </div>
      </li>
    )
  }
}

export default Book;