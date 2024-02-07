import React from "react";

export default function TodoCard(props) {
  const {el} = props
  return (
    <div className="card w-4/5 bg-pink-200 shadow-xl cursor-pointer 
      active:shadow-none active:translate-x-1 active:translate-y-1"
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

