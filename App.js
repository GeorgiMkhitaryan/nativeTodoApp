import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { Todoscreen, TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    {id:12, title: "React Native"},
    {id:10, title: "Java Script"},
    {id:13, title: "PHP"}
  ]);

  const addTodo = (title) => {
    setTodos(prev => [...prev,
      {
      id: Date.now().toString(),
      title
      }
    ])
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id != id))
  }

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId}/>
  )

  if(todoId){
    let selectedTodo = todos.find(todo => todo.id === todoId)
    content = <Todoscreen goBack={() => setTodoId(null)} todo={selectedTodo} onRemove={removeTodo}/>
  }

  return (
    <View>
      <Navbar/>
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
