import os
import re

base_path = "c:/Users/Lenovo/Downloads/IMPORTENT THINGS/G1 Digitilizing/agency-website/src"

# 1. Update index.css (.section-bg-hero change)
css_path = os.path.join(base_path, "index.css")
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Replace the hero background
old_hero_bg = "background: linear-gradient(135deg, #f8fbff, #eef3ff) !important;"
new_hero_bg = "background: radial-gradient(circle at 20% 30%, rgba(59,130,246,0.08), transparent), linear-gradient(135deg, #f8fbff, #eef3ff) !important;"
css_content = css_content.replace(old_hero_bg, new_hero_bg)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)
print("Updated index.css")

# 2. Update Hero.jsx form card style
hero_path = os.path.join(base_path, "components", "Hero.jsx")
with open(hero_path, 'r', encoding='utf-8') as f:
    hero_content = f.read()

# The card class string needs updating to match glassmorphism
old_card_class = "w-full bg-white/10 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/20"
new_card_class = "w-full bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/30"
hero_content = hero_content.replace(old_card_class, new_card_class)

with open(hero_path, 'w', encoding='utf-8') as f:
    f.write(hero_content)
print("Updated Hero.jsx")

# 3. Update WhatsAppFAB.jsx shadow
wa_path = os.path.join(base_path, "components", "WhatsAppFAB.jsx")
with open(wa_path, 'r', encoding='utf-8') as f:
    wa_content = f.read()

# Replace shadow-[0_8px_20px_rgba(16,185,129,0.3)] with shadow-[0_10px_25px_rgba(37,211,102,0.4)]
wa_content = re.sub(r'shadow-\[0_8px_20px_[^\]]+\]', 'shadow-[0_10px_25px_rgba(37,211,102,0.4)]', wa_content)
wa_content = re.sub(r'hover:shadow-\[0_12px_30px_[^\]]+\]', 'hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)]', wa_content)

with open(wa_path, 'w', encoding='utf-8') as f:
    f.write(wa_content)
print("Updated WhatsAppFAB.jsx")

# 4. Remove backgrounds from Features and Testimonials
feat_path = os.path.join(base_path, "components", "AIFeatureHighlight.jsx")
test_path = os.path.join(base_path, "components", "Testimonials.jsx")

for filepath, class_to_remove in [(feat_path, "section-bg-light"), (test_path, "section-bg-soft")]:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace(" " + class_to_remove, "").replace('"' + class_to_remove + ' ', '"')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Removed background from {os.path.basename(filepath)}")

print("Done.")
