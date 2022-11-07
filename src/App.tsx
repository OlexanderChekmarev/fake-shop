import React from 'react'

type TitleProps = {
    title: string
    text?: string
    num:number
}

const Title = (props: TitleProps) => {
    console.log(props)
    return (
        <>
        <h1> 
           {props.text} {props.title}
        </h1>
        <div>{props.num}</div>
        </>
       
       
    )
}

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
            <Title title="App.js" text="Hi"num={15} />  
            <Title title="Test.js" text="Hello"num={25} />  
            <List />    
        </div>
    )
}
export default App
