import React from "react";

function Product() {
  return (
    <div style={styles.card}>
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Product"
        style={styles.image}
      />
      <h2 style={styles.name}>Product Name</h2>
      <p style={styles.price}>₹999</p>
      <p style={styles.description}>
        This is a short description of the product. It explains features and
        benefits.
      </p>
      <button style={styles.button}>Buy Now</button>
    </div>
  );
}

// Simple inline CSS styling
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    maxWidth: "250px",
    margin: "20px auto",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  name: {
    fontSize: "1.2rem",
    margin: "10px 0",
  },
  price: {
    color: "green",
    fontWeight: "bold",
  },
  description: {
    fontSize: "0.9rem",
    color: "#555",
  },
  button: {
    backgroundColor: "#ff6600",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Product;
