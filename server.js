import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    app: 'quick-cart-discount-app',
    timestamp: new Date().toISOString()
  });
});

// Validate discount code endpoint (optional - for future use)
app.get('/api/validate/:code', (req, res) => {
  const code = req.params.code.toUpperCase();

  // Simple validation - always return ok for now
  res.json({
    code: code,
    valid: true,
    message: 'Code will be validated by Shopify'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Quick Cart Discount App running on port ${PORT}`);
});
