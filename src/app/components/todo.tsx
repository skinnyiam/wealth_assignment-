"use client";
import React, { useState, useEffect } from "react";

type Props = {};

interface task {
  id: number;
  todo: string;
}

const Todo = (props: Props) => {
  const [todos, setTodos] = useState<task[]>([]);
  const [input, setInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newTodo: task = { id: Date.now(), todo: input };
    setTodos([...todos, newTodo]);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="min-h-[900px]">
      <h1 className="text-4xl font-semibold text-white text-center">Todo :</h1>
      <div className="flex pt-8 justify-around">
        <form>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="border border-neutral-800  p-2 hover:border-neutral-900  hover:transition-colors rounded-md resize-none overflow-hidden transition-colors focus:outline-none"
            placeholder="Add a todo"
          />
          <button className="hidden" onClick={handleSubmit}>
            add{" "}
          </button>
        </form>
        <input
          type="text"
          placeholder="Search todo"
          value={searchKeyword}
          onChange={handleSearch}
          className="border border-neutral-800  p-2 hover:border-neutral-900  hover:transition-colors rounded-md resize-none overflow-hidden transition-colors focus:outline-none"
        />
      </div>
      <ul className="flex flex-col justify-center  pt-10">
        {filteredTodos.map((todo: task) => (
          <li className="list-disc" key={todo.id}>
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
