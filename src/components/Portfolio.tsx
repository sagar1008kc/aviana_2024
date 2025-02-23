import React, { useEffect, useRef, useState } from 'react';
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
// Styled components for enhanced design with dynamic background color
const SectionContainer = styled(Box)<{ bgcolor?: string }>(({ theme, bgcolor }) => ({

  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: bgcolor || '#f2f3f4',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  opacity: 0, // Initially hidden
  transform: 'translateY(100px)', // Positioned slightly below
  transition: 'opacity 0.9s ease-out, transform 0.9s ease-out', // Smooth transition
  '&.visible': {
    opacity: 1, 
    transform: 'translateY(0)', 
  },
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
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [currentBackground, setCurrentBackground] = useState('#ffffff');

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const target = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        target.classList.add('visible');
        if (target.dataset.bgcolor) {
          setCurrentBackground(target.dataset.bgcolor);
        }
      } else {
        target.classList.remove('visible');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    document.body.style.transition = 'background-color 0.5s ease-in-out';
    document.body.style.backgroundColor = currentBackground;
  }, [currentBackground]);

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
        <SectionContainer
          ref={(el: HTMLDivElement | null) => (sectionRefs.current[0] = el)}
          data-bgcolor="#f2f3f4"
        >
          <Grid container spacing={2} alignItems="center" sx={{p: 0}}>
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
      <Typography 
  variant="h3" 
  component="h1" 
  textAlign="center" 
  gutterBottom 
  sx={{ fontWeight: 'bold', letterSpacing: 1.5 }}
>
  About Me
</Typography>
      
    </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
             
<Typography 
  variant="h5" 
  component="h4" 
  textAlign="center" 
  gutterBottom 
  sx={{ fontWeight: 'bold', color: 'gray', letterSpacing: 1 }}
>
  Hi, I am Sagar
</Typography>
              <Typography variant="h6" color="textSecondary" paragraph>
                  Full-Stack Engineer ...Technical Project Manager | Cybersecurity | Conducting DRP(Doctorate Research Project)
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  A results-driven Full-Stack Engineer with extensive experience working with Fortune Global 500, delivering scalable, high-performance applications, and driving digital transformation through technical and strategic leadership. My expertise spans enterprise software development, cloud architectures, and cybersecurity implementation, ensuring secure and efficient digital solutions.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  As a Technical Project Manager, I specialize in aligning engineering efforts with business objectives, ensuring seamless execution of complex projects. My core responsibilities include:
                  - End-to-End Project Delivery: Managing software development lifecycles from conception to deployment, ensuring timely and budget-conscious execution.
                  - Cross-Functional Team Leadership: Leading and collaborating with engineers, designers, and stakeholders to drive innovation and deliver impactful solutions.
                  - Agile & Scrum Methodologies: Implementing Agile best practices to optimize workflows, accelerate delivery, and enhance team productivity.
                  - Risk & Compliance Management: Identifying technical and security risks, implementing mitigation strategies, and ensuring regulatory compliance.
                  - Stakeholder Communication & Strategy: Translating technical complexities into actionable business insights, aligning technical roadmaps with strategic goals.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  With a strong foundation in end-to-end software development, I design, build, and optimize secure, enterprise-grade solutions that enhance efficiency and resilience. My approach integrates cybersecurity best practices, safeguarding applications and infrastructure against evolving threats.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Whether leading technical teams, mentoring developers, or driving complex IT initiatives, I ensure seamless execution, security, and innovation at scale.
                </Typography>

              <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
          Core Strengths
        </Typography>
      </Box>
      <Typography variant="body1" component="div">
        <p><CheckCircleIcon color="success" /> Full-Stack Development (Frontend & Backend)</p>
        <p><CheckCircleIcon color="success" /> Scalable & High-Performance System Architecture</p>
        <p><CheckCircleIcon color="success" /> Cybersecurity & Data Privacy Best Practices</p>
        <p><CheckCircleIcon color="success" /> Technical Project Management & Agile Methodologies</p>
        <p><CheckCircleIcon color="success" /> Cloud Computing & DevOps Integration</p>
        <p><CheckCircleIcon color="success" /> Leadership, Team Building & Cross-Functional Collaboration</p>
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
      
          </Box>
          </SectionContainer>

        {/* Technology Stack Section */}
        <SectionContainer
          ref={(el: HTMLDivElement | null) => (sectionRefs.current[1] = el)}
          data-bgcolor="#f2f3f4"
        >
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
        <SectionContainer
          ref={(el: HTMLDivElement | null) => (sectionRefs.current[2] = el)}
          data-bgcolor="#ffecb3"
        >
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
        <SectionContainer
          ref={(el: HTMLDivElement | null) => (sectionRefs.current[3] = el)}
          data-bgcolor="#e3f2fd"
        >
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
    

        <SectionContainer
          ref={(el: HTMLDivElement | null) => (sectionRefs.current[4] = el)}
          data-bgcolor="#ffecb3"
        >
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
          'JIRA, ADO, and Confluence for task tracking and sprint planning.',
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
          marginBlockStart: '1em',
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
