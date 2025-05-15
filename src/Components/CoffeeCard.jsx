import React from 'react';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
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
    fetch(`http://localhost:3000/coffees/${_id}`,{
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
  <button className="btn join-item">View</button>
  <button className="btn join-item">Edit</button>
  <button onClick={()=> handleDelete(_id)} className="btn join-item">X</button>
</div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;