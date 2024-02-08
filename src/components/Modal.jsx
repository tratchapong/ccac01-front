import axios from "axios";
import {useState, useEffect} from "react";

export default function Modal(props) {
  const {el, closeModal} = props
  const [input, setInput] = useState({
    title : '',
    dueDate : '',
    status : ''
  })
  // console.log(el)

  useEffect( ()=>{
    setInput({
      title : el?.title ?? '',
      dueDate : new Date(el?.dueDate).toISOString().split('T')[0],
      status : el?.status ?? ''
    })
  }, [el?.id])

  const hdlChange = e => {
    setInput( prv => ( {...prv, [e.target.name] : e.target.value} ))
  }

  const hdlSubmit = async e => {
    try{
      e.preventDefault()
      // setInput(prv => ({...prv, dueDate: new Date(prv.dueDate) }))
      const output = { ...input, dueDate: new Date(input.dueDate) }
      const token = localStorage.getItem('token')
      // const rs = await axios.post('http://localhost:8889/todos', output, {
      //   headers : { Authorization : `Bearer ${token}`}
      // })
      // alert('Create new OK')
    }catch(err) {
      alert(err.message)
    }
  }

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
    <form className="flex flex-col border rounded w-5/6 mx-auto p-4 gap-4"
        onSubmit={hdlSubmit}
    >
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Todo title</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
          name="title"
          value={input.title}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full max-w-[220px] ">
        <div className="label">
          <span className="label-text">Due Date</span>
        </div>
        <input type="date" name="dueDate" value={input.dueDate} onChange={hdlChange} />
      </label>
        <button className="btn btn-info" onClick={closeModal}>Submit</button>
      </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
