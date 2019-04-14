import React, { Component } from "react";
import trainingService from "../../services/trainingService";

class Footer extends Component {
  state = {
    showFooter: true
  };

  componentDidMount() {
    const isLessonInProgress = trainingService.isLessonInProgress();
    if (isLessonInProgress) {
      this.setState({ showFooter: false });
    }
  }
  render() {
    const { showFooter } = this.state;
    return (
      <React.Fragment>
        {showFooter && (
          <footer>
            <img src={"/images/wfp_blue.png"} alt="Wfp Logo" />
          </footer>
        )}
      </React.Fragment>
    );
  }
}

export default Footer;
