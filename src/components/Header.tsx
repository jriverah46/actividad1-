import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ 
              flexGrow: 1, 
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            Panini World Cup Album
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;