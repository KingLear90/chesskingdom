import { Chessboard } from 'react-chessboard';

interface ChessboardProps {
  fen: string;
  onDrop: (sourceSquare: string, targetSquare: string) => boolean;
  boardOrientation: "white" | "black";
}

const ChessboardInterface: React.FC<ChessboardProps> = ({ fen, onDrop, boardOrientation }) => {
  return (
    <div>
      <div id="chessboard-container">
        <Chessboard
          position={fen} 
          onPieceDrop={onDrop}     
          boardWidth={370}  
          customBoardStyle={{ borderRadius: '5px', border: '1px solid #000' }}
          customDarkSquareStyle={{ backgroundColor: '#f78214' }}
          customLightSquareStyle={{ backgroundColor: '#eefabb' }}
          boardOrientation={boardOrientation}
        />
      </div>
    </div>
  );
};

export default ChessboardInterface;