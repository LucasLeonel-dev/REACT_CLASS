import { useState } from "react";
import Input from "./Input";

function AddTask ({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription]= useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">{/*flex flex col faz ficar em colunas*/}
            <Input //criei uma função(componente funcional) para n ter que repetir a mesma estilização em 2 htmls ou mais 
            type="text" 
            placeholder="Digite o titulo da tarefa"
            value = {title} 
            onChange={(event) => setTitle(event.target.value)} //o event.target.value pega oq o usuario digitou no input
            //o event é usado para acessar o target (é o elemento do DOM que disparou o evento, nesse caso o input)
            // e o value é o valor  
            />
            <Input
            type="text" 
            placeholder="Digite a descrição da tarefa"
            value = {description}
            onChange={(event) => setDescription(event.target.value)} 
            />
            <button className="bg-slate-600 text-white px-4 py-2 rounded-md font-medium"
            onClick={()=> {
                //verificar se o title e descrpt estao preenchidos, trim é para tirar o espaço em branco
                if(!title.trim() || !description.trim()){
                    return alert("Os campos precisam ser preenchidos")
                }
                onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");

            }}>
            Adicionar
            </button>
        </div>
    )
}

export default AddTask;