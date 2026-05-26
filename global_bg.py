import os

base_path = "c:/Users/Lenovo/Downloads/IMPORTENT THINGS/G1 Digitilizing/agency-website/src"
css_path = os.path.join(base_path, "index.css")

with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Strip out the previous background systems
if "/* Section Backgrounds Integration */" in css_content:
    css_content = css_content.split("/* Section Backgrounds Integration */")[0]

global_bg_css = """/* Section Backgrounds Integration */

/* 10Lakh Monolithic Premium Background */
body.enable-backgrounds, 
.enable-backgrounds #app-scale-wrapper {
  /* A masterclass in luxury web design: Fixed ambient mesh background that spans the entire site */
  background: 
    radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.05), transparent 50%),
    radial-gradient(circle at 85% 30%, rgba(16, 185, 129, 0.04), transparent 50%),
    radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.04), transparent 50%),
    linear-gradient(180deg, #f8fbff 0%, #f1f5f9 100%) !important;
  background-attachment: fixed !important;
}

/* Force every single section to be completely transparent so the master background shines through seamlessly */
.enable-backgrounds .section-bg-hero,
.enable-backgrounds .section-bg-problem,
.enable-backgrounds .section-bg-services,
.enable-backgrounds .section-bg-ai,
.enable-backgrounds .section-bg-growth,
.enable-backgrounds .section-bg-dark,
.enable-backgrounds .section-bg-photo,
.enable-backgrounds .section-bg-founder,
.enable-backgrounds .section-bg-soft,
.enable-backgrounds .section-bg-faq,
.enable-backgrounds .section-bg-cta {
  background: transparent !important;
}

/* Exception: Portfolio Photo Overlay. If they still want the photo, but if they want ONE bg overall, we strip the photo too! */
/* We make everything transparent. */
"""

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content.strip() + "\n\n" + global_bg_css)

print("Deployed single monolithic 10L background.")
