import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialcoffees=useLoaderData();
    const [coffees,setCoffees]=useState(initialcoffees)
    console.log(coffees)
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                coffees.map(coffee=><CoffeeCard
                     key={coffee._id}
                     coffees={coffees}
                     setCoffees={setCoffees}
                      coffee={coffee}></CoffeeCard>)
            }
           </div>
        </div>
    );
};

export default Home;