import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
    const [status, setStatus] = useState();
    const [message, setMessage] = useState("");

    // Start countdown timer
    const start = () => {
        setStatus(
            setInterval(() => {
                myFun();
            }, 1000)
        );
    };

   
    const hour = (event) => {
        const value = Math.max(0, parseInt(event.target.value, 10) || 0);
        setTime((prevTime) => ({ ...prevTime, hr: value }));
    };

  
    const minute = (event) => {
        const value = Math.max(0, Math.min(59, parseInt(event.target.value, 10) || 0));
        setTime((prevTime) => ({ ...prevTime, min: value }));
    };

   
    const second = (event) => {
        const value = Math.max(0, Math.min(59, parseInt(event.target.value, 10) || 0));
        setTime((prevTime) => ({ ...prevTime, sec: value }));
    };

   
    const myFun = () => {
        setTime((prevTime) => {
            let { hr, min, sec } = prevTime;

            if (sec === 0) {
                if (min > 0) {
                    min--;
                    sec = 59;
                } else if (hr > 0) {
                    hr--;
                    min = 59;
                    sec = 59;
                } else {
                    setMessage("Time expired");
                    clearInterval(status); 
                }
            } else {
                sec--;
            }

            return { hr, min, sec }; 
        });
    };

    
    const stop = () => {
        clearInterval(status);
    };

    
    const reset = () => {
        setTime({ hr: 5, min: 0, sec: 0 });
        setMessage(""); 
    };

    return (
        <>
            <section className='h-screen bg-hero flex justify-center items-center'>
                <div className='h-[300px] bg-[white] border-2 shadow-md w-[400px] mx-auto text-center space-y-4 p-3'>
                    <div className='text-2xl font-bold'>Count Down</div>
                    <h2>{time.hr + " : " + time.min + " : " + time.sec}</h2>
                    {message && <div className="text-red-500">{message}</div>}
                    <div className='buttons space-x-2'>
                        <div className="flex flex-col gap-2">
                            <input
                                placeholder='Hours'
                                inputMode="numeric"
                                onChange={hour}
                                className="border-2 shadow-sm rounded-md p-1"
                            />
                            <input
                                placeholder='Minutes'
                                inputMode="numeric"
                                onChange={minute}
                                className="border-2 shadow-sm rounded-md p-1"
                            />
                            <input
                                placeholder='Seconds'
                                inputMode="numeric"
                                onChange={second}
                                className="border-2 shadow-sm rounded-md p-1"
                            />
                        </div>
                        <div className='mt-3 flex gap-2 justify-center'>
                            <button onClick={start} className='start bg-blue-500 px-2 py-1 rounded-md text-white hover:bg-blue-700'>Start</button>
                            <button onClick={stop} className='stop bg-red-500 px-2 py-1 rounded-md text-white hover:bg-red-700'>Stop</button>
                            <button onClick={reset} className='reset bg-gray-500 px-2 py-1 rounded-md text-white hover:bg-gray-700'>Reset</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CountDown;
