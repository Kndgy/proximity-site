import './App.css'

interface PlaneProps {
  totalGrids: number;
}

function Plane({totalGrids}:PlaneProps){

  const handleGridClick = (row: number, col: number) => {
    console.log(`Clicked on grid row ${row}, col ${col}`);
  };

  const handleGridHover = (row: number, col: number) => {
    console.log(`Hovering over grid row ${row}, col ${col}`);
  };

  const grids = [];
  for (let i = 0; i < totalGrids; i++) {
    const row = Math.floor(i / 10);
    const col = i % 10;
    grids.push(<div
      onClick={() => handleGridClick(row, col)}
      onMouseEnter={() => handleGridHover(row, col)}
      className='Plane'>a</div>);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 100px)' }}>
      {grids}
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <Plane totalGrids={100}/>
    </div>
  )
}

export default App
