import React, {useState} from "react";
//import React, {useRef} from "react";


function ComponentWithHooks() 
{
    const [name, setName] = useState("demo"); 


    return (
        <div className="App">
            <h1>Hook Based Component: {name} </h1>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default ComponentWithHooks;
