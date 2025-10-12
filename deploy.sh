#!/bin/bash

# Deploy script for Render
echo "Starting deployment process..."

# Build the React app
echo "Building React app..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    
    # Check if images exist in build folder
    echo "Checking images in build folder..."
    if [ -d "build/img" ]; then
        echo "Images found in build/img:"
        ls -la build/img/
    else
        echo "Images not found in build folder, copying from public..."
        mkdir -p build/img
        cp -r public/img/* build/img/
    fi
    
    # Add and commit changes
    echo "Adding changes to git..."
    git add .
    git commit -m "Deploy: $(date)"
    
    # Push to repository
    echo "Pushing to repository..."
    git push origin main
    
    echo "Deployment complete!"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi

