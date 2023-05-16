import React, { Component } from 'react';
import UserService from '../Services/UserService';
import '../CSS/deleteuser.css'

class DeleteUser extends Component {
constructor(props)
{
super(props)

this.state={
id: this.props.match.params.id,
name:'',
email:''
}


this.deleteUser = this.deleteUser.bind(this);

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




deleteUser = (e) => {
e.preventDefault();
let user={
id: this.state.id,
name: this.state.name,
email: this.state.email
};

console.log(user);
UserService.deleteUser(this.state.id).then(res => {

this.props.history.push('/users');
})


}

cancel(){
this.props.history.push('/users');
}

render() {
return (
<div>

<div className='backgroundCard'>
<h3 className="deleteText">Delete User</h3>

<form className='deleteForm'>  

<div className="form-group">
<label className='formLables'>User Name: </label>
<input placeholder="Name" readOnly= "true" name="name" className="form-control"
value={this.state.name} onChange={this.nameHandler} />
</div>   
<div className="form-group">
<label className='formLables'>User Email: </label>
<input placeholder="Email" readOnly="true" name="email" className="form-control"
value={this.state.email} onChange={this.emailHandler} />
</div>   
<div className='buttonContainers' >

<button className="deleteBtn btn-success" onClick={this.deleteUser}> Delete </button>
<button className="cancelBtn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>     
</div>                

</form>
</div>

</div>
);
}
}

export default DeleteUser;