import React, { Component } from "react";
import "css/App.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "./component/Nav";
import Articles from "./component/Articles";

//font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, fas);

//font-awesome
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requesting: false,
      articles: [],
      keyword: ""
    };
  }
  keywordHandler = keyword => {
    this.setState({
      keyword
    });
  };
  render() {
    return (
      <div className="App">
        <Nav
          getArticles={this.getArticles}
          keyword={this.state.keyword}
          keywordHandler={this.keywordHandler}
        />
        <Container
          articles={this.state.articles}
          getArticles={this.getArticles}
        />
      </div>
    );
  }
  componentDidMount() {
    this.getArticles();
    window.addEventListener("scroll", this.scrollHandler);
  }

  scrollHandler = e => {
    if (this.state.requesting) return;
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    var scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    var clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      let lastIndex = this.state.articles[this.state.articles.length - 1].id;
      setTimeout(() => {
        this.getMoreArticles(lastIndex, this.state.keyword);
      }, 200);
      this.setState({ requesting: true });
    }
  };
  getMoreArticles = (id, keyword) => {
    let url = `http://localhost:8080/article/more/${id}`;
    if (typeof keyword !== "undefined") {
      url += "/" + keyword;
    }
    fetch(url)
      .then(response => response.json())
      .then(articles => {
        if (articles.length === 0) return;
        this.setState({ articles: this.state.articles.concat(articles) });
        this.setState({ requesting: false });
      })
      .catch(err => console.log(err));
  };
  getArticles = keyword => {
    let url = "http://localhost:8080/article";
    if (typeof keyword !== "undefined") {
      url += "/" + keyword;
    }
    fetch(url)
      .then(response => response.json())
      .then(articles => {
        this.setState({ articles });
      })
      .catch(err => console.log(err));
  };
}
function Container(props) {
  return (
    <div className="content container">
      <div className="col-pd-1" />
      <div className="left-menu" />
      <Articles articles={props.articles} getArticles={props.getArticles} />
      <div className="right-menu" />
      <div className="col-pd-2" />
    </div>
  );
}

export default App;
