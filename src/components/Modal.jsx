import {useState, useEffect} from "react";

export default function Modal(props) {
  const {el, closeModal} = props
  const [input, setInput] = useState({
    title : '',
    dueDate :  new Date(),
    status : ''
  })
  // console.log(el)

  useEffect( ()=>{
    setInput({
      title : el?.title ?? '',
      dueDate : el?.dueDate ? new Date(el.dueDate) : new Date(),
      status : el?.status ?? ''
    })
  }, [el?.id])
  
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{input.title}</h3>
        <p className="py-4">{input.dueDate.toDateString()}</p>
        <p className="py-4">{input.status}</p>
        <button className="btn btn-info" onClick={closeModal}>close</button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
