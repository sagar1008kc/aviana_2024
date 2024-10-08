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
  TextField,
  Divider
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PayPalIcon from '../assets/paypal.png';
import ComingSoonIcon from '../assets/comingIcon.png';
import { useNavigate } from 'react-router-dom';

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
    description: 'Description...',
    price: 10.99,
    icon: ComingSoonIcon
  },
  {
    id: 2,
    name: 'Toycar',
    description: 'Description..',
    price: 15.99,
    icon: ComingSoonIcon
  },
  {
    id: 3,
    name: 'Dress',
    description: 'Description..',
    price: 15.99,
    icon: ComingSoonIcon
  },
  {
    id: 4,
    name: 'Dress',
    description: 'Description..',
    price: 15.99,
    icon: ComingSoonIcon
  },
  {
    id: 5,
    name: 'Dress',
    description: 'Description..',
    price: 15.99,
    icon: ComingSoonIcon
  },
  {
    id: 6,
    name: 'Toy',
    description: 'Description..',
    price: 15.99,
    icon: ComingSoonIcon
  },
];

interface CartItem extends Product {
  quantity: number;
}

const Product: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const navigate = useNavigate();

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
    alert('Payment processed successfully!');
    navigate('/');
  };

  const handleCloseCheckout = () => {
    setCheckoutOpen(false);
    navigate('/');
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" sx={{ backgroundColor: 'darkslateblue' }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Avianaa Online Store <i>--in progress</i>
          </Typography>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <Badge badgeContent={cart.reduce((sum, item) => sum + item.quantity, 0)} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{position:'relative', minWidth: 400}}>
          <ListItem>
            <ListItemText primary="Your Cart" />
            <ListItemSecondaryAction>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {cart.map((product, index) => (
            <ListItem key={index}>
              <CardMedia
                component="img"
                image={product.icon}
                alt={product.name}
                sx={{ width: 50, height: 50, marginRight: 2 }}
              />
              <ListItemText
                primary={`${product.name} (${product.quantity})`}
                secondary={`$${(product.price * product.quantity).toFixed(2)}`}
              />
              <ListItemSecondaryAction>
                <Button
                  onClick={() => {
                    setCart(cart.filter((_, i) => i !== index));
                  }}
                  sx={{ padding: 1, color: 'red' }}
                >
                  Remove
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        {cart.length > 0 && (
          <Box sx={{ padding: 2 }}>
            <Typography variant="h6" border="1px dotted grey" p="10px">Total: ${totalAmount.toFixed(2)}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              fullWidth
              sx={{ marginTop: 2, width: 100, textAlign: 'center'}}
            >
              Checkout
            </Button>
            {checkoutOpen && (
              <Box component="form" onSubmit={handlePayment} m={2} marginInline={6}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle1"> Please checkout with Credit/Debit card information below:</Typography>
                </Box>
                <TextField
                  label="Credit/Debit Card Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  inputProps={{ pattern: "\\d{16}", title: "Credit/Debit Card Number should be 16 digits" }}
                />
                <TextField
                  label="Expiry Date (MM/YY)"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  inputProps={{ pattern: "(0[1-9]|1[0-2])/[0-9]{2}", title: "Expiry date format should be MM/YY" }}
                />
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  inputProps={{ maxLength: 4, pattern: "[0-9]{3,4}", title: "CVV should be 3 or 4 digits" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{ marginTop: 2 }}
                >
                  Pay Now
                </Button>
                <Typography variant='h6' textAlign='center' m='2'>OR</Typography>
                <Button
                  variant="contained"
                  color="info"
                  fullWidth
                  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <img src={PayPalIcon} alt="PayPal" style={{ width: '40px', marginRight: '8px' }} />
                  Pay with PayPal
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
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 'subtitle2', sm: 'body2' } }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h6">
                    ${product.price.toFixed(2)}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                  sx={{ marginTop: 2, marginLeft: 2, textTransform: 'none' }}
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
