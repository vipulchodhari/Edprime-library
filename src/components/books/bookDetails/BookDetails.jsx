import { useState } from "react";
import { BookDetailsTab } from "./BookDetailsTab"
import { BookStock } from "./BookStock";
import { BookTransaction } from "./BookTransaction";
import { BookUnitItem } from "./BookUnitItem";
import "../../../styles/bookDetails.css";

export const BookDetails = () => {
    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    };
    return <div className="book-details-container">
        <h2 style={{ textAlign: "left", marginBottom:"-2px" }}>Book Details</h2>
        <hr />
        <div className="book-tab">
            <button
                className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
            >
                Basic Details
            </button>
            <button
                className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
            >
                Stock insights
            </button>
            <button
                className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
            >
                Transactions
            </button>
            <button
                className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
            >
                Book Unit Item
            </button>
        </div>
        <div className="book-details-tab-cont">
            <div className={toggle === 1 ? "content  active-content" : "content"}>
                <BookDetailsTab/>
            </div>
            <div className={toggle === 2 ? "content  active-content" : "content"}>
                <BookStock/>
            </div>
            <div className={toggle === 3 ? "content  active-content" : "content"}>
                <BookTransaction/>
            </div>
            <div className={toggle === 4 ? "content  active-content" : "content"}>
                <BookUnitItem/>
            </div>
        </div>
    </div>
}