# Video Conversion Guide

This project uses the **ScrollCanvas** component for smooth, scroll-controlled video playback. Instead of using video files directly (which causes choppy playback), we convert videos to image sequences and render them on a canvas.

## Why ScrollCanvas?

- **Smooth Performance**: No choppy video seeking
- **Lightweight**: Efficient canvas rendering
- **Precise Control**: Frame-by-frame scroll control
- **Professional Quality**: Used by high-end interactive websites

## Converting Your Videos

### Method 1: Using FFmpeg (Recommended)

1. **Install FFmpeg**:
   ```bash
   # Ubuntu/Debian
   sudo apt install ffmpeg
   
   # macOS
   brew install ffmpeg
   
   # Windows: Download from https://ffmpeg.org/download.html
   ```

2. **Run the conversion script**:
   ```bash
   ./convert-videos.sh
   ```

3. **Manual conversion** (if needed):
   ```bash
   # Convert video to 30fps image sequence
   ffmpeg -i your-video.mp4 -vf "fps=30,scale=1920:1080" frames/frame-%04d.jpg
   ```

### Method 2: Using Video Editing Software

1. Export your video as an image sequence
2. Name files as `frame-0001.jpg`, `frame-0002.jpg`, etc.
3. Place in the appropriate `public/frames/[1|2|3]/` directory

## File Structure

```
public/
├── frames/
│   ├── 1/          # Video 1 frames
│   │   ├── frame-0001.jpg
│   │   ├── frame-0002.jpg
│   │   └── ...
│   ├── 2/          # Video 2 frames (Awakening section)
│   │   ├── frame-0001.jpg
│   │   └── ...
│   └── 3/          # Video 3 frames (Final section)
│       ├── frame-0001.jpg
│       └── ...
└── videos/         # Original video files
    ├── 1.mp4
    ├── 2.mp4
    └── 3.mp4
```

## Usage in Components

```jsx
import ScrollCanvas from './components/ScrollCanvas';

<ScrollCanvas 
  imageSequencePath="/frames/2" 
  totalFrames={30} 
  className="awakening-container"
>
  <div className="content-overlay">
    <h2>Your Content Here</h2>
  </div>
</ScrollCanvas>
```

## Performance Tips

- **Frame Count**: 30-60 frames work well for most videos
- **Resolution**: 1920x1080 is optimal for full-screen display
- **Format**: JPEG for smaller file sizes, PNG for transparency
- **Compression**: Balance quality vs. file size

## Troubleshooting

- **Loading Issues**: Check that all frame files exist and are properly named
- **Performance**: Reduce frame count or resolution if needed
- **Memory**: Large image sequences may require more RAM

## Current Status

✅ ScrollCanvas component implemented  
✅ CSS styles added  
✅ App.tsx updated to use ScrollCanvas  
✅ Placeholder frames created  
⚠️ **Next Step**: Replace placeholder frames with actual video frames using FFmpeg
