'use client'
import {db} from '@/db/instance';
import {todos} from '@/db/schema';
import {eq} from 'drizzle-orm';
import {useEffect, useState} from 'react';
import {Shared} from '@/app/todos/Shared';

export function Time({ children }: { children: React.ReactNode}) {

  const [time, setTime] = useState('...')
  
  // useEffect(() => {
  //   console.log('Time component mounted')
  //   setInterval(() => {
  //     setTime(new Date().toLocaleTimeString())
  //   }, 1000)
  // })

  console.log('Rendering Time')

  function doSomteTHing() {
    alert('Time for a Break?')
  }

  return (
    <div className={'flex flex-col gap-4 border-2 border-red-500 p-4'}>
      Current Time: {time}
      {/*<Shared/>*/}
      <button onClick={doSomteTHing}>Delete</button>
      {children}
    </div>
  );
}
