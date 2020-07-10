import React from 'react'

function List(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list">
            <p>{item.text}</p>
        </div>
    })
    return (
        <div>
            {listItems}
        </div>
    )
}

export default List
