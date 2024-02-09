import axios from "axios";
import { useState } from "react";

export default function ModalEdit(props) {
  const { el } = props;
  console.log(props)
  const [input, setInput] = useState({
    title: "",
    dueDate: new Date().toISOString().split("T")[0],
    status: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };
  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // setInput(prv => ({...prv, dueDate: new Date(prv.dueDate) }))
      const output = { ...input, dueDate: new Date(input.dueDate) };
      const token = localStorage.getItem("token");
      // const rs = await axios.post('http://localhost:8889/todos', output, {
      //   headers : { Authorization : `Bearer ${token}`}
      // })
      alert("Update OK");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <form
          className="flex flex-col border rounded w-5/6 mx-auto p-4 gap-6"
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
          <button className="btn btn-primary">Add new</button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
