"use client";

import { STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR } from "next/dist/lib/constants";
import { propagateServerField } from "next/dist/server/lib/router-utils/setup-dev-bundler";
import dynamic from "next/dynamic";
import { setUncaughtExceptionCaptureCallback } from "process";
import React, { useState } from "react";
import { styleText } from "util";
// 动态导入 ThreeScene 组件，禁用服务器端渲染
const ThreeScene = dynamic(() => import("../ThreeScene"), {
  // loading: () => <>Loading...</>,
  suspense: true,
  ssr: false, // 禁用服务器端渲染
});

{/* ---------------------------------------------------- */}

const Greeting = (props) => <h1>hello, {props.name}</h1>;


{/* ---------------------------------------------------- */}


const Hero = () => {
  return (
    <>
      {/* A section for SEO; */}

     <section style = {{ border:'gray 0px solid', height:'80vh',position:'relative', margin: '160px 0 0 0'}}>  
      
      {/* container for balloon and slogan&description. */}
      <div style = {{border:'pink 0px dotted', height: '100%', position:'relative', }}>

      {/* The balloon of animation; It's a background of Slogan and description; */}
      <div style = {{width:'100%', height:'100%',border:'green 0px solid', position:'absolute', zIndex:'auto', display:'flex', justifyContent: 'center', alignItems:'center'}}>
        <ThreeScene />
      </div>

      {/* The slogan and description; */}
       {/* <div className = "align-middle" style = {{border:'blue 0px solid',position: 'relative', zIndex:'auto', textAlign:'center' }}> */}
        <div className = "align-middle" style = {{width:'100%', height:'100%', border: 'green 0px solid', position:'absolute', textAlign:'center' }}>
          
          <h1 className = "mt-[55%] md:mt-[10%] lg:mt-[10%] align-middle text-base md:text-4xl lg:text-5xl font-sans gradient-text text-balance" style = {{border: 'blue 0px solid', fontWeight:'bolder'}}>
            Newzealand S.E.C Centre
            <span className = "mt-6 mb-10" style = {{display:'block'}}>SCIENCE , EDUCATION , CULTURE.</span>
          </h1>
          
          <div className = "align-middle text-base md:text-1xl lg:text-2xl font-sans text-balance" style = {{ color: '#FFF', margin:'15px 0', border:'red 0px solid', fontStyle:'italic', lineHeight:'1.5'}}>
            {/* <h2>slogan......</h2> */}
            <h2>The New Zealand S.E.C Centre is an independent legal entity registered in New Zealand.</h2>
            <h2>We are focus on work in the fields of education, technology, and culture!</h2>
          </div>
        
        </div>
        
        {/* </div> */}
        
      </div>

      
    </section>
    
    </>
  );
};

export default Hero;
