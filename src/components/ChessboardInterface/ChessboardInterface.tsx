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
          boardWidth={400}  
          customBoardStyle={{ borderRadius: '8px', boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)" }}
          customDarkSquareStyle={{ backgroundColor: '#f78214' }}
          customLightSquareStyle={{ backgroundColor: '#eefabb' }}
          boardOrientation={boardOrientation}
        />
      </div>
    </div>
  );
};

export default ChessboardInterface;