import { Table, Container, Row, Col, Button } from "react-bootstrap";
import List from "../components/List.jsx";
import Dropdown from "../components/Dropdown.jsx";
import { useState, useEffect } from "react";


const Home = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState("");

  const [selectedStatus, setSelectedStatus] = useState(null);

  const search = (s) => {
    setSearchText(s);
  };

  const handleReset = () => {
    setSearchText("");
    setSelectedStatus("");
  };

  const filters = {
    searchText: searchText,
    selectedStatus: selectedStatus,
  };

  const filterFuncForStatus = (s) => {
    if (selectedStatus) {
      if (selectedStatus == s.completed) {
        return true;
      }
    } else {
      return true;
    }

  };
  const filterFuncForSearchBar = (s) => {
    if (searchText) {
      if (
        s.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
      ) {
        return true;
      }
    } else {
      return true;
    }
  };

  const combineFilters =
    (...filters) =>
      (item) => {
        return filters.map((filter) => filter(item)).every((x) => x == true);
      };

  useEffect(() => {
    let out = data
      ? data.filter(
        combineFilters(filterFuncForStatus, filterFuncForSearchBar)
      )
      : [];
    setFilteredData(out);
  }, [searchText, selectedStatus]);


  return (
    <Container>
      <h1 className="py-4">
        Gi's Sample Code
      </h1>
      <Row>
        <Col xs={2}>
          <Dropdown setSelectedStatus={setSelectedStatus} />
        </Col>
        <Col xs={2}>
          <input
            placeholder="Search"
            onKeyUp={(e) => {
              e.preventDefault();
              search(e.target.value);
            }}
          ></input>
        </Col>
        <Col xs={2}>
          <Button variant="primary" size="sm" onClick={handleReset}>Reset</Button>{' '}
        </Col>
      </Row>
      {data ?
        <List data={filteredData} /> : null
      }
    </Container>
  )
}


export default Home;



export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

