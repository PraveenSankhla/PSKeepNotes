import Header from './Component/Header'
import API from './Component/Books';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import KeepNotes from './Pages/KeepNote';


const PkKeep= ()=> {
  return ( 
      <>
      <Router >
        <Header />
          <Routes>
            <Route path='/' element={<KeepNotes />}></Route>
            <Route exact path="/Books" Component={()=><API name="Select Book Name"/>} />
          </Routes>
        </Router>
      </>
    );
}

export default PkKeep;