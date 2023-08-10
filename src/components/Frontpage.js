import React, { useState } from 'react';

import { IoMdAdd, IoMdMore, IoMdLink, IoMdPhonePortrait } from 'react-icons/io';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import { CiGrid2H } from 'react-icons/ci';
import { MdPersonOutline, MdPerson } from 'react-icons/md';
import { PiGlobeLight } from 'react-icons/pi';
import { ImArrowUpLeft2 } from "react-icons/im";
import FormModal from './FormModal';



const Frontpage = () => {


  const [showModal, setShowModal] = useState(false);


  const handlePopUp = () => {
    // console.log("hello");
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBackgroundClick = (event) => {
    // Check if the click event is coming from the background element
    if (event.target.classList.contains('modal-background')) {
      handleCloseModal();
    }
  };

  return (
    <div className="bg-white mr-4 h-[700px] w-90vh ml-2 rounded-lg">
      <div className="flex justify-start items-center px-4 py-4">
        <h2 className="text-blue-900 text-2xl font-semibold">Assessment</h2>
        <h2 className="text-gray-300 text-5xl font-thin mx-4">|</h2>
        <h2 className="text-blue-500 text-lg font-semibold">My Assessment</h2>
        <button className='ml-auto' >
        <IoMdPhonePortrait size={24} className="text-blue-950" />
        </button>
      </div>
      <div className="relative">
        <hr className="border-t-4 border-blue-500 w-[138px] absolute left-[180px] right-0 -top-[2px]" />
        <hr className="border-gray-200 border-t-2 my-0" />

      </div>
      <div className="flex justify-start items-center px-4 py-3 text-blue-900 text-2xl">
        <h2 className="">Assesments Overview</h2>
      </div>
      <div className="flex  mx-6 rounded-lg border-2 border-gray-200 items-center text-blue-900 font-semibold">
        {/* Four Partitions */}
        <div className=" px-4 h-32 w-44 rounded-tl-lg rounded-bl-lg border-r-2 border-gray-200">
          <h4 className='mt-4 text-lg'>Total Assessment</h4>
          <div className='flex justify-start'>
          <div className="bg-purple-200 h-12 w-12 rounded-xl flex justify-center items-center mt-4">
            
            <CiGrid2H size={26} className="text-violet-500 font-bold "/>
          </div>
          <h4 className='mt-5 ml-4 text-2xl font-bold'>34</h4>
          </div>
        </div>
        <div className="px-4 h-32 w-[430px] border-r-2 border-gray-200 overflow-hidden">
          <h4 className='mt-4 text-lg flex justify-start'>Candidates</h4>
          <div className='flex justify-start'>
            <div className="bg-purple-200 h-12 w-12 rounded-xl flex justify-center items-center mt-4 relative">
            <MdPersonOutline
              size={24}
              className="absolute top-3 left-[8px] z-10 text-purple-600"
            />
            <MdPerson size={24} className='text-violet-500 clip-person absolute top-3 left-[13px] transform -scale-x-100 pl-[1px]' />
            </div>
            <div className='flex justify-start'>
          <div className='flex items-center'>
            <h4 className='ml-6 mt-2 text-blue-900 text-xl font-bold'>11,145 <span className='text-green-500 text-sm font-semibold'>+89</span> <br className='ml-14' /> <p className='text-sm font-semibold'>Total Candidate</p></h4>
          </div>
          <h2 className="text-gray-200 text-5xl font-thin mx-2 mt-[4px] ml-3">|</h2>

          <div className='flex items-center text-sm'>
          <h4 className='ml-2 mt-2 text-blue-900 text-xl font-bold'>1,14 <span className='text-green-500 text-sm font-semibold'>+89</span> <br className='ml-14' /> <p className='text-sm font-semibold'>Who Attempted</p></h4>
          </div>
          
          
        </div>
          </div>
        </div>
        <div className=" px-4 h-32 w-[600px] border-r-2 border-gray-200">
        <h4 className='mt-4 text-lg flex justify-start'>Candidates Source</h4>
          <div className='flex justify-start'>
            <div className="bg-pink-100 h-12 w-12 rounded-xl flex justify-center items-center mt-4 relative">
            <PiGlobeLight
              size={24}
              className="z-10 text-rose-600 top-3 left-[8px] "
              style={{ clipPath: 'polygon(100% 25%, 100% 50%, 0 100%, 0 25%, 25% 0)' }}
            />
            <ImArrowUpLeft2 className='text-rose-600 top-7 left-[27px] absolute' size={10}/>
            </div>
            <div className='flex justify-start'>
          <div className='flex items-center'>
            <h4 className='ml-6 mt-2 text-blue-900 text-xl font-bold'>11,000 <span className='text-green-500 text-sm font-semibold'>+89</span> <br className='ml-14' /> <p className='text-sm font-semibold flex items-start'>E-mail</p></h4>
          </div>
          <h2 className="text-gray-200 text-5xl font-thin mx-2 mt-[4px] ml-6">|</h2>

          <div className='flex items-center text-sm ml-2'>
          <h4 className='ml-2 mt-2 text-blue-900 text-xl font-bold'>145 <span className='text-green-500 text-sm font-semibold'>+89</span> <br className='ml-14' /> <p className='text-sm font-semibold'>Social Share</p></h4>
          </div>

          <h2 className="text-gray-200 text-5xl font-thin mx-2 mt-[4px] ml-6">|</h2>

          <div className='flex items-center text-sm ml-2'>
          <h4 className='ml-2 mt-2 text-blue-900 text-xl font-bold'>145 <span className='text-green-500 text-sm font-semibold'>+89</span> <br className='ml-14' /> <p className='text-sm font-semibold'>Unique Link</p></h4>
          </div>
          
          
        </div>
          </div>
        </div>
        <div className="px-8 h-32 w-44 rounded-tr-lg rounded-br-lg">
          <h4 className='mt-4 text-lg'>Total Purpose</h4>
          <div className='flex justify-start'>
          <div className="bg-blue-100 h-12 w-12 rounded-xl flex justify-center items-center mt-4">
            
            <IoMdLink size={26} className="text-blue-500 font-bold "/>
            
          </div>
          <h4 className='mt-5 ml-4 text-2xl font-bold'>11</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center px-4 py-3 text-blue-900 text-2xl">
        <h2 className="">My Assesment</h2>
      </div>

      {/* cards */}
      <div className="flex px-8 rounded-lg overflow-hidden gap-12">

        {/* 1st card */}
        <div className="bg-gray-100 h-52 w-[444px] rounded-lg border-2 border-gray-200 border-dotted flex flex-col justify-center items-center">
        <div className="bg-white h-20 w-20 rounded-full border-2 border-white border-dotted flex justify-center items-center mb-2">
        <button onClick={handlePopUp}>
          <IoMdAdd size={36} className="text-blue-600" />
        </button>
        </div>
        <h2 className="text-blue-900 font-semibold text-xl">New Assessment</h2>
        <p className='text-blue-900 text-sm mt-2 font-semibold'>From here you can add questions of multiple types like <br /> MCQs, subjective (text or paragraph)!</p>
        </div>

        {/* 2nd card */}
      <div className="relative flex flex-col w-[444px] h-52 rounded-lg border-2 ">
        <div className="bg-purple-200 h-12 w-12 rounded-2xl border-2  border-dotted flex justify-center items-center mt-4 ml-4">
        <IoBriefcaseOutline size={26} className="text-violet-500" />
        </div>

        <div className="absolute top-4 right-4">
            <IoMdMore size={28} className="text-blue-950" />
        </div>
          <h2 className='flex justify-start ml-4 mt-2 text-blue-900 text-xl font-medium'>Math Assessment</h2>
        <div className='flex justify-start'>
          <h4 className='ml-4 mt-1 text-blue-900 text-lg font-medium'>Job</h4>
          <h2 className="text-gray-300 text-lg font-thin mx-2 mt-[1px]">|</h2>
          <BiCalendar className="text-blue-900 mt-[9px] " size={18}/>
          <h4 className='text-gray-400 ml-1 mt-[8px] text-sm font-medium'>20 Apr 2023</h4>
        </div>
        <div className="w-6/7 border-t border-dotted border-gray-400 my-2 ml-4 mr-4" />
        <div className='flex justify-start'>
          <div className='flex items-center'>
            <h4 className='ml-2 mt-1 text-blue-900 text-base font-semibold'>00 <br className='ml-14' /> Duration</h4>
          </div>
          <div className='flex items-center text-sm'>
            <h4 className='ml-2 mt-1 text-blue-900 text-base font-semibold'>00 <br className='ml-14' /> Questions</h4>
          </div>
          <div className="bg-white h-8 w-20 rounded-2xl border flex items-center mt-2 ml-36 border-blue-900">
            <AiOutlineLink size={20} className='text-blue-900 ml-1' />
            <h4 className='text-blue-900 font-medium ml-1'>Share</h4>
          </div>
          <div className='bg-violet-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-3'>
            <h3 className='text-white font-semibold'>LP</h3>
          </div>
          
        </div>
        
      </div>

        {/* 3rd card */}
        <div className="relative flex flex-col w-[444px] h-52 rounded-lg border-2 ">
        <div className="bg-purple-200 h-12 w-12 rounded-2xl border-2  border-dotted flex justify-center items-center mt-4 ml-4">
        <IoBriefcaseOutline size={26} className="text-violet-500" />
        </div>

        <div className="absolute top-4 right-4">
            <IoMdMore size={28} className="text-blue-950" />
        </div>
          <h2 className='flex justify-start ml-4 mt-2 text-blue-900 text-xl font-medium'>Math Assessment</h2>
        <div className='flex justify-start'>
          <h4 className='ml-4 mt-1 text-blue-900 text-lg font-medium'>Job</h4>
          <h2 className="text-gray-300 text-lg font-thin mx-2 mt-[1px]">|</h2>
          <BiCalendar className="text-blue-900 mt-[9px] " size={18}/>
          <h4 className='text-gray-400 ml-1 mt-[8px] text-sm font-medium'>20 Apr 2023</h4>
        </div>
        <div className="w-6/7 border-t border-dotted border-gray-400 my-2 ml-4 mr-4" />
        <div className='flex justify-start'>
          <div className='flex items-center'>
            <h4 className='ml-2 mt-1 text-blue-900 text-base font-semibold'>00 <br className='ml-14' /> Duration</h4>
          </div>
          <div className='flex items-center text-sm'>
            <h4 className='ml-2 mt-1 text-blue-900 text-base font-semibold'>00 <br className='ml-14' /> Questions</h4>
          </div>
          <div className="bg-white h-8 w-20 rounded-2xl border flex items-center mt-2 ml-28 border-blue-900">
            <AiOutlineLink size={20} className='text-blue-900 ml-1' />
            <h4 className='text-blue-900 font-medium ml-1'>Share</h4>
          </div>
          <div className="relative">
            <div className="bg-violet-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-3">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className="bg-blue-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-3 absolute top-[0.5px] left-[15px] border border-white">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className="bg-red-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-3 absolute top-[0.5px] left-[30px] border border-white">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
          </div>

          
        </div>
        
      </div>
      </div>
      
      {showModal && (
        <div className="modal-background" onClick={handleBackgroundClick}>
          <FormModal show={showModal} onClose={handleCloseModal} />
        </div>
      )}
      
      {/* Content goes here */}
    </div>
  );
};

export default Frontpage;
