import React from "react";

const NewTasks = ({ task }) => {
  let status;
  if (task.active) {
    status = "Active";
  } else if (task.newTask) {
    status = "New Task";
  } else if (task.completed) {
    status = "Completed";
  } else if (task.failed) {
    status = "Failed";
  }

  return (
    <div className="w-full min-h-[300px] md:min-h-[300px] md:w-[400px] p-5 bg-blue-500 flex-shrink-0 rounded-xl flex flex-col gap-3 justify-between">
      <div className="flex justify-between text-sm items-center font-semibold">
        <div className="flex gap-2">
          <p className="bg-black bg-opacity-50 py-2 px-3 rounded-full">
            {status}
          </p>
          <p className="bg-black bg-opacity-50 py-2 px-3 rounded-full">
            {task.category}
          </p>
        </div>
        <p>{task.taskDate}</p>
      </div>
      <h2 className="text-2xl font-semibold">{task.taskTitle}</h2>
      <h3 className="text-xl">{task.taskDescription}</h3>
      <div className="flex justify-evenly mt-3">
        <button className="bg-green-800 py-2 px-3 text-sm rounded-md">
          Accept Task
        </button>
        <button className="bg-red-800 py-2 px-3 text-sm rounded-md">
          Reject Task
        </button>
      </div>
    </div>
  );
};

export default NewTasks;
