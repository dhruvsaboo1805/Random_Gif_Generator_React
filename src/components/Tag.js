import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
  const [tag, setTag] = useState('');

  const { gif, loading, fetchData } = useGif(tag);
  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[20px]'>
      <h1 className='mb-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {
        loading ? (<Spinner></Spinner>) : (<img src={gif} width="450" alt="" />)
      }

      <input type="text" className='w-10/12 rounded-lg text-lg py-2 mb-[3px] text-center' onChange={changeHandler} value={tag} placeholder='Search Gif'/>
      <button onClick={clickHandler} className='w-8/12 bg-yellow-500 rounded-lg text-lg py-2 mb-[20px]'>
        Generate
      </button>
    </div>
  )
}

export default Tag
