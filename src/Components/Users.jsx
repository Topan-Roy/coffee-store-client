import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUser=useLoaderData();
    const [users,setUser]=useState(initialUser);
    const handleDelete=(id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`https://coffee-store-server-mu-three.vercel.app/users/${id}`,{
        method:'DELETE'
       
    })
    .then(res=>res.json())
    .then(data=>{
        const remaningusers=users.filter(user=>user._id !== id);
        setUser(remaningusers)
      if(data.deletedCount){
        Swal.fire({
      title: "Deleted!",
      text: "user  has been deleted.",
      icon: "success"
    });
      }
    })

    
  }
});
    }
    return (
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         No
        </th>
        <th>Name</th>
        <th>Phono No</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map((user,index)=>  <tr key={user._id}>
        <th>
        {index +1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.adderss}</div>
            </div>
          </div>
        </td>
        <td>
         {user.phone}
         
        </td>
        <td>{user.email}</td>
        <th>
          <button className="btn  btn-xs">V</button>
          <button className="btn  btn-xs">E</button>
          <button onClick={()=> handleDelete(user._id)} className="btn  btn-xs">X</button>
        </th>
      </tr>)
     }
     
    </tbody>
   
  </table>
</div> 

    );
};

export default Users;