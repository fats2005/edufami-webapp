import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Feedback.module.scss";

class Feedback extends Component {
  state = {
    good: {
      label: "!Muy bien! Respuesta correcta",
      buttonText: "Continuar",
      icon: "step_correct.svg",
      isGood: true,
      iconButton: "angle-right"
    },
    bad: {
      label: "!Intenta de nuevo! respuesta incorrecta",
      buttonText: "Volver a Intentar",
      icon: "step_incorrect.svg",
      isGood: false,
      iconButton: "redo"
    },
    timerPosition: 0,
    disabledButton: true
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.feedback.show) {
      this.startTimer();
    }
  }

  startTimer() {
    this.setState({ disabledButton: true });
    let number = 0;
    let miliseconds = 200;
    let interval = setInterval(() => {
      this.setState({ timerPosition: number++ });
      if (number > 50) {
        clearInterval(interval);
        this.setState({ disabledButton: false });
      }
    }, miliseconds);
  }
  render() {
    const {
      feedback: { show, status, text },
      buttonAction
    } = this.props;

    const { timerPosition, disabledButton } = this.state;

    return (
      <div
        className={
          classes.Feedback +
          " bg-primary-light " +
          (show ? classes.IsVisible : "")
        }
      >
        <h5>{status && this.state[status].label}</h5>
        <p>{text}</p>
        <img
          src={`/images/icons/${this.state[status] && this.state[status].icon}`}
          height="75px"
          alt="Opcion"
        />
        <div>
          <div className="progress ">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{
                width: (timerPosition / 50) * 100 + "%"
              }}
              aria-valuenow={(timerPosition / 50) * 100}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div>
          <button
            className="btn btn-secondary bg-secondary-dark"
            onClick={buttonAction}
            disabled={disabledButton}
          >
            {status && this.state[status].buttonText}{" "}
            {status && (
              <FontAwesomeIcon icon={this.state[status].iconButton} size="lg" />
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default Feedback;
