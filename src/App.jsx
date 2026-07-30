import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import {v4} from "uuid"; //gera id aleatoria, biblioteca

function App (){
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

useEffect(()=>{
  localStorage.setItem("tasks", JSON.stringify(tasks));//"tasks" é como eu vou me referir aos dados para ter acesso,json.stringfy(tasks),são os dados em si 
},[tasks])//so vai executar a funcao quando task for alterada, msm que seja
//clicar, deletar, adicionar, qualquer coisa q altere

useEffect(()=> {//exemplo real de uso de api num caso desses, por exemplo os dados estarem no banco de dados
  const fetchTasks = async () => {
   //CHAMAR API
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3',{
    method: 'GET'
  });
  //PEGAR OS DADOS QUE ELA RETORNA
  const data = await response.json(); 
  console.log(data);
  //ARMAZENAR/PERSISTIR OS DADOS QUE ELA RETORNA
  setTasks(data);//faz aparecer na tela, pois mexe no useState 
  }
  fetchTasks();
}, [])

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