import React from "react";

import { ReactComponent as CheckIcon } from "../Icons/check.svg";

class FormFields extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }
    
  handleTextChange(event) {
    this.setState({ quoteText: event.target.value });
  }
    
  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }
    
  handleYearChange(event) {
    this.setState({ year: event.target.value });
  }

  

export default FormFields;
