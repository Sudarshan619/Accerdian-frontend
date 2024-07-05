import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Navigator from './components/Navigator';
import { Box, Button, TextField, Modal, Icon } from '@mui/material';
import ReactVirtualizedTable from './components/referal_benefits';
import ErrorIcon from '@mui/icons-material/Error';


function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coupon, setCoupon] = useState("SUDA212");
  const [error,setError] = useState(false);

  const submitRefer = async (e) => {

    e.preventDefault();
    console.log(name.length)
    if (validateEmail(email) && name.length>4) {
      try {
        const res = await fetch('http://localhost:3000/refer', {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, coupon }),
        });
        const ans = await res.json();
        setOpen(false);
        console.log('Response:', ans);
      } catch (error) {
        console.error("Error posting data:", error);
      }
    }
    else{
      if(!validateEmail(email)){
        setError(true);
      }
     
    }
    

  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|mil|int)+$/;
    return emailRegex.test(email);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        transition='ease-in 0.5s linear'
      >
        <Box
          component="form"
          onSubmit={submitRefer}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: 800,
            margin: 'auto',
            marginTop: 5,
            padding: '20px',
            borderRadius: '8px',
            background: '#ffffff',
            boxShadow: '0px 4px 65px 1px'
          }}
        >
          <h3 style={{ color: '#1976d2', textAlign: 'center', fontFamily: 'Inter' }}>REFER AND EARN</h3>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
              <img src='refer.gif' style={{ width: '100%' }} alt="Refer" />
              <p className='modal-desc' style={{ color: '#000000' }}>Refer Accardian to your friend & encourage them for investing for better future and <span>Earn $20</span> Each</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '40%' }}>

              <TextField
                value={coupon}
                disabled
                type="email"
                label="REFERAL CODE"
                variant="outlined"
                id="filled-disabled"
              />
              <div style={{width:'100%'}}>
              <TextField
                sx={{width:'100%'}}
                id="outlined-basic"
                label="NAME"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
              {name.length<=4 && <p style={{color:'red'}}>Length should be greater than 4</p>}
              </div>
              <div style={{width:'100%'}}>
              <TextField
                id="filled-basic"
                sx={{width:'100%'}}
                type="email"
                label="EMAIL"
                variant="outlined"
                value={email}
                onChange={(e) => {setEmail(e.target.value), setError(false)}}
              />
              {error && <p style={{color:'red'}}>Please enter valid email id</p>}
              </div>
              <Button type="submit" variant="contained">Submit</Button>
            </div>
          </div>
        </Box>
      </Modal>

      <header className='H'>Navigate your ideal career path with tailored expert advice .<span> Contact Expert</span></header>
      <Navbar />
      <Navigator />
      <div className='refer-container'>
        <section style={{ padding: '40px' }}>
          <h1 style={{ textAlign: 'left', fontSize: '4.2rem', color: '#000000' }}>Let's Learn & Earn</h1>
          <p className='cash-span'>Get a chance to win up-to<span> Rs. 15,000</span></p>
          <Button variant="contained" size="medium" onClick={handleOpen}>
            Refer Now
          </Button>
        </section>
        <img src='Anniversary (7) 1.png' style={{ width: '50%' }} alt="Anniversary" />
        <img src='Anniversary (8) 1.png' className='img-money1' alt="Anniversary" />
        <img src='Anniversary (8) 1.png' className='img-money2' alt="Anniversary" />
        <img src='Anniversary (8) 1.png' className='img-money3' alt="Anniversary" />
        <img src='Anniversary (8) 1.png' className='img-money4' alt="Anniversary" />
        <img src='Anniversary (8) 1.png' className='img-money5' alt="Anniversary" />
      </div>
      <div className='img-2'>
        <h3 style={{ color: '#000000' }}>How do I <span>refer?</span></h3>
        <div>
          <img src='18512590-ai (1) 1.png' style={{ width: '80%' }} alt="How to refer" />
          <div className='group-1'>
            <img src='Group 22036.png' className='img-3' alt="Submit referrals" />
            <p className='paragraph'>Submit referrals easily via our website’s referral section.</p>
          </div>
          <div className='group-2'>
            <img src='Layer_2_00000166652077678251612620000003541000192939887504_.png' className='img-3' alt="Earn rewards" />
            <p className='paragraph'>Earn rewards once your referral joins an Accredian program.</p>
          </div>
          <div className='group-3'>
            <img src='Layer_10.png' className='img-3' alt="Receive bonus" />
            <p className='paragraph'>Both parties receive a bonus 30 days after program enrollment.</p>
          </div>
        </div>
        <Button variant="contained" size="medium" onClick={handleOpen}>
          Refer Now
        </Button>
      </div>
      <section className='referal-benefits'>
        <h3 style={{ color: 'black', margin: '60px' }}>What Are The <span>Referral Benefits?</span></h3>
        <div></div>
        <div>
          <ReactVirtualizedTable />
        </div>
        <Button variant="contained" size="medium" onClick={handleOpen} sx={{margin:'40px'}}>
          Refer Now
        </Button>
      </section>
      <section className='customer-support'>
        <img src='Group 22059.png' className='img-4' alt="Customer support" />
        <img src='div.cta-grad.png' className='img-4' alt="Customer support background" />
      </section>
      <img src='Background.png' style={{ width: '100%', margin: 'auto' }} alt="Background" />
    </>
  )
}

export default App;
