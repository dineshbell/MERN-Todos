import React,{useEffect,useState} from 'react'
import axios from "axios"

const App = () => {
  const [item,setItem] = useState([]);
  const [task,setTask] =useState('')
  useEffect(() => {
    axios.get('http://localhost:4000/gettask').then(
      arr => setItem(arr.data)
    )
  },[])
  const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:4000/addtask',{todo:task}).then(
      arr => setItem(arr.data)
    )
  }
  const deletehandler = id => {
    axios.delete(`http://localhost:4000/delete/${id}`).then(
      arr => setItem(arr.data)
    )
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/><br/>
          <input type="submit" value="submit"/>
        </form>
        {item.map(newtask => <div key={task._id}><h3>{newtask.todo}</h3><button onClick={()=>deletehandler(newtask._id)}>Delete</button></div>)}
      </center>
      
    </div>
  )
}

export default App
