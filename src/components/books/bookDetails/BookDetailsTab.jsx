export const BookDetailsTab = () => {
    return <div>
        <div className="book-details-main-tab">
            <p style={{ textAlign: "left", }}>Image</p>
            <div className="book-details-tab">
                <div>
                    <div style={{ height: '275px', border: "1px solid black" }}>
                        <img src="" alt="Dummy img" />
                    </div>
                </div>
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
                        <p>Antatomy  &amp; physiology</p>
                        <p>Author Name</p>
                        <p>12th</p>
                        <p>Active</p>
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
                        <p>Book</p>
                        <p>Genre</p>
                        <p>English</p>
                        <p>Genre</p>
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
                        <p>Publisher Name</p>
                        <p>Hindi</p>
                        <p>STD123</p>
                        <p>Hindi</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}