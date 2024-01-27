import axios from 'axios';

const baseUrl = "https://todo-backend-lvto.onrender.com";

const getAlltoDo = (setToDo)=>{
    axios.get(baseUrl).then(({data})=>{
        console.log(data);
        console.log('data ....>', data);
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) =>{
    axios.post(`${baseUrl}/save`, {text}).then((data)=>{
        console.log(data);
        setText("")
        getAlltoDo(setToDo)
    }).catch((err)=>{
        console.log(err);
    })
}

const updateToDo = (toDoId, newText, setToDo, setText, setIsUpdating) =>{
    console.log(toDoId);
    axios.post(`${baseUrl}/update`, {_id:toDoId, text:newText}).then((data)=>{
        console.log(data);
        console.log("came to update");
        setText("")
        setIsUpdating(false)
        getAlltoDo(setToDo)
    }).catch((err)=>{
        console.log(err);
    })
}
const deleteToDo = (_id, setToDo) =>{
    // console.log(toDoId);
    axios.post(`${baseUrl}/delete`, {_id}).then((data)=>{
        getAlltoDo(setToDo)
    }).catch((err)=>{
        console.log(err);
    })
}

export {getAlltoDo, addToDo,updateToDo, deleteToDo}