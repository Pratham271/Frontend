import React, { useEffect, useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdFilterAlt} from 'react-icons/md';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { IoMdAdd, IoMdMore } from 'react-icons/io';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { BsClock } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';
import FormModal from './FormModal';


const ResponsivePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const contentArray = [
    { title: 'Math Assessment'},
    { title: 'Math Assessment'},
    { title: 'Math Assessment'},
    { title: 'Math Assessment'},
    { title: 'Math Assessment'},
  ];

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

  useEffect(() => {
    // Update the windowWidth state whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define variables based on window width
  const isLessThan400 = windowWidth < 400;


  return (
    <div className="bg-white w-full h-full">
      <div className="mt-6 z-50 flex items-start">
        <h4 className="ml-7 text-blue-500 font-medium text-lg">My Assessments</h4>
        <h4 className={`${isLessThan400?'ml-8':'ml-20'} text-gray-700 font-medium text-lg`}>Unstop Assessments</h4>
      </div>
      {/* Horizontal row with border */}
      <div className="mt-4 relative">
      <hr className="border-t-4 border-blue-500 w-[180px] absolute left-0 -top-[2px] z-0" />
        <hr className="border-t-2 border-gray-200 w-full z-0" />
      </div>

      <div className='flex items-start mt-8'>
        <h4 className={`${isLessThan400?'ml-3':'ml-6'} text-blue-950 font-semibold text-lg`}>My Assessment</h4>
        <AiOutlineSearch size={26} className={`mt-1 ${isLessThan400?'ml-24':'ml-36'} text-blue-950`}/>
        <MdFilterAlt size={26} className='mt-1 ml-4 text-blue-950'/>
        <BiSolidBarChartAlt2 size={26} className='mt-1 ml-4 text-blue-950 transform -scale-x-100'/>
      </div>

      {/* cards */}
      <div className='mt-6 ml-3'>
      <div className={`bg-gray-100 h-52 ${isLessThan400?'w-[350px]':'w-[400px]'} rounded-lg border-2 border-gray-200 border-dotted flex flex-col justify-center items-center`}>
        <div className="bg-white h-20 w-20 rounded-full border-2 border-white border-dotted flex justify-center items-center mb-2">
        <button onClick={handlePopUp}>
          <IoMdAdd size={36} className="text-blue-600" />
        </button>
        </div>
        <h2 className="text-blue-900 font-semibold text-xl">New Assessment</h2>
        <p className='text-blue-900 text-sm mt-2 font-medium p-1 flex justify-center'>From here you can add questions of multiple types <br />  like MCQs, subjective (text or paragraph)!</p>
        </div>
        </div>

        {/* 2nd card */}
        <div className={`relative flex flex-col ${isLessThan400 ? 'w-[350px]' : 'w-[400px]'} h-36 rounded-lg border-2 mt-4 ml-3`}>
          <div className='flex items-start'>
            <div className="bg-purple-200 h-12 w-12 rounded-2xl border-2 border-dotted flex justify-center items-center mt-4 ml-4">
              <IoBriefcaseOutline size={26} className="text-violet-500" />
            </div>

            <div className="ml-3">
              <h2 className='text-blue-900 text-lg font-medium mt-2'>Math Assessment</h2>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-base font-medium mt-1'>Job</h4>
              <h2 className="text-gray-300 text-lg font-thin mx-2 mt-[1px]">|</h2>
              <BsClock className="text-gray-400 mt-[4px] " size={14} />
              <h4 className='text-gray-400 ml-1 mt-[4px] text-sm font-medium'>20 Apr 2023</h4>
            </div>
          </div>

            <div className="absolute top-4 right-4">
            <IoMdMore size={28} className="text-blue-950" />
          </div>
        </div>

          <div className="w-6/7 border-t border-dotted border-gray-400 my-2 ml-4 mr-4" />
          <div className='flex justify-start'>
            <div className='ml-3'>
            <h4 className=' mt-1 text-blue-900 text-base font-semibold'>00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00</h4>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-sm mx-0'>Duration&nbsp;&nbsp; Question</h4>
            </div>
            </div>
            <div className={`bg-white h-8 w-20 rounded-2xl border flex items-center mt-2 ${isLessThan400 ? 'ml-20' : 'ml-32'} border-blue-900`}>
              <AiOutlineLink size={20} className='text-blue-900 ml-1' />
              <h4 className='text-blue-900 font-medium ml-1'>Share</h4>
            </div>
            <div className='bg-violet-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-3'>
              <h3 className='text-white font-semibold'>LP</h3>
            </div>
          </div>
        </div>

        {/* 5 cards */}
        {contentArray.map((item, index)=> (
          <div className={`relative flex flex-col ${isLessThan400 ? 'w-[350px]' : 'w-[400px]'} h-36 rounded-lg border-2 mt-4 ml-3`} key={index}>
          <div className='flex items-start'>
            <div className="bg-purple-200 h-12 w-12 rounded-2xl border-2 border-dotted flex justify-center items-center mt-4 ml-4">
              <IoBriefcaseOutline size={26} className="text-violet-500" />
            </div>

            <div className="ml-3">
              <h2 className='text-blue-900 text-lg font-medium mt-2' >{item.title}</h2>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-base font-medium mt-1'>Job</h4>
              <h2 className="text-gray-300 text-lg font-thin mx-2 mt-[1px]">|</h2>
              <BsClock className="text-gray-400 mt-[4px] " size={14} />
              <h4 className='text-gray-400 ml-1 mt-[4px] text-sm font-medium'>20 Apr 2023</h4>
            </div>
          </div>

            <div className="absolute top-4 right-4">
            <IoMdMore size={28} className="text-blue-950" />
          </div>
        </div>

          <div className="w-6/7 border-t border-dotted border-gray-400 my-2 ml-4 mr-4" />
          <div className='flex justify-start'>
            <div className='ml-3'>
            <h4 className=' mt-1 text-blue-900 text-base font-semibold'>00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00</h4>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-sm mx-0'>Duration&nbsp;&nbsp; Question</h4>
            </div>
            </div>
            <div className={`bg-white h-8 w-20 rounded-2xl border flex items-center mt-2 ${isLessThan400 ? 'ml-6' : 'ml-16'} border-blue-900`}>
              <AiOutlineLink size={20} className='text-blue-900 ml-1' />
              <h4 className='text-blue-900 font-medium ml-1'>Share</h4>
            </div>
            <div className="relative">
            <div className="bg-violet-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className="bg-blue-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1 absolute top-[0.5px] left-[15px] border border-white">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className="bg-red-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1 absolute top-[0.5px] left-[30px] border border-white">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className='flex justify-center items-center absolute top-[12.5px] left-[68px]'>
              <h3 className='text-blue-900 font-semibold text-sm'>+324</h3>
            </div>
          </div>
          </div>
        </div>

        ))}

        {/* last card */}
        <div className={`relative flex flex-col ${isLessThan400 ? 'w-[350px]' : 'w-[400px]'} h-36 rounded-lg border-2 mt-4 ml-3`}>
          <div className='flex items-start'>
            <div className="bg-purple-200 h-12 w-12 rounded-2xl border-2 border-dotted flex justify-center items-center mt-4 ml-4">
              <IoBriefcaseOutline size={26} className="text-violet-500" />
            </div>

            <div className="ml-3">
              <h2 className='text-blue-900 text-lg font-medium mt-2' >Math Assessment</h2>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-base font-medium mt-1'>Job</h4>
              <h2 className="text-gray-300 text-lg font-thin mx-2 mt-[1px]">|</h2>
              <BsClock className="text-gray-400 mt-[4px] " size={14} />
              <h4 className='text-gray-400 ml-1 mt-[4px] text-sm font-medium'>20 Apr 2023</h4>
            </div>
          </div>

            <div className="absolute top-4 right-4">
            <IoMdMore size={28} className="text-blue-950" />
          </div>
        </div>

          <div className="w-6/7 border-t border-dotted border-gray-400 my-2 ml-4 mr-4" />
          <div className='flex justify-start'>
            <div className='ml-3'>
            <h4 className=' mt-1 text-blue-900 text-base font-semibold'>00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00</h4>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-sm mx-0'>Duration&nbsp;&nbsp; Question</h4>
            </div>
            </div>
            <div className={`bg-white h-8 w-20 rounded-2xl border flex items-center mt-2 ${isLessThan400 ? 'ml-4' : 'ml-16'} border-blue-900`}>
              <AiOutlineLink size={20} className='text-blue-900 ml-1' />
              <h4 className='text-blue-900 font-medium ml-1'>Share</h4>
            </div>
            <div className="relative">
            <div className="bg-violet-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            {/* <div className="bg-blue-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1 absolute top-[0.5px] left-[15px] border border-white">
              <h3 className="text-white font-semibold">LP</h3>
            </div> */}
            <div className="bg-red-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1 absolute top-[0.5px] left-[15px] border border-white">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className='flex justify-center items-center absolute top-[12.5px] left-[52px]'>
              <h3 className='text-blue-900 font-semibold text-sm'>+32,4090</h3>
            </div>
          </div>
          </div>
        </div>

        {showModal && (
        <div className="modal-background" onClick={handleBackgroundClick}>
          <FormModal show={showModal} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default ResponsivePage;
