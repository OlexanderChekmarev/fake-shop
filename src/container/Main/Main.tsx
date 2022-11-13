import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'
import React from 'react'

type Props = {}

const Main = (props: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Home />
            </Container>
        </main>
    )
}

export default Main
