"""Optional: download all 16 ORIGINAL photos from the user's public GitHub repo.
Run: python download_photos.py
Requires internet access and Python 3. No external Python packages required.
Files are saved using their exact original filenames beside index.html.
"""
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

BASE = 'WhatsApp Image 2026-11-18 at '
SUFFIXES = [
    '07.54.36 (1).jpeg', '07.54.36.jpeg', '07.54.46 (1).jpeg',
    '07.54.46.jpeg', '07.54.47 (1).jpeg', '07.54.47 (2).jpeg',
    '07.54.47 (3).jpeg', '07.54.47.jpeg', '07.54.48 (1).jpeg',
    '07.54.50 (2).jpeg', '07.54.49.jpeg', '07.54.49 (5).jpeg',
    '07.54.49 (4).jpeg', '07.54.49 (3).jpeg', '07.54.49 (2).jpeg',
    '07.54.49 (1).jpeg',
]
ROOT = Path(__file__).resolve().parent
URL = 'https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/'
for n, suffix in enumerate(SUFFIXES, start=1):
    name = BASE + suffix
    target = ROOT / name
    if target.exists() and target.stat().st_size > 1000:
        print(f'{n:02d}/16 already exists: {name}')
        continue
    try:
        req = Request(URL + quote(name), headers={'User-Agent': 'Mozilla/5.0'})
        with urlopen(req, timeout=30) as response:
            data = response.read()
        if len(data) < 1000 or data[:3] != b'\xff\xd8\xff':
            raise ValueError('Not a JPEG photo')
        target.write_bytes(data)
        print(f'{n:02d}/16 downloaded: {name} ({len(data):,} bytes)')
    except Exception as exc:
        print(f'{n:02d}/16 FAILED {name}: {exc}')
print('\nYou can now open index.html locally, or upload all files to GitHub Pages.')
