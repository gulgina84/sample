
import { Table } from "react-bootstrap";
import Entry from "../components/Entry";

export default function List({data}) {
  return (
    <>
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {data.map(todo => <Entry todo={todo}/>)}
    </tbody>
  </Table>
  </>
  )
}
