import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

export default function First() {

  return (
    <div className='h-screen center' style={{width:'100%',}}>
      <h1>I am First</h1>
    </div>
  )
}