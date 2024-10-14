import React, { useEffect } from 'react';
import { Container, Box, Typography, Paper, LinearProgress, Grid, Divider, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

// Styled components for enhanced design
const SectionContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f2f3f4',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
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
    <Container maxWidth="md">
      <StyledPaper>
        <Box display="flex" alignItems="center" flexDirection="column" mb={3}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'grey' }}>
            About Me
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Hello, I’m Sagar, a highly driven and tech-forward professional with a deep-rooted passion for continuous
            learning and advanced problem-solving. I specialize in staying at the cutting edge of technological trends and
            translating my expertise into innovative, scalable solutions. My focus spans across software engineering and
            cybersecurity, where I aim to deliver impactful results that optimize processes and enhance system integrity.
            With an insatiable curiosity and a commitment to professional growth, I’m always exploring new technologies and
            methodologies to maintain a competitive edge in the rapidly evolving tech landscape.
          </Typography>
          <Box mt={3}>
            {/* LinkedIn Badge */}
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="large"
              data-theme="dark"
              data-type="VERTICAL"
              data-vanity="s777k"
              data-version="v1"
            >
              <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/s777k?trk=profile-badge"></a>
            </div>
          </Box>
        </Box>
        {/* Go to Home Button - Bottom Center */}
        <Box display="flex" justifyContent="center" m={2}>
            <Button onClick={() => navigate('/')}>
            Go to Home Page
          </Button>
        </Box>
        <Divider />

               {/* Tech Stack */}
               <SectionContainer>
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
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00796b' }}>
                Cloud: DevOps & Automation
              </Typography>
              <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
              <SkillProgress skill="Azure DevOps" value={85} />
              <SkillProgress skill="Azure API Management" value={80} />
              <SkillProgress skill="Automation with Azure DevOps" value={85} />
            </Grid>
              <Grid item xs={12} md={6}>
              <SkillProgress skill="Google Cloud Platform (GCP)" value={80} />
              <SkillProgress skill="AWS Cloud" value={80} />
              <SkillProgress skill="CI/CD Pipelines" value={80} />
                </Grid>
            </Grid>
        </SectionContainer>


        <Divider />

        {/* Cybersecurity */}
        <SectionContainer>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'grey' }}>
            Cybersecurity Expertise
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Proficient in various cybersecurity fields, ensuring a secure, scalable, and compliant infrastructure.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <SkillProgress skill="SIEM (Security Information and Event Management)" value={80} />
              <SkillProgress skill="GRC(Governance, Risk, Compliance) Management" value={75} />
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
          
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00796b', mb:'15px'}}>
                Security Tools
              </Typography>
              <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
              <SkillProgress skill="CrowdStrike (EDR)" value={80} />
              <SkillProgress skill="Palo Alto" value={75} />
              <SkillProgress skill="Cisco Email Appliance" value={75} />
              <SkillProgress skill="Jamf (Mobile Device Management)" value={75} />
              <SkillProgress skill="Google Admin Console" value={70} />
              </Grid>
             
              <Grid item xs={12} md={6}>
              <SkillProgress skill="Burp Suite" value={75} />
              <SkillProgress skill="AWS Security Hub" value={75} />
              <SkillProgress skill="Azure Security Center" value={77} />
              <SkillProgress skill="Google Cloud Security Command Center (SCC)" value={70} />
              <SkillProgress skill="Kali Linux" value={75} />
              </Grid>
            </Grid>
          
        </SectionContainer>

        <Divider />

        {/* Certifications */}
        <CertificationSection>
          <CertificationTitle variant="h5">Certifications</CertificationTitle>
          <CertificationItem>CompTIA CSAP (Security Analytics Professional)</CertificationItem>
          <CertificationItem>CompTIA Cyber Security Analytices+</CertificationItem>
          <CertificationItem>CompTIA Security+</CertificationItem>
          <CertificationItem>Google Cloud Certified Professional Cloud Architect</CertificationItem>
          <CertificationItem>Microsoft Certified Azure DevOps Engineer Expert</CertificationItem>
          <CertificationItem>Microsoft Certified Azure Developer</CertificationItem>
        </CertificationSection>

        {/* Go to Home Button - Top Center */}
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
