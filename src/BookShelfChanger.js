import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  static propTypes = {
    initialStatus: PropTypes.string.isRequired,
    onSelectChange: PropTypes.func.isRequired
  }

  render() {
    const { initialStatus, onSelectChange } = this.props;

    return (
      <div className="book-shelf-changer">
        <select onChange={onSelectChange} defaultValue={initialStatus}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger;