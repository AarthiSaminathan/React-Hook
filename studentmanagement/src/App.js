import Admin from "./Login/Admin";
import { BrowserRouter,Routes,  Route} from "react-router-dom";
import AddStudents from "./AdminService/AddStudents";
import GetStudent from "./AdminService/GetStudent";
import UpdateStudent from "./AdminService/UpdateStudent";
import DeleteStudent from "./AdminService/DeleteStudent";
import Home from "./Menu/Home";
import AdminDashboard from "./Menu/AdminDashboard";
import FileUpload from "./Menu/FileUpload";

function App() {
  return (
    <div className="container">
    <BrowserRouter>
     <Routes>
     <Route  path="/" element={< Home/>}/>
    <Route  path="/Admin" element={<Admin/>}/>
    <Route exact path="/A" element={<AdminDashboard/>}/>
    <Route path="/AddStudent" element={<AddStudents/>}/>
    <Route path="/GetStudent" element={<GetStudent/>}/>
    <Route path="/UpdateStudent" element={<UpdateStudent/>}/>
    <Route path="/DeleteStudent" element={<DeleteStudent/>}/>
    <Route exact path="/F" element={<FileUpload/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
