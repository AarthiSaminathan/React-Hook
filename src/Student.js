import React from "react";
import ReactDOM from "react-dom/client";

function Student(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Student/>);
export default Student;
