import React, {useRef, useState} from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaterOne from './Heater-1.mp3'
import Cev from './Cev_H2.mp3'
import DSC from './Dsc_Oh.mp3'
import HeaterTwo from './Heater-2.mp3'
import HeaterThree from './Heater-3.mp3'
import HeaterFour from './Heater-4_1.mp3'
import HeaterSix from './Heater-6.mp3'
import Kick from './Kick_n_Hat.mp3'
import RP from './RP4_KICK_1.mp3'

export default function App() {


  const [volume, setVolume] = useState(0.3);

  const [power, setPower] = useState(true)
  const [float, setFloat]= useState('left')
  //reference to the audio element
  // Create separate refs for each audio element
  const audioRefs = {
    Q: useRef(),
    W: useRef(),
    E: useRef(),
    A: useRef(),
    S: useRef(),
    D: useRef(),
    Z: useRef(),
    X: useRef(),
    C: useRef(),
   }
  //Function to handle button click
  const playSound = (key) => {
    if(!power) return; //If power is off (muted), do not play sound
    audioRefs[key].current.play()
    }
     // Function to toggle power (mute/unmute)
    const handlePower = (preState) => {
      setPower(!power)
      setFloat((preState)=>(preState==='left'?'right':'left'))
    }
    const handleVolumeChange = (event) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
      Object.values(audioRefs).forEach((audioRef) => {
        audioRef.current.volume = newVolume;
      });
      // You can use the 'newVolume' value to control the volume in your application
      // For example, you can set the volume of an audio element like this:
      // audioElement.volume = newVolume;
    };





 return (
  <Container id="drum-machine" fluid style={{ backgroundColor: 'rgba(180, 174, 0, 0.2)', height: '100vh' }} className='custom-container border border-info'>
      <Row className='p-5 mx-5 my-5 border border-info' sm={1} md={2}>
        <Col className='border border-info' >
          <Row  id="display" sm={3} md={3} className='gap-1'>
            <Button onClick={()=> playSound('Q')} style={{ backgroundColor: 'rgba(180, 174, 0, 0.1)'}} className='p-3 border border-danger mx-0 my-0 text-dark drum-pad box-shadow'>Q</Button>
            <Button onClick={()=> playSound('W')}  style={{ backgroundColor: 'rgba(180, 174, 0, 0.1)'}} className='p-3 border border-danger mx-0 my-0 text-dark drum-pad box-shadow'>W</Button>
            <Button onClick={()=> playSound('E')}  style={{ backgroundColor: 'rgba(180, 174, 0, 0.1)'}} className='p-3 border border-danger mx-0 my-0 text-dark drum-pad box-shadow'>E</Button>
            <Button onClick={()=> playSound('A')}  style={{ backgroundColor: 'rgba(180, 174, 0, 0.1)'}} className='p-3 border border-danger mx-0 my-0 text-dark drum-pad'>A</Button>
            <Button onClick={()=> playSound('S')}  style={{ backgroundColor: 'rgba(180, 174, 0, 0.1)'}} className='p-3 border border-danger mx-0 my-0 text-dark drum-pad'>S</Button>
            <Button onClick={()=> playSound('D')}  style={{ backgroundColor: 'rgba(180, 174, 0, 0.1)'}} className='p-3 border border-danger mx-0 my-0 text-dark drum-pad'>D</Button>
            <Button onClick={()=> playSound('Z')}  style={{ backgroundColor: 'rgba(180, 174, 0, 0.1)'}} className='p-3 border border-danger mx-0 my-0 text-dark drum-pad'>Z</Button>
            <Button onClick={()=> playSound('X')}  style={{ backgroundColor: 'rgba(180, 174, 0, 0.1)'}} className='p-3 border border-danger mx-0 my-0 text-dark drum-pad'>X</Button>
            <Button onClick={()=> playSound('C')}  style={{ backgroundColor: 'rgba(180, 174, 0, 0.1)'}} className='p-3 border border-danger mx-0 my-0 text-dark drum-pad'>C</Button>
          <audio className='Clip' id="Q" ref={audioRefs.Q} src={HeaterOne}/>
          <audio className='Clip' id="W" ref={audioRefs.W} src={Cev}/>
          <audio className='Clip' id="E" ref={audioRefs.E} src={DSC}/>
          <audio className='Clip' id="A" ref={audioRefs.A} src={HeaterTwo}/>
          <audio className='Clip' id="S" ref={audioRefs.S} src={HeaterThree}/>
          <audio className='Clip' id="D" ref={audioRefs.D} src={HeaterFour}/>
          <audio className='Clip' id="Z" ref={audioRefs.Z} src={HeaterSix}/>
          <audio className='Clip' id="X" ref={audioRefs.X} src={Kick}/>
          <audio className='Clip' id="C" ref={audioRefs.C} src={RP}/>



          </Row>
        </Col>
        <Col align="center" className='border border-info'><Row sm={1} md={1} className='mx-auto'>
          <Col  className='border border-danger w-25 h-25 bg-dark rounded p-3 mx-auto'>


            <Button
            style={{float: `${float}`}}
            onClick={handlePower}
            className={` bg-warning w-50 h-100 mx-auto my-0 text-warning`}>ON
            </Button>


            </Col>
            <Col><p id="display">On</p></Col>
            <Col className='border border-dark'>
             <input
             className='w-100'
             step="0.01"
          max={1}
         min={0}
         onChange={handleVolumeChange}
        type="range"
         defaultValue={volume}/> </Col>
<Col className='border border-danger'><Button size='lg'> Bank </Button></Col>
        </Row></Col>
      </Row>

    </Container>
  )
}

