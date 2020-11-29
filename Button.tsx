import React from 'react';
import "./Button.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default class HeartButton extends React.Component {
  state = {
    likes: 0
  };

  addLike = () => {
    let newCount = this.state.likes + 1;
     this.setState({
     likes: newCount
     });
  };

  render() {
    let likes = this.state.likes;
    let likesStr = "";
    if (likes > 9)
      likesStr = " 9+";
    else if (likes > 0)
      likesStr = " " +likes.toString();

      return (
        <div>
          <button className="button" onClick={this.addLike}>
          <FontAwesomeIcon icon={faHeart}  style={{ color: "red" }}/>
            {likesStr}
          </button>
        </div>
      );
  }
}
