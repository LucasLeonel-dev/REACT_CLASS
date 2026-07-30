function Button (props){
    return(
        <button 
        {...props}//exemplo mais fácil que eu falei no outro arquivo - src/components/Input
        className="bg-slate-400 text-white p-2 rounded-md">
            {props.children} {/*para puxar oque foi escrito no button precisa disso ai*/}
        </button>
    )
}

export default Button;