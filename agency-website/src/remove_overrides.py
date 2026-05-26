import os
import re

dir_path = "c:/Users/Lenovo/Downloads/IMPORTENT THINGS/G1 Digitilizing/agency-website/src/components"

for filename in os.listdir(dir_path):
    if filename.endswith(".jsx"):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. Replace "flex-col md:flex-row" or "flex-col lg:flex-row" with "flex-row"
        content = re.sub(r'flex-col\s+(md|lg):flex-row', 'flex-row', content)
        
        # 2. Replace "grid-cols-1 md:grid-cols-X" with "grid-cols-X"
        content = re.sub(r'grid-cols-1\s+(md|lg):grid-cols-(\d+)', r'grid-cols-\2', content)
        
        # 3. Replace "w-full md:w-X" with "w-X"
        content = re.sub(r'w-full\s+(md|lg):w-([^\s"\'}]+)', r'w-\2', content)
        
        # 4. Handle reverse w-sizes like "lg:w-[40%] w-full"
        content = re.sub(r'(md|lg):w-([^\s"\'}]+)\s+w-full', r'w-\2', content)
        
        # 5. Handle md:flex and similar hidden/block toggles
        # "block md:hidden" -> "hidden"
        content = re.sub(r'block\s+(md|lg):hidden', 'hidden', content)
        # "flex md:hidden" -> "hidden"
        content = re.sub(r'flex\s+(md|lg):hidden', 'hidden', content)
        # "hidden md:block" -> "block"
        content = re.sub(r'hidden\s+(md|lg):block', 'block', content)
        # "hidden md:flex" -> "flex"
        content = re.sub(r'hidden\s+(md|lg):flex', 'flex', content)
        
        # 6. Some padding/gap overrides to standard desktop
        # p-X md:p-Y -> padding Y
        content = re.sub(r'\bp-\d+\s+(md|lg):p-(\d+)\b', r'p-\2', content)
        content = re.sub(r'\bpy-\d+\s+(md|lg):py-(\d+)\b', r'py-\2', content)
        content = re.sub(r'\bpx-\d+\s+(md|lg):px-(\d+)\b', r'px-\2', content)
        
        content = re.sub(r'\bgap-\d+\s+(md|lg):gap-(\d+)\b', r'gap-\2', content)
        content = re.sub(r'\bmb-\d+\s+(md|lg):mb-(\d+)\b', r'mb-\2', content)
        content = re.sub(r'\bmt-\d+\s+(md|lg):mt-(\d+)\b', r'mt-\2', content)
        
        # 7. Text sizes
        # text-sm md:text-lg -> text-lg
        content = re.sub(r'\btext-(sm|xs|base|\d*xl)\s+(md|lg):text-([^\s"\'}]+)\b', r'text-\2', content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filename}")
