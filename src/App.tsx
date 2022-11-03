import React from 'react'

// React Element
// const title = <h1>Hello React.js</h1>


// React component
const Title = () => <h1>Hello React component</h1>

const List = () => {
    let a = 10
    return (
      <ul>
           <li>list item {a + 1}</li>
           <li>list item 2</li>
           <li>list item 3</li>
      </ul>
   )
}

function App() {
    return (
    <div className="App">
        <Title />
        <List />
        {10 + 5}
    </div>
    )
}
export default App
