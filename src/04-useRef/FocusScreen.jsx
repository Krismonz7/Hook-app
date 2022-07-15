import { useRef } from "react"


export const FocusScreen = () => {

    const onClick = ()=>{
        //document.querySelector('input').select()
        inputRef.current.select()
    }

    const inputRef= useRef();
    

  return (
    <>
    
    <h1>FocusScreen</h1>
    
    <hr />
    
    <input 
    type="text"
    placeholder="Name"
    className="form-control"
    ref={inputRef}
     />
    
     <button className="btn btn-danger" onClick={onClick}>
    :D
     </button>

    </>
  )
}
