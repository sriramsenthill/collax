import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const innovatorsList=[
    {
        id:0,
        text:'Ensure the security of your intellectual property creations with simplicity. Our platform streamlines the process of protecting your valuable assets, providing you with confidence.',
    },
]

const businessList=[
    {
        id:0,
        text:'Effortlessly organize and manage your business IP assets. Make strategic choices to amplify the value of your innovations using our intuitive tools.'
    },
]

const ipList=[
    {
        id:0,
        text:'Unlock the latent value of your intellectual property. Our platform introduces innovative avenues for monetizing your IP, expanding your revenue opportunities.'
    },
]

const helpBusiness= () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767 );
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
      <>
        <div className={`ac-chose-area ac-chose-bg3 ${isMobile ? "mb-20" : "mb-130" } `}>
          <div className="container">
            <div className="row justify-content-center">
            <div className="tp-service-section-box text-center pb-60"> 
              <h2>Empower Businesses in Shaping a Resilient IP Future<br/>
              <span className='tp-title-sm'style={{fontSize:'48px',  background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',}}>Start amplifying your IP potential today.</span></h2>
            </div>
            <div className='row' style={{width:'100%', textAlign: "center"}}>
              <ResponsiveItem duration='.3s' delay='.5s' icon='flaticon-group' image={'/assets/img/about/assest.png'} title={<>Fortify Your Business IP Assets </>}
                text={'24+ Team Member'} listItems={innovatorsList}/>
              <ResponsiveItem duration='.5s' delay='.7s' item_num={'tpchosebox-three'} color="fea-color-5" icon='fas fa-star' image={'/assets/img/about/mang.png'} title={<>Maximize IP Portfolio Management</>} text={'100% Client Satisfied'} listItems={businessList} />
              <ResponsiveItem duration='.7s' delay='.9s' item_num={'tpchosebox-two'} color="fea-color-4" icon='flaticon-web' image={'/assets/img/about/busi.png'} title={<>Monetize Your Business IP</>} text={'65.04 k Reach'} listItems={ipList} />
          </div>
          </div>
        </div>
        </div>
      </>
    );
  };
  
export default helpBusiness;

const ResponsiveItem = ({ duration, delay, item_num,image,listItems, title, text, color }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767 );
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
    className="col-xl-4 col-lg-4 col-md-9 col-sm-12 wow tpfadeUp"
    style={{
      textAlign: "justify",
    }}
    data-wow-duration={duration}
    data-wow-delay={delay}
  >
    <div style={{ marginBottom: "50px", position: "relative", right: isMobile ? "15%" : 0}}>
      <div
        className="tp-service-item-four mb-20"
        style={{
          height: isMobile ? "auto" : "520px", 
          width: isMobile ? "130%" : "400px",
        }}
      >
        <div className="tp-service-item-four__img mb-40 mt-0 bg-white" style={{textAlign: "right"}}>
          <img
            src={image}
            alt={title}
            style={{width:'88px', position: "absolute",
    left: "50%",
    transform: "translateX(-50%)" }}
          />
        </div>
        <div className="tp-service-item-four__title pb-120">
        <h4 style={{textAlign:'center'}}>
                  <a className='tp-title-sm' style={{fontSize:'125%',cursor:'pointer' , position: "absolute",
    left: "50%",
    transform: "translateX(-50%)"}}>{title}</a>
              </h4>
        </div>
        <div className="tp-service-item-four__text" style={{textAlign:'left'}}>
        <ul>
                {listItems.map(item => (
             <p key={item.id} style={{ listStyle: 'disc',fontSize:'21 px', textAlign: "justify"}}>{item.text}</p>
            ))}
             </ul>
        </div>
      </div>
    </div>
  </div>
  )

}

const ChoseItem = ({ duration, delay, item_num,image,listItems, title, text, color }) => {

    return (
      <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp mr-120"
        data-wow-duration={duration} data-wow-delay={delay}>
        <div className="tp-chose-item mb-30 d-flex justify-content-center" style={{width:'120%'}}>
          <div className={`tpchosebox ${item_num && item_num}`} style={{height:'560px'}}>
          <div className={`tpchosebox__icon ${color && color} mb-30`} style={{textAlign:'center'}}>
             <img src={image} alt="" style={{width:'88px'}}/>
            </div>
            <div className="tpchosebox__content">
              <h4 style={{textAlign:'center'}}>
                  <a className='tp-title-sm' style={{fontSize:'33px',cursor:'pointer',}}>{title}</a>
              </h4>
              </div>
              <div>
                {listItems.map(item => (
             <p key={item.id} style={{ listStyle: 'disc',fontSize:'21px',margin:'15px',textAlign:'center',textAlign:'justify' }}>{item.text}</p>
            ))}
             </div>
            </div>
          </div>
          </div>
    );
  }