import { useState, useEffect } from "react"
import Header from "../component/Header"
import Container from "../component/Container"
import List from "../component/List"
import Search from "../component/Search"

function HomePage(props) {
  const [list, setList] = useState([
    {
      task: "Todo1",
      todo: true,
      doing: false,
      done: false,
      dueDate: "2021-03-08",
      editing: false,
    },
    {
      task: "Todo2",
      todo: false,
      doing: true,
      done: false,
      dueDate: "2021-03-08",
      editing: false,
    },
    {
      task: "Todo3",
      todo: false,
      doing: false,
      done: true,
      dueDate: "2021-03-08",
      editing: false,
    },
    {
      task: "Todo4",
      todo: false,
      doing: false,
      done: true,
      dueDate: "2021-03-08",
      editing: false,
    },
  ])

  const [isNewTodo, setIsNewTodo] = useState(false)
  const [text, setText] = useState("")
  const [date, setDate] = useState("")
  const [isSearch, setIsSearch] = useState(false)
  const [searchText, setSearchText] = useState("")

  function handleNewTodo() {
    setIsNewTodo(true)
    setList(list.map((item, index) => ({ ...item, editing: false })))
    setText("")
    setDate("")
    console.log(Date())
    let date = new Date()
    console.log(date.getTime())
    console.log(date.toLocaleDateString().split("/"))
  }

  function handleTodoChange(e) {
    setText(e.target.value)
    console.log(e.target.value)
  }
  function handleTodoDateChange(e) {
    setDate(e.target.value)
    console.log(e.keycode)
  }
  function handleSubmit() {
    setList([...list, { task: text, dueDate: date, todo: true }])
    // setText("")
    // setDate("")
    setIsNewTodo(false)
  }
  function handleCancel() {
    setIsNewTodo(false)
    // setText("")
    // setDate("")
  }

  function handleEditButton(indexToEdit) {
    let newText = list.find((item, index) => index === indexToEdit)
    let newDate = list.find((item, index) => index === indexToEdit)
    setList(
      list.map((item, index) => {
        if (index === indexToEdit) {
        }
        setIsNewTodo(false)
        return index === indexToEdit
          ? { ...item, editing: true }
          : { ...item, editing: false }
      })
    )
    setText(newText.task)
    setDate(newDate.dueDate)
  }
  function handleEditCancel(indexToCancelEdit) {
    setList(
      list.map((item, index) => {
        console.log(item.editing)
        return index === indexToCancelEdit ? { ...item, editing: false } : item
      })
    )
    setText("")
    setDate("")
  }
  function handleEditSubmit(indexToSubmitEdit) {
    setList(
      list.map((item, index) => {
        console.log(item.editing)
        return index === indexToSubmitEdit
          ? { ...item, task: text, dueDate: date, editing: false }
          : item
      })
    )
    setText("")
    setDate("")
  }
  function handleDeleteButton(indexToDelete) {
    setList(list.filter((item, index) => index !== indexToDelete))
  }
  function handleDoingButton(indexToBeDoing) {
    setList(
      list.map((item, index) =>
        index === indexToBeDoing
          ? { ...item, todo: false, doing: true, done: false }
          : item
      )
    )
  }
  function handleDoneButton(indexToBeDone) {
    setList(
      list.map((item, index) =>
        index === indexToBeDone
          ? { ...item, todo: false, doing: false, done: true }
          : item
      )
    )
  }

  return (
    <div>
      <div>
        <Header
          setIsSearch={setIsSearch}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        {!isSearch && (
          <Container
            isNewTodo={isNewTodo}
            text={text}
            date={date}
            handleNewTodo={handleNewTodo}
            list={list}
            handleTodoChange={handleTodoChange}
            handleTodoDateChange={handleTodoDateChange}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleEditButton={handleEditButton}
            handleEditSubmit={handleEditSubmit}
            handleEditCancel={handleEditCancel}
            handleDeleteButton={handleDeleteButton}
            handleDoingButton={handleDoingButton}
            handleDoneButton={handleDoneButton}
            setText={setText}
          />
        )}
        {isSearch && (
          <Search
            setIsSearch={setIsSearch}
            isNewTodo={isNewTodo}
            text={text}
            date={date}
            handleNewTodo={handleNewTodo}
            list={list}
            handleTodoChange={handleTodoChange}
            handleTodoDateChange={handleTodoDateChange}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleEditButton={handleEditButton}
            handleEditSubmit={handleEditSubmit}
            handleEditCancel={handleEditCancel}
            handleDeleteButton={handleDeleteButton}
            handleDoingButton={handleDoingButton}
            handleDoneButton={handleDoneButton}
            searchText={searchText}
          />
        )}
      </div>
    </div>
  )
}

export default HomePage
