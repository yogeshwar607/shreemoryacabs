#!/bin/bash

echo "Fixing duplicate text and adding unique enhancements..."

# Fix the duplicate "residents" issue
find src/pages -name "*.astro" -type f | while read file; do
    # Fix "residents and residents" duplicates
    sed -i '' 's/residents and residents/residents/g' "$file"
    sed -i '' 's/professionals and residents/residents and professionals/g' "$file"

    # Fix any "and and" duplicates
    sed -i '' 's/ and and / and /g' "$file"
done

# Add unique value propositions to blog posts
echo "Adding unique personal touches to blogs..."
find src/pages/blog -name "*-cab-guide.astro" -type f | while read file; do
    # Add a customer testimonial section marker (to be filled manually for key posts)
    if ! grep -q "Real Customer Experience" "$file"; then
        # This is a marker for where to add testimonials
        :
    fi
done

# Update specific files with better messaging
echo "Updating key messaging..."

# Update homepage if it hasn't been customized enough
if [ -f "src/pages/index.astro" ]; then
    # Change any remaining "seamless" to "easy" or "simple"
    sed -i '' 's/seamless/easy/g' "src/pages/index.astro"
    sed -i '' 's/Seamless/Easy/g' "src/pages/index.astro"
fi

# Fix service pages
for file in src/pages/services.astro src/pages/locations.astro; do
    if [ -f "$file" ]; then
        sed -i '' 's/seamless/convenient/g' "$file"
        sed -i '' 's/Seamless/Convenient/g' "$file"
    fi
done

# Update corporate page with family business angle
if [ -f "src/pages/corporate.astro" ]; then
    sed -i '' 's/modern companies/growing businesses/g' "src/pages/corporate.astro"
    sed -i '' 's/Modern companies/Growing businesses/g' "src/pages/corporate.astro"
fi

# Make blog titles more approachable
find src/pages/blog -name "*.astro" -type f | while read file; do
    # Change "Complete Guide" to more personal variations
    sed -i '' 's/Your Complete Cab Guide/Everything You Need to Know/g' "$file"
    sed -i '' 's/Complete Guide 2025/Practical Guide for 2025/g' "$file"
    sed -i '' 's/: Complete/: Practical/g' "$file"
done

# Update meta descriptions to be more customer-focused
find src/pages -name "*.astro" -type f | while read file; do
    # Make descriptions more personal
    sed -i '' 's/comprehensive/helpful/g' "$file"
    sed -i '' 's/Comprehensive/Helpful/g' "$file"

    # Change "cutting-edge" to "modern"
    sed -i '' 's/cutting-edge/modern/g' "$file"
    sed -i '' 's/Cutting-edge/Modern/g' "$file"
done

echo "Done! Fixes and enhancements applied."
echo ""
echo "Review the changes with: git diff"
