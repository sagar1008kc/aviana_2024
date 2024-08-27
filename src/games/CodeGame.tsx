import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

// Import codemirror types
import 'codemirror/mode/jsx/jsx'; // Ensure JSX mode is used correctly

interface Level {
  title: string;
  description: string;
  codeSnippet: string;
  solution: string;
  explanation: string;
}

const levels: Level[] = [
  {
    title: "Level 1: Understanding JSX",
    description: "In this level, you will learn how to use JSX to create React elements. Complete the code to render 'Hello, World!' on the screen.",
    codeSnippet: `function HelloWorld() {
  return (
    <>
      <h1>{/* Write your code here */}</h1>
    </>
  );
}`,
    solution: `function HelloWorld() {
  return (
    <>
      <h1>Hello, World!</h1>
    </>
  );
}`,
    explanation: "JSX allows you to write HTML elements inside JavaScript. You can embed expressions inside curly braces.",
  },
  {
    title: "Level 2: Using State with Hooks",
    description: "Now, let's use React hooks to manage state. Complete the code to create a button that increments a counter.",
    codeSnippet: `import { useState } from 'react';

function Counter() {
  // Declare a state variable called 'count'
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => {/* Write your code here */}}>
        Increment
      </button>
    </>
  );
}`,
    solution: `import { useState } from 'react';

function Counter() {
  // Declare a state variable called 'count'
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}`,
    explanation: "React hooks allow you to use state and other React features inside function components. The 'useState' hook returns the state variable and a function to update it.",
  },
  // More levels covering API integration, Redux, etc.
];

const CodeGame: React.FC = () => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [playerCode, setPlayerCode] = useState(levels[0].codeSnippet);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentLevel = levels[currentLevelIndex];

  const checkSolution = () => {
    if (playerCode.trim() === currentLevel.solution.trim()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextLevel = () => {
    setCurrentLevelIndex(currentLevelIndex + 1);
    setPlayerCode(levels[currentLevelIndex + 1].codeSnippet);
    setIsCorrect(null);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Learn React & Redux
      </Typography>
      <Typography variant="h5" gutterBottom>
        {currentLevel.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {currentLevel.description}
      </Typography>

      <Paper elevation={3} sx={{ p: 2, my: 2 }}>
        <CodeMirror
          value={playerCode}  // The value is linked to the state
          options={{
            mode: 'jsx',  // Use JSX mode for highlighting
            theme: 'material',
            lineNumbers: true,
            tabSize: 2,
            indentWithTabs: true,
          }}
          onBeforeChange={(editor, data, value) => {
            setPlayerCode(value); // Set the updated code to the state
          }}
          onChange={(editor, data, value) => {
            // Optional: Could be used to track intermediate changes
          }}
        />
      </Paper>

      <Button variant="contained" color="primary" onClick={checkSolution} sx={{ mr: 2 }}>
        Check Solution
      </Button>

      {isCorrect === true && (
        <>
          <Typography variant="h6" color="green" mt={2}>
            Correct! Well done!
          </Typography>
          <Typography variant="body2" mt={1}>
            {currentLevel.explanation}
          </Typography>
          {currentLevelIndex < levels.length - 1 && (
            <Button variant="contained" color="secondary" onClick={handleNextLevel} sx={{ mt: 2 }}>
              Next Level
            </Button>
          )}
        </>
      )}

      {isCorrect === false && (
        <Typography variant="h6" color="red" mt={2}>
          Incorrect. Try again!
        </Typography>
      )}

      {isCorrect === null && (
        <Typography variant="body2" color="textSecondary" mt={2}>
          Write your code in the editor and press 'Check Solution' to see if it's correct.
        </Typography>
      )}
    </Box>
  );
};

export default CodeGame;
