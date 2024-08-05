import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia component="img" alt={product.name} image={product.image} />
      <CardContent>
      <Typography variant="body1">{product.name}</Typography>
      <Typography variant="body1">${product.cost}</Typography>
        <Rating 
        precision={0.5} value={product.rating} readOnly
        />
      </CardContent>
      <CardActions>
        <Button onClick={handleAddToCart} variant="contained" fullWidth startIcon={<AddShoppingCartOutlined />}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
