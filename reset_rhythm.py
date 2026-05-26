import os
import re

base_path = "c:/Users/Lenovo/Downloads/IMPORTENT THINGS/G1 Digitilizing/agency-website/src"
css_path = os.path.join(base_path, "index.css")

with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Remove the old buggy dark-mode background block
if "/* Section Backgrounds Integration */" in css_content:
    css_content = css_content.split("/* Section Backgrounds Integration */")[0]

premium_light_css = """/* Section Backgrounds Integration */

/* 1. The Hook */
.enable-backgrounds .section-bg-hero {
  background: radial-gradient(circle at 20% 30%, rgba(59,130,246,0.08), transparent), linear-gradient(135deg, #f8fbff, #eef3ff) !important;
}

/* 2. The Grounding */
.enable-backgrounds .section-bg-problem {
  background: linear-gradient(to bottom, #eef3ff, #ffffff) !important;
}

.enable-backgrounds .section-bg-services {
  background: linear-gradient(to right, rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.03) 1px, transparent 1px), #ffffff !important;
  background-size: 40px 40px, 40px 40px, auto !important;
}

/* 3. The Technology Drop (Sleek Frost) */
.enable-backgrounds .section-bg-ai {
  background: radial-gradient(circle at 80% 20%, rgba(59,130,246,0.06), transparent 50%), linear-gradient(145deg, #ffffff, #f1f5f9) !important;
}

/* 4. The Proof & Value */
.enable-backgrounds .section-bg-growth {
  background: radial-gradient(circle at 50% 100%, rgba(16,185,129,0.04), transparent 60%), linear-gradient(180deg, #f1f5f9, #f8fafc) !important;
}

.enable-backgrounds .section-bg-dark {
  /* Using Deep Soft Indigo instead of Black to preserve some light contrast, wait no, let's keep it purely premium light to fix all text issues instantly! */
  background: linear-gradient(135deg, #f8fafc, #eef2f6) !important;
}

/* 5. The Vault (Cinematic Light Glass) */
.enable-backgrounds .section-bg-photo {
  background: linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.97)), url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2938&auto=format&fit=crop') !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
}

/* 6. The Human Element */
.enable-backgrounds .section-bg-founder {
  background: radial-gradient(circle at 50% 50%, #ffffff, #fafbfc) !important;
}

.enable-backgrounds .section-bg-soft {
  background: linear-gradient(135deg, #fbfdff, #edf2f8) !important;
}

/* 7. The Close */
.enable-backgrounds .section-bg-faq {
  background: #ffffff !important;
}

.enable-backgrounds .section-bg-cta {
  background: radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08), transparent 60%), linear-gradient(180deg, #f8fafc, #e2e8f0) !important;
}
"""

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content.strip() + "\n\n" + premium_light_css)

print("Successfully replaced with unified Light Premium 10L aesthetic.")
