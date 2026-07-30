import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";
import {v4} from "uuid"; //gera id aleatoria, biblioteca

function App (){
  const [tasks, setTasks] = useState([
    {
    id: 1,
    title: 'Estudar React',
    description: 'estudar React.js e Vite',
    isCompleted: false,
    },
    {
    id: 2,
    title: 'Estudar Node',
    description: 'estudar Node.js e Express',
    isCompleted: false
    },
    {
    id: 3,
    title: 'Estudar Vite',
    description: 'estudar Vite e React',
    isCompleted: false
  },
]);

function onTaskClick(taskId){
  const newTasks = tasks.map(task => {
    if (task.id === taskId){
      return {...task, isCompleted: !task.isCompleted}; //volta tudo q tinha na task mas com o isCompleted invertido 
    }
    return task;
  });
  setTasks(newTasks);
}

function onDeleteTaskClick(taskId){
  //pra que se dar o trabalho de um map para excluir so uma se vc pode manter oq n for clicado
  //filter procura tudo diferente do task.id == taskId 
  const newTasks = tasks.filter(task => task.id != taskId)
  setTasks(newTasks);
}

function onAddTaskSubmit (title, description){
  const newTask= {
    id: v4(), //gera id aleatoria, biblioteca
    title: title,
    description: description,
    isCompleted: false,
  }
  setTasks([...tasks, newTask]);//tudo oq estava antes + newTask
} 

  return(
    <div className="w-screen h-screen bg-slate-700 flex justify-center p-6">
      <div className="w-125 space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks 
          tasks={tasks}  
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}/> 
        {/*tudo que vc passa aqui vc tem acesso no seu componente por meio do props, até funcao*/}
      </div>
    </div>
  )
}

export default App; 