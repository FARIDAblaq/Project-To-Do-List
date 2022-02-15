import * as React from 'react'
import styled from 'styled-components/macro'
//import Checkbox from '@material-ui/core/Checkbox'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'
import DoneIcon from '@material-ui/icons/Done'
import DeleteIcon from '@material-ui/icons/Delete'


const Component = styled.div`
padding: 1rem;
border-bottom: 1px solid #e2e8f0; 
`

const Item = styled.div`
display: flex;
align-items: center;

&:not(:last-of-type){
    margin-bottom:0.5rem;
}
`

const buttonStyles = `
background-color:transparent;
width:20px;
height:20px;
border-radius:50%;
display:flex;
align-items: center;
justify-content: center;
padding:0;
font-size: 0.9rem;

&:focus{
    outline: 0;
}

&:hover:{
    cursor: pointer;
    filter: brightness(105%);
}
`
const deletebuttonStyles = `
background-color:#ed2f7;
width:80px;
height:40px;
display:flex;
align-items: center;
justify-content: center;
padding:0;
font-weight: 400;
flex:1;

&:focus{
    outline: 0;
}

&:hover:{
    cursor: pointer;
    filter: brightness(105%);
}
`

const Complete = styled.button`
${buttonStyles}

border: ${props => props.completed ? 0: '1px solid #e2e8f0'};

`

const Label = styled.p`
margin: 0 0 0 0.5rem;
flex: 1;

text-decoration:${props => props.completed ? 'line-through': 'none'};
color: ${props => props.completed ? '#4A5568':'#000'};


&:hover{
    cursor: pointer;
    color:#4a5568;

}
`

const Delete = styled.button`
${deletebuttonStyles}

border;0;
border-radius:0%;
`
const NoItems = styled.p`
margin: 0;
text-align: center;
color: #4a5568;
`


const List = ({items,onComplete, onDelete}) => (
<Component>
    {items.map(({id,completed,label}) => (
        <Item key={id}>
            <Complete completed={completed} 
            onClick={onComplete(id)}>{completed && (
             <DoneIcon />)}
            </Complete>
            <Label completed={completed}>{label}</Label>
            <DeleteIcon onClick={onDelete(id)} />
        </Item>
    )

    )
    }
    {items.length===0 && <NoItems> You have No items</NoItems>}
    

</Component>)

export default List