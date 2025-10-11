# WordPress Integration Guide for Metabolome Lab React App

## 🚀 Quick Setup (5 minutes)

### Step 1: Upload Your React App Files

1. **Connect to your WordPress server** via FTP or cPanel File Manager
2. **Navigate to your WordPress root directory** (usually `public_html`)
3. **Create a new folder** called `react-app`
4. **Upload ALL contents** from your local `build/` folder into `/public_html/react-app/`

Your server structure should look like:
```
public_html/
├── wp-content/
├── wp-admin/
├── wp-includes/
└── react-app/          ← Your React app files go here
    ├── index.html
    ├── static/
    │   ├── css/
    │   └── js/
    ├── videos/
    └── asset-manifest.json
```

### Step 2: Add WordPress Shortcode

1. **Go to WordPress Admin Dashboard**
2. **Navigate to:** Appearance → Theme Editor
3. **Select:** functions.php (or create a child theme first)
4. **Add this code** at the bottom of functions.php:

```php
<?php
// Copy the entire contents of wordpress-integration.php here
// (The file I created for you)
?>
```

### Step 3: Use the Shortcode

1. **Create a new page** or edit an existing one
2. **Add a Shortcode block**
3. **Type:** `[metabolome_lab]`
4. **Publish/Update** the page

## 🎯 Your App is Now Live!

Visit your page to see your Metabolome Lab React app running seamlessly within WordPress.

## 🔧 Advanced Configuration

### Custom Styling
If you need to customize the appearance within WordPress:

```css
/* Add to your theme's custom CSS */
#metabolome-lab-container {
    margin: 20px 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
```

### Multiple Apps
To host multiple React apps, create different folders:
- `/react-app/` - Main app
- `/react-app-2/` - Second app
- Update the shortcode accordingly

### Performance Optimization
1. **Enable caching** in your WordPress hosting
2. **Use a CDN** for faster loading
3. **Compress images** before uploading

## 🐛 Troubleshooting

### App Not Loading?
1. Check file permissions (755 for folders, 644 for files)
2. Verify all files uploaded correctly
3. Check browser console for errors
4. Ensure `asset-manifest.json` is accessible

### Styling Issues?
1. Check for CSS conflicts with your WordPress theme
2. Add `!important` to critical styles if needed
3. Use browser dev tools to debug

### Performance Issues?
1. Enable GZIP compression
2. Use a caching plugin
3. Optimize images and videos

## 📁 File Structure After Upload

```
public_html/react-app/
├── index.html
├── asset-manifest.json
├── favicon.ico
├── manifest.json
├── robots.txt
├── static/
│   ├── css/
│   │   ├── main.fefcdcf5.css
│   │   └── main.fefcdcf5.css.map
│   └── js/
│       ├── main.ad766673.js
│       ├── main.ad766673.js.map
│       ├── 453.275cdb6d.chunk.js
│       └── 453.275cdb6d.chunk.js.map
├── videos/
│   ├── 2.mp4
│   └── metabolome-intro.mp4
└── img/
    ├── Pasted image (2).png
    ├── Pasted image (3).png
    └── Pasted image.png
```

## 🎨 Features Included

✅ **Full React App Integration**
✅ **Loading Animation**
✅ **Error Handling**
✅ **Responsive Design**
✅ **Theme Switching**
✅ **Video Backgrounds**
✅ **Smooth Animations**
✅ **Mobile Optimized**

## 🔗 URLs

- **Your React App:** `https://yourdomain.com/react-app/`
- **WordPress Page:** `https://yourdomain.com/your-page/`

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files are uploaded correctly
3. Test the direct URL: `yourdomain.com/react-app/`
4. Ensure your WordPress theme supports the shortcode

---

**Ready to go live?** Follow the Quick Setup steps above and your Metabolome Lab app will be running on WordPress in minutes! 🚀
