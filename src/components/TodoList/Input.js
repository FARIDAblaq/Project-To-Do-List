import React, {Component} from 'react'
import styled from 'styled-components/macro'



const Wrapper = styled.div`
border-bottom: 1px solid #e2e8f0;
display;flex;
min-width:400px;

`

const StyledInput = styled.input`
width:80%;
padding: 1rem;
border:0;`

const Button = styled.button`
border:0;
border-left:1px solid #e2e8f0;
background-color:#68d391;
color: #fff;
padding: 1rem 2 rem;
width:40px;
height:40px;
display:flex;
align-items: center;
justify-content: center;
padding:0;
font-weight: 400;
flex:1;

transition all 0.25s ease-in-out;


&:focus{
    outline:0;
}


&:hover{
    cursor:pointer;
    background-color:grey;
}
`

class Input extends Component{
    state = {
        value:'',
        edit: false
    }

    //const [isUpdate, setIsUpdate] = useState(false);

    handleeditForm(id) {
        return (<Wrapper>
            <StyledInput type='text'
                placeholder='Add item'
                value= {id}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
            />
            {this.state.edit && <Button onClick={this.handleSubmit}>Edit</Button>}    
        </Wrapper>);
        
    }

    handleChange = (event)=>{
        const inputValue = event.target.value 

        this.setState({ value: inputValue})

        if(inputValue === ''){
            this.setState({edit: false}) 
        } else{
            this.setState({edit:true})
        }
    }

    handleKeyPress = (event) =>{
        //if we hit enter while typing inside our input
        if(event.key==='Enter'){
            this.handleSubmit()
        }
    }

    handleSubmit = () =>{
        this.props.onTaskAdd(this.state.value)

        //clean the input
        this.setState({value: '', edit:false})
    }


    render(){
        return (
            <Wrapper>
                <StyledInput type='text'
                    placeholder='Add item'
                    value= {this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                {this.state.edit && <Button onClick={this.handleSubmit}>Add</Button>}    
            </Wrapper>
        )
    }


}
export default Input