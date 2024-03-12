import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';

const useGif = (tag) => {
    const [gif, setgif] = useState('');
    const [loading, setLoading] = useState(false);
    // const [tag, setTag] = useState('');
    const Randomurl = `https://api.giphy.com/v1/gifs/random?api_key=rOLOz62bYURRL5Fy7Z5ksLTW3xL2oRPu`;

    const generateUrl = `https://api.giphy.com/v1/gifs/random?api_key=rOLOz62bYURRL5Fy7Z5ksLTW3xL2oRPu&tag=${tag}`;
  
    async function fetchData(tag) {
      try {
  
        setLoading(true);
       
        const { data } = await axios.get(tag  ?  generateUrl: Randomurl);
        // console.log(output);
        const imageSrc = data.data.images.downsized_large.url;
        // console.log(imageSrc);
        setgif(imageSrc);
        setLoading(false);
      }
      catch (err) {
        console.log(err);
        console.log("gadbad");
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return {gif , loading , fetchData};
    
}

export default useGif
