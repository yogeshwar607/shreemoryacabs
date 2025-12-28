#!/bin/bash

# Bulk Content Differentiation Script for Shree Morya Cabs
# This script applies systematic find-replace operations to differentiate content from greenevcabs

echo "Starting bulk content differentiation..."
echo "This will update all .astro files in src/pages/"

# Color scheme updates - Green to Orange/Saffron
echo "Updating color scheme..."
find src/pages -name "*.astro" -type f -exec sed -i '' \
  -e 's/bg-primary\/10/bg-orange-50 dark:bg-orange-950\/20/g' \
  -e 's/from-primary\/10/from-orange-50 dark:from-orange-950\/20/g' \
  -e 's/to-primary\/10/to-orange-50 dark:to-orange-950\/20/g' \
  -e 's/text-primary/text-orange-600 dark:text-orange-400/g' \
  -e 's/border-primary/border-orange-600/g' \
  -e 's/bg-green-600/bg-orange-600/g' \
  -e 's/hover:bg-green-700/hover:bg-orange-700/g' \
  -e 's/from-primary to-primary/from-orange-600 to-amber-600/g' \
  {} \;

# Messaging updates - Professional/Technical to Family-Friendly
echo "Updating messaging..."
find src/pages -name "*.astro" -type f -exec sed -i '' \
  -e 's/Premium electric cab/Reliable electric cab/g' \
  -e 's/Premium EV service/Trusted cab service/g' \
  -e 's/Professional drivers/Friendly, experienced drivers/g' \
  -e 's/Professional driver/Friendly driver/g' \
  -e 's/State-of-the-art/Comfortable/g' \
  -e 's/Advanced safety features/Safe rides with verified drivers/g' \
  -e 's/ADAS Level 2/Modern safety features/g' \
  -e 's/Zero tailpipe emissions/Clean, quiet electric rides/g' \
  -e 's/Zero emissions/Clean electric rides/g' \
  -e 's/Sustainable transportation/Eco-friendly rides/g' \
  -e 's/Environmental impact/Environmental benefit/g' \
  -e 's/CO₂ emissions/carbon footprint/g' \
  -e 's/Premium service/Reliable service/g' \
  -e 's/Luxury electric/Comfortable electric/g' \
  -e 's/Premium electric/Comfortable electric/g' \
  -e 's/Executive/Comfortable/g' \
  -e 's/Chauffeur/Driver/g' \
  -e 's/chauffeur/driver/g' \
  {} \;

# Badge updates
echo "Updating badges..."
find src/pages -name "*.astro" -type f -exec sed -i '' \
  -e 's/100% Electric • Zero Emissions • Sustainable Future/Trusted by Families • Comfortable Rides • Honest Pricing/g' \
  -e 's/100% Electric • Zero Emissions/Clean Electric Rides • Family-Friendly/g' \
  -e 's/Premium Quality • Best Prices/Trusted Service • Fair Prices/g' \
  {} \;

# Heading updates - more conversational
echo "Updating headings..."
find src/pages -name "*.astro" -type f -exec sed -i '' \
  -e 's/Premium Electric Cab Service/Your Trusted Electric Cab Partner/g' \
  -e 's/Why Choose GreenEVCabs?/Why Families Trust Shree Morya Cabs/g' \
  -e 's/Our Premium Fleet/Our Comfortable Electric Cars/g' \
  -e 's/Professional Service/Reliable Service You Can Trust/g' \
  {} \;

# CTA updates
echo "Updating CTAs..."
find src/pages -name "*.astro" -type f -exec sed -i '' \
  -e 's/Book Now - WhatsApp/Quick WhatsApp Booking/g' \
  -e 's/Book Premium/Book Your Ride/g' \
  -e 's/View Premium/View Our/g' \
  {} \;

# Description updates for more warmth
echo "Updating descriptions..."
find src/pages -name "*.astro" -type f -exec sed -i '' \
  -e 's/our premium fleet/our comfortable electric cars/g' \
  -e 's/premium comfort/comfortable journey/g' \
  -e 's/uncompromising comfort/great comfort/g' \
  -e 's/cutting-edge/modern/g' \
  -e 's/state-of-the-art/comfortable/g' \
  {} \;

echo "Bulk updates complete!"
echo ""
echo "Next steps:"
echo "1. Review changes in git diff"
echo "2. Manually update hero sections on key pages"
echo "3. Add customer testimonials where appropriate"
echo "4. Update any remaining technical jargon"
echo "5. Test pages visually"
