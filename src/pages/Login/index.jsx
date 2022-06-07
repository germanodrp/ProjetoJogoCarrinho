import { useState } from "react"

export function Login(){

  const[nome, setNome] = useState("")
  
  function trocarTela(){
    console.log(nome)
    
  }
  return(
  <>
  
      <input  
        type="text" 
        Placeholder="digite o nome" 
        onChange={setNome}
      />
  
      <button onClick={trocarTela}>Jogar</button>
      
  </>      
  )
}