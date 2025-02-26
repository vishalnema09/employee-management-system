import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="mt-5 flex flex-col gap-2 w-full items-center justify-around bg-[#1C1C1C] py-5 px-3 rounded-md overflow-auto">
      <div className="text-[14px] md:text-xl bg-slate-600 px-2 py-3 mb-2 flex w-full justify-between rounded-md text-center items-center gap-1">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Tasks</h3>
        <h3 className="w-1/5">Active Tasks</h3>
        <h3 className="w-1/5">Completed Tasks</h3>
        <h3 className="w-1/5">Failed Tasks</h3>
      </div>
      {userData && userData.employees && userData.employees.length > 0 ? (
        userData.employees.map((elem, idx) => (
          <div
            key={idx}
            className="text-sm md:text-xl bg-slate-800 px-5 py-3 mb-2 flex w-full justify-between rounded-md text-center items-center"
          >
            <h2 className="w-1/5">{elem.firstName}</h2>
            <h3 className="w-1/5">{elem.taskCounts.newTask}</h3>
            <h3 className="w-1/5">{elem.taskCounts.active}</h3>
            <h3 className="w-1/5">{elem.taskCounts.completed}</h3>
            <h3 className="w-1/5">{elem.taskCounts.failed}</h3>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No employees found.</p>
      )}
    </div>
  );
};

export default AllTask;
