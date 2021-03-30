import React from "react"
import List from "./List"

function Search({
  setIsSearch,
  list,
  isNewTodo,
  text,
  handleNewTodo,
  handleTodoChange,
  handleTodoDateChange,
  date,
  handleSubmit,
  handleCancel,
  handleEditButton,
  searchText,
  ...props
}) {
  function handleBackButton() {
    setIsSearch(false)
  }
  console.log(props)

  return (
    <div>
      {list.map((item, index) => {
        if (item.task.toLowerCase().includes(searchText.toLowerCase()))
          return (
            <List
              key={index}
              index={index}
              item={item}
              list={list}
              handleSubmit={handleSubmit}
              handleCancel={handleCancel}
              handleTodoChange={handleTodoChange}
              handleTodoDateChange={handleTodoDateChange}
              handleEditButton={handleEditButton}
              handleEditSubmit={props.handleEditSubmit}
              handleEditCancel={props.handleEditCancel}
              handleDeleteButton={props.handleDeleteButton}
              handleDoingButton={props.handleDoingButton}
              handleDoneButton={props.handleDoneButton}
            />
          )
      })}

      <div style={{ width: "80%", height: "100%", background: "red" }}>
        <button style={{ background: "gray" }} onClick={handleBackButton}>
          back
        </button>
      </div>
    </div>
  )
}

export default Search
