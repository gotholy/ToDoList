import React from "react";

export default function TaskButton({ type, onClick }) {
  return (
    <button
      type="button"
      className="p-1 bg-sky-200 rounded-full flex justify-center items-center transition hover:text-white hover:bg-sky-500 hover:scale-125 text-blue-500"
      onClick={onClick}
    >
      {type === "done" ? (
        <span className="material-symbols-outlined font-bold">done</span>
      ) : type === "edit" ? (
        <span className="material-symbols-outlined font-bold">edit</span>
      ) : type === "remove" ? (
        <span className="material-symbols-outlined font-bold">remove</span>
      ) : (
        <span className="material-symbols-outlined font-bold">save</span>
      )}
    </button>
  );
}