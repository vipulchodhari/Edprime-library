import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Author } from './components/author/Author';
import { Category } from './components/category/Category';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/dashboard/Dashboard';
import { AuthorDetails } from './components/author/AuthorDetails';
import { AddBooks } from './components/books/AddBooks';
import { Books } from './components/books/Books';
import { IssueBook } from './components/books/IssueBook';
import { BookEdit } from './components/books/BookEdit';
import { Member } from './components/member/Member';
import { BookDetails } from './components/books/bookDetails/BookDetails';
import { Demo } from './components/Demo';
import { Genre } from './components/genre/Genre';
import { AddMember } from './components/member/AddMember';
import { MemberList } from './components/member/MemberList';
import {ExpiredMember} from './components/member/ExpiredMember';
import { ActiveMember } from './components/member/ActiveMember';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/add-books' element={<AddBooks/>}></Route>
        <Route path='/edit-book/:id' element={<BookEdit/>}></Route>
        <Route path='/book-details' element={<BookDetails/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/author' element={<Author/>}></Route>
        <Route path='/author-details' element={<AuthorDetails/>}></Route>
        <Route path='/issueBook' element={<IssueBook/>}></Route>
        <Route path='/member' element={<Member/>}></Route>
        <Route path='/demo' element={<Demo/>}></Route>
        <Route path='/genre' element={<Genre/>}></Route>
        <Route path='/addmember'element={<AddMember/>}></Route>
        <Route path='/memberlist'element={<MemberList/>}></Route>
        <Route path='/expiredmember'element={<ExpiredMember/>}></Route>
        <Route path='/activemember'element={<ActiveMember/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
