import  { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Category = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
     fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res=>res.json())
    .then(data=>setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <h1 className='text-2xl font-bold '>All Category ({categories.length})</h1>
            <div className='flex flex-col gap-4 mt-4 pr-3'>
                {
                categories.map(c=>
                <NavLink  to={`/category/${c.category_id}`} className={({ isActive }) =>
    `px-4 py-2 rounded transition
     ${isActive ? "bg-gray-300 text-gray-800" : "hover:bg-gray-100 border border-gray-200"}`
  } key={c.category_id}>
                    {c.category_name}
                </NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;