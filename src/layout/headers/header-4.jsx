import Link from 'next/link';
import React from 'react';
import NotifyUser from '../../components/elements/notify_user';
import useSticky from '../../hooks/use-sticky';
import MobileMenu from './mobile-menu';
import styled from 'styled-components';
import NavMenus from './nav-menus';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useState } from 'react';


const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  width: "100%",
  height: "55px",
  borderRadius: "100px",
  marginBottom: "30px",
  background: "linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)",
  "&:hover": {
    background: "linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)",
  },
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "400",
}));

const WhiteDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    backgroundColor: "white",
    width: "590px",
    height: "380px",
    textAlign:'center',
  padding:'25px',
    borderRadius: "10px",
  },
}));


const CenteredDialogActions = styled(DialogActions)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection:'column',
});


const HeaderFour = ({home}) => {
  const { headerSticky } = useSticky();
  const [notify, setNotify] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setNotify(true);
  };
  return (
    <React.Fragment>
      <header className="d-none d-lg-block" style={{
        overflowX: headerSticky ? "hidden": "",
      }}>
      <div id="header-sticky" className={`tp-header-area-two  ${headerSticky ? "" : "header-transparent"} header-space-three pl-115 ${headerSticky ? "pr-0" : "pr-115" }  pt-35 ${headerSticky ? 'header-sticky' : ''}`}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                { home ?  <Link href="/">
                    <a><img src="/Assets/img/logo/logo-blue.png" alt="" /></a>
                  </Link> : <Link href="/">
                    <a><img src={headerSticky ? "/Assets/img/logo/logo-blue.png" : "/Assets/img/logo/logo-white.png"} alt="" /></a>
                  </Link> }
                </div>                                                                             
              </div>
              <div className="col-lg-8">
                <div className="tp-main-menu tp-menu-black text-center">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    {/* nav menus end */}
                    {home ? <NavMenus textColor={"#8A90A2"} />: <NavMenus textColor={headerSticky ? "#8A90A2" : "white" } />}
                  </nav>
                </div>
              </div>
              <div className="col-lg-1">
                <div className="tp-header-left d-flex align-items-center justify-content-end">
                  <div className="tp-header-yellow-button tp-yellow-space">
                    
                    <button className="tp-btn" style={{ backgroundColor: "#00002B" }} onClick={openDialog}>Platform</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
           </header>
           <WhiteDialog open={isDialogOpen} onClose={closeDialog}>
     <CenteredDialogActions>
      <DialogTitle style={{textAlign:'center',}}>
       We are Excited to Bring You Our Cross Border IP Platform!
      </DialogTitle>
      <DialogContent style={{textAlign:"center",fontWeight:"400",fontSize:"20px", position: "relative", top: "22px" ,fontFamily:'Inter',color:"#8C8E8F"}}>
       
        Currently Under Construction, Coming Soon!<br/>Click the Button Below to Get Notified When We Launch!
      </DialogContent>
      <DialogActions>
        <ColorButton onClick={closeDialog} style={{width:"170px",height:"60px",position: "relative" , top: "45px", fontFamily:'Inter',fontWeight:'600'}}>Notify Me on Launch</ColorButton>
      </DialogActions>
      </CenteredDialogActions>
</WhiteDialog>
  <NotifyUser shouldOpen={notify} title="Subscribe to Us" img_url="assets/img/logo/logo-blue.png" />
      {/* <!-- mobile-menu-area --> */}
      <MobileMenu home={true} />
      {/* <!-- mobile-menu-area-end --> */}
    </React.Fragment>
  );
};

export default HeaderFour;