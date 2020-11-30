import React from 'react';
import "./Button.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export class Button extends React.Component<{ icon?: any, text?: string }, {}> {
  constructor(props) 
    {
      super(props);
    };
  
  render() {
    let icon;
    if (this.props.icon)
      icon = <FontAwesomeIcon icon={this.props.icon} style={{ color: "red" }}/>;

    return (
      <div>
        <button className="button">
        {icon} {this.props.text}
        </button>
      </div>
    );
  }
}


export class HeartButton extends React.Component<{}, { likes: number }> {
  constructor(props)
    {
      super(props);
      this.state = { likes: 0 };
    };


  addLike = () => {
    let newCount = this.state.likes + 1;
     this.setState({
     likes: newCount
     });
  };

  render() {
    let iconElement = <FontAwesomeIcon icon={faHeart}  style={{ color: "red" }}/>;

    let likes = this.state.likes;
    let likesStr = "";
    if (likes > 9)
      likesStr = " 9+";
    else if (likes > 0)
      likesStr = " " +likes.toString();

    

      return (
        <div>
          <button className="button" onClick={this.addLike}>
            {iconElement}
            {likesStr}
          </button>
        </div>
      );
  }
}
