import React from "react";
import { FormControl, Button } from "react-bootstrap";

// import react-redux
import { connect } from "react-redux";
// import componen
import TodoItem from "../component/todoItem";

// import action
import { getData, addData, delData, Complete } from "../redux/action";

// ini class componen
class TodoPages extends React.Component {
  fetchData = () => {
    // Axios.get("http://localhost:2000/activities").then((res) => {
    this.props.getData();
  };

  componentDidMount() {
    this.fetchData();
  }
  onCompleted = (id) => {
    this.props.Complete(id);
  };

  onAdd = () => {
    let newTodo = this.refs.Todo.value;
    // siapkan objek untuk push ke data base
    let obj = {
      name: newTodo,
      isCompleted: false,
    };
    // menambah data baru
    this.props.addData(obj);
    this.refs.Todo.value = "";
  };

  onDelete = (id) => {
    this.props.delData(id);
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

export default connect(mapStateToProps, {
  getData,
  addData,
  delData,
  Complete,
})(TodoPages);
