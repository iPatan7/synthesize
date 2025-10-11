<?php
/**
 * WordPress Integration for Metabolome Lab React App
 * 
 * Instructions:
 * 1. Upload your build/ folder contents to /public_html/react-app/ on your server
 * 2. Add this code to your WordPress theme's functions.php file (preferably in a child theme)
 * 3. Use the shortcode [metabolome_lab] in any WordPress page or post
 */

function load_metabolome_lab_app() {
    // Path to the asset manifest file from your React build
    $manifest_path = get_stylesheet_directory() . '/../react-app/asset-manifest.json';
    
    // Alternative path if the above doesn't work
    if (!file_exists($manifest_path)) {
        $manifest_path = ABSPATH . 'react-app/asset-manifest.json';
    }
    
    // Check if the manifest file exists
    if (!file_exists($manifest_path)) {
        return '<div style="padding: 20px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; margin: 20px 0;">
                    <h3>Metabolome Lab App</h3>
                    <p style="color: #dc3545;">Error: React App manifest not found at ' . $manifest_path . '</p>
                    <p>Please ensure you have uploaded the build files to the correct directory.</p>
                </div>';
    }
    
    // Read the manifest file
    $manifest_json = file_get_contents($manifest_path);
    $manifest = json_decode($manifest_json, true);
    
    if (!$manifest || !isset($manifest['entrypoints'])) {
        return '<div style="padding: 20px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; margin: 20px 0;">
                    <h3>Metabolome Lab App</h3>
                    <p style="color: #dc3545;">Error: Could not parse React App manifest.</p>
                </div>';
    }
    
    $output = '';
    
    // Add a container with loading state
    $output .= '<div id="metabolome-lab-container" style="min-height: 100vh; position: relative;">';
    $output .= '<div id="metabolome-loading" style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
                    <div style="text-align: center;">
                        <div style="width: 40px; height: 40px; border: 4px solid rgba(0, 212, 255, 0.3); border-top: 4px solid #00d4ff; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
                        <h3>Loading Metabolome Lab...</h3>
                        <p>Preparing your scientific journey</p>
                    </div>
                </div>';
    
    // Create <link> tags for all the CSS files
    foreach ($manifest['entrypoints'] as $file) {
        if (substr($file, -4) === '.css') {
            $output .= '<link rel="stylesheet" href="' . home_url('/react-app/' . $file) . '?v=' . time() . '">';
        }
    }
    
    // Create <script> tags for all the JavaScript files
    foreach ($manifest['entrypoints'] as $file) {
        if (substr($file, -3) === '.js') {
            // Use 'defer' to ensure HTML is loaded first
            $output .= '<script defer src="' . home_url('/react-app/' . $file) . '?v=' . time() . '"></script>';
        }
    }
    
    // Add additional chunk files if they exist
    if (isset($manifest['files'])) {
        foreach ($manifest['files'] as $file => $path) {
            if (substr($file, -3) === '.js' && strpos($file, 'chunk') !== false) {
                $output .= '<script defer src="' . home_url('/react-app' . $path) . '?v=' . time() . '"></script>';
            }
        }
    }
    
    // The HTML element where your React app will mount
    $output .= '<div id="root"></div>';
    
    // Add CSS for loading animation
    $output .= '<style>
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        #metabolome-lab-container {
            width: 100%;
            overflow: hidden;
        }
        
        /* Hide loading when React app loads */
        #root:not(:empty) + #metabolome-loading,
        #root:not(:empty) ~ #metabolome-loading {
            display: none !important;
        }
        
        /* Ensure full width and height */
        #root {
            width: 100%;
            min-height: 100vh;
        }
    </style>';
    
    // Add JavaScript to hide loading screen when React app loads
    $output .= '<script>
        document.addEventListener("DOMContentLoaded", function() {
            // Hide loading screen after a short delay or when React app loads
            setTimeout(function() {
                const loading = document.getElementById("metabolome-loading");
                const root = document.getElementById("root");
                if (loading && root && root.children.length > 0) {
                    loading.style.display = "none";
                }
            }, 2000);
            
            // Also hide loading when React app content appears
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.target.id === "root" && mutation.target.children.length > 0) {
                        const loading = document.getElementById("metabolome-loading");
                        if (loading) {
                            loading.style.display = "none";
                        }
                        observer.disconnect();
                    }
                });
            });
            
            const root = document.getElementById("root");
            if (root) {
                observer.observe(root, { childList: true, subtree: true });
            }
        });
    </script>';
    
    $output .= '</div>';
    
    return $output;
}

// Register the shortcode so WordPress recognizes [metabolome_lab]
add_shortcode('metabolome_lab', 'load_metabolome_lab_app');

// Optional: Add admin notice for easy setup
add_action('admin_notices', function() {
    $manifest_path = get_stylesheet_directory() . '/../react-app/asset-manifest.json';
    if (!file_exists($manifest_path)) {
        $manifest_path = ABSPATH . 'react-app/asset-manifest.json';
    }
    
    if (!file_exists($manifest_path)) {
        echo '<div class="notice notice-warning is-dismissible">
                <p><strong>Metabolome Lab App:</strong> Please upload your React build files to the <code>/react-app/</code> directory to use the [metabolome_lab] shortcode.</p>
              </div>';
    }
});
?>
