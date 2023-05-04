import React from 'react';
const { useState, useEffect, useRef } = React;

const CountDown = () => {
  const [count, setCount] = useState(10);
  let cntVal = useRef();

  const handleChange = e => {
    setCount(e.target.value)
  }

  const handleSubmit = () => {
    if (count < 0) {
      alert("Count cannot be negative!");
      return;
    }
    cntVal.current = setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000)
  }

  useEffect(() => {
    return () => {
      if (cntVal.current) {
        clearInterval(cntVal.current);
      }

    }
  }, []);

  useEffect(() => {
    if (count === 0) {
      clearInterval(cntVal.current);
      alert("END!")
    }
  })

  return (
    <div className='h-[100vh] w-full flex flex-col items-center justify-center'>
      <div className="border border-black p-12 items-center justify-center">
        <div className="flex justify-center">
          <p className='text-3xl font-bold'>Countdown App</p>
        </div>
        <div className="flex justify-center mt-10">
          <p className='font-semiboldld text-2xl'>{count}</p>
        </div>
        <div className="flex mt-10 mb-4 items-center justify-center">
          <label htmlFor="name" className='text-xl'>Enter a Number: </label>
          <input className='border border-black ml-2 p-2 rounded-lg text-xl' type="text" name="cntDown" ref={cntVal} id="cntDown" onChange={handleChange} />
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default CountDown