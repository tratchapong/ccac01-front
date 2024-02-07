import axios from "axios";
import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";

export default function UserHome() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const run = async () => {
      let token = localStorage.getItem("token");
      const rs = await axios.get("http://localhost:8889/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(rs.data.todos);
    };
    run();
  }, []);

  return (
    <div className="flex flex-col gap-3 items-center p-3">
      <h2 className="text-3xl">Your Jobs</h2>
      { todos.map(el=> (
        <TodoCard key={el.id} el={el} />
      ))}
    </div>
  );
}
