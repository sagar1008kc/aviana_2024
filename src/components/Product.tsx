import React, { useState } from "react";
import { Button, Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoveMatch: React.FC = () => {
  const [player1Answers, setPlayer1AnswersState] = useState<string[]>(Array(20).fill(""));
  const [player2Answers, setPlayer2AnswersState] = useState<string[]>(Array(20).fill(""));
  const [player1Submitted, setPlayer1Submitted] = useState(false);
  const [player2Submitted, setPlayer2Submitted] = useState(false);
  const [matchResult, setMatchResult] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isPlayer1Active, setIsPlayer1Active] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const navigate = useNavigate();
  const questionsWithOptions = [
    {
      question: "What is your favorite type of movie?",
      options: ["Action", "Comedy", "Romance", "Horror"],
    },
    {
      question: "What is your preferred type of vacation?",
      options: ["Beach", "Mountains", "City", "Countryside"],
    },
    {
      question: "What kind of music do you enjoy most?",
      options: ["Pop", "Modern", "Lok", "Rap"],
    },
    {
      question: "What is your favorite kind of food?",
      options: ["Nepali", "Chinese", "Indian", "Mexican"],
    },
    {
      question: "Which hobby do you enjoy the most?",
      options: ["Reading", "Sports", "Gaming", "Cooking"],
    },
    {
      question: "What is your dream job?",
      options: ["Artist", "Entrepreneur", "Technical", "Other"],
    },
    {
      question: "How do you prefer to spend your weekend?",
      options: ["Staying in", "Partying", "Traveling", "Catching up on hobbies"],
    },
    {
      question: "What is your favorite pet?",
      options: ["Dog", "Cat", "Fish", "Bird"],
    },
    {
      question: "What’s your preferred way to relax?",
      options: ["Watching TV", "Meditation", "Reading", "Exercising"],
    },
    {
      question: "What kind of gift would you appreciate the most?",
      options: ["Jewelry", "Books", "Gadgets", "Handwritten letter"],
    },
    {
      question: "How do you and your partner express love daily?",
      options: ["We say 'I love you' and show affection often.", "We do things for each other to show we care.", "We spend quality time together.", "We give each other compliments."],
    },
    {
      question: "Do you like to dance?",
      options: [" We communicate openly and resolve issues calmly.", "We argue but always find a way to compromise", "One of us usually gives in to avoid further conflict.",
        "We avoid confrontations and let things go."
            ],
    },
    {
      question: "What is your love language?",
      options: ["Physical touch and affections", "Words of affirmation and appreciation.", "Quality time and undivided attention.", "Acts of service and help."],
    },
    {
      question: "Do you like spicy food?",
      options: ["Yes", "No"],
    },
    {
      question: "Are you a morning person?",
      options: ["Yes", "No"],
    },
    {
      question: "Do you enjoy outdoor activities?",
      options: ["Yes", "No"],
    },
    {
      question: "Are you a fan of coffee?",
      options: ["Yes", "No"],
    },
    {
      question: "Do you prefer texting over calling?",
      options: ["Yes", "No"],
    },
    {
      question: "Do you enjoy walking on park?",
      options: ["Yes", "No"],
    },
    {
      question: "Do you like surprises?",
      options: ["Yes", "No"],
    },
  ];

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      if (isPlayer1Active) {
        const updatedAnswers = [...player1Answers];
        updatedAnswers[currentQuestionIndex] = selectedAnswer;
        setPlayer1AnswersState(updatedAnswers);
      } else {
        const updatedAnswers = [...player2Answers];
        updatedAnswers[currentQuestionIndex] = selectedAnswer;
        setPlayer2AnswersState(updatedAnswers);
      }

      setSelectedAnswer(null);

      if (currentQuestionIndex < questionsWithOptions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        if (isPlayer1Active) {
          setPlayer1Submitted(true);
          setIsPlayer1Active(false);
          setCurrentQuestionIndex(0);
        } else {
          setPlayer2Submitted(true);
        }
      }
    }
  };

  const handleCalculateMatch = () => {
    const totalQuestions = questionsWithOptions.length;
    const matchingAnswers = player1Answers.filter((answer, index) => answer === player2Answers[index]).length;
    const matchPercentage = Math.round((matchingAnswers / totalQuestions) * 100);
    setMatchResult(matchPercentage);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        p: 4,
      }}
    >
      <Box 
        sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50vh",
        p: 1,
      }}>
      <Typography variant="h4" gutterBottom textAlign="center" color="Red" paddingBlock="30px">
        Love Match Game
      </Typography>
      <Typography variant="body1" textAlign="center" fontFamily="monospace" paddingBlock="20px">This is a fun love matching game, designed to explore and understand each other's interests, perceptions, and mindsets, all while enjoying the playful journey of discovering how well you connect.</Typography>
      <Box
        sx={{
          width: "100%",
          background: "#ffe6e6",
           p: 3,
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h6" color="darkred" textAlign="center">
          {isPlayer1Active ? "You" : "Your Partner"}
        </Typography>

        <FormControl sx={{ my: 2 }} fullWidth>
          <FormLabel>{questionsWithOptions[currentQuestionIndex].question}</FormLabel>
          <RadioGroup
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
            sx={{ flexDirection: "row", justifyContent: "center" }}
          >
            {questionsWithOptions[currentQuestionIndex].options.map((option, idx) => (
              <FormControlLabel key={idx} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            background: "darkred",
            color: "white",
            display: "block",  // Makes the button a block element
            marginLeft: "auto", // Centers the button horizontally
            marginRight: "auto", // Centers the button horizontally
            alignContent: "center"
          }}
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
>
  Next
</Button>
      </Box>

      {player1Submitted && player2Submitted && (
        <Button
          variant="contained"
          sx={{ mt: 4, background: "White", color: "black" }}
          onClick={handleCalculateMatch}
        >
          Calculate Love Match
        </Button>
      )}

      {matchResult !== null && (
        <>
          <Typography
            variant="h5"
            sx={{ mt: 3, background: "#ffcccc", p: 2, borderRadius: "8px", textAlign: "center", color: "darkred" }}
          >
            Match Result: {matchResult}%
          </Typography>
          <Typography variant="body2" p="20px">"This percentage reflects how much your interests and mindsets align, but remember, true soulmates don't need to be identical. Each person is unique, and it's these differences that make your love even stronger. Embrace what makes you special together and let your connection grow."</Typography>
        </>
      )}
      </Box>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate('/')}
        sx={{
          border: '2px solid',
          borderColor: 'primary.main',
          color: 'primary.main',
          fontWeight: 'bold',
          fontSize: '16px',
          padding: '10px 20px',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          ':hover': {
            backgroundColor: 'primary.main',
            color: 'white',
            borderColor: 'primary.main',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          },
          ':active': {
            transform: 'scale(0.95)',
          },
      }}
    >
      Go to Home Page
    </Button>
    </Box>
  );
};

export default LoveMatch;
