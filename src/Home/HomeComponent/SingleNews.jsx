import { FaEye, FaStar } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";

const SingleNews = ({ d }) => {
  const {
    title,
    details,
    image_url,
    author,
    rating,
    total_view,
    others_info,
  } = d;

  return (
    <div className="bg-white rounded-xl mb-0  mt-6 shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Thumbnail */}
      <div className="relative">
        <img
          src={image_url}
          alt={title}
          className="w-full h-56 object-cover"
        />

        {others_info?.is_trending && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
            🔥 Trending
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h4 className="text-sm font-semibold">{author?.name}</h4>
              <p className="text-xs text-gray-500">
                {author?.published_date}
              </p>
            </div>
          </div>

          <div className="flex gap-3 text-gray-500">
            <BsBookmark className="cursor-pointer hover:text-blue-500" />
            <BsShare className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold leading-snug hover:text-blue-600 cursor-pointer">
          {title}
        </h2>

        {/* Details */}
        <p className="text-gray-600 text-sm">
          {details.length > 120
            ? details.slice(0, 120) + "..."
            : details}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t">

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <FaStar />
            <span className="font-medium">{rating?.number}</span>
            <span className="text-gray-500">({rating?.badge})</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
