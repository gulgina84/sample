import { Table } from "react-bootstrap";

export default function Entry({todo}) {
  return(
  <tr>
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td>{todo.completed ? "Completed" : "Not Completed"}</td>
  </tr>
  )


}