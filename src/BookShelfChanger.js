import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  static propTypes = {
    initialStatus: PropTypes.string.isRequired,
    onSelectChange: PropTypes.func.isRequired
  }

  // getSelectOption = (status) => {
  //   const options = [
  //     { value: 'currentlyReading', title: 'Currently Reading' },
  //     { value: 'wantToRead', title: 'Want to Read' },
  //     { value: 'read', title: 'Read' },
  //     { value: 'none', title: 'None' }
  //   ]
  //   return options.map((option, i) => (
  //     <option key={i + 1} value={option.value} selected={status === option.value} >{option.title}</option>
  //   ))
  // }

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