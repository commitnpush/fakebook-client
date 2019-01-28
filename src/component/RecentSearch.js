import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'css/RecentSearch.css';
import { map } from 'rsvp';

export default class RecentSearch extends Component{
    constructor(){
        super(...arguments);
        
    }
    render(){
        return (
            <div className="RecentSearch">
                <header className="RecentSearch__header">
                    <span>최근검색</span>
                    <span className="RecentSearch__header__update">수정</span>
                </header>
                <section>
                    {this.props.recentSearchTexts.map((v,i)=>{
                        return (
                          <div className="SearchTextBox" key={i}>
                            <div className="RecentSearch__SearchTextIcon">
                              <FontAwesomeIcon icon="search"/>
                            </div>
                            <div className="RecentSearch__SearchText">{v.text}</div>
                          </div>
                        );
                    })}
                </section>
            </div>
        );
    }
}
