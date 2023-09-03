import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";

const Pagination = ({render, max}) => {
    const Render = render
    const [page, setPage] = useState(1)
    
    const pageNumbers = Array.from({ length: max }, (_, index) => index + 1)

    return (
        <div>
            <Render page={page} />
            <div>
                <MyButton onClick = {() => setPage(1)}>❮❮</MyButton>
                <MyButton onClick = {() => setPage(page - 1)}>❮</MyButton>
                {pageNumbers.map(num => (
                    <MyButton
                         key={num} 
                         onClick = {() => setPage(num)}
                         style = {{backgroundColor: page === num ? "rgb(160, 134, 185)" : "transparent"}}>{num}</MyButton>
                ))}
                <MyButton onClick = {() => setPage(page + 1)}>❯</MyButton>
                <MyButton onClick = {() => setPage(max)}>❯❯</MyButton>
            </div>
        </div>
    )
}

export default Pagination