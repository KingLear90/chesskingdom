import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import ChessboardInterface from '../ChessboardInterface/ChessboardInterface';

const MatePractice = () => {
  const problems = [
    {
      fen: '3q1rk1/5pbp/5Qp1/8/8/2B5/5PPP/6K1 w - - 0 1', 
      solution: ['f6g7'], 
      moves: 1,
    },
    {
      fen: '2r2bk1/5p1p/6p1/2q3N1/4P2Q/8/PPP5/2KR4 w - - 0 1',
      solution: ['h4h7'], 
      moves: 1,
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 3',
      solution: ['e1g1, g2g1, g3g1'], 
      moves: 3,
    },
  ];

  const [chess] = useState(new Chess());
  const [fen, setFen] = useState<string>(chess.fen()); // FEN inicial del primer problema
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);
  const [currentMove, setCurrentMove] = useState(0); // Mueve el marcador en el problema
  const [isGameOver, setIsGameOver] = useState(false); // Estado para controlar si el juego ha terminado

  useEffect(() => {
    chess.load(problems[currentMove].fen); // Cargar el FEN del problema en Chess.js
    setFen(chess.fen()); // Actualizar el estado de FEN para reflejar la nueva posición
    setCurrentSolutionIndex(0); // Reiniciar el índice de la solución
    setIsGameOver(false); // Reiniciar el estado de fin de juego
  }, [currentMove]);

  // Manejar el evento de mover una pieza
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    // Validar el movimiento usando la lógica de Chess.js
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // Promover a Reina
    });

    if (move === null) {
      return false; // Movimiento inválido
    }
    // Actualizar el estado de FEN (tablero)
    setFen(chess.fen());

    // Verificar si el movimiento corresponde al siguiente movimiento de la solución
    const currentSolution = problems[currentMove].solution[currentSolutionIndex];
    const moveStr = sourceSquare + targetSquare;

    if (moveStr === currentSolution) {
      // Si el movimiento es correcto, aumentar el índice de la solución
      setCurrentSolutionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Si el movimiento no es correcto, restablecer el juego
      alert('Movimiento incorrecto, intenta de nuevo');
      chess.undo();
      setFen(chess.fen());
      return false;
    }

    // Verificar si hemos completado todos los movimientos correctos
    if (currentSolutionIndex + 1 === problems[currentMove].moves) {
      alert('¡Jaque mate! Has resuelto el problema');
      setIsGameOver(true); // Indicar que el juego ha terminado
    }

    return true;
  };

  // Reiniciar el tablero con un nuevo problema
  const nextProblem = () => {
    // Cambiar al siguiente problema
    setCurrentMove((prevMove) => (prevMove + 1) % problems.length); // Cicla entre problemas
    chess.reset(); // Resetear el tablero
  };


  return (
    <div>
      <h1>Practica Jaque Mate</h1>
      <h6>Mejora tu cálculo y visión resolviendo problemas</h6>
      <ChessboardInterface fen={fen} onDrop={onDrop} boardOrientation='white'/>
      <div>
        <button onClick={nextProblem}>
          {isGameOver ? '¡Siguiente Problema!' : '¡Siguiente Problema!'}
        </button>
      </div>
    </div>
    
  );
};

export default MatePractice;