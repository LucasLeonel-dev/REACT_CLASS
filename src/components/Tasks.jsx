import { ChevronRight } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router';

function Tasks (props){//inves de props eu poderia colocar as funcoes diretamente aq, para n ter que ficar digitando props.func or var 
    const navigate = useNavigate(); //hook que leva para outra pagina, com o url criado por mim

      function onSeeDetailsClick(task) {
        const query = new URLSearchParams(); //URLSearchParams() faz o tratamento da string para n ter complicações
        query.set("title", task.title);//puxar task title
        query.set("description", task.description);//puxar task description
        navigate(`/task?${query.toString()}`);//como vai ficar http, com o query  
    }
    return (
    <ul className="space-y-4 p-4 bg-slate-200 shadow rounded-md">    
        {/*props é para anunciar que vc está puxando de outro arq, ele nn vai saber que oq é sem o props
        -tasks é o nome do props
        -task é como vc vai se referir a oq vc vai manipular dentro do map,
        nesse caso as propria task q vc puxou do outro arquivo
        -key serve para identificar cada coisa que está dentro do map*/}
        {props.tasks.map((task) => (
         <li key={task.id} className="flex gap-2">
        {/*-por ser uma funcao ele precisa do argumento, ent vc transforma o props em uma arrow function
        -ja esta mudando o estado de completed ao clicar, ent vc tem que colocar algo que vai mudar junto do estado.
        Para isso eu vou colocar chaves{} e vou tacar um js com css la dentro*/}
            <button 
            onClick={() => props.onTaskClick(task.id)} 
            className={`bg-slate-400 text-white p-2 rounded-md text-left w-full ${task.isCompleted && 'line-through'}`}>{task.title}</button>
            <button
            //arrow function pq vou passar parametros(para ter aceso a title e desc), mas bom manter consistencia
            onClick={()=>onSeeDetailsClick(task)} 
            className="bg-slate-400 text-white p-2 rounded-md">
                <ChevronRight /> 
            </button>
             <button 
             onClick={() => props.onDeleteTaskClick(task.id)}
             className="bg-slate-400 text-white p-2 rounded-md">
                <Trash2 /> 
            </button>
         </li>
         ))}
    </ul>
    );
}

export default Tasks; 