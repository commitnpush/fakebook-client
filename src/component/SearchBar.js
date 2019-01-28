import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'css/SearchBar.css';
import RecentSearch from './RecentSearch';

class SearchBar extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            searchText: '',
            isFocus:false,
            recentSearchTexts:[]
        }
    }
    componentDidMount(){
      this.getRecentSearch();
    }
    getRecentSearch = async () => {
        const recentSearchTexts = await fetch("http://localhost:8080/recent-search")
        .then(response => response.json())
        .catch(err => console.log(err));
        console.log(recentSearchTexts);
        this.setState({recentSearchTexts});

    }
    addRecentSearch = async (text) => {
      const recentSearchTexts = await fetch("http://localhost:8080/recent-search",
        {
          method:"post",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({"text":text}),
      })
      .then(response => response.json())
      .catch(err => console.log(err));
      this.setState({recentSearchTexts});
    }
    searchHandler = (e) => {
        this.setState({
            searchText : e.target.value
        })
    }
    submitHandler = (e) => {

        this.addRecentSearch(document.getElementById("SearchBar__input").value);
    }
    focusHandler = (e) => {
        document.getElementById("SearchBar__btn").classList.toggle("SearchBar__btn--focus");
        document.querySelector(".SearchBar__btn__svg").classList.toggle("SearchBar__btn__svg--focus");
        this.setState({
            searchText : e.target.value,
            isFocus : !this.state.isFocus
        })
    }
    render(){
        return (
            <div className="SearchBar">
                <input id="SearchBar__input"className="SearchBar__input" type="text" value={this.state.searchText} placeholder="검색" onChange={this.searchHandler} onFocus={this.focusHandler} onBlur={this.focusHandler}/>
                <button id="SearchBar__btn" className="SearchBar__btn" type="button" onClick={this.submitHandler}>
                    <FontAwesomeIcon id="SearchBar__btn__svg" icon="search" className="SearchBar__btn__svg"/>
                </button>
                {this.state.isFocus?(<RecentSearch recentSearchTexts={this.state.recentSearchTexts}/>):null}
            </div>
        );
    }
}
export default SearchBar;