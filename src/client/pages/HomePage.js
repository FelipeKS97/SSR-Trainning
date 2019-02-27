import React from 'react'


const HomePage = () => {
    return (
        <div>
            <h1>Home Component</h1>
            <button onClick={ ()=> console.log('hi!')}>Press</button>
        </div>
    )
}

export default { 
    component: HomePage 
}