import React, { Component } from 'react';
import "css/Articles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Articles extends Component{
  constructor(){
    super(...arguments);
    this.state = {
      articles : []
    }
  }
  componentDidMount(){
    this.getArticles();
  }

  getArticles = () =>{
    fetch("http://localhost:8080/article")
    .then(response => response.json())
    .then(articles => {
      this.setState({articles});
    })
    .catch(err => console.log(err));
  }
  render(){
    return (
      <div className="Articles">
        <ArticleInput getArticles={this.getArticles}/>
        {this.state.articles.map(v => <Article key={v.id} article={v}/>)}
      </div>
    );
  }
}

class ArticleInput extends Component{
  writingHandler = (e)=>{
    fetch("http://localhost:8080/article",
          {
            headers:{'Content-Type':'application/json'},method:"post",
            body:JSON.stringify(
              {content:document.getElementById("content").value})
          }
    )
    .then(response=>{
      document.getElementById("content").value = "";
      this.props.getArticles();
    });
  }
  focusHandler = (e)=>{
    e.target.classList.toggle("is_writing");
    document.getElementById("write-btn").classList.toggle("writing");
  }
  render(){
    return(
      <div className="ArticleInput">
        <div className="ArticleInput__header">게시물 만들기</div>
        <div className="ArticleInput__content">
          <img className="ArticleInput__img" src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p320x320/14590396_1116166391832697_5236054864862170502_n.jpg?_nc_cat=100&_nc_ht=scontent-icn1-1.xx&oh=7e818f72442b1417bec8b798ed445bd8&oe=5CC74D33" alt=""/>
          <input id="content" className="ArticleInput__question" type="text" placeholder="장동혁님, 무슨생각을 하고 계신가요?"
          onFocus={this.focusHandler} onBlur={this.focusHandler}/>
        </div>
        <div className="AriticleInput__footer">
          <div className="ArticleInput__footer__menu">
          <FontAwesomeIcon icon="image"/> 사진/동영상</div>
          <div className="ArticleInput__footer__menu"><FontAwesomeIcon icon="user"/> 친구 태그하기</div>
          <div className="ArticleInput__footer__menu"><FontAwesomeIcon icon="smile-wink"/> 기분/활동</div>
          <div className="ArticleInput__footer__menu"><FontAwesomeIcon icon="ellipsis-h"/></div>
        </div>
        <div className="ArticleInput__button">
          <button  id="write-btn" type="button" onClick={this.writingHandler}>공유하기</button>
        </div>
      </div>
    );
  }
}


function Article({article}){
  return (
    <div className="Article">
      <div className="Article__header">
        <img className="Article__header__img" src="https://placeimg.com/200/200/any" alt=""/>
        <div className="Article__header__title">
          <div className="Article__header__title__text">
            {article.user_id + " "} 
            {article.group_name ? <FontAwesomeIcon className="NavIcon__svg" icon="caret-right"/>  : ''}
            {article.group_name ? " " + article.group_name : ''}
          </div>
          <div className="Article__header__title__time">
            {timeParser(article.regdate)}
          </div>
        </div>
      </div>
      <div className="Article__content">
        {article.content}
      </div>
      <div className="Article__footer">
        <div className="Aricle__footer__menu"><FontAwesomeIcon icon={["far","thumbs-up"]}/> 좋아요</div>
        <div className="Aricle__footer__menu"><FontAwesomeIcon icon={["far","comment-alt"]}/> 댓글</div>
        <div className="Aricle__footer__menu"><FontAwesomeIcon icon={["fas", "reply"] } flip="horizontal"/> 공유하기</div>
      </div>
    </div>
  )
  function timeParser(time){
    time = new Date(time);
    const now = new Date();
    let timeString = '';
    if((time.getYear()+time.getMonth()+time.getDate()).toString() !== 
        (now.getYear()+now.getMonth()+now.getDate()).toString()){
      timeString = toDate(time);
    }else{
      timeString = toTime(now, time);
    }
    return timeString;
  }

  function toDate(fullDate){
    return `${fullDate.getFullYear()}-${fullDate.getMonth()<9?'0':''}${fullDate.getMonth()+1}-${fullDate.getDate()<10?'0':''}${fullDate.getDate()}`;
  }

  function toTime(now,fullDate){
    if(now.getHours() === fullDate.getHours()){
      return now.getMinutes() - fullDate.getMinutes() + '분';
    }
    return now.getHours() - fullDate.getHours() + '시간';
    
  }
}