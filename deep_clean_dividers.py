import os
import re
import glob

base_path = "c:/Users/Lenovo/Downloads/IMPORTENT THINGS/G1 Digitilizing/agency-website/src/components"

for filepath in glob.glob(os.path.join(base_path, "*.jsx")):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Clean the outer wrapping sections of explicit tailwind background & border colors
    def clean_outer_section(match):
        attrs = match.group(0)
        # Remove background colors
        attrs = re.sub(r'\s+bg-\[#[0-9a-fA-F]+\]', '', attrs)
        attrs = re.sub(r'\s+bg-(white|slate-\d+|blue-\d+)', '', attrs)
        # Remove borders
        attrs = re.sub(r'\s+border-[tyb]?\s+border-slate-\d+(?:/\d+)?', '', attrs)
        attrs = re.sub(r'\s+border-slate-\d+(?:/\d+)?', '', attrs)
        # Ensure that no floating `border` class is left alone if it was just for the section divider
        attrs = re.sub(r'\s+border(?=\s|"|;)', '', attrs)
        
        return attrs

    # Apply only to <motion.section> and <section> tags
    content = re.sub(r'<motion\.section[^>]*className="[^"]*"', clean_outer_section, content)
    content = re.sub(r'<section[^>]*className="[^"]*"', clean_outer_section, content)

    # 2. Rip out internal div dividers that span the section
    # The grid background
    content = re.sub(r'<div\s+className="absolute\s+inset-0\s+bg-\[linear-gradient.*?pointer-events-none"\s*/>', '', content, flags=re.DOTALL)
    # The 1px gradient horizontal line dividers
    content = re.sub(r'<div\s+className="absolute\s+top-0\s+right-0\s+w-full\s+h-\[1px\]\s+bg-gradient-to-r\s+from-transparent\s+via-slate-\d+(?:/\d+)?\s+to-transparent"\s*/>', '', content)
    # Any other absolute w-full h-[1px] dividers
    content = re.sub(r'<div\s+className="[^"]*w-full\s+h-\[1px\][^"]*"\s*>.*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<div\s+className="[^"]*w-full\s+h-\[1px\][^"]*"\s*/>', '', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Deep cleaning complete. All internal grids and fake borders have been stripped.")
