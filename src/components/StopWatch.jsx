import React,{useState} from 'react';

const StopWatch = () => {
    const [time, setTime] = useState({hr:0, min:0, sec:0,milli:0,});
    const[status, setStatus] = useState();

    let updHr = time.hr;
    let updMin = time.min;
    let updSec = time.sec;
    let updMilli = time.milli;
    const start =()=>{
        myfunc();
        setStatus(setInterval(myfunc,10));
    }
    const stop =()=>{
        clearInterval(status);
    }
    const reset=()=>{
        clearInterval(status);
        setTime({hr:0, min:0, sec:0, milli:0,});
    }
    const myfunc=()=>{
        if(updMilli===100){
            updMilli=0;
            updSec++;
            if(updSec===60){
                updSec=0;
                updMin++;
                if(updMin===60){
                    updMin=0;
                    updHr++;
                }
            }
        }
        updMilli++;
        return setTime({hr:updHr, min:updMin, sec:updSec,milli:updMilli})
    }

  return (
    <>
    <section className='h-screen bg-hero flex justify-center items-center'>
    
    <div className='h-[200px] bg-[white] border-2 shadow-md w-[300px] mx-auto text-center space-y-4 p-3 '>
            <div className='text-2xl font-bold'>StopWatch</div>
            <h1>{time.hr+" : "+time.min+" : "+time.sec+" : "+time.milli}</h1>
            <div className='buttons space-x-2'>
            <button className='start bg-blue-500 px-2 py-1 rounded-md text-white hover:bg-blue-700' onClick={start}>Start</button>
            <button className='stop  bg-red-500 px-2 py-1 rounded-md text-white hover:bg-red-700' onClick={stop}>Stop</button>
            <button className='reset  bg-gray-500 px-2 py-1 rounded-md text-white hover:bg-gray-700' onClick={reset}>Reset</button>

            </div>
        </div>

    </section>
    
    </>
    
  )
}

export default StopWatch