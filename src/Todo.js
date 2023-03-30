import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

const Todo = () => {
  const [todos,SetTodos] = useState([]);
  const handleSubmit = (values) =>{
    const newTodo = {todo: values.todo, id: crypto.randomUUID()};
    SetTodos([...todos,newTodo]);
  }
  const handleDelete = (id) =>{
    const newTodos = todos.filter(todo => todo.id != id);
    SetTodos(newTodos);
  }
  return(
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{todo:''}}
      onSubmit={(values) => {handleSubmit(values)}}
    >
      <Form>
        <label htmlFor="todo">Add ToDo </label>
        <Field id="todo" name="todo" type="todo" placeholder="Write your ToDo Here" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
<TableContainer component={Paper}>
  <Table>
    <TableHead><h2>ToDo List</h2></TableHead>
     <TableBody>
      {todos.map((todo) => (
        <TableRow>
          <TableCell>{todo.todo}</TableCell>
          <TableCell><Button color="error" onClick={() => handleDelete(todo.id)}> Delete </Button></TableCell>
        </TableRow>
      ))}
     </TableBody>
  </Table>
</TableContainer>

  </div>
  )
};

export default Todo
