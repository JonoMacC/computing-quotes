import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <p>
          Coded with <span className="proportional">♥</span> by{" "}
          <a href="https://twitter.com/jonmaccaull">Jon MacCaull</a>. See on{" "}
          <a href="https://github.com/JonoMacC/computing-quotes">Github</a>.
        </p>
      </footer>
    );
  }
}

export default Footer;
