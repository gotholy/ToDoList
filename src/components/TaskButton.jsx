import React from "react";

export default function TaskButton({ type, onClick }) {
  return (
    <button
      type="button"
      className="py-2 px-3 bg-teal-400 rounded-full flex justify-center items-center transition hover:text-teal-500 hover:bg-teal-200 hover:scale-125 text-white"
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
