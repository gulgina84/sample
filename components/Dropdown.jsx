export default function Dropdown({ setSelectedStatus }) {

  const options = [{ value: null, label: "--Select--"},{ value: 1, label: "conpleted"},{ value: 0, label: "not conpleted"},]
  return(
    <select onChange={(e) => setSelectedStatus(e.target.value)}>
    {options.map(o => <option value={o.value} >{o.label}</option>)}
      {/* <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option> */}
    </select>
  )


}