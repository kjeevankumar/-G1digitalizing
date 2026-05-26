import re
import os

with open('main.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract and replace Styles
styles = re.findall(r'<style[^>]*>(.*?)</style>', content, re.DOTALL | re.IGNORECASE)
with open('style.css', 'w', encoding='utf-8') as f:
    f.write("\n".join(styles))

# Remove <style> blocks and insert the link in HEAD
content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL | re.IGNORECASE)
content = content.replace('</head>', '    <link rel="stylesheet" href="style.css">\n</head>')

# 2. Extract and replace Scripts
scripts = re.findall(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', content, re.DOTALL | re.IGNORECASE)

visibility_fix = """
// ----------------------------------------------------
// UI FIX: Loader removal & Scroll reveal animations
// ----------------------------------------------------
window.addEventListener('load', () => {
    const loader = document.getElementById('g1-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 500); // short delay to ensure rendering
    }
    
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
});
"""

combined_scripts = "\n".join(scripts) + "\n\n" + visibility_fix
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(combined_scripts.strip())

# Remove inline scripts
content = re.sub(r'<script(?![^>]*src=)[^>]*>.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)

# Insert external script just before </body>
content = content.replace('</body>', '    <script src="script.js"></script>\n</body>')

# 3. Write index.html
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Clean up
try:
    os.remove('main.html')
    os.remove('_tmp_extract.py')
    os.remove('_tmp_split.py')
    os.remove('_tmp_style.css')
    os.remove('_tmp_script.js')
except Exception as e:
    print("Cleanup partial:", e)

print("SUCCESS: Separated files and injected animation visibility logic!")
