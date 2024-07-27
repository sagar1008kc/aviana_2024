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
import Dress1Icon from '../assets/dress1.png';
import Dress2Icon from '../assets/dress2.png';
import Toy1Iocn from '../assets/toy1.png';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
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
    icon: Dress1Icon
  },
  {
    id: 4,
    name: 'Dress',
    description: 'Beautiful dress',
    price: 15.99,
    icon: DressIcon
  },
  {
    id: 5,
    name: 'Dress',
    description: 'Beautiful dress',
    price: 15.99,
    icon: Dress2Icon
  },
  {
    id: 6,
    name: 'Dress',
    description: 'Beautiful dress',
    price: 15.99,
    icon: Toy1Iocn
  },
];

interface CartItem extends Product {
  quantity: number;
}

const Product: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  const handlePayment = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement payment logic here
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Avianaa Store
          </Typography>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <Badge badgeContent={cart.reduce((sum, item) => sum + item.quantity, 0)} color="secondary">
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
                primary={`${product.name} (${product.quantity})`}
                secondary={`$${(product.price * product.quantity).toFixed(2)}`}
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
            <Typography variant="h6">Total: ${totalAmount.toFixed(2)}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Checkout
            </Button>
            {checkoutOpen && (
              <Box component="form" onSubmit={handlePayment} mt={2}>
                <TextField
                  label="Credit/Debit Card Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Expiry Date"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  inputProps={{ maxLength: 4, pattern: "[0-9]{3,4}" }}
                />
                <Button
                  type="submit"
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
                image={product.icon}
                alt={product.name}
                sx={{ width: '100%', height: 'auto', aspectRatio: '1/1' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 'subtitle2', sm: 'body2' } }}>
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
