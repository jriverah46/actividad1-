import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  CardMedia, 
  Box, 
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { ArrowBack, Add, Remove } from '@mui/icons-material';
import { groups } from '../utils/teams';

const TeamDetail = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const [selectedSticker, setSelectedSticker] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [team, setTeam] = useState<any>(null);

  useEffect(() => {
    const foundTeam = groups
      .flatMap(group => group.teams)
      .find(team => team.id === Number(teamId));
    setTeam(foundTeam);
  }, [teamId]);

  if (!team) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  const handleStickerClick = (sticker: any) => {
    setSelectedSticker(sticker);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleIncrement = () => {
    setSelectedSticker({
      ...selectedSticker,
      quantity: selectedSticker.quantity + 1
    });
  };

  const handleDecrement = () => {
    if (selectedSticker.quantity > 0) {
      setSelectedSticker({
        ...selectedSticker,
        quantity: selectedSticker.quantity - 1
      });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h4">
          {team.name} - {team.flag}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {team.stickers.map((sticker: any) => (
          <Grid item xs={6} sm={4} md={3} key={sticker.id}>
            <Card 
              onClick={() => handleStickerClick(sticker)}
              sx={{ 
                cursor: 'pointer',
                opacity: sticker.collected ? 1 : 0.6,
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s',
                }
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={sticker.image}
                alt={sticker.name}
              />
              <CardContent>
                <Typography variant="subtitle1" component="div">
                  #{sticker.number} - {sticker.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {sticker.position}
                </Typography>
                {sticker.quantity > 0 && (
                  <Typography variant="body2" color="primary">
                    x{sticker.quantity}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        {selectedSticker && (
          <>
            <DialogTitle>
              #{selectedSticker.number} - {selectedSticker.name}
            </DialogTitle>
            <DialogContent>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <img 
                  src={selectedSticker.image} 
                  alt={selectedSticker.name} 
                  style={{ maxWidth: '100%', maxHeight: '300px' }} 
                />
              </Box>
              <Typography>Position: {selectedSticker.position}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Typography>Quantity:</Typography>
                <IconButton onClick={handleDecrement} size="small">
                  <Remove />
                </IconButton>
                <Typography>{selectedSticker.quantity}</Typography>
                <IconButton onClick={handleIncrement} size="small">
                  <Add />
                </IconButton>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => {
                  handleCloseDialog();
                }}
              >
                Save
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default TeamDetail;