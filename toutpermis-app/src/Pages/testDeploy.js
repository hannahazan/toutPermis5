import axios from 'axios';
import { useState,useEffect} from 'react';


const TestDeploy=()=>{
    console.log("ça fonctionne bien")
    const onSubmit=()=>{
        axios
        .get("https://toutpermis3-production.up.railway.app/Users")
        .then((response)=>{(console.log(response.data))     
        })
        .catch(error => {
        console.log(error);
        alert("Oops!bad request!")
        })
    }
    useEffect(()=>{
        onSubmit()
    })
    return(
        <div>
            <p>Hello world</p>
            <p>pour vérifier</p>
        </div>
    )
}

export default TestDeploy