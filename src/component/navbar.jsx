import React from "react";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";

class NaviBar extends React.Component {
  render() {
    return (
      <Navbar style={styles.container} bg="dark">
        <h3>TO DO LIST</h3>
        <h3>You Have 0 To Do Item(s)</h3>
      </Navbar>
    );
  }
}
export default NaviBar;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-Between",
    color: "white",
  },
};
