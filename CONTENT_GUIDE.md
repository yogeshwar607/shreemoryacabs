# Content Management Guide

## Overview
The `content.json` file is the central place to manage all pricing, routes, vehicles, and business information for GreenEVCabs website.

## How to Update Prices

### Update Regular Route Pricing
Navigate to the `routes` array and find the route you want to update:

```json
{
  "slug": "pune-mumbai",
  "pricing": {
    "kiaCarens": 4500,    // ← Update this price
    "bydEmax7": 5200      // ← Update this price
  }
}
```

### Update Airport Route Pricing
Navigate to `airportRoutes` and find the specific airport section:

```json
"mumbaiAirport": [
  {
    "from": "Pune",
    "kia": 4500,    // ← Update this price
    "byd": 5200     // ← Update this price
  }
]
```

### Update Vehicle Per-Km Pricing
Navigate to `vehicles` array:

```json
{
  "name": "Kia Carens EV",
  "pricing": {
    "perKm": 18,        // ← Price per kilometer
    "minimumKm": 250,   // ← Minimum booking distance
    "fullDay": 5500     // ← Full day rental price
  }
}
```

## Quick Price Update Examples

### Example 1: Increase Pune-Mumbai price by ₹500
Find route with `"slug": "pune-mumbai"` and change:
- `"kiaCarens": 4500` → `"kiaCarens": 5000`
- `"bydEmax7": 5200` → `"bydEmax7": 5700`

### Example 2: Update Thane to Mumbai Airport price
Find in `airportRoutes.mumbaiAirport`:
```json
{
  "from": "Thane",
  "kia": 1800,  // ← Change to new price
  "byd": 2100   // ← Change to new price
}
```

### Example 3: Change per-km rate for BYD
Find BYD vehicle in `vehicles` array:
```json
{
  "name": "BYD E-MAX 7",
  "pricing": {
    "perKm": 22  // ← Change to new rate
  }
}
```

## Adding New Routes

### Add Regular Route
Add new object to `routes` array:

```json
{
  "id": "7",
  "slug": "pune-goa",
  "name": "Pune to Goa",
  "from": "Pune",
  "to": "Goa",
  "distance": "450 km",
  "duration": "8-9 hours",
  "description": "Your description here...",
  "highlights": [
    "Coastal highway",
    "Beach views"
  ],
  "pricing": {
    "kiaCarens": 12000,
    "bydEmax7": 14000
  },
  "popular": false
}
```

### Add Airport Route
Add new route to appropriate airport section:

```json
"mumbaiAirport": [
  {
    "from": "Your City",
    "distance": "XX km",
    "time": "X-X hours",
    "kia": XXXX,
    "byd": XXXX
  }
]
```

## Updating Contact Information

```json
"contact": {
  "phone": "+91 74982 64215",      // ← Update phone
  "email": "greenevcabs@gmail.com", // ← Update email
  "whatsapp": "917498264215"       // ← Update WhatsApp number
}
```

## Important Notes

⚠️ **After making changes:**
1. Save the file
2. Rebuild the website: `npm run build`
3. Deploy: `npx wrangler deploy`

⚠️ **JSON Syntax:**
- Don't forget commas between items
- Last item in array/object should NOT have trailing comma
- Use double quotes for strings
- Numbers don't need quotes

⚠️ **Price Format:**
- All prices are in Indian Rupees (₹)
- Use whole numbers (no decimals)
- Example: 4500 (not "4500" or 4500.00)

## File Structure

```
content.json
├── business          # Company name, tagline
├── contact          # Phone, email, WhatsApp
├── vehicles         # Fleet information & pricing
├── routes           # Regular routes & pricing
├── airportRoutes    # Airport-specific routes
│   ├── mumbaiAirport
│   ├── naviMumbaiAirport
│   └── puneAirport
├── serviceAreas     # Cities/areas served
├── features         # Service features
└── socialMedia      # Social links
```

## Common Tasks

### Seasonal Pricing Update
Update all route prices for monsoon/peak season by modifying pricing values in both `routes` and `airportRoutes`.

### Add New Vehicle
Add new vehicle to `vehicles` array with complete specifications and pricing.

### Expand Service Area
Add new cities to `serviceAreas` array.

### Update Business Hours
Currently showing 24/7 in features. Update in `features` array if needed.

## Need Help?

- JSON Validator: https://jsonlint.com/
- Test your changes before deploying
- Keep a backup before making major changes
