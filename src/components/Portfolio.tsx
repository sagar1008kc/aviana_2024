import React, { useEffect } from 'react';
import { Container, Box, Typography, Paper, LinearProgress, Grid, Divider, Button, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import SagarIcon from '../assets/sagar.png';

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
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
}));

const CertificationSection = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textAlign: 'left',
  marginTop: theme.spacing(4),
}));

const CertificationTitle = styled(Typography)({
  fontWeight: 'bold',
  fontFamily: `'Roboto Slab', serif`,
  color: '#00796b',
  marginBottom: '1rem',
});

const CertificationItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  fontFamily: `'Poppins', sans-serif`,
  color: 'grey',
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

  useEffect(() => {
    // Load LinkedIn badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Container>
      <StyledPaper>
        {/* About Me Section */}
        <SectionContainer bgcolor="#e0f7fa">
          <Grid container spacing={2} alignItems="center" sx={{p: 0}}>
            {/* Sagar's Image */}
            <Grid item xs={12} md={4}>
              <Avatar
                src={SagarIcon}
                alt="Sagar Khatri"
                sx={{
                  width: 150,
                  height: 150,
                  margin: 'auto',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  border: '4px solid #00796b',
                }}
              />
                     <Box mt={3}>
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="en_US"
                  data-size="small"
                  data-theme="dark"
                  data-type="VERTICAL"
                  data-vanity="s777k"
                  data-version="v1"
                >
                  <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/s777k?trk=profile-badge"></a>
                </div>
              </Box>
            </Grid>

            {/* About Me Content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold',color: 'gray', fontFamily: 'cursive'}}>Sagar Khatri</Typography>
              <Typography variant="h6" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'grey' }}>
                 - Full-Stack Engineer, Cybersecurity Specialist & AI Enthusiast
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Hello, I’m Sagar, a dedicated Full-Stack Engineer with expertise in software development and a strong focus on implementing cutting-edge solutions across diverse technological domains. I have extensive experience in building scalable, high-performing applications, while also ensuring robust cybersecurity measures to protect system integrity and data privacy.
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                As an AI enthusiast and a tech-savvy professional, I stay up-to-date with the latest technological advancements and continuously explore how AI can transform and optimize business processes. My work ethos revolves around innovation, problem-solving, and continuous learning, enabling me to deliver impactful results that not only meet business needs but also anticipate future demands in a rapidly evolving digital landscape.
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                With a passion for transforming ideas into reality, I’m always eager to embrace new challenges and collaborate on projects that push the boundaries of what's possible in technology.
              </Typography>
              {/* LinkedIn Badge */}
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" m={2}>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
              Go to Home Page
            </Button>
          </Box>
        </SectionContainer>

        <Divider />

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

        <Divider />

        {/* Certifications Section */}
        <SectionContainer bgcolor="#e3f2fd">
          <CertificationTitle variant="h5">Certifications</CertificationTitle>
          <CertificationItem>CompTIA CSAP (Security Analytics Professional)</CertificationItem>
          <CertificationItem>CompTIA Cyber Security Analytices+</CertificationItem>
          <CertificationItem>CompTIA Security+</CertificationItem>
          <CertificationItem>Google Cloud Certified Professional Cloud Architect</CertificationItem>
          <CertificationItem>Microsoft Certified Azure DevOps Engineer Expert</CertificationItem>
          <CertificationItem>Microsoft Certified Azure Developer</CertificationItem>
        </SectionContainer>

        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="primary" onClick={() => navigate('/')}>
            Go to Home Page
          </Button>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default Portfolio;
