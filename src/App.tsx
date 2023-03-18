import { useState } from 'react';
import './App.css'

interface PlaneProps {
  totalGrids: number;
}

function Plane({totalGrids}:PlaneProps){

  const handleGridClick = (row: number, col: number) => {
    console.log(`Clicked on grid row ${row}, col ${col}`);
  };

  // const handleGridHover = (row: number, col: number) => {
  //   console.log(`Hovering over grid row ${row}, col ${col}`);
  // };

  const grids = [];
  for (let i = 0; i < totalGrids; i++) {
    const row = Math.floor(i / 10);
    const col = i % 10;
    grids.push(<div
      onClick={() => handleGridClick(row, col)}
      // onMouseEnter={() => handleGridHover(row, col)}
      className='Plane'
      key={i}
      >a</div>);
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
}

function Actor({ initialRow, initialCol, onMove }:ActorProps){
  const [row, setRow] = useState(initialRow);
  const [col, setCol] = useState(initialCol);

  const handleMove = (rowDelta: number, colDelta: number) => {
    const newRow = row + rowDelta;
    const newCol = col + colDelta;
    // setRow(newRow);
    // setCol(newCol);
    console.log("clicked, should add event now")
    // onMove(newRow, newCol);
  };

  return (
    <div
      className='Actor'
      style={{ gridColumn: col + 1, gridRow: row + 1 }}
      onClick={() => handleMove(0, 1)}
    >
      Actor
    </div>
  );
}

function App() {
  const [actorPosition, setActorPosition] = useState({ row: 0, col: 0 });

  const handleOnMove = (row:number, col: number) =>{
    setActorPosition({row:1, col: 1})
  }

  return (
    <div className="App">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 100px)' }}>
      <Actor initialCol={3} initialRow={2} onMove={(e)=>e}/>      
      <Plane totalGrids={100}/>
      </div>

    </div>
  )
}

export default App
