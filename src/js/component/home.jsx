import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			
				<h1>My To Do List</h1>
					<div className="d-flex justify-content-center">
					<ul>
						<li><input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} onKeyDown={(e) =>{if(e.key=== "Enter"){setTodos(todos.concat([inputValue]));setInputValue("");

						}
					}} 
					placeholder="Enter your to do list here" /></li>
					{todos.map((item, index)=>(
						<li>
							{item} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" onClick={() => setTodos(todos.filter((t,currentIndex)=> index !=currentIndex))} viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
						</li>

					))}
					</ul>
					</div>
					
					
		<div className="d-flex justify-content-center">
			<div>{todos.length} Items Left</div>
		</div>
			
		</div>
	);
};

export default Home;
