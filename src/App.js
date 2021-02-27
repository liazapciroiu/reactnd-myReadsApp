import React from 'react'
import './App.css'
import BookSearch from './BookSearch'
import MyReads from './MyReads'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],


  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads/>
        )} />
        <Route path="/search" render={() => (
          <BookSearch />
        )} />
      </div>
    )
  }
}

export default BooksApp
