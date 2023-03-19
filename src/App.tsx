import { ReactNode, useCallback, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './App.css'

interface PlaneProps {
  totalGrids: number;
}

function Plane({totalGrids}:PlaneProps){


  const grids = [];
  for (let i = 0; i < totalGrids; i++) {
    grids.push(<div
      // onMouseEnter={() => handleGridHover(row, col)}
      className='Plane'
      key={i}
      >{i}</div>);
  }

  return (
      <>
      {grids}
      </>
  );
}

interface ActorProps {
  initialRow: number;
  initialCol: number;
  onMove?: (row: number, col: number) => void;
  embed?: ReactNode
}

const Actor=({ initialRow, initialCol, embed}:ActorProps)=>{
  return (
    <div
      className='Actor'
      style={{ gridColumn: initialCol + 1, gridRow: initialRow + 1 }}
    >
      {embed}
    </div>
  );
}

function App() {
  const [actorPosition, setActorPosition] = useState({ row: 2, col: 2 });

  const handleBottomMove = useCallback(() => {
    setActorPosition(prevPosition => prevPosition.row < 4 ? ({col: prevPosition.col, row: prevPosition.row+1}) : prevPosition);
  }, []);
  
  
  const handleTopMove = useCallback(() => {
    setActorPosition(prevPosition => prevPosition.row >= 1 ? {col: prevPosition.col, row: prevPosition.row-1} : prevPosition);
  }, []);
  
  
  const handleRightMove = useCallback(() => {
    setActorPosition(prevPosition => prevPosition.col<11 ? ({col:prevPosition.col+1 , row:prevPosition.row}) : prevPosition);
  }, []);
  
  const handleLeftMove = useCallback(() => {
    setActorPosition(prevPosition => prevPosition.col >= 1 ? {col: prevPosition.col-1, row: prevPosition.row} : prevPosition);
  }, []);
  

  console.log(actorPosition)
  console.log(1 - Math.min(Math.max((actorPosition.row + actorPosition.col) / 10, 0), 1));

  // const controlAudio = () =>{
  //   return (1 - Math.min(Math.max((actorPosition.row + actorPosition.col) / 10, 0), 1))
  // }


  return (
    <div className="App">
      proximity audio on site, because why not lol
      <br/>
      <br/>
      move player to hear the effect
      <div className='buttons'> 
        <button onClick={handleLeftMove} >Left</button> 
        <button onClick={handleTopMove}>Top</button> 
        <button onClick={handleBottomMove}>Bottom</button> 
        <button onClick={handleRightMove}>Right</button> 
      </div>
      click 3 dot to start play
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 100px)', paddingTop:'40px' }}>
        <Actor initialCol={0} initialRow={0} embed={
          <div>
            {/* <ReactAudioPlayer volume={controlAudio()} src='/ballin.mp3' loop={true} autoPlay={true} controls/> */}
          </div>
        }/>
        <Actor initialCol={actorPosition.col} initialRow={actorPosition.row} embed={"player"}/>
        <Plane totalGrids={58}/>
      </div>
      {/* a */}
    </div>
  )
}

export default App
