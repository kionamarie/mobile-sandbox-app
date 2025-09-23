import { FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const seventh = () => {

    // Define states
    const[todos, setTodos] = useState([]);
    const[newTask, setNewTask] = useState('');

    // Load tasks from AsyncStorage when the component mounts
    useEffect(() => {
        const loadTodos = async () => {
            try {
                const stored = await AsyncStorage.getItem('todos');
                if (stored) setTodos(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to load todos.", e);
            }
        };
        loadTodos();
    }, []);

    // Save tasks to AsyncStorage whenever they change
    useEffect(() => {
        const saveTodos = async () => {
            try {
                await AsyncStorage.setItem('todos', JSON.stringify(todos));
            } catch (e) {
                console.error('Failed to save todos.', e);
            }
        };
        saveTodos();
    }, [todos]);

    // Create new task
    const addTask = () => {
        if (newTask.trim() === "") return;
        const newTodo = {
            id: Math.random().toString(36).substr(2,9),
            name: newTask,
            status: 'pending',
            priority: false,
        };
        setTodos([newTodo, ...todos]);

        setNewTask('');
    };

    // Remove existing task
    const removeTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id)); // Filter to keep todos that do not match the passed in todo
    };

    // Toggle task status
    const toggleTaskStatus = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, status: todo.status === 'pending' ? 'completed' : 'pending' };
            }
            return todo;
        }))
    };
  
    // Toggle priority flag
    const togglePriority = (id) => {
        setTodos(todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, priority: todo.priority === false ? true : false };
        }
        return todo;
    }))};

    const renderItem = ({ item }) => (
    <View style={styles.todoCard}>
      <TouchableOpacity onPress={() => togglePriority(item.id)} style={{ marginRight: 12 }}>
        <Icon
          name={item.priority ? 'star' : 'star-outline'}
          size={24}
          color={item.priority ? 'gold' : '#ccc'}
        />
      </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleTaskStatus(item.id)} style={{ flex: 1 }}>
        <Text style={[styles.todoText, item.status === 'completed' && styles.completed]}>
            {item.name}
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeTask(item.id)}>
        <Text style={styles.removeButtonText}>✕</Text>
        </TouchableOpacity>
    </View>
    );

  return (
  <View style={styles.container}>
    <Text style={styles.title}>To-Do List</Text>
    <View style={styles.inputRow}>
      <TextInput
        style={styles.input}
        placeholder='New Task'
        value={newTask}
        onChangeText={setNewTask}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
      style={{ width: "100%" }}
    />
  </View>
);
}

export default seventh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "darkolivegreen",
    marginBottom: 24,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    width: "100%",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 8,
  },
  addButton: {
    backgroundColor: "darkolivegreen",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  listContent: {
    paddingBottom: 24,
    width: "100%",
  },
  todoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: "space-between",
  },
  todoText: {
    fontSize: 18,
    color: "#333",
    flex: 1,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  removeButton: {
    marginLeft: 16,
    padding: 4,
  },
  removeButtonText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
});