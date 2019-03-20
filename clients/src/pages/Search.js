import React, { Component } from 'react'
import { BookSearch, Input, SearchBtn} from '../components/BookSearch'

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <BookSearch />
        <form>
          <Input />
          <SearchBtn />
        </form>
      </div>
    )
  }
}