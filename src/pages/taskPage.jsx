import { useSearchParams } from "react-router";

function taskPage(){
    const [searchParams]= useSearchParams(); //o hook faz a url virar oq eu colocar, levando o user para outra page
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
    <div className="w-screen h-screen bg-slate-500 p-6">
        <h1>{title}</h1>
        <p> {description} </p>
    </div>
)}

export default taskPage;