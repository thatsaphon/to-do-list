import List from "./List"

function Container({
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
  ...props
}) {
  return (
    <div>
      <div className="min-h-screen bg-purple-200 p-5 flex flex-1 flex-wrap content-start justify-start">
        <ul>
          <div className="border-solid border-gray-800 border-2 border-5 rounded w-96 h-12 bg-gray-200 m-3 mr-8 box-border">
            <p className="text-xl p-1 pt-2 ml-3">Todo</p>
          </div>
          {list.map((item, index) => {
            if (item.todo)
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
                  setText={props.setText}
                />
              )
          })}
          <li className="flex justify-center m-3 mr-8 ">
            {!isNewTodo && (
              <button
                className="border-2 border-black p-2 rounded bg-gray-300"
                onClick={handleNewTodo}
              >
                New Todo
              </button>
            )}
            {isNewTodo && (
              <div className="flex flex-wrap flex-col justify-center content-center border-solid border-gray-800 border-2 border-5 rounded w-96 h-36 bg-gray-200  box-border">
                <div className="m-2 mr-4">
                  <label className="mr-7">Todo : </label>
                  <input
                    className="ring-1 ring-black rounded"
                    onChange={handleTodoChange}
                    value={text}
                  ></input>
                </div>
                <div className="m-2 mr-4">
                  <label type="date">Due date : </label>
                  <input
                    type="date"
                    className="ring-1 ring-black rounded"
                    onChange={handleTodoDateChange}
                    value={date}
                  ></input>
                </div>
                <div className="flex justify-center content-center mt-1">
                  <button
                    className="ring-1 ring-black rounded p-1 m-2"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="ring-1 ring-black rounded p-1 m-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </li>
        </ul>
        <ul>
          <div className="border-solid border-gray-800 border-2 border-5 rounded w-96 h-12 bg-gray-200 m-3 mr-8 box-border">
            <p className="text-xl p-1 pt-2 ml-3">Doing</p>
          </div>
          {list.map((item, index) => {
            if (item.doing)
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
                  setText={props.setText}
                />
              )
          })}
        </ul>
        <ul>
          <div className="border-solid border-gray-800 border-2 border-5 rounded w-96 h-12 bg-gray-200 m-3 mr-8 box-border">
            <p className="text-xl p-1 pt-2 ml-3">Done</p>
          </div>
          {list.map((item, index) => {
            if (item.done)
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
                  setText={props.setText}
                />
              )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Container
