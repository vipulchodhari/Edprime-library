import { useState } from "react";

export const BookDetailsTab = ({ bookDetails}) => {
   console.log("receive details", bookDetails);
    return <div>
        <div className="book-details-main-tab">
            <p style={{ textAlign: "left", }}>Image</p>
            <div className="book-details-tab">
                <div>
                    <div style={{ height: '275px' }}>
                        <img style={{width:'100%', height:'100%', borderRadius:'5px'}} src={`http://192.100.100.52:3500/${bookDetails?.book_Images}`} alt="Dummy img" />
                    </div>
                </div>
                <div className="book-details-parent-grid">
                <div className="book-details-grid">
                    <div>
                        <p>Title</p>
                        <p>Author</p>
                        <p>Class</p>
                        <p>Status</p>
                    </div>
                    <div className="book-tab-colon">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div>
                        <p>{bookDetails?.book_title}</p>
                        <div style={{display:'flex'}}>
                        {bookDetails?.authors?.map((el) => {
                            return <p style={{marginTop:'1px'}}>{el.title}, &nbsp;</p>
                        })}
                        </div>
                        <div style={{display:'flex'}}>
                        {bookDetails?.edClasss?.map((el) => {
                            return <p style={{marginTop:'1px'}}>{el.title}, &nbsp;</p>
                        })}
                        </div>
                        <p style={{marginTop:'1px'}}>{bookDetails?.status ? "Active" : "In Active"}</p>
                    </div>
                </div>
                <div className="book-details-grid">
                    <div>
                        <p>Category</p>
                        <p>Genre</p>
                        <p>Subject</p>
                        <p>Genre</p>
                    </div>
                    <div className="book-tab-colon">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div>
                        <p>{bookDetails?.bookCategory?.title}</p>
                        <div style={{display:'flex'}}>
                        {bookDetails?.genres?.map((el) => {
                            return <p style={{marginTop:'1px'}}>{el.title}, &nbsp;</p>
                        })}
                        </div>
                        <p style={{marginTop:'1px'}}>English</p>
                        <div style={{display:'flex'}}>
                        {bookDetails?.genres?.map((el) => {
                            return <p style={{marginTop:'1px'}}>{el.title}, &nbsp;</p>
                        })}
                        </div>
                    </div>
                </div>
                <div className="book-details-grid">
                    <div>
                        <p>Publisher</p>
                        <p>Language</p>
                        <p>ISBN</p>
                        <p>Language</p>
                    </div>
                    <div className="book-tab-colon">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div>
                        <p>{bookDetails?.publisher?.title}</p>
                        <p>{bookDetails?.language?.title}</p>
                        <p>{bookDetails?.isbn}</p>
                        <p>{bookDetails?.language?.title}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
}