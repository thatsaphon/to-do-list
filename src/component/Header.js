import { useHistory } from "react-router-dom"

function Header(props) {
  // let history = useHistory();
  // const handleAddButton = () => {
  //   history.push("/addtodo");
  // };
  function handleSearchButton() {
    props.setSearchText(props.searchText)
    props.setIsSearch(true)
  }
  function handleSearchChange(e) {
    props.setSearchText(e.target.value)
  }

  return (
    <div>
      <div className="text-blue-400 bg-gray-600 flex justify-between pl-8 p-1">
        <h1 className="text-xl ">Todo List App</h1>
        <div>
          <input
            className="mr-1 text-l rounded"
            onChange={handleSearchChange}
            value={props.searchText}

            // onChange={handleTextChange}
            // value={text}
          ></input>
          <button
            className="border-2 border-blue-400 rounded mr-1 p-px box-border"
            onClick={handleSearchButton}
          >
            Search
          </button>
          {/* <button
            className="border-2 border-blue-400 rounded mr-1 p-px box-border"
            onClick={handleAddButton}
          >
            Add
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Header
