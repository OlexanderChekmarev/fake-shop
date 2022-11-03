import React from 'react'

// React Element
// const title = <h1>Hello React.js</h1>

// React component
const Title = () => <h1>Hello React component</h1>

const List = () => {
    let a = 10
    return (
      <React.Fragment>
            <ul>
                <li>list item {a + 1}</li>
                <li>list item 2</li>
                <li>list item 3</li>
            </ul>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
                cum quidem ad provident veritatis unde, placeat dolor sequi vel
                minus tenetur doloribus assumenda, impedit ut sapiente?
                Possimus, exercitationem! Modi, asperiores.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab
                aspernatur rem repellendus cupiditate fuga, deserunt libero esse
                omnis odio et corporis. Rerum veniam doloremque mollitia iusto
                ratione adipisci nulla.
            </p>
     </React.Fragment>
    )
}

function App() {
    return (
        <div className="App">
            <Title />
            <List />
        </div>
    )
}
export default App
