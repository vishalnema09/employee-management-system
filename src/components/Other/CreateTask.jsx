import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Create a new array for user data to avoid direct mutation
    const updatedUserData = {
      ...userData,
      employees: userData.employees.map((elem) => {
        if (elem.firstName === asignTo) {
          return {
            ...elem,
            tasks: [...elem.tasks, newTask],
            taskCounts: {
              ...elem.taskCounts,
              newTask: elem.taskCounts.newTask + 1,
            },
          };
        }
        return elem;
      }),
    };

    // Update userData state with the modified array
    setUserData(updatedUserData);

    // Reset form fields
    setTaskTitle('');
    setCategory('');
    setAsignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <div>
      <form
        className="mt-2 flex flex-col md:flex-row gap-2 w-[100%] md:w-full md:items-center md:justify-around bg-[#1C1C1C] p-5 rounded-md"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-1 w-[100%] md:w-[40%]">
          <h3 className="text-lg">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            placeholder="Make a UI design"
            className="text-sm p-2 mb-2 border-2 border-gray-400 bg-transparent min-w-[300px]"
          />
          <h3 className="text-lg">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="text-sm p-2 mb-2 border-2 border-gray-400 bg-transparent w-[100%] md:min-w-[300px]"
          />
          <h3 className="text-lg">Assign to</h3>
          <input
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            type="text"
            placeholder="employee name"
            className="text-sm p-2 mb-2 border-2 border-gray-400 bg-transparent min-w-[300px]"
          />
          <h3 className="text-lg">Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Design, Development, etc..."
            className="text-sm p-2 mb-2 border-2 border-gray-400 bg-transparent min-w-[300px]"
          />
        </div>
        <div className="flex flex-col gap-2 w-[100%] md:w-[40%]">
          <h3 className="text-lg">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            cols="30"
            rows="10"
            placeholder="Detailed description of task (Max 500 words)"
            className="text-sm p-2 mb-4 border-2 border-gray-400 bg-transparent min-w-[300px]"
          />
          <button
            type="submit"
            className="bg-gray-600 rounded-xl px-4 py-2 min-w-[300px] text-xl text-center items-center"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;