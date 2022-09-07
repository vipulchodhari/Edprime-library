import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Author } from './components/author/Author';
import { Category } from './components/category/Category';
import { Books } from './components/books/Books';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/dashboard/Dashboard';
import { AuthorDetails } from './components/author/AuthorDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/author' element={<Author/>}></Route>
        <Route path='/author-details' element={<AuthorDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
