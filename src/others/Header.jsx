import React from "react";

function Header() {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        HELLO, <br /> <span className="text-3xl font-semibold">Vishal</span>{" "}
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md">
        LOG OUT
      </button>
    </div>
  );
}

export default Header;
