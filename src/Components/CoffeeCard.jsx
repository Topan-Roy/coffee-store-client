import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,coffees,setCoffees}) => {
    const {_id,name,price,quantity,photo}=coffee;
    const handleDelete=(_id)=>{
        console.log(_id)
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed)
  if (result.isConfirmed) {
    // start deleting the coffee
    fetch(`https://coffee-store-server-mu-three.vercel.app/coffees/${_id}`,{
       method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.deletedCount){
         Swal.fire({
      title: "Deleted!",
      text: "Your coffee has been deleted.",
      icon: "success"
    });
        // remove the coffee in the state
        const riminingcoffee=coffees.filter(cof=>cof._id !== _id)
        setCoffees(riminingcoffee)
       }
    })


   
  }
});
    }
    return (
       <div className="card card-side bg-base-100 shadow-sm border-1">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex  justify-around w-full mt-8">
    <div className="">
        <h2 className="">{name}</h2>
    <p>Price : {price}</p>
    <p>Quantity : {quantity}</p>
    </div>
    <div className="card-actions justify-end">
     <div className="join join-vertical space-y-2">
 <Link to={`/coffee/${_id}`}> <button className="btn join-item">View</button></Link>
  <Link to={`/updatecoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
  <button onClick={()=> handleDelete(_id)} className="btn join-item">X</button>
</div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;