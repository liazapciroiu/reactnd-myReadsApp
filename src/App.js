import React from 'react'
import './App.css'
import BookSearch from './BookSearch'
import MyReads from './MyReads'
import { Route } from 'react-router-dom'
import { getAll, search } from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    foundedBooks: [],
    searchErrors: ''
  }

  componentDidMount() {
    getAll()
      .then((books) => {
        this.setState({
          books
        })
      })
  };

  onSearch = (query) => {
    search(query)
      .then((foundedBooks) => {
        if (foundedBooks.error) throw Error(foundedBooks.error);
        this.setState({
          foundedBooks
        })
      }).catch(error => {
        this.setState({
          searchErrors: error.toString()
        });
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads
            books={this.state.books}
          />
        )} />
        <Route path="/search" render={() => (
          <BookSearch
            books={this.state.foundedBooks}
            onSearch={this.onSearch}
            errors={this.state.searchErrors}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
