# Quick Cart Discount App

Simple Shopify app that provides a discount code input for the quick cart.

## Features

- ✅ Collapsible discount input for quick cart
- ✅ Apply/remove discount codes
- ✅ Shows active discount with savings
- ✅ ESN.com style design
- ✅ Lightweight and fast

## Quick Start

### 1. Deploy to Railway

1. Create new Railway project
2. Connect this GitHub repo
3. Railway will auto-deploy from Dockerfile
4. Note the Railway URL: `https://quick-cart-discount.up.railway.app`

### 2. Deploy App Extension to Shopify

```bash
cd /Users/musrahman/Documents/quick-cart-discount-app
npm install
shopify app deploy
```

### 3. Add Block to Quick Cart

1. Go to Shopify Admin → Online Store → Themes → Customize
2. Navigate to Quick Cart section
3. Click "Add block" → Apps → "Quick Cart Discount"
4. Position above Free Shipping bar
5. Save & Publish

## How It Works

- User clicks "Rabattcode" to expand
- Enters discount code
- Clicks "Anwenden" (Apply)
- Page redirects via `/discount/CODE` to apply
- Cart reopens automatically with discount active
- Click "Entfernen" to remove discount

## Files

```
quick-cart-discount-app/
├── server.js                              # Simple Express server
├── package.json                           # Dependencies
├── Dockerfile                             # Railway deployment
├── shopify.app.toml                       # App configuration
└── extensions/cart-discount/              # Theme extension
    ├── shopify.extension.toml
    └── blocks/
        └── discount-input.liquid          # Cart discount block
```

## API Endpoints

- `GET /` - Health check
- `GET /api/validate/:code` - Validate discount code (optional)

## Environment

No environment variables needed for basic functionality.

## Support

Built for Natural Elements by Mus Rahman.
