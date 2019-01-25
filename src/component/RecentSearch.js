import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'css/RecentSearch.css';
import { map } from 'rsvp';

export default class RecentSearch extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            searchTexts:["코미디 빅리그", "세월호","스카이캐슬"]
        }
    }
    render(){
        return (
            <div className="RecentSearch">
                <header className="RecentSearch__header">
                    <span>최근검색</span>
                    <span className="RecentSearch__header__update">수정</span>
                </header>
                <section>
                    {this.state.searchTexts.map(v=>{
                        return (
                          <div class="SearchTextBox">
                            <div class="RecentSearch__SearchTextIcon">
                              <FontAwesomeIcon icon="search"/>
                            </div>
                            <div class="RecentSearch__SearchText">{v}</div>
                          </div>
                        );
                    })}
                </section>
            </div>
        );
    }
}
