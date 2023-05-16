import React, { Component } from 'react';
import UserService from '../Services/UserService';
import '../CSS/updateuser.css'

class UpdateUser extends Component {
constructor(props)
{
super(props)

this.state={
id: this.props.match.params.id,
name:'',
email:''
}

// this.idHandler = this.idHandler.bind(this);
this.nameHandler = this.nameHandler.bind(this);
this.emailHandler = this.emailHandler.bind(this);
this.updateUser = this.updateUser.bind(this);

}//constructor

componentDidMount()
{
UserService.getUserById(this.state.id).then((res) =>{
let user = res.data;
this.setState({name:user.name,
email:user.email
});
});

}



nameHandler=(event) => {
this.setState({
name: event.target.value});
}

emailHandler=(event) => {
this.setState({
email: event.target.value});
}

updateUser = (e) => {
e.preventDefault();
let user={
//    id: this.state.id,
name: this.state.name,
email: this.state.email
};

UserService.updateUser(user,this.state.id).then((res) => {
this.props.history.push('/users');
});


}

cancel(){
this.props.history.push('/users');
}

render() {
return (
<div>

<div className='backgroundCard'>
<h3 className="updateText">Update User</h3>
    <form className='updateForm'>  
  
        <div className="form-group">
            <label className='formLables'>User Name: </label>
            <input 
            placeholder="Name" 
            name="name" 
            required
            className="form-control"
            value={this.state.name} onChange={this.nameHandler} />
        </div>   
        <div className="form-group">
            <label className='formLables'>User Email: </label>
            <input 
            placeholder="Email" 
            name="email" className="form-control"
            required
            type='email'
            value={this.state.email} onChange={this.emailHandler} />
        </div>  
        <div className='buttonContainers' >
        <button className="updateBtn btn-success" onClick={this.updateUser}> Update </button>
        <button className="cancelBtn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>    
        </div>                
    </form>
</div>
</div>

);
}
}

export default UpdateUser;
