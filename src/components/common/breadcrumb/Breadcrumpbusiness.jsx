import Link from 'next/link';
import {useState, useEffect} from "react";
import React from 'react';

const Breadcrumpbusiness = ({ title, back_home = false }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1057);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
<section
  style={{
    backgroundImage: 'url(assets/img/brand/bg.png)', // Updated image path
    height: isMobile ? "auto" : '100vh',
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover', // Make the background image cover the entire area
    position: 'relative', // Add this to enable curved bottom
    overflow: 'hidden', // Hide the overflow for curved effect
  }}
>
      <div
        className="curved-bottom"
        style={{
          position: 'absolute',
          bottom: '-150px', // Adjust this value for desired curvature
          left: 0,
          right: 0,
          height: '250px', // Adjust this value for desired curvature height
          width: "auto",
          background: '#ffffff', // Background color to cover the curve
        }}
      ></div>

      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: "auto",
        }}
      >
        <div className={`row wow tpfadeUp ${isMobile ? "mt-80" : "mt-140"}`}>
          <div className="col-xxl-12">
            <div style={{
              paddingBottom: isMobile && "80px",
            }}>
              <h3
                style={{
                  color: '#ffffff',
                  textAlign: 'center',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '800',
                  fontSize: isMobile ? "35px" : '50px',
                  marginTop:'45px',
                  background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',
                }}
              >
          HumCen.io for Businesses

              </h3>
              <p
                style={{
                  color: '#f1f1f1',
                  textAlign: 'center',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  fontSize: '25px',
                  textAlign: "center",
                  marginTop:'30px',
                }}
              >
                  Elevate Your Business with <br /> Robust IP Protection and Revenue Optimization. <br /> <br /> 
              Strategically Boost Your IP Portfolios Worth
Seamless Transactions, Transparency, <br />and Cost Efficiency Propel Your Business IP Advancement! </p>
<div style={{textAlign:'center',  position: "relative", bottom: isMobile && "60%", marginBottom: isMobile && "30px"}}>
<Link href="/register">
<button className={`tp-btn mr-75 ${isMobile ? "mt-0" : "mt-40"} ${isMobile ? "mb-30" : "mb-20"}`} style={{ backgroundColor: "#ffffff",color:'#232323', textAlign: "center", position: "relative", left: isMobile ? "8%" : "3%" }}>Get In Touch</button>
     </Link>     
          
           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumpbusiness;
