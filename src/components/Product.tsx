import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  IconButton,
  Badge,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  CssBaseline,
  Box,
  TextField
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ToyIcon from '../assets/toyIcon.png';
import GameIcon from '../assets/gameIcon.png';
import DressIcon from '../assets/dressIcon.png';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: any;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Video Game',
    description: 'wow, nice video game!.',
    price: 10.99,
    icon: GameIcon
  },
  {
    id: 2,
    name: 'Tyocar',
    description: 'A beautiful toycar.',
    price: 15.99,
    icon: ToyIcon
  },
  {
    id: 3,
    name: 'Dress',
    description: 'Beautiful dress',
    price: 15.99,
    icon: DressIcon
  }
];

const Product: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Online Store
          </Typography>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 300 }}>
          {cart.map((product, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={product.name}
                secondary={`$${product.price.toFixed(2)}`}
              />
              <ListItemSecondaryAction>
                <Button
                  onClick={() => {
                    setCart(cart.filter((_, i) => i !== index));
                  }}
                  sx={{ padding: 1 }}
                >
                  Remove
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        {cart.length > 0 && (
          <Box sx={{ padding: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              fullWidth
            >
              Checkout
            </Button>
            {checkoutOpen && (
              <Box mt={2}>
                <TextField
                  label="Credit/Debit Card Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Expiry Date"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ marginTop: 2 }}
                >
                  Pay Now
                </Button>
              </Box>
            )}
          </Box>
        )}
      </Drawer>

      <Grid container spacing={2} sx={{ padding: 2 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.icon}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">
                  ${product.price.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                  sx={{ marginTop: 2 }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Product;
