import React, { useState } from 'react';
import { Button, TextField, Card, IconButton, List, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    // Проверка, что введенная задача не пустая
    if (task.trim() !== '') {
      // Добавление новой задачи в массив задач
      setTasks([...tasks, task]);
      setTask(''); 
    }
  };
//удаление
const handleDeleteTask = (index) => {
  //замена массива() берем текущий,фильтруем его по индексу кнопки)
  setTasks(tasks.filter((task, i) => i !== index));
};

  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="Новая задача"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleAddTask}
        style={{ height: '50px' }}
      >
        Добавить задачу
      </Button>
      <List style={{ marginTop: 20 }}>
        {tasks.map((task, index) => (
          <ListItem key={index} style={{ marginBottom: 10 }}>
            <Card style={{ padding: 10, display: 'flex', alignItems: 'center', width: '100%' }}>
              <Typography variant="body1" style={{ flexGrow: 1 }}>
                {task}
              </Typography>
              <IconButton onClick={() => handleDeleteTask(index)} color="error">
                <DeleteIcon />
              </IconButton>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;