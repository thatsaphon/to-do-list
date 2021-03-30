function List({
  item,
  index,
  list,
  handleSubmit,
  handleCancel,
  handleTodoChange,
  handleTodoDateChange,
  date,
  text,
  handleEditButton,
  setText,

  ...props
}) {
  // console.log(item);

  return (
    <li>
      {item.editing && (
        <div className="flex flex-wrap flex-col justify-center content-center border-solid border-gray-800 border-2 border-5 rounded w-96 h-36 bg-gray-200  box-border">
          <div className="m-2 mr-4">
            <label className="mr-7">Todo : </label>
            <input
              className="ring-1 ring-black rounded"
              onChange={handleTodoChange}
              value={text}
            />
          </div>
          <div className="m-2 mr-4">
            <label type="date">Due date : </label>
            <input
              type="date"
              className="ring-1 ring-black rounded"
              onChange={handleTodoDateChange}
              value={date}
            />
          </div>
          <div className="flex justify-center content-center mt-1">
            <button
              className="ring-1 ring-black rounded p-1 m-2"
              onClick={() => props.handleEditCancel(index)}
            >
              Cancel
            </button>
            <button
              className="ring-1 ring-black rounded p-1 m-2"
              onClick={() => props.handleEditSubmit(index)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {/* Break */}
      {!item.editing && (
        <div className="w-96 h-4/6 ml-3 mr-3 bg-yellow-300 flex p-5 flex-wrap content-center justify-between ring-1 ring-black rounded ring-solid box-border mb-1">
          <div className="flex-wrap content-center flex-col">
            <p className="font-bold">{item.task}</p>
            <p>{item.dueDate}</p>
          </div>
          <div className="flex flex-wrap content-center">
            <button
              className="m-px h-9 w-9 box-border rounded border-2 border-solid border-blue-500 text-blue-500 p-1"
              onClick={() => handleEditButton(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </button>
            <button
              className="m-px h-9 w-9 box-border rounded border-2 border-solid border-red-500 text-red-500 p-1"
              onClick={() => props.handleDeleteButton(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
            <button
              className="m-px border-2 border-blue-500 text-blue-500 rounded border-solid bg-white p-1"
              onClick={() => props.handleDoingButton(index)}
            >
              Doing
            </button>
            <button
              className="m-px border-2 border-green-500 text-green-500 rounded border-solid bg-white p-1"
              onClick={() => props.handleDoneButton(index)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default List
