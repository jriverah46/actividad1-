import { Container, Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { groups } from '../utils/teams';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        World Cup Teams
      </Typography>
      {groups.map((group) => (
        <Box key={group.name} sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            {group.name}
          </Typography>
          <Grid container spacing={3}>
            {group.teams.map((team) => (
              <Grid item key={team.id} xs={12} sm={6} md={4} lg={3}>
                <Card 
                  onClick={() => navigate(`/team/${team.id}`)}
                  sx={{ 
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.2s',
                    }
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4rem',
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    {team.flag}
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div">
                      {team.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {team.stickers.filter(s => s.collected).length} / {team.stickers.length} stickers
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default Home;