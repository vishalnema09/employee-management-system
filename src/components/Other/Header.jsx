import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };
  return (
    <div className="w-full flex justify-between py-3 items-center font-medium text-xl">
      <div>
        <h3 className="md:text-2xl">Hello</h3>
        <h1 className="text-2xl pt-1 md:text-3xl">
          {props.data?.firstName || "Guest"} 
        </h1>
      </div>
      <div>
        <button
          onClick={logOutUser}
          className="bg-gray-600 rounded-full px-4 py-2 items-center"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
