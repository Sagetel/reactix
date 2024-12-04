import React from 'react'

function NavBar({ items }) {
    return (
        <div>{items.map((el, index) =>
            <React.Fragment key={index}>
                <div>{index}</div>
                <div>{el}</div>
            </React.Fragment>
        )}</div>
    )
}

export default NavBar