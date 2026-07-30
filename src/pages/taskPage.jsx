import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

function TaskPage(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams(); //o hook faz a url virar oq eu colocar, levando o user para outra page
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-125 mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}//-1 faz voltar para pagina anterior, por ser uma funcao precisa do arrow function para chamar 
            className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronLeft />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;