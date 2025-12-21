import { Outlet } from "react-router";
import Category from "./HomeComponent/Category";
import RightSide from "./HomeComponent/RightSide";

const Home = () => {
  return (
    <div className="container mx-auto px-40 gap-3 grid grid-cols-12 text-gray-800">
      
      {/* Category Sidebar */}
      <div className="col-span-3">
        <Category />
      </div>

      {/* Main Content */}
      <div className="col-span-6">
        <Outlet />
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3">
        <RightSide />
      </div>

    </div>
  );
};

export default Home;
