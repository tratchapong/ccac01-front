import React from "react";

export default function TodoCard(props) {
  const {el, openModal} = props
  let statusColor = el.status==='PENDING' ? 'bg-pink-200' : el.status==='DOING' ? 'bg-blue-200' : 'bg-lime-200'
  return (
    <div className={`card w-4/5 shadow-xl cursor-pointer 
      active:shadow-none active:translate-x-1 active:translate-y-1 ${statusColor}`}
      onClick={()=>openModal(el.id)}
    >
      <div className="card-body">
        <h2 className="card-title focus:text-red-300">{el.title}</h2>
        <div className="flex">
          <p>Due Date : {new Date(el.dueDate).toDateString()}</p>
          <p className="text-right">Status: {el.status}</p>
        </div>

      </div>
    </div>
  );
}

