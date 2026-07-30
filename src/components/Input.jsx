function Input(props){
    return(
         <input 
            type={props.type} 
            placeholder={props.placeholder}
            className="border border-slate-400 outline-slate-500 px-4 py-2 rounded-md"//estilização 
            value = {props.value} 
            onChange={props.onChange} //recebe o valor da pagina, por isso o props, porem ja possui a estilização 
            />

            //existe um modo mais MT facil do que escrever tudo que seria so colocar o spread, {...props}, que ele ja receberia todos os dados
            //mas vou deixar assim afim de aprender 
    );
}

export default Input;