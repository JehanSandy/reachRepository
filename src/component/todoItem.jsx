import React from "react";
import { Button } from "react-bootstrap";

class TodoItem extends React.Component {
  // componentWillUnmount() {
  // alert("component will unmount");
  // }
  render() {
    return (
      <div style={styles.container}>
        <p style={styles.p}>
          {this.props.data.id}. {this.props.data.name}
        </p>
        <div>
          <Button
            variant="outline-danger"
            className="me-2"
            onClick={this.props.delete}
          >
            Delete
          </Button>
          <Button
            variant="outline-success"
            onClick={this.props.complete}
            disabled={this.props.data.isCompleted}
          >
            {this.props.data.isCompleted ? "Finis" : "Completed"}
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "darkgrey",
    width: "25vw",
    hight: "10vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    borderRadius: "10px",
    marginBottom: "0.5rem",
  },
  p: {
    margin: "0",
  },
};

export default TodoItem;
