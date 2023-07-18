import Admin from "./Login/Admin";
import { BrowserRouter,Routes,  Route, } from "react-router-dom";
import AddStudents from "./AdminService/AddStudents";
import GetStudent from "./AdminService/GetStudent";
import UpdateStudent from "./AdminService/UpdateStudent";
import DeleteStudent from "./AdminService/DeleteStudent";
import AdminDashboard from "./Menu/AdminDashboard";
import Home from "./Menu/Home";
import StudentDashboard from "./Menu/StudentDashboard";
import Student from "./Login/Student";
import AddMarks from "./AdminService/AddMarks";


function App() {
  return (
<BrowserRouter>

<Routes>

    <Route exact path="/" element={< Home/>}/>
    <Route exact path="/Admin" element={<Admin/>}/>
    <Route exact path="/AddStudent" element={<AddStudents/>}/>
    <Route exact path="/GetStudent" element={< GetStudent/>}/>
    <Route exact path="/UpdateStudent" element={<UpdateStudent/>} />
    <Route exact path="/DeleteStudent" element={<DeleteStudent />} />
    <Route exact path="/AddMarks" element={<AddMarks/>}/>
    <Route exact path="/A" element={<AdminDashboard/>}/>
    <Route exact path="/Student" element={<Student/>}/>
    <Route exact path="/S" element={<StudentDashboard/>}/>
    
</Routes>
</BrowserRouter>     
  );
}

export default App;
