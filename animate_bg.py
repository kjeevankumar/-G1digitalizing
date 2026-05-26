import os

base_path = "c:/Users/Lenovo/Downloads/IMPORTENT THINGS/G1 Digitilizing/agency-website/src"
css_path = os.path.join(base_path, "index.css")

with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

if "/* Section Backgrounds Integration */" in css_content:
    css_content = css_content.split("/* Section Backgrounds Integration */")[0]

animated_bg_css = """/* Section Backgrounds Integration */

/* 10Lakh Monolithic Premium Animated Background */
@keyframes luxuryMeshDrift {
  0% { background-position: 0% 0%, 100% 100%, 50% 50%, 0% 0%; }
  50% { background-position: 100% 100%, 0% 0%, 100% 50%, 0% 0%; }
  100% { background-position: 0% 0%, 100% 100%, 50% 50%, 0% 0%; }
}

body.enable-backgrounds, 
.enable-backgrounds #app-scale-wrapper {
  background: 
    radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.08), transparent 45%),
    radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.05), transparent 45%),
    radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05), transparent 50%),
    linear-gradient(135deg, #f8fbff 0%, #f1f5f9 100%) !important;
  background-attachment: fixed !important;
  background-size: 150% 150%, 150% 150%, 150% 150%, 100% 100% !important;
  animation: luxuryMeshDrift 25s ease-in-out infinite !important;
  backdrop-filter: blur(10px);
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
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  box-shadow: none !important;
}

/* Ensure global structural sections also strip borders that divide the page */
.enable-backgrounds section {
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
}

"""

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content.strip() + "\n\n" + animated_bg_css)

print("Deployed Animated Monolithic Background and stripped dividing lines.")
