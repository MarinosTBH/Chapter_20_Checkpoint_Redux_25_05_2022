import {Button} from "react-bootstrap"

function FilterButton(tasks) {
    return (
      <Button
      style={{width:"25%", margin:"auto 10px"}}
        type="button"
        className="btn toggle-btn"
        onClick={() => tasks.setFilter(tasks.name) }
      >
        <span className="visually-hidden">Show </span>
        <span>{tasks.name}</span>
        <span className="visually-hidden"> tasks</span>
      </Button>
    );
  }
  export default FilterButton