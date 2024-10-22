import React, { useEffect, useRef, useState } from 'react';
import { Container, Box, Typography, Paper, LinearProgress, Grid, Button, Avatar, ListItem, ListItemIcon, ListItemText, List } from '@mui/material';
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
// Styled components for enhanced design with dynamic background color
const SectionContainer = styled(Box)<{ bgcolor?: string }>(({ theme, bgcolor }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: bgcolor || '#f2f3f4',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
}));
const FlipBox = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  perspective: '1000px',
  cursor: 'pointer',
}));

const FlipInner = styled(Box)<{ flipped: boolean }>(({ flipped }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transform: flipped ? 'rotateY(180deg)' : 'none',
  transition: 'transform 0.6s',
}));

const FlipFront = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
}));

const FlipBack = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  border: '2px solid #000',
}));

const CertificationSection = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textAlign: 'left',
  marginTop: theme.spacing(4),
}));

const CertificationTitle = styled(Typography)({
  fontWeight: 'bold',
  fontFamily: 'Roboto Slab',
  color: '#00796b',
  marginBottom: '1rem',
});

const CertificationItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
  marginBottom: theme.spacing(2),
  backgroundColor: '#ffffff',
  fontWeight: 'bold',
  fontFamily: `'Poppins', sans-serif`,
  color: '#616161',
  fontSize: '1.1rem',
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
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const badgeRef = useRef<HTMLDivElement>(null);
  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const certifications = [
    { name: 'Google Cloud Architect', icon: GoogleIcon },
    { name: 'Azure Developer', icon: DeveloperIcon },
    { name: 'Azure DevOps Engineer', icon: DevOpsIcon },
    { name: 'CompTIA Security+', icon: SecurityIcon },
    { name: 'CompTIA CySA+', icon: CysaIcon },
    { name: 'CompTIA Security Analyst Professional', icon: CaspIcon },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    if (badgeRef.current) {
      badgeRef.current.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (badgeRef.current && script.parentNode) {
        badgeRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <Container>
         <Box 
      sx={{ 
        display: 'inline-block', 
        position: 'relative',
        padding: '10px 20px', 
        margin: '20px',
      }}
    >
      <Typography 
        variant="h4" 
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '25%',

            borderTop: '4px solid red',
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '65%',
            borderBottom: '4px solid black',
          }
        }}
      >
        My Portfolio
      </Typography>
    </Box>
      <StyledPaper>
        {/* About Me Section */}
        <SectionContainer>
          <Grid container spacing={2} alignItems="center" sx={{p: 0}}>
            {/* Sagar's Image */}
            <Grid item xs={12} md={4}>
              <Avatar
                src={SagarIcon}
                alt="Sagar"
                sx={{
                  width: 150,
                  height: 150,
                  margin: 'auto',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  border: '4px solid #00796b',
                }}
              />
               {/* LinkedIn Badge */}
      <Box mt={3}>
      <div
        ref={badgeRef}
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="small"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="s777k"
        data-version="v1"
        style={{
          width: '100%',
          maxWidth: '300px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          height: 'auto',
        }}
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/s777k?trk=profile-badge"
          style={{
            textDecoration: 'none',
          }}
        >
          {/* This link serves as the clickable area for the badge */}
        </a>
      </div>
    </Box>
            </Grid>

            {/* About Me Content */}
            <Grid item xs={12} md={8}>
              <Box>
              <Typography variant="h4" component="h1" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', color: 'Red'}}>Hello!</Typography>
              <Typography variant="h4" component="h3" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', color: 'grey'}}>I am Sagar,</Typography>
              <Typography variant="h6" component="h5" textAlign="center" fontWeight="bold" gutterBottom>
                 - Full-Stack Engineer, Cybersecurity Specialist & AI Enthusiast
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                - A dedicated Full-Stack Engineer with expertise in software development and a strong focus on implementing cutting-edge solutions across diverse technological domains. I have extensive experience in building & managing scalable, high-performing applications, while also ensuring robust cybersecurity measures to protect system integrity and data privacy.
              </Typography>
              </Box>
              
              <Typography variant="body1" color="textSecondary" paragraph>
                As an AI enthusiast and a tech-savvy professional, I stay up-to-date with the latest technological advancements and continuously explore how AI can transform and optimize business processes. My work ethos revolves around innovation, problem-solving, and continuous learning, enabling me to deliver impactful results that not only meet business needs but also anticipate future demands in a rapidly evolving digital landscape.
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
              I’m excited to contribute my skills and passion to a dynamic team that thrives on innovation and is ready to shape the future of technology together.
              </Typography>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" m={2}>
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
        </SectionContainer>


        {/* Technology Stack Section */}
        <SectionContainer bgcolor="#f1f8e9">
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'grey' }}>
            Technology Stack
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00796b' }}>
                Frontend Development
              </Typography>
              <SkillProgress skill="JavaScript" value={85} />
              <SkillProgress skill="TypeScript" value={90} />
              <SkillProgress skill="React" value={90} />
              <SkillProgress skill="Redux" value={80} />
              <SkillProgress skill="Angular" value={95} />
              <SkillProgress skill="NextJs" value={95} />
              <SkillProgress skill="HTML, CSS, MUI, PrimeReact" value={95} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00796b' }}>
                Backend Development
              </Typography>
              <SkillProgress skill="Java" value={70} />
              <SkillProgress skill="Spring Boot" value={75} />
              <SkillProgress skill="Cosmos DB" value={70} />
              <SkillProgress skill="SQL" value={90} />
              <SkillProgress skill="Python" value={80} />
            </Grid>
          </Grid>
        </SectionContainer>


        {/* Cybersecurity Section */}
        <SectionContainer bgcolor="#ffecb3">
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'grey' }}>
            Cybersecurity Expertise
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Proficient in various cybersecurity fields, ensuring a secure, scalable, and compliant infrastructure.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <SkillProgress skill="SIEM (Security Information and Event Management)" value={80} />
              <SkillProgress skill="GRC (Governance, Risk, Compliance) Management" value={75} />
              <SkillProgress skill="Cloud Security (AWS, Azure, Google Cloud)" value={85} />
              <SkillProgress skill="Application Security" value={80} />
            </Grid>
            <Grid item xs={12} md={6}>
              <SkillProgress skill="Vulnerability Management" value={70} />
              <SkillProgress skill="Endpoint Detection and Response (EDR)" value={80} />
              <SkillProgress skill="Identity and Access Management (IAM)" value={85} />
              <SkillProgress skill="Incident Response and Forensics" value={75} />
            </Grid>
          </Grid>
        </SectionContainer>

        <SectionContainer bgcolor="#e3f2fd">
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'grey', mb: 2 }}>
            Certifications
          </Typography>
          <Grid container spacing={2} columns={{ xs: 2, sm: 4, md: 4 }}>
            {certifications.map((cert, index) => (
              <Grid item xs={1} sm={1} md={1} key={index}>
                <FlipBox onClick={() => handleFlip(index)}>
                  <FlipInner flipped={flippedIndex === index}>
                    {/* Front Side */}
                    <FlipFront />

                    {/* Back Side */}
                    <FlipBack>
                      <img
                        src={cert.icon}
                        alt={cert.name}
                        style={{ width: '80%', height: '80%' }}
                      />
                    </FlipBack>
                  </FlipInner>
                </FlipBox>
                <Typography align="left" sx={{ mt: 1, fontWeight: 'bold' }}>
                  {cert.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </SectionContainer>
    

        <SectionContainer bgcolor="#ffecb3">
        <Box mt={3} p={2} sx={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Project Management Highlights
      </Typography>

      <List>
        {/* Key Technological Responsibilities */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
          Key Technological Responsibilities
        </Typography>
        {[
          'Oversee end-to-end project delivery, ensuring adherence to scope, timelines, and budgets.',
          'Coordinate cross-functional teams, promoting clear communication and efficient workflows.',
          'Implement Agile methodologies to drive iterative development and continuous improvement.',
          'Monitor project progress using performance metrics to manage risks and meet milestones.',
        ].map((text, index) => (
          <ListItem key={index} sx={{ pl: 0 }}>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}

        {/* Tools & Technologies */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3 }}>
          Tools & Technologies
        </Typography>
        {[
          'JIRA & Trello for task tracking and sprint planning.',
          'Microsoft Project for Gantt charts and project scheduling.',
          'Confluence for documentation and collaboration.',
          'Slack & Microsoft Teams for team communication and updates.',
        ].map((tool, index) => (
          <ListItem key={index} sx={{ pl: 0 }}>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={tool} />
          </ListItem>
        ))}

        {/* Experience & Expertise */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3 }}>
          Experience & Expertise
        </Typography>
        {[
          'Managing software development projects with Agile/Scrum methodologies.',
          'Proven track record of delivering projects 10% ahead of schedule and within budget.',
          'Effective stakeholder management, aligning project outcomes with business goals.',
          'Strong analytical and problem-solving skills to address project risks and bottlenecks.',
        ].map((experience, index) => (
          <ListItem key={index} sx={{ pl: 0 }}>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={experience} />
          </ListItem>
        ))}
      </List>
    </Box>
        </SectionContainer>
        
        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" onClick={() => navigate('/')}>
            Go to Home Page
          </Button>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default Portfolio;
