import React from "react";
import TaskList from "./taskList.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<div className="row mb-2 justify-content-center">
				<div className="col-12 container-form">
					<h1 className=" text-center">
						 TO-DO LIST
					</h1>
					<TaskList />
				</div>
			</div>
		
	</div>
	);
};

export default Home;
