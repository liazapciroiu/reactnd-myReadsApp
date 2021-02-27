import React from 'react'
import './App.css'
import BookSearch from './BookSearch'
import MyReads from './MyReads'
import { Route } from 'react-router-dom'
import { getAll, search, update } from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    foundedBooks: [],
    searchErrors: ''
  }

  componentDidMount() {
    this.onLoadData();

  };

  onLoadData = () => {
    getAll()
      .then((books) => {
        this.setState({
          books
        })
      })
  }

  onSearch = (query) => {
    if (query === "") {
      this.setState({
        foundedBooks: []
      });
      return;
    }

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

  onBookUpdate = (bookData) => {
    update(bookData.book, bookData.shelf).then(() => this.onLoadData())
  }

  getShelfByBook = (book) => {
    const foundBook = this.state.books.find((stateBook) => book.id === stateBook.id);
    return foundBook ? foundBook.shelf : 'none';
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads
            books={this.state.books}
            onBookUpdate={this.onBookUpdate}
          />
        )} />
        <Route path="/search" render={({ history }) => {

          const _selfHistory = history.listen(() => {
            this.setState({ foundedBooks: [] })
            _selfHistory();
          });
         
          return (
          <BookSearch
            bookStatus={this.getShelfByBook}
            foundedBooks={this.state.foundedBooks}
            onSearch={this.onSearch}
            onBookUpdate={this.onBookUpdate}
            errors={this.state.searchErrors}
          />
        )}} />
      </div>
    )
  }
}

export default BooksApp
