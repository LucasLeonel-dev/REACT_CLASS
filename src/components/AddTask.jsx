import { useState } from "react";

function AddTask ({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription]= useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">{/*flex flex col faz ficar em colunas*/}
            <input 
            type="text" 
            placeholder="Digite o titulo da tarefa"
            className="border border-slate-400 outline-slate-500 px-4 py-2 rounded-md"
            value = {title} 
            onChange={(event) => setTitle(event.target.value)} //o event.target.value pega oq o usuario digitou no input
            //o event é usado para acessar o target (é o elemento do DOM que disparou o evento, nesse caso o input)
            // e o value é o valor  
            />
            <input 
            type="text" 
            placeholder="Digite a descrição da tarefa"
            className="border border-slate-400 outline-slate-500 px-4 py-2 rounded-md"
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