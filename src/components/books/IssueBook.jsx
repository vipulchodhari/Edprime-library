import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Request_Book_Data, Request_Search_Book } from "../../redux/action/bookAddAction";
import { Request_Member_Data, Request_Search_Member } from "../../redux/action/memberAction";
// import { getBookData, getMemberData } from "../../utils/getApi";


export const IssueBook = () => {
    const [show, setShow] = useState(true);
    const [book, setBook] = useState("");
    const [member, setMember] = useState("");
    const [query, setQuery] = useState("");

    let { bookData, memberData } = useSelector((state) => ({
        bookData: state.booksAddState.data,
        memberData: state.memberState.data
    }));
    console.log("bookList in component", bookData);
    console.log("memberList in component", memberData);

    // memberData = memberData.filter((member) =>
    //                 member.name.toLowerCase().includes(query) ||
    //                 member.created_by.toLowerCase().includes(query)
    // )
    bookData = bookData.filter((book) =>
                    book.book_title.toLowerCase().includes(query) ||
                    book.author.title.toLowerCase().includes(query) ||
                    book.bookCategory.title.toLowerCase().includes(query) ||
                    book.edClass.title.toLowerCase().includes(query) ||
                    book.language.title.toLowerCase().includes(query) 
    )

    const dispatch = useDispatch();
    const searchBook = (e) => {
        e.preventDefault()
        setShow(true)

        setQuery(e.target.value)
        // dispatch(Request_Search_Book(query))
    }

    const searchMember = (e) => {
        e.preventDefault()
        setShow(false)

        // setQuery(e.target.value)

        let q = e.target.value;
        dispatch(Request_Search_Member(q))
    }

    useEffect(() => {
        dispatch(Request_Book_Data())
        dispatch(Request_Member_Data())
    }, [])
   
    // console.log("issue-memberData", memberData);

    return <div>
        <h1><u>Issue Book</u></h1>
        <div className="issue-book-cont">
            <div className="issue-book-search">
                <form>
                    <label className="addbook-lable">&nbsp;<u>Books :</u></label>
                    <input onChange={searchBook} type='text' placeholder="Search by Book name, Author name, Category name, Class name..." />
                </form>
                <form>
                <label className="addbook-lable">&nbsp;<u>Members :</u></label>
                    <input onChange={searchMember} className="issue-member" type='text' placeholder="Search by Member name, Member email..." />
                </form>
            </div>
            <div className="issue-BookList-cont">
                {show ? <table className='category-list-table'>
                    <tbody>
                        <tr>
                            <th>S.No</th>
                            <th>Book image</th>
                            <th>Book Name</th>
                            <th>Author name</th>
                            <th>Catergory name</th>
                            <th>Class name</th>
                            <th>Language</th>
                            <th>Select</th>
                        </tr>
                        {bookData?bookData?.map((el, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>Book image</td>
                                <td>{el?.book_title ?? ''}</td>
                                <td>{el?.author?.title  ?? ''}</td>
                                <td>{el?.bookCategory?.title  ?? ''}</td>
                                <td>{el?.edClass?.title  ?? ''}</td>
                                <td>{el?.language?.title  ?? ''}</td>
                                <td>
                                    <button style={{ cursor: "pointer", color: "green", fontWeight: '600' }} onClick={() =>
                                    setBook(el?.book_title  ?? '')
                                }><u>Select</u></button></td>
                            </tr>
                        )) : <h1>No Data Found</h1>}
                    </tbody>
                </table> :
                    <table className='category-list-table'>
                        <tbody>
                            <tr>
                                <th>S.No</th>
                                <th>Member image</th>
                                <th>Member Name</th>
                                <th>Member Type</th>
                                <th>SSO ID</th>
                                <th>Select</th>
                            </tr>
                            {memberData.length? memberData.map((el, i) => {
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>Member image</td>
                                    <td>{el?.name ?? ''}</td>
                                    <td>{el?.created_by ?? ''}</td>
                                    <td>{el?.sso_id ?? ''}</td>
                                    <td><button style={{ cursor: "pointer", color: "green", fontWeight: '600' }} onClick={() => 
                                        setMember(el?.name ?? '')
                                    }><u>Select</u></button></td>
                                </tr>
                            }) : <h1 style={{textAlign:"center"}}>No Data Found</h1>}
                        </tbody>
                    </table>}
            </div>

            <div>
                <h2>Book - {book}</h2>
                <h2>member - {member}</h2>
            </div>
        </div>
    </div>
}