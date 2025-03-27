import React from 'react';
import Image1 from '../Assets/images/namuna.png';
import Image2 from '../Assets/images/tribhuwan.png';

export default function Education() {
    return (
        <>

            <div className="max-screen mx-auto">
                <h2 className="p-1 rounded-tl-full text-center rounded-tr-full  font-bold text-2xl text-gray-800 bg-white w-4/6 mx-auto text-xl lg:text-2xl">
                    Education
                </h2>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 p-5 text-center mx-5 rounded-2xl ">
                    <div className="px-5 py-6 border-2 border-gray-300 rounded-2xl">
                        <div className="bg-yellow-200 font-semibold p-1 w-8/12 m-auto rounded-full text-sm lg:text-xl">
                            Bachelor Education
                        </div>
                        <div className="mt-4  text-tertiary">
                            <h2 className="font-bold text-2xl text-secondary lg:text-2xl">Lumbini ICT Campus</h2>
                            <p className="text-sm lg:text-xl mt-2">Affiliated to Tribhuwan University</p>
                            <div className="mt-4">
                                <img className="w-1/4 m-auto" src={Image2} alt="Tribhuvan University" />
                            </div>
                            <p className="text-sm font-medium lg:text-xl mt-2">Pursuing Bachelor of Computer Application (BCA)</p>
                            <p className="text-sm font-medium lg:text-xl ">Currently in the 7th Semester</p>
                        </div>
                    </div>

                    {/* Higher Secondary Section */}
                    <div className="px-5 py-6 border-2 border-gray-300 rounded-2xl">
                        <div className="bg-yellow-200 font-semibold p-1 w-8/12 m-auto rounded-full text-sm lg:text-xl">
                            Higher Secondary School
                        </div>
                        <div className="mt-4  text-tertiary">
                            <h2 className="font-bold text-2xl text-secondary lg:text-2xl">Namuna Science and Management College</h2>
                            <div className="mt-4">
                                <img className="w-1/4 m-auto" src={Image1} alt="Namuna College" />
                            </div>
                            <p className="text-sm lg:text-xl mt-4">Science Student</p>
                            <p className="text-sm lg:text-xl ">Completed +2 Education</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
