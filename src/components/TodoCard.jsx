import React from "react";

export default function TodoCard(props) {
  const { el, openModal } = props;
  return (
    <div
      className="card w-5/6 bg-pink-300 shadow-xl mx-auto cursor-pointer
      active:shadow-none active:translate-x-2 active:translate-y-1"
      onClick={()=>openModal(el.id)}
    >
      <div className="card-body">
        <h2 className="card-title">{el.title}</h2>
        <div className="flex">
          <p >Due-date : {new Date(el.dueDate).toDateString()}</p>
          <p className="text-right">Status : {el.status}</p>
        </div>
      </div>
    </div>
  );
}
