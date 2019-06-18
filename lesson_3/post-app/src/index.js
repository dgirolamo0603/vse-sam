import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/';

class WhoAmi extends React.Component{
    constructor(props){
        super(props);
        this.state={
            years:26
        };
        this.nextYear=this.nextYear.bind(this);
            }
        nextYear(){
            console.log(1);
            this.setState(state=>({
               years: ++state.years
            }));
        }
        render(){
                const {name, surname, link}=this.props;
                const {years}=this.state
                return (
        <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years={years}</h1>
            <a href={link}>My profile</a>
        </>
                )       
            }
}


const All=()=>{
    return(
       <>
        <WhoAmi name="Jong" surname="Snow" link="facebook.com" />
        <WhoAmi name="Ivan" surname="Snow" link="facebook.com" />
        <WhoAmi name="Fedya" surname="Snow" link="facebook.com" />
        </>
    )
}

ReactDOM.render(<All/>, document.getElementById('root'));

