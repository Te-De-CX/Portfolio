'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const GAME_SPEED = 200;

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Generate random food position
  const generateFood = (): Position => {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    return { x, y };
  };

  // Initialize game
  const initGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection('RIGHT');
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  // Toggle pause
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Handle keyboard controls
  useEffect(() => {
    if (isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        setIsPaused(prev => !prev);
        return;
      }

      if (isPaused) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, isMobile, isPaused]);

  // Game loop
  useEffect(() => {
    if (gameOver || isPaused) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const head = { ...prevSnake[0] };

        switch (direction) {
          case 'UP':
            head.y -= 1;
            break;
          case 'DOWN':
            head.y += 1;
            break;
          case 'LEFT':
            head.x -= 1;
            break;
          case 'RIGHT':
            head.x += 1;
            break;
        }

        if (
          head.x < 0 ||
          head.x >= GRID_SIZE ||
          head.y < 0 ||
          head.y >= GRID_SIZE ||
          prevSnake.some(segment => segment.x === head.x && segment.y === head.y)
        ) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        if (head.x === food.x && head.y === food.y) {
          setFood(generateFood());
          setScore(prev => prev + 10);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    gameLoopRef.current = setInterval(moveSnake, GAME_SPEED);

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [direction, food, gameOver, isPaused]);

  // Draw game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.fillStyle = 'rgba(0, 242, 234, 0.1)';
    ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }

    // Draw food
    ctx.fillStyle = '#FF0050';
    ctx.beginPath();
    ctx.arc(
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Draw snake
    snake.forEach((segment, index) => {
      const isHead = index === 0;
      ctx.fillStyle = isHead ? '#00F2EA' : 'rgba(0, 242, 234, 0.8)';
      
      ctx.beginPath();
      ctx.roundRect(
        segment.x * CELL_SIZE + 1,
        segment.y * CELL_SIZE + 1,
        CELL_SIZE - 2,
        CELL_SIZE - 2,
        4
      );
      ctx.fill();

      // Draw eyes on head
      if (isHead) {
        ctx.fillStyle = 'white';
        const eyeSize = 3;
        let leftEyeX = segment.x * CELL_SIZE + 5;
        let leftEyeY = segment.y * CELL_SIZE + 5;
        let rightEyeX = segment.x * CELL_SIZE + CELL_SIZE - 5 - eyeSize;
        let rightEyeY = segment.y * CELL_SIZE + 5;

        if (direction === 'UP' || direction === 'DOWN') {
          leftEyeY = direction === 'UP' ? 
            segment.y * CELL_SIZE + 5 : 
            segment.y * CELL_SIZE + CELL_SIZE - 5 - eyeSize;
          rightEyeY = leftEyeY;
        } else if (direction === 'LEFT' || direction === 'RIGHT') {
          leftEyeX = direction === 'LEFT' ? 
            segment.x * CELL_SIZE + 5 : 
            segment.x * CELL_SIZE + CELL_SIZE - 5 - eyeSize;
          rightEyeX = leftEyeX;
        }

        ctx.fillRect(leftEyeX, leftEyeY, eyeSize, eyeSize);
        ctx.fillRect(rightEyeX, rightEyeY, eyeSize, eyeSize);
      }
    });
  }, [snake, food, direction]);

  // Handle touch controls
  const handleSwipe = (newDirection: Direction) => {
    if (isPaused) return;

    if (
      (direction === 'UP' && newDirection !== 'DOWN') ||
      (direction === 'DOWN' && newDirection !== 'UP') ||
      (direction === 'LEFT' && newDirection !== 'RIGHT') ||
      (direction === 'RIGHT' && newDirection !== 'LEFT')
    ) {
      setDirection(newDirection);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black p-6">
      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Background decoration */}
        <div className="absolute -top-56 -right-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-full filter blur-3xl opacity-25 animate-pulse" />
        <div className="absolute -bottom-56 -left-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#00F2EA] to-[#FF0050] rounded-full filter blur-3xl opacity-25 animate-pulse" />

        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F2EA] to-[#FF0050]">
            Snake Game
          </h1>
          <div className="text-xl md:text-2xl font-semibold text-gray-100">
            Score: {score}
          </div>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            width={GRID_SIZE * CELL_SIZE}
            height={GRID_SIZE * CELL_SIZE}
            className="w-full border border-gray-800/50 rounded-lg shadow-lg shadow-[#00F2EA]/20 bg-gray-900/80 backdrop-blur-sm"
          />
          
          {gameOver && (
            <div className="absolute inset-0 bg-gray-900/90 flex flex-col items-center justify-center rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">Game Over!</h2>
              <p className="text-gray-300 mb-6 text-lg">Final Score: {score}</p>
              <button
                onClick={initGame}
                className="flex items-center gap-3 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wider hover:from-[#00F2EA] hover:to-[#FF0050] transition-all duration-300 shadow-lg shadow-[#FF0050]/40 hover:shadow-[#00F2EA]/40"
              >
                <ArrowPathIcon className="h-6 w-6" />
                Play Again
              </button>
            </div>
          )}

          {isPaused && !gameOver && (
            <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center rounded-lg backdrop-blur-sm">
              <div className="bg-gray-900/90 text-gray-100 px-8 py-4 rounded-lg font-semibold text-lg border border-[#00F2EA]/50">
                Game Paused
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={togglePause}
            className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wider hover:from-[#00F2EA] hover:to-[#FF0050] transition-all duration-300 shadow-lg shadow-[#FF0050]/40 hover:shadow-[#00F2EA]/40 disabled:opacity-60"
            disabled={gameOver}
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
          <button
            onClick={initGame}
            className="flex items-center gap-3 bg-gray-900/80 text-gray-100 px-6 py-3 rounded-lg font-semibold uppercase tracking-wider border border-gray-800/50 hover:border-[#00F2EA]/50 hover:bg-gray-800/50 transition-all duration-300"
          >
            <ArrowPathIcon className="h-6 w-6" />
            Restart
          </button>
        </div>

        {isMobile && (
          <div className="mt-8 space-y-6">
            <div className="flex justify-center">
              <button
                className="bg-gray-900/80 w-16 h-16 flex items-center justify-center rounded-full text-2xl text-gray-100 border border-gray-800/50 hover:bg-[#00F2EA]/20 hover:border-[#00F2EA]/50 transition-all duration-300"
                onClick={() => handleSwipe('UP')}
                aria-label="Move up"
              >
                ↑
              </button>
            </div>
            <div className="flex justify-center gap-8">
              <button
                className="bg-gray-900/80 w-16 h-16 flex items-center justify-center rounded-full text-2xl text-gray-100 border border-gray-800/50 hover:bg-[#00F2EA]/20 hover:border-[#00F2EA]/50 transition-all duration-300"
                onClick={() => handleSwipe('LEFT')}
                aria-label="Move left"
              >
                ←
              </button>
              <button
                className="bg-gray-900/80 w-16 h-16 flex items-center justify-center rounded-full text-2xl text-gray-100 border border-gray-800/50 hover:bg-[#00F2EA]/20 hover:border-[#00F2EA]/50 transition-all duration-300"
                onClick={() => handleSwipe('DOWN')}
                aria-label="Move down"
              >
                ↓
              </button>
              <button
                className="bg-gray-900/80 w-16 h-16 flex items-center justify-center rounded-full text-2xl text-gray-100 border border-gray-800/50 hover:bg-[#00F2EA]/20 hover:border-[#00F2EA]/50 transition-all duration-300"
                onClick={() => handleSwipe('RIGHT')}
                aria-label="Move right"
              >
                →
              </button>
            </div>
          </div>
        )}

        <div className="text-center text-lg text-gray-300 mt-6">
          <p>{isMobile ? 'Tap buttons to move' : 'Use arrow keys to move, space to pause'}</p>
        </div>
      </div>
    </div>
  );
}