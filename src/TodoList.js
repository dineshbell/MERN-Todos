import React from 'react'

const TodoList = ({TodosList,deleteHandlet}) => {
  return (
    <div >
      {TodosList.map((todos,index)=><div key={index}>
        <h5>{todos} &nbsp; <button onClick={()=>deleteHandlet(index)}>DELETE</button></h5>
    </div>
    )}
    </div>
  )
}

export default TodoList