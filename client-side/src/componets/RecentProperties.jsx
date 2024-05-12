import { IoLocationSharp } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { FaVectorSquare } from "react-icons/fa6";

import localImg from "../assets/PropertyOne.jpg"
import { Link } from "react-router-dom";

const RecentProperties = () => {

    return (
        <div className="py-10">
            <div className="container">
                <h3 className="mb-6">Recent Properties</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">

                        <div className="hover:shadow-xl transition-all duration-300 ">
                            <div className="relative overflow-hidden">
                                <img className="aspect-[1/0.7] w-full object-cover hover:scale-105 hover:transform hover:rotate-2 transition-all duration-500" src={localImg} alt="" />
                                <div className="absolute top-2 left-2 bg-heading px-2 py-1 inline-block text-white">
                                    For jack
                                </div>
                            </div>
                            <div className="bg-slate-200 p-4">
                                <h4 className="text-primary">33$</h4>
                                <h5>hello</h5>
                                <div className="space-y-2 flex flex-wrap items-center gap-2">
                                    <IoLocationSharp />
                                    <p className="!mt-0">Dhaka</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        <IoBed />1 room
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaShower />1 shower
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaVectorSquare />2000
                                    </div>
                                </div>
                                <Link to=''>
                                    <button className="tw-btn btn-primary">View property</button>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default RecentProperties;
