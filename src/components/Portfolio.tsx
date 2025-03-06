import React from 'react';
import { Container, Box, Typography, Paper, LinearProgress, Grid, Button, Avatar, ListItem, ListItemIcon, ListItemText, List, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import SagarIcon from '../assets/sagar.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GoogleIcon from '../assets/googleIcon.png';
import DeveloperIcon from '../assets/developerIcon.png';
import DevOpsIcon from '../assets/devOpsIcon.jpg';
import SecurityIcon from '../assets/securityIcon.png';
import CysaIcon from '../assets/cysaIcon.png';
import CaspIcon from '../assets/csapIcon.png';
import CaisIcon from '../assets/CAIS.png';

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  padding: theme.spacing(4),
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  backgroundColor: '#f2f3f4',
}));

const SkillProgress: React.FC<{ skill: string, value: number }> = ({ skill, value }) => (
  <Box mb={3}>
    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
      {skill}
    </Typography>
    <LinearProgress variant="determinate" value={value} sx={{ height: 8, borderRadius: 5, backgroundColor: '#e0e0e0' }} />
  </Box>
);

const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  
  const certifications = [
    { name: 'Google Cloud Architect', icon: GoogleIcon },
    { name: 'Azure Developer', icon: DeveloperIcon },
    { name: 'Azure DevOps Engineer', icon: DevOpsIcon },
    { name: 'CompTIA Security+', icon: SecurityIcon },
    { name: 'CompTIA CySA+', icon: CysaIcon },
    { name: 'CompTIA Security Analyst Professional', icon: CaspIcon },
    { name: 'Certified AI Scientist', icon: CaisIcon },
  ];

  return (
    <Container>
      <StyledPaper>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          My Portfolio
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Avatar
              src={SagarIcon}
              alt="Sagar"
              sx={{ width: 150, height: 150, margin: 'auto', border: '4px solid #00796b' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'gray' }}>
              Hi, I am Sagar
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph>
              Full-Stack Engineer ...Technical Project Manager | Cybersecurity | Conducting DRP(Doctorate Research Project)
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
          Core Strengths
        </Typography>
        <List>
          {['Full-Stack Development (Frontend & Backend)', 'Scalable & High-Performance System Architecture', 'Cybersecurity & Data Privacy Best Practices', 'Technical Project Management & Agile Methodologies', 'Cloud Computing & DevOps Integration', 'Leadership, Team Building & Cross-Functional Collaboration'].map((strength, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={strength} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
          Technology Stack
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SkillProgress skill="JavaScript" value={85} />
            <SkillProgress skill="TypeScript" value={90} />
            <SkillProgress skill="React" value={90} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillProgress skill="Java" value={70} />
            <SkillProgress skill="Spring Boot" value={75} />
            <SkillProgress skill="SQL" value={90} />
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
          Certifications
        </Typography>
        <Grid container spacing={2}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Avatar src={cert.icon} alt={cert.name} sx={{ width: 80, height: 80, margin: 'auto' }} />
              <Typography align="center" sx={{ mt: 1, fontWeight: 'bold' }}>
                {cert.name}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
          Project Management Highlights
        </Typography>
        <List>
          {['Oversee end-to-end project delivery, ensuring adherence to scope, timelines, and budgets.', 'Coordinate cross-functional teams, promoting clear communication and efficient workflows.', 'Implement Agile methodologies to drive iterative development and continuous improvement.', 'Monitor project progress using performance metrics to manage risks and meet milestones.'].map((highlight, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={highlight} />
            </ListItem>
          ))}
        </List>

        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" onClick={() => navigate('/')}>Go to Home Page</Button>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default Portfolio;
