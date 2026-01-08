import React from 'react';
import Navbar from '../../Navbar/Navbar';
import RightSide from './RightSide';
import { useLoaderData } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
  
    
    return (
        <div className='container mx-auto px-40 grid grid-cols-12 gap-6'>

            <div className='col-span-9 '>
                 <h2 className='text-2xl font-bold mb-3 text-gray-800'>Dragon News</h2>
     <div className="bg-white rounded-3xl shadow-xl p-8">
  
  {/* Top Meta */}
  <div className="flex flex-wrap items-center gap-3 mb-5">
    <span className="text-xs font-semibold px-4 py-1 rounded-full bg-indigo-100 text-indigo-600">
      Category {news?.category_id}
    </span>

    {news?.others_info?.is_trending && (
      <span className="text-xs font-semibold px-4 py-1 rounded-full bg-rose-100 text-rose-600">
        🔥 Trending
      </span>
    )}

    {news?.others_info?.is_todays_pick && (
      <span className="text-xs font-semibold px-4 py-1 rounded-full bg-amber-100 text-amber-600">
        ⭐ Today’s Pick
      </span>
    )}
  </div>

  {/* Title */}
  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
    {news?.title}
  </h1>

  {/* Author Row */}
  <div className="flex items-center justify-between bg-gray-50 rounded-2xl px-5 py-4 mb-6">
    <div className="flex items-center gap-4">
      <img
        src={news?.author?.img}
        alt={news?.author?.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-200"
      />
      <div>
        <p className="font-semibold text-gray-800">
          {news?.author?.name}
        </p>
        <p className="text-sm text-gray-500">
          {news?.author?.published_date}
        </p>
      </div>
    </div>

    <div className="text-right">
      <p className="text-xs text-gray-500">Rating</p>
      <p className="font-bold text-indigo-600">
        ⭐ {news?.rating?.number}
      </p>
    </div>
  </div>

  {/* Image */}
  <div className="relative mb-8">
    <img
      src={news?.image_url}
      alt={news?.title}
      className="w-full h-[420px] object-cover rounded-3xl"
    />
    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-white px-4 py-2 rounded-full text-sm">
      👁 {news?.total_view} views
    </div>
  </div>

  {/* Content */}
  <div className="prose prose-lg max-w-none text-gray-700">
    {news?.details?.split("\n").map((para, index) => (
      <p key={index}>{para}</p>
    ))}
  </div>

  {/* Footer Actions */}
  <div className="mt-10 pt-6 border-t flex items-center justify-between">
    <p className="text-sm text-gray-500">
      Rating: {news?.rating?.number} ({news?.rating?.badge})
    </p>

    <button className="px-6 py-3 rounded-xl cursor-pointer bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
      Share Article
    </button>
  </div>
</div>




                
                </div>
            <div className='col-span-3 text-black'><RightSide></RightSide></div>

        </div>
    );
};

export default NewsDetails;