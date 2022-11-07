import React from 'react'

type TitleProps = {
    title: string
    text?: string
}

const Title = (props: TitleProps) => 
<h1> 
    {props.text} {props.title}
</h1>

const List = () => {
    let a = 10
    return (
      <>
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
     </>
    )
}

function App() {
    return (
        <div className="App">
            <Title title="App.js" />  
            <Title title="Test.js" />  
            <List />    
        </div>
    )
}
export default App
