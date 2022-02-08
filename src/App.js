import React from "react"
import styled from 'styled-components/macro'

import TodoList from './components/TodoList/TodoList'
import Filter from './components/TodoList/Filter'
import Input from './components/TodoList/Input'


const Component = styled.div `
    display:flex;
    background-color:#fafafa;
    min-height:100vh;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding:1rem;
    margin:1rem;
`


const Wrapper = styled.div `
    width:100%
    max-width:800px;
    display:flex;
    flex-direction:column;
    align-items:center;
    // border:1px solid black;
    `
const Header = styled.h1 `
    font-weight:400;
    text-transform:uppercase;
    font-size:2.5rem;
`


const App = () => (
    <Component>
        <Wrapper>
            <Header>Farida's To do List</Header>
            <TodoList />
            {/* <Filter /> */}
            {/* <Input /> */}

        </Wrapper>
    </Component>
)

export default App