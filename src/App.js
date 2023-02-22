import React from "react";
import { FormControl, Button } from "react-bootstrap";

// import componen
import TodoItem from "./component/todoItem";

// ini class componen
class App extends React.Component {
  //extends inhirend class app di buat dengan cetakan kelas React.componen
  constructor(props) {
    super(props);
    this.state = {
      activities: [
        { id: 1, name: "makan" },
        { id: 2, name: "tidur" },
        { id: 3, name: "coding" },
        { id: 4, name: "mandi" },
      ],
    };
  }

  // componentDidMount() {
  //   //hanya terpanggil sekali setelah render berjalan pertama kali
  //   alert(`componen did mount`);
  // }

  // componentWillUpdate() {
  //   alert(`componen update`);
  // }

  //ini untuk get valur input yg di onclick
  onAdd = () => {
    let newTodo = this.refs.Todo.value;
    let id = this.state.activities.length + 1;

    //menyiapkan array untuk state yg baru
    let temArr = [...this.state.activities];
    //menambahkan data baru ke dalam array sementara "temArr"
    temArr.push({ id, name: newTodo });
    //mengganti state activities menjadi temArr, dimana temArr adalah array yg sudah di masukan data baru
    this.setState({ activities: temArr });
    //untuk mengosongkan kembali form input todo
    this.refs.Todo.value = "";
  };

  onDelete = (id) => {
    let tempArr = this.state.activities.filter((item) => {
      return item.id !== id;
    });
    this.setState({ activities: tempArr });
  };

  //looping untuk menampilkan TodoItem, di jadikan function
  showData = () => {
    return this.state.activities.map((item) => {
      return (
        <TodoItem
          data={item}
          key={item.id}
          delete={() => this.onDelete(item.id)}
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
    width: "35vh",
    display: "flex",
  },
};

export default App;
