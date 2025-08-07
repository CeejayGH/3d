import { useState } from "react";
import axios from 'axios';
const UserForm = () => {
    const [user, setUser] = useState({name:'', email:'' });
    const handleChange = e => setUser({...user, [e.target.name] :e.target.value})

    const handleSubmit = async e =>{
        e.preventDefault();
        const result = await axios.post('http://localhost:5000/3d_crud/users', user);
        console.log(result);
        setUser({name:'', email:''})
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="name" value={user.name} onChange={handleChange} placeholder="Please Enter Your Name" />
            <input name="email" value={user.email} onChange={handleChange} placeholder="Please Enter Your Email" />
            <button type="submit"> ADD USER </button>
        </form>
    )
}
export default UserForm;