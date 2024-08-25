import React, { useState } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
  Button,
  Paper,
  FormControl,
  FormLabel,
} from '@mui/material';

// Define the Question interface
interface Question {
  id: number;
  type: 'single-choice' | 'multiple-choice' | 'text';
  question: string;
  options?: string[];
  required?: boolean;
}

// Define the Survey component
const questions: Question[] = [
  // 10 programming-related questions
  {
    id: 1,
    type: 'single-choice',
    question: 'What is your favorite programming language?',
    options: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'],
    required: true,
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following frameworks have you used?',
    options: ['React', 'Angular', 'Vue', 'Svelte', 'Next.js'],
    required: true,
  },
  {
    id: 3,
    type: 'single-choice',
    question: 'How many years of programming experience do you have?',
    options: ['Less than 1 year', '1-2 years', '3-5 years', 'More than 5 years'],
    required: true,
  },
  {
    id: 4,
    type: 'single-choice',
    question: 'Which IDE do you prefer?',
    options: ['VS Code', 'IntelliJ IDEA', 'Sublime Text', 'Atom', 'Other'],
    required: true,
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What are your favorite libraries or tools?',
    options: ['Lodash', 'Axios', 'Redux', 'TailwindCSS', 'Jest'],
    required: true,
  },
  {
    id: 6,
    type: 'single-choice',
    question: 'Which backend technology do you use most frequently?',
    options: ['Node.js', 'Django', 'Ruby on Rails', 'Flask', 'Spring Boot'],
    required: true,
  },
  {
    id: 7,
    type: 'text',
    question: 'Describe your journey into programming.',
    required: false,
  },
  {
    id: 8,
    type: 'single-choice',
    question: 'Do you prefer frontend or backend development?',
    options: ['Frontend', 'Backend', 'Fullstack'],
    required: true,
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What are your favorite programming languages?',
    options: ['JavaScript', 'Python', 'C#', 'Ruby', 'Swift'],
    required: true,
  },
  {
    id: 10,
    type: 'text',
    question: 'What is one piece of advice you would give to new programmers?',
    required: false,
  },
];

const Survey: React.FC = () => {
  // Ensure that the answers state is typed as an object with number keys and values of type any
  const [answers, setAnswers] = useState<{
      [x: string]: any; [key: number]: string | string[] 
}>({});
  const [submitted, setSubmitted] = useState(false);

  // Handle single choice answers
  const handleSingleChoiceChange = (questionId: number, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  // Handle multiple choice answers
  const handleMultipleChoiceChange = (questionId: number, value: string) => {
    setAnswers((prevAnswers) => {
      // Ensure the previous answers for this question are an array
      const selectedOptions = Array.isArray(prevAnswers[questionId])
        ? (prevAnswers[questionId] as string[])
        : [];
  
      // Check if the value is already selected
      if (selectedOptions.includes(value)) {
        // Remove the value if it's already selected
        return {
          ...prevAnswers,
          [questionId]: selectedOptions.filter((option) => option !== value),
        };
      } else {
        // Add the value if it's not selected
        return {
          ...prevAnswers,
          [questionId]: [...selectedOptions, value],
        };
      }
    });
  };
  

  // Handle text answers
  const handleTextChange = (questionId: number, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const requiredUnanswered = questions.some(
      (q) => q.required && !answers[q.id]
    );

    if (requiredUnanswered) {
      alert('Please answer all required questions before submitting.');
    } else {
      setSubmitted(true);
    }
  };

  // Render the summary after submission
  if (submitted) {
    return (
      <Box p={2} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Survey Summary
        </Typography>
        {questions.map((question) => (
          <Paper
            elevation={2}
            sx={{ padding: '16px', marginBottom: '16px' }}
            key={question.id}
          >
            <Typography variant="h6">{question.question}</Typography>
            <Typography variant="body1">
              {Array.isArray(answers[question.id])
                ? (answers[question.id] as string[]).join(', ')
                : answers[question.id] || 'No answer provided'}
            </Typography>
          </Paper>
        ))}
        <Typography variant="h5" color="primary" sx={{ mt: 4 }}>
          Thank you so much for participating in the survey!
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setSubmitted(false)} sx={{ mt: 2 }}>
          Retake Survey
        </Button>
      </Box>
    );
  }

  // Render the survey form
  return (
    <Box>
      <Typography variant="h5" gutterBottom fontFamily={'cursive'}>
        Programming Survey
      </Typography>
      <Typography color='GrayText'>We’d love to hear from you! Please fill out the survey and share your thoughts </Typography>

      {questions.map((question) => (
        <Paper
          elevation={3}
          sx={{ padding: '12px', marginBottom: '17px' }}
          key={question.id}
        >
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">
              {question.question} {question.required && '*'}
            </FormLabel>
            {question.type === 'single-choice' && (
              <RadioGroup
                value={answers[question.id] || ''}
                onChange={(e) =>
                  handleSingleChoiceChange(question.id, e.target.value)
                }
              >
                {question.options!.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            )}
            {question.type === 'multiple-choice' && (
              <>
                {question.options!.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={
                          Array.isArray(answers[question.id]) &&
                          (answers[question.id] as string[]).includes(option)
                        }
                        onChange={() =>
                          handleMultipleChoiceChange(question.id, option)
                        }
                      />
                    }
                    label={option}
                  />
                ))}
              </>
            )}
            {question.type === 'text' && (
              <TextField
                fullWidth
                multiline
                rows={4}
                value={answers[question.id] || ''}
                onChange={(e) =>
                  handleTextChange(question.id, e.target.value)
                }
                variant="outlined"
              />
            )}
          </FormControl>
        </Paper>
      ))}

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Survey
      </Button>
    </Box>
  );
};

export default Survey;
