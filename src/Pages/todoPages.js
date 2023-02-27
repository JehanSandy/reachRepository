import React from "react";
import Axios from "axios";
import { FormControl, Button } from "react-bootstrap";

// import react-redux
import { Connect } from "react-redux";
// import componen
import TodoItem from "../component/todoItem";

// import action
import { getData } from "../redux/action";
import { connect } from "react-redux";

// ini class componen
class TodoPages extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activities: [],
  //   };
  // }

  fetchData = () => {
    Axios.get("http://localhost:2000/activities").then((res) => {
      this.props.getData(res.data); //di kirim ke getData get data punya properti type dan peyload => payload membawa data
      // this.setState({ activities: res.data });
    });
  };

  componentDidMount() {
    this.fetchData();
  }
  onCompleted = (id) => {
    Axios.patch(`http://localhost:2000/activities/${id}`, {
      isCompleted: true,
    }).then((res) => {
      this.fetchData();
    });
  };

  onAdd = () => {
    let newTodo = this.refs.Todo.value;
    // siapkan objek untuk push ke data base
    let obj = {
      name: newTodo,
      isComplated: false,
    };
    // menambah data baru
    Axios.post("http://localhost:2000/activities", obj).then((res) => {
      this.fetchData();
      this.refs.Todo.value = "";
    });
  };

  onDelete = (id) => {
    Axios.delete(`http://localhost:2000/activities/${id}`).then((res) => {
      this.fetchData();
    });
  };

  //looping untuk menampilkan TodoItem, di jadikan function
  showData = () => {
    //map tidak lagi ke state.activities tapi ke props.listActivity
    return this.props.listActivity.map((item) => {
      return (
        <TodoItem
          data={item}
          key={item.id}
          delete={() => this.onDelete(item.id)}
          complete={() => this.onCompleted(item.id)}
          // () => untuk mencegah function onDelete aktif terus sebelum di click
        />
      );
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <h1>Todo List</h1>
        {this.showData()}
        <div style={styles.input}>
          <FormControl placeholder="Input new todo" ref="Todo" />
          <Button variant="primary" className="ms-1" onClick={this.onAdd}>
            Add
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: "1.5rem",
  },
  input: {
    width: "25vh",
    display: "flex",
    justifyContent: "space-between",
  },
};

//ini untuk mengambil data dari globalState
const mapStateToProps = (state) => {
  return {
    listActivity: state.todo.activities,
  };
};

export default connect(mapStateToProps, { getData })(TodoPages);
