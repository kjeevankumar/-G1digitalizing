import os
import re

base_path = "c:/Users/Lenovo/Downloads/IMPORTENT THINGS/G1 Digitilizing/agency-website/src"
css_path = os.path.join(base_path, "index.css")

with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Remove the old section backgrounds block if it exists
if "/* Section Backgrounds Integration */" in css_content:
    css_content = css_content.split("/* Section Backgrounds Integration */")[0]

comprehensive_bg_css = """/* Section Backgrounds Integration */

/* 1. The Hook */
.enable-backgrounds .section-bg-hero {
  background: radial-gradient(circle at 20% 30%, rgba(59,130,246,0.08), transparent), linear-gradient(135deg, #f8fbff, #eef3ff) !important;
}

/* 2. The Grounding */
.enable-backgrounds .section-bg-problem {
  background: linear-gradient(to bottom, #eef3ff, #f8fafc) !important;
}

.enable-backgrounds .section-bg-services {
  background: linear-gradient(to right, rgba(128,128,128,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.03) 1px, transparent 1px), linear-gradient(180deg, #ffffff, #fafcff) !important;
  background-size: 40px 40px, 40px 40px, auto !important;
}

/* 3. The Technology Drop (Midnight Tech) */
.enable-backgrounds .section-bg-ai {
  background: radial-gradient(circle at 80% 20%, rgba(59,130,246,0.15), transparent 50%), linear-gradient(145deg, #020617, #0b1120) !important;
  color: white !important;
}

/* 4. The Proof & Value */
.enable-backgrounds .section-bg-growth {
  background: radial-gradient(circle at 50% 100%, rgba(16,185,129,0.05), transparent 60%), linear-gradient(to bottom, #0b1120 0%, #f8fafc 15%, #ffffff 100%) !important;
}

.enable-backgrounds .section-bg-dark {
  background: linear-gradient(135deg, #0f172a, #0b1120) !important;
  color: white !important;
}

/* 5. The Vault (Cinematic Event Photography) */
.enable-backgrounds .section-bg-photo {
  background: linear-gradient(rgba(2,6,23,0.85), rgba(2,6,23,0.9)), url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2938&auto=format&fit=crop') !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
  color: white !important;
}

/* 6. The Human Element */
.enable-backgrounds .section-bg-founder {
  background: radial-gradient(circle at 50% 50%, #ffffff, #fafbfc) !important;
}

.enable-backgrounds .section-bg-soft {
  background: linear-gradient(135deg, #fbfdff, #f1f5f9) !important;
}

/* 7. The Close */
.enable-backgrounds .section-bg-faq {
  background: #f8fafc !important;
}

.enable-backgrounds .section-bg-cta {
  background: radial-gradient(circle at 50% 0%, rgba(59,130,246,0.1), transparent 60%), linear-gradient(180deg, #0f172a, #17103b) !important;
  color: white !important;
}

/* SMART TEXT CONTRAST OVERRIDES FOR DARK SECTIONS */
.enable-backgrounds .section-bg-ai .text-slate-900,
.enable-backgrounds .section-bg-ai .text-slate-800,
.enable-backgrounds .section-bg-ai .text-slate-500,
.enable-backgrounds .section-bg-ai .text-slate-400,
.enable-backgrounds .section-bg-dark .text-slate-900,
.enable-backgrounds .section-bg-dark .text-slate-800,
.enable-backgrounds .section-bg-dark .text-slate-500,
.enable-backgrounds .section-bg-dark .text-slate-400,
.enable-backgrounds .section-bg-photo .text-slate-900,
.enable-backgrounds .section-bg-photo .text-slate-800,
.enable-backgrounds .section-bg-photo .text-slate-500,
.enable-backgrounds .section-bg-photo .text-slate-400,
.enable-backgrounds .section-bg-cta .text-slate-900,
.enable-backgrounds .section-bg-cta .text-slate-800,
.enable-backgrounds .section-bg-cta .text-slate-500,
.enable-backgrounds .section-bg-cta .text-slate-400 {
  color: #f1f5f9 !important;
}

/* Maintain custom gradients and pure white text logic */
.enable-backgrounds .section-bg-ai .text-transparent,
.enable-backgrounds .section-bg-dark .text-transparent,
.enable-backgrounds .section-bg-photo .text-transparent,
.enable-backgrounds .section-bg-cta .text-transparent {
  color: transparent !important;
}
.enable-backgrounds .section-bg-ai .bg-white,
.enable-backgrounds .section-bg-dark .bg-white {
  background-color: rgba(255,255,255,0.05) !important;
  border-color: rgba(255,255,255,0.1) !important;
}
"""

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content.strip() + "\n\n" + comprehensive_bg_css)

# Update Components
componentsToUpdate = {
    "Hero.jsx": "section-bg-hero",
    "ProblemSolution.jsx": "section-bg-problem",
    "Services.jsx": "section-bg-services",
    "AIFeatureHighlight.jsx": "section-bg-ai",
    "GrowthLeadGen.jsx": "section-bg-growth",
    "BusinessModel.jsx": "section-bg-dark",
    "Portfolio.jsx": "section-bg-photo",
    "Founder.jsx": "section-bg-founder",
    "Testimonials.jsx": "section-bg-soft",
    "FAQ.jsx": "section-bg-faq",
    "CtaSection.jsx": "section-bg-cta"
}

components_path = os.path.join(base_path, "components")

for file, bg_class in componentsToUpdate.items():
    filepath = os.path.join(components_path, file)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Clean out any old injected classes so we don't duplicate
        old_classes = ["section-bg-hero", "section-bg-light", "section-bg-photo", "section-bg-dark", "section-bg-soft", bg_class]
        for c in old_classes:
            content = content.replace(f" {c}", "")
            content = content.replace(f"{c} ", "")
            content = content.replace(f'"{c}"', '""')

        # Inject class into the main wrapper (first className)
        new_content = re.sub(r'(<motion\.section[^>]*?className=")([^"]*)(")', r'\1\2 ' + bg_class + r'\3', content, count=1)
        if new_content == content:
            new_content = re.sub(r'(<section[^>]*?className=")([^"]*)(")', r'\1\2 ' + bg_class + r'\3', content, count=1)
            
        # Specifically for AIFeatureHighlight and BusinessModel which have white inner cards that look bad on dark
        # Let the CSS override handle bg-white
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file} -> {bg_class}")

print("Successfully injected aesthetic.")
