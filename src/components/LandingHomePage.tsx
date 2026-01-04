
import React from 'react';
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Book1 from '../assets/book1.png';
import Book2 from '../assets/book2.png';
import Book3 from '../assets/book3.png';
import { Book } from '@mui/icons-material';
interface BookItem {
  title: string;
  image: string;
  link: string;
}

const books: readonly BookItem[] = [
  {
    title: 'Positive Affirmations for Kids',
    image: Book1,
    link: 'https://a.co/d/aG3qBjt',
  },
  {
    title: 'Animal Coloring Book',
    image: Book2,
    link: 'https://a.co/d/5Is1gE4',
  },
  {
    title: 'A Halloween Night Story',
    image: Book3,
    link: 'https://a.co/d/iZwW4aj',
  },
  {
    title: 'Next comming soon..',
    image: 'coming soon',
    link: 'https://a.co/d/aG3qBjt',
  },


];
const LandingHomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoGames = () => navigate('/home');

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6,
        minHeight: '100vh',
      }}
    >
      {/* Hero section */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Welcome to Aviana&apos;s Fun World 🎮📚
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          maxWidth="700px"
          mx="auto"
          mb={3}
        >
          Play brain-boosting mini games and explore inspiring books for kids and
          families — all in one cozy corner of the internet.
        </Typography>
        <Button
          variant="contained"
          size="medium"
          onClick={handleGoGames}
          sx={{ textTransform: 'none', fontWeight: 600, borderRadius: 2 }}
        >
          Play Games Now →
        </Button>
        <Button
          variant="contained"
          size="medium"
          onClick={() => window.open('https://www.youtube.com/@avianacreation', '_blank')}
          sx={{ textTransform: 'none', fontWeight: 600, borderRadius: 2,  ml: 3, bgcolor: '#FF0000', '&:hover': { bgcolor: '#CC0000' } }}
        >
          Watch Youtube →
        </Button>
      </Box>

      <Divider sx={{ my: 4 }}>
        <Chip label="Books" size="small" />
      </Divider>

      {/* Books grid: 2 per row, total 4 */}
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={6} key={book.title}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: 4,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: 8,
                },
              }}
            >
              <CardMedia
                component="img"
                height="600"
                image={book.image}
                alt={book.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    minHeight: '60px',
                    mb: 2,
                    textAlign: 'center',
                  }}
                >
                  {book.title}
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                    }}
                  >
                    Buy on Amazon →
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }}>
        <Chip label="Games" size="small" />
      </Divider>

      <Box textAlign="center" mb={4}>
        <Typography variant="subtitle1" color="text.secondary" mb={2}>
          Want to jump straight into the fun games?
        </Typography>
        <Button
          variant="outlined"
          onClick={handleGoGames}
          sx={{ textTransform: 'none', borderRadius: 2, fontWeight: 600 }}
        >
          Go to Games →
        </Button>
      </Box>
    </Container>
  );
};

export default LandingHomePage;
