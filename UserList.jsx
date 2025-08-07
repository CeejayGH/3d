import React, {useEffect, useState} from "react";
import axios from "axios";
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);

    const fetchUsers = async () =>{
        const res = await axios.get('http://localhost:5000/3d_crud/users');
        setUsers(res.data);
    }
    useEffect(()=>{
        fetchUsers()
    })

    
const deleteUser = async id => {
       const res = await axios.delete(`http://localhost:5000/3d_crud/users/${id}`);
         fetchUsers();
         alert(res.data.message);
    }

    const updateUser = async ()=> {
      await axios.put(`http://localhost:5000/3d_crud/users/${editUser.id}`, editUser);
      setEditUser(null);
      fetchUsers();
      //alert("Update Successfully")
    }
    return(
        <div>
            <ul>
                {users.map(user=> (
                    <li  key={user.id}>
                      {  editUser?.id === user.id ?(
                        <>
                        <input value={editUser.name} onChange={e =>setEditUser({...editUser, name:e.target.value})} />
                        <input value={editUser.email} onChange={e =>setEditUser({...editUser, email:e.target.value})} />
                        <button onClick={() => updateUser(user)}> Save</button>
                        </>

                      ):(
                        <>
                             {user.name} ({user.email})
                             <button onClick={() => setEditUser(user)}> Update</button>
                              <button onClick={() => deleteUser(user.id)}> Delete</button>
                        </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )

};

export default UserList;
