import axios from "axios";
import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import Modal from "../components/Modal";

export default function UserHome() {
  const [todos, setTodos] = useState([]);
  const [editIdx, setEditIdx] = useState(-1)
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    const run = async () => {
      let token = localStorage.getItem("token");
      const rs = await axios.get("http://localhost:8889/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(rs.data.todos);
    };
    run();
  }, [trigger]);

  const openModal = (id) => {
    setEditIdx( todos.findIndex( el=> el.id === id))
    document.getElementById('my_modal_2').showModal()
  }

  const closeModal = () => {
    document.getElementById('my_modal_2').close()
  }
  return (
    <>
    <div className="flex flex-col gap-3 items-center p-3">
      <h2 className="text-3xl">Your Jobs</h2>
      { todos.map(el=> (
        <TodoCard key={el.id} el={el} 
          openModal={openModal} 
        />
      ))}
    </div>
    <Modal el={todos[editIdx]} closeModal={closeModal} setTrigger={setTrigger}/>
    </>
  );
}
