import React,{useState,useEffect} from 'react';
import './TodoApp.css';
import List from '../component/List';
import Alert from '../component/alert';


const getLocalStorage = ()=>{
    let list=localStorage.getItem('list');
    if(list){
        return(list=JSON.parse(localStorage.getItem('list')))
    }else{
        return [];
    }
}


function TodoApp() {

    const[name,setName] = useState("");
    const[list,setList] = useState(getLocalStorage());
    const[isEdit,setIsEdit]  = useState(false);
    const[editId,setEditId] = useState(null);
    const[alert,setAlert] = useState({
        show: false,
        msg: "",
        type: ""
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name){
            showAlert(true,"danger","Plz Enter Value");
        }else if(name && isEdit){
            setList(
                list.map((item)=>{
                    if(item.id === editId){
                        return {...item, title:name}
                    }
                    return item;
                })
            )
            setName("");
            setEditId(null);
            setIsEdit(false);
            showAlert(true,"success","Value Changes")
        }else{
            showAlert(true,"success","Item has Added.")
            const newItem = {id:new Date().getTime().toString(),title:name};
            setList([...list,newItem]);
            setName("");
        }

    }

    const showAlert = (show=false,type="",msg="")=>{
        setAlert({
            show,type,msg
        })
    }

    const removeItem =(id)=>{
        showAlert(true,"danger","Deleted");
        setList(list.filter((item)=>item.id !== id))
    }

    const editItem = (id)=>{
        const specItem = list.find((item)=>item.id===id)
        setIsEdit(true);
        setEditId(id);
        setName(specItem.title);
    }

    const clearList = (id)=>{
        showAlert(true,"danger","All Data Cleared.");
        setList([]);
    }

    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list))
    },[list])

    return (
        <div>
            <section className='section-center'>
                <form className='grocery-form' onSubmit={handleSubmit}>
                    {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                    <h2>Todo List App</h2>
                    <div className='form-control'>
                        <input type="text" className="grocery" placeholder="Enter your data" value={name} onChange={(e)=>
                            setName(e.target.value)} />
                        <button className='submit-btn'>
                            {isEdit? "edit" : "submit"}
                        </button>
                    </div>
                </form>
                
                <br /> <br />

                {
                    list.length > 0 &&(
                        <div className="grocery-container">
                            <List items={list} removeItem={removeItem} editItem={editItem} />
                            <button className='clear-btn' onClick={clearList}>Clear All</button>
                        </div>
                    )
                }

            </section>
        </div>
    );
}

export default TodoApp;