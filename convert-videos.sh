#!/bin/bash

# Script to convert video files to image sequences for smooth scroll canvas
# Requires FFmpeg to be installed

echo "Converting videos to image sequences..."

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "FFmpeg is not installed. Please install it first:"
    echo "Ubuntu/Debian: sudo apt install ffmpeg"
    echo "macOS: brew install ffmpeg"
    echo "Windows: Download from https://ffmpeg.org/download.html"
    exit 1
fi

# Convert video 1 (if it exists)
if [ -f "public/videos/1.mp4" ]; then
    echo "Converting video 1..."
    ffmpeg -i public/videos/1.mp4 -vf "fps=30,scale=1920:1080" public/frames/1/frame-%04d.jpg -y
    echo "Video 1 converted to $(ls public/frames/1/ | wc -l) frames"
else
    echo "Video 1 not found, creating placeholder frames..."
    # Create a simple colored frame as placeholder
    ffmpeg -f lavfi -i "color=c=black:size=1920x1080:duration=1" -vf "fps=30" public/frames/1/frame-%04d.jpg -y
fi

# Convert video 2 (if it exists)
if [ -f "public/videos/2.mp4" ]; then
    echo "Converting video 2..."
    ffmpeg -i public/videos/2.mp4 -vf "fps=30,scale=1920:1080" public/frames/2/frame-%04d.jpg -y
    echo "Video 2 converted to $(ls public/frames/2/ | wc -l) frames"
else
    echo "Video 2 not found, creating placeholder frames..."
    ffmpeg -f lavfi -i "color=c=darkgreen:size=1920x1080:duration=1" -vf "fps=30" public/frames/2/frame-%04d.jpg -y
fi

# Convert video 3 (if it exists)
if [ -f "public/videos/3.mp4" ]; then
    echo "Converting video 3..."
    ffmpeg -i public/videos/3.mp4 -vf "fps=30,scale=1920:1080" public/frames/3/frame-%04d.jpg -y
    echo "Video 3 converted to $(ls public/frames/3/ | wc -l) frames"
else
    echo "Video 3 not found, creating placeholder frames..."
    ffmpeg -f lavfi -i "color=c=darkblue:size=1920x1080:duration=1" -vf "fps=30" public/frames/3/frame-%04d.jpg -y
fi

echo "Conversion complete!"
echo "You can now use ScrollCanvas with:"
echo "- imageSequencePath: '/frames/1' for video 1"
echo "- imageSequencePath: '/frames/2' for video 2" 
echo "- imageSequencePath: '/frames/3' for video 3"
echo "- totalFrames: [number of frames in each directory]"
