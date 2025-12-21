import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleNews from './SingleNews';

const News = () => {
    const {data} = useLoaderData();
    console.log(data);
    
    return (
        <div>
            <h1 className='text-gray-900 font-semibold text-1xl '>Dragon News Home</h1>
            
             <div>
                {
                    data.map(d=><SingleNews key={d._id} d={d}></SingleNews>)
                }
             </div>
        </div>
    );
};

export default News;