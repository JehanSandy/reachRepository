import React from "react";
import { Navbar } from "react-bootstrap";

// connect react redux
import { connect } from "react-redux";

class NaviBar extends React.Component {
  render() {
    // console.log(this.props.listActivity);
    return (
      <Navbar style={styles.container} bg="dark">
        <h3>{this.props.namaUser}</h3>
        <h3>You Have {this.props.listActivity.length} To Do Item(s)</h3>
      </Navbar>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-Between",
    color: "white",
    padding: "0.5rem",
  },
};

const mapStateToProps = (state) => {
  return {
    listActivity: state.todo.activities,
    namaUser: state.todo.userName,
  };
};

export default connect(mapStateToProps)(NaviBar);
