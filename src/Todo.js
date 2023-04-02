import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { addTodo, deleteTodo } from './redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const handleSubmit = (values) =>{
    dispatch(addTodo({
      title:values.title
    }))
  }
  const handleDelete = (values) =>{
    dispatch(deleteTodo({
      id: values.id
    }))
  }
  return(
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{title:''}}
      onSubmit={(values, {resetForm}) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <Field id="title" name="title" type="text" placeholder="Write your ToDo Here" />
        <Button variant='contained' sx={{height:20}} type="submit">Submit</Button>
      </Form>
    </Formik>
<TableContainer component={Paper}>
  <Table>
    <TableHead><h2>ToDo List</h2></TableHead>
     <TableBody>
      {todos.map((todo) => (
        <TableRow>
          <TableCell>{todo.title}</TableCell>
          <TableCell align = 'right'><Button variant='contained' color="error" onClick={() => handleDelete(todo)}> Delete </Button></TableCell>
        </TableRow>
      ))}
     </TableBody>
  </Table>
</TableContainer>

  </div>
  )
};

export default Todo
