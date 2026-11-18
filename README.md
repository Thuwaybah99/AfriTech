# Ten Days in Kigali — GitHub Pages website

A complete responsive personal website: HTML, CSS and JavaScript, no build tools.

## Important: Why the old website didn't show images

GitHub's `/blob/main/filename.jpeg` is a **webpage**, not an image URL. This website points directly to actual JPEG files by filename in the **same directory** as `index.html`, and falls back to the correct `raw.githubusercontent.com` direct-image URL. The original filenames (spaces and parentheses included) are preserved exactly.

## Easiest way to publish (your existing repository already has the photos)

1. Download and unzip this folder.
2. Open your repository: https://github.com/Thuwaybah99/AfriTech
3. Choose **Add file → Upload files**.
4. Upload `index.html`, `style.css` and `script.js` **to the repository's main/root folder**. Do not put these files inside a subfolder. The JPEG photos are already in that root folder.
5. Under **Settings → Pages**, choose `Deploy from a branch`, `main`, `/(root)`, then **Save**.
6. Open https://thuwaybah99.github.io/AfriTech/ and refresh after deployment.

Your repository layout should be:

    AfriTech/
      index.html
      style.css
      script.js
      WhatsApp Image 2026-11-18 at 07.54.36 (1).jpeg
      WhatsApp Image 2026-11-18 at 07.54.36.jpeg
      ... the other existing JPEG photos ...

## Open locally without relying on GitHub images

The ZIP does not include the originals because automated downloads were unavailable in the creation environment. To obtain local copies:

1. Put `download_photos.py` with the website files, and have internet access.
2. Run `python download_photos.py` in that folder. This downloads all 16 ORIGINAL photos, unchanged, with exact filenames.
3. Open `index.html` in Chrome or Edge. Or run `python -m http.server 8000` and visit http://localhost:8000.

## Video

The moment-of-winning video is embedded as a YouTube iframe when you click Play. If the video owner or YouTube restricts embedding, use **Watch directly on YouTube** below the description. To make the video 100% self-hosted, you would need to upload your own video as `winning-moment.mp4` and update the video section accordingly. The original YouTube video was not available for packaging here.

## Features

- Cinematic black-and-white story design and 16-photo gallery
- Gallery filters, full-screen photo viewer, keyboard arrows and Escape
- Smooth reveals, scroll progress bar, responsive mobile navigation
- A-IDI first-place award section and clickable YouTube video
- No framework or build tools. Google Fonts are optional: the site falls back to system fonts without internet.

## Troubleshooting

- Page text shows but images fail: verify photos are in the SAME folder as `index.html` with exact capitalization, spaces and parentheses.
- If a photo fails, the site tries its GitHub raw URL automatically.
- If you're viewing in a preview that blocks remote content, publish to GitHub Pages or run `download_photos.py` to get local photos.
- YouTube may disable embedding; the direct watch link is always provided.
