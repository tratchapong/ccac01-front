import axios from "axios"


export default function TodoCard(props) {
  const {el, openModal, setTrigger} = props

  let statusColor = el.status==='PENDING' ? 'bg-pink-200' : el.status==='DOING' ? 'bg-blue-200' : 'bg-lime-200'

  const hdlClick = async e => {
    e.stopPropagation()
    if(!confirm('Delete Job : ' + el.title + '?')) {
      return
    }
    const token = localStorage.getItem('token')
    let rs = await axios.delete(`http://localhost:8889/todos/${el.id}`, {
      headers : { Authorization : `Bearer ${token}`}
    })
    console.log(rs)
    setTrigger(prv => !prv)
  }

  return (
    <div className={`card w-4/5 shadow-xl cursor-pointer 
      active:shadow-none active:translate-x-1 active:translate-y-1 ${statusColor}`}
      onClick={()=>openModal(el.id)}
    >
      <div className="card-body">
        <div className="flex">
          <h2 className="card-title focus:text-red-300">{el.title}</h2>
          <span className="badge bg-red-300 ms-auto" onMouseDown={hdlClick}>Delete</span>
        </div>
        <div className="flex">
          <p>Due Date : {new Date(el.dueDate).toDateString()}</p>
          <p className="text-right">Status: {el.status}</p>
        </div>

      </div>
    </div>
  );
}

