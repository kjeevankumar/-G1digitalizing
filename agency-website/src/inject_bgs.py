import os
import re

base_path = "c:/Users/Lenovo/Downloads/IMPORTENT THINGS/G1 Digitilizing/agency-website"

# 1. Update index.html
html_path = os.path.join(base_path, "index.html")
with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()
html_content = html_content.replace('<body>', '<body class="enable-backgrounds">')
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

# 2. Update index.css
css_path = os.path.join(base_path, "src", "index.css")
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

bg_css = """
/* Section Backgrounds Integration */
.enable-backgrounds .section-bg-hero {
  background: linear-gradient(135deg, #f8fbff, #eef3ff) !important;
}

.enable-backgrounds .section-bg-light {
  background: linear-gradient(180deg, #ffffff, #f7f9fc) !important;
}

.enable-backgrounds .section-bg-photo {
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2938&auto=format&fit=crop') !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed;
}
/* Ensure photo section text is readable */
.enable-backgrounds .section-bg-photo .text-slate-900,
.enable-backgrounds .section-bg-photo .text-slate-800,
.enable-backgrounds .section-bg-photo .text-slate-500 {
  color: #fff !important;
}

.enable-backgrounds .section-bg-dark {
  background: linear-gradient(135deg, #0f172a, #1e3a8a) !important;
  color: white !important;
}
/* Ensure dark section text is readable against tailwind classes */
.enable-backgrounds .section-bg-dark .text-slate-900,
.enable-backgrounds .section-bg-dark .text-slate-800,
.enable-backgrounds .section-bg-dark .text-slate-500,
.enable-backgrounds .section-bg-dark .text-slate-400 {
  color: #f1f5f9 !important;
}
/* Keep accent gradients intact */
.enable-backgrounds .section-bg-dark .text-transparent {
  color: transparent !important;
}

.enable-backgrounds .section-bg-soft {
  background: linear-gradient(180deg, #f9fafb, #eef2f7) !important;
}
"""
if "section-bg-hero" not in css_content:
    with open(css_path, 'a', encoding='utf-8') as f:
        f.write(bg_css)

# 3. Update Components
componentsToUpdate = {
    "Hero.jsx": "section-bg-hero",
    "AIFeatureHighlight.jsx": "section-bg-light",
    "Portfolio.jsx": "section-bg-photo",
    "BusinessModel.jsx": "section-bg-dark",
    "Testimonials.jsx": "section-bg-soft"
}

components_path = os.path.join(base_path, "src", "components")

for file, bg_class in componentsToUpdate.items():
    filepath = os.path.join(components_path, file)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Inject class into the main wrapper (the first className found in <section or <motion.section)
        # Find className="..." and inject bg_class
        # Using a simple re.sub limit 1
        new_content = re.sub(r'(<motion\.section[^>]*?className=")([^"]*)(")', r'\1\2 ' + bg_class + r'\3', content, count=1)
        if new_content == content:
            new_content = re.sub(r'(<section[^>]*?className=")([^"]*)(")', r'\1\2 ' + bg_class + r'\3', content, count=1)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file} with {bg_class}")
    else:
        print(f"File not found: {filepath}")

print("Done.")
