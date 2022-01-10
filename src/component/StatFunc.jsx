import React, { useState, useEffect } from 'react';



function StatFunc() {

        const data={
                paddingLeft: 50,
                paddingRight: 50,
                paddingTop: 0
        }
        const [title, setTitle] = useState("");
        const [items, setItem] = useState([]);

        useEffect(()=>{
 
            fetch(`https://jsonplaceholder.typicode.com/${title}`)
            .then(response => response.json())
            .then(json => setItem(json))
 
        },[title])
        return (
            <div style={data}>
                <button onClick={()=> setTitle("posts")}>Post</button>
                <button onClick={()=> setTitle("users")}>Users</button>
                <button onClick={()=> setTitle("comments")}>Comments</button>
                <p>{title}</p>
                
                {
                    items.map((data)=>{
                        return <p>{JSON.stringify(data)}</p>
                    })
                }

            </div>
        );    
}

export default StatFunc;