import * as React from 'react'
import styled from 'styled-components/macro'






const Component = styled.div`
padding: 1rem;
border-bottom: 1px solid #e2e8f0; 
`


const deletebuttonStyles = `
background-color:#ed2f7;
width:40px;
height:40px;
display:flex;
align-items: center;
justify-content: center;
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


const Button = styled.button`
${deletebuttonStyles}

border;0;
border-radius:0%;
`


const Wrapper = styled.div`
border-bottom: 1px solid #e2e8f0;
display;flex;
min-width:400px;
`

const StyledInput = styled.input`
width:80%;
padding: 1rem;
border:0;`


export class Update extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            value : '',
            edit : false

        }
    }

    handleUpdateTask= (event)=>{
        const inputValue = event.target.value 

        this.setState({ value: inputValue})

        if(inputValue === ''){
            this.setState({edit: false}) 
        } else{
            // this.setState({edit:true})
            this.handleEditmode()
        }
    }

    handleEditmode = ()=>{
        this.setState({edit:true})
    }

    handleKeyPress = (event) =>{

        //if we hit enter while typing inside our input
        if(event.key==='Enter'){
            this.handleSubmit()
        }
    }

    handleSubmit = () =>{
        this.props.onUpdate(this.state.value,this.props.id)
        
        //clean the input  
        this.setState({value: '', edit:false})
    }




    render(){
        console.log(this.state)
        console.log(this.props)
            
        return (
            
            <Component>
                
                <Wrapper>
                    <StyledInput 
                    placeholder='Update item'
                    value= {this.state.value}
                    onChange={this.handleUpdateTask}
                    onKeyPress={this.handleKeyPress}
                    />
                    {this.state.edit && <Button onClick={this.handleSubmit}>Update</Button>} 
                </Wrapper>
                <Button onClick={this.handleEditmode}>  Edit</Button>

               
            </Component>
            
        )
    }
}

export default Update

