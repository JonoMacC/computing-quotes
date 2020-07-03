import React from "react";
import "./Author.css";
import "./scanlines.css";

class Author extends React.Component {
  getDod() {
    if (this.props.dod) {
      return this.props.dod;
    } else {
      return "";
    }
  }

  renderDob() {
    if (this.props.dob) {
      return (
        <p>
          {this.props.dob} — {this.getDod()}
        </p>
      );
    } else {
      return null;
    }
  }

  renderBio() {
    if (this.props.bio) {
      return <p className="bio">{this.props.bio}</p>;
    } else {
      return null;
    }
  }

  renderImg() {
    if (this.props.imgSrc) {
      return (
        <div className="img-container scanlines">
          <img
            src={`${process.env.PUBLIC_URL}${this.props.imgSrc}`}
            alt={this.props.name}
          />
        </div>
      );
    } else {
      return (
        <div className="img-container scanlines">
          <img className="grayBox" alt="" />
        </div>
      );
    }
  }

  render() {
    return (
      <li className="ListItem">
        <figure>
          {this.renderImg()}
          <figcaption>
            <h2>{this.props.name}</h2>
            {this.renderDob()}
          </figcaption>
        </figure>
        {this.renderBio()}
      </li>
    );
  }
}

export default Author;
