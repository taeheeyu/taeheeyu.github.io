import os
import re

with open('js/data.js', encoding='utf-8') as f:
    text = f.read()

paths = re.findall(r'[\'"](\./images/[^\'"]+)[\'"]', text)
print(f"Total image paths referenced: {len(paths)}")

missing = [p for p in paths if not os.path.exists(p.replace('./', ''))]

if missing:
    print(f"Missing images ({len(missing)}): {missing}")
else:
    print("ALL image paths in js/data.js exist on disk!")
