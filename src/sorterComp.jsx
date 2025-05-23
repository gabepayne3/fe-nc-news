import React from "react";
import { useSearchParams } from "react-router-dom";
import "./App.css"

const SortControls = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sort_by = searchParams.get("sort_by") || "date";
    const order = searchParams.get("order") || "desc";

    const handleSortChange = (e) => {
        const updatedParams = new URLSearchParams(searchParams);
        updatedParams.set("sort_by", e.target.value);
        setSearchParams(updatedParams); 
    };
    const handleOrder = () => {
        const updatedParams = new URLSearchParams(searchParams);
        updatedParams.set("order", order === "asc" ? "desc" : "asc");
        setSearchParams(updatedParams); 
    };
    return (
        <div className="sorter">
            <label>
                Sort by:{" "}
                <select value={sort_by} onChange={handleSortChange}>
                    <option value="date">Date</option>
                    <option value="votes">Votes</option>
                    <option value="comment_count">Comment Count</option>
                </select>
            </label>
            <button type="button" onClick={handleOrder}>
                Order: {order === "asc" ? "Ascending" : "Descending"}
            </button>
        </div>
    );
};

export default SortControls;