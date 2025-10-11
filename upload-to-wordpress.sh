#!/bin/bash

# WordPress Upload Script for Metabolome Lab React App
# This script helps you prepare files for WordPress upload

echo "🚀 Metabolome Lab - WordPress Upload Helper"
echo "=========================================="

# Check if build directory exists
if [ ! -d "build" ]; then
    echo "❌ Build directory not found. Please run 'npm run build' first."
    exit 1
fi

echo "✅ Build directory found"

# Create upload package
echo "📦 Creating upload package..."
mkdir -p wordpress-upload/react-app
cp -r build/* wordpress-upload/react-app/

# Create upload instructions
cat > wordpress-upload/UPLOAD_INSTRUCTIONS.txt << EOF
WORDPRESS UPLOAD INSTRUCTIONS
============================

1. Connect to your WordPress server via FTP or cPanel File Manager

2. Navigate to your WordPress root directory (usually public_html)

3. Upload the entire 'react-app' folder to your WordPress root directory

4. Add the shortcode [metabolome_lab] to any WordPress page

5. Your app will be available at: https://yourdomain.com/react-app/

FILES TO UPLOAD:
- Upload everything inside the 'react-app' folder
- Make sure asset-manifest.json is included
- Ensure all static files (CSS, JS) are uploaded

WORDPRESS SHORTCODE:
Add this to your theme's functions.php:

[Copy the contents of wordpress-integration.php]

Then use [metabolome_lab] in any page or post.

TROUBLESHOOTING:
- Check file permissions (755 for folders, 644 for files)
- Verify all files uploaded correctly
- Test direct URL: yourdomain.com/react-app/
EOF

echo "✅ Upload package created in 'wordpress-upload' directory"
echo ""
echo "📁 Files ready for upload:"
ls -la wordpress-upload/react-app/

echo ""
echo "📋 Next steps:"
echo "1. Upload the 'react-app' folder to your WordPress server"
echo "2. Add the shortcode to your WordPress functions.php"
echo "3. Use [metabolome_lab] in any page"
echo ""
echo "📖 See WORDPRESS_SETUP.md for detailed instructions"
echo "🎉 Ready to go live!"
