import sys, re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Themes Logic
old_themes = '''const themes = {
  space: { bg: '#090a0f', surface: '#12141d', surface2: '#181b26', border: '#1f2334', accent: '#3b82f6', accentDim: '#3b82f633', text: '#f1f5f9', muted: '#94a3b8' },
  light: { bg: '#f8fafc', surface: '#ffffff', surface2: '#f1f5f9', border: '#e2e8f0', accent: '#0f172a', accentDim: '#0f172a1a', text: '#0f172a', muted: '#64748b' },
  monochrome: { bg: '#000000', surface: '#0a0a0a', surface2: '#141414', border: '#262626', accent: '#ffffff', accentDim: '#ffffff33', text: '#ffffff', muted: '#a3a3a3' }
};

// theme toggle
function applyTheme(name) {
  const root = document.documentElement;
  const t = themes[name];
  Object.keys(t).forEach(k => {
    let prop = k === 'accentDim' ? '--accent-dim' : '--' + k;
    root.style.setProperty(prop, t[k]);
  });
  localStorage.setItem('theme', name);
}'''

new_themes = '''const themes = {
  space: { 
    bg: '#252830', surface: '#252830', surface2: '#252830', border: 'transparent', accent: '#5c9aff', accentDim: '#5c9aff33', text: '#f1f5f9', muted: '#a0aec0',
    neuOut: '12px 12px 24px #1c1e24, -12px -12px 24px #2e323c',
    neuIn: 'inset 12px 12px 24px #1c1e24, inset -12px -12px 24px #2e323c',
    neuOutSm: '5px 5px 10px #1c1e24, -5px -5px 10px #2e323c'
  },
  light: { 
    bg: '#e2e8f0', surface: '#e2e8f0', surface2: '#e2e8f0', border: 'transparent', accent: '#3b82f6', accentDim: '#3b82f61a', text: '#334155', muted: '#64748b',
    neuOut: '12px 12px 24px #c0c6cc, -12px -12px 24px #ffffff',
    neuIn: 'inset 8px 8px 16px #c0c6cc, inset -8px -8px 16px #ffffff',
    neuOutSm: '5px 5px 10px #c0c6cc, -5px -5px 10px #ffffff'
  },
  monochrome: { 
    bg: '#222222', surface: '#222222', surface2: '#222222', border: 'transparent', accent: '#ffffff', accentDim: '#ffffff33', text: '#ffffff', muted: '#a3a3a3',
    neuOut: '12px 12px 24px #171717, -12px -12px 24px #2d2d2d',
    neuIn: 'inset 12px 12px 24px #171717, inset -12px -12px 24px #2d2d2d',
    neuOutSm: '5px 5px 10px #171717, -5px -5px 10px #2d2d2d'
  }
};

function applyTheme(name) {
  const root = document.documentElement;
  const t = themes[name];
  Object.keys(t).forEach(k => {
    const kebab = k.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    root.style.setProperty(`--${kebab}`, t[k]);
  });
  localStorage.setItem('theme', name);
}'''
html = html.replace(old_themes, new_themes)

# 2. Add Neumorphic CSS Classes
neu_css = '''/* NEUMORPHIC BASE UTILS */
.neu { background: var(--bg); box-shadow: var(--neu-out); border: none; transition: box-shadow 0.3s ease, transform 0.3s ease; }
.neu:hover, .neu-hover:hover { box-shadow: var(--neu-in); transform: translateY(0); }
.neu-sm { background: var(--bg); box-shadow: var(--neu-out-sm); border: none; transition: box-shadow 0.2s ease; }
.neu-sm:hover { box-shadow: var(--neu-in); }
.neu-inset { background: var(--bg); box-shadow: var(--neu-in); border: none; }
'''
target_css = '/* MAIN */'
html = html.replace(target_css, neu_css + target_css)

# Remove glowing hero backdrop
html = re.sub(r'<div class="h-glow"></div>', '', html)

# 3. Replace component stylings with Neumorphic properties

html = re.sub(r'nav\{[^}]*\}', 
    'nav{position:fixed;top:1rem;left:50%;transform:translateX(-50%);z-index:100;display:flex;align-items:center;gap:2rem;padding:.8rem 2rem;border-radius:999px;background:var(--bg);box-shadow:var(--neu-out);border:none}', 
    html)

html = re.sub(r'\.nav-l a\{[^}]*\}',
    '.nav-l a{text-decoration:none;color:var(--text);font-size:.9rem;font-weight:500;transition:all .3s ease;padding:.6rem 1.4rem;border-radius:999px}', 
    html)

html = re.sub(r'\.nav-l a:hover,\.nav-l a\.ac\{[^}]*\}',
    '.nav-l a:hover,.nav-l a.ac{color:var(--accent);box-shadow:var(--neu-in);}', 
    html)

html = re.sub(r'\.btn-p\{[^}]*\}',
    '.btn-p{background:var(--bg);color:var(--accent);border:none;padding:.75rem 1.6rem;border-radius:999px;font-weight:600;font-size:1rem;cursor:pointer;box-shadow:var(--neu-out);transition:all .2s ease}',
    html)

html = re.sub(r'\.btn-n\{[^}]*\}',
    '.btn-n{background:var(--bg);color:var(--text);border:none;padding:.75rem 1.6rem;border-radius:999px;font-weight:600;font-size:1rem;cursor:pointer;box-shadow:var(--neu-out-sm);transition:all .2s ease}',
    html)

html = re.sub(r'\.btn-p:hover\{[^}]*\}', '.btn-p:hover{box-shadow:var(--neu-in);color:var(--accent);transform:scale(0.98)}', html)
html = re.sub(r'\.btn-n:hover\{[^}]*\}', '.btn-n:hover{box-shadow:var(--neu-in);color:var(--accent);transform:scale(0.98)}', html)

# Hero styling
html = re.sub(r'\.h-eyebrow\{[^}]*\}', 
    '.h-eyebrow{display:inline-flex;align-items:center;gap:.6rem;background:var(--bg);border:none;box-shadow:var(--neu-in);border-radius:999px;padding:.5rem 1.2rem;margin-bottom:1.2rem;font-size:.9rem;font-weight:600}', html)

# Terminal card to Neumorphic block
html = re.sub(r'\.term-card\{[^}]*\}',
    '.term-card{background:var(--bg);border-radius:24px;overflow:hidden;box-shadow:var(--neu-out);border:none;}', html)
html = re.sub(r'\.term-bar\{[^}]*\}',
    '.term-bar{background:var(--bg);box-shadow:var(--neu-out-sm);padding:.8rem 1.2rem;display:flex;gap:.5rem}', html)
html = re.sub(r'\.term-body\{[^}]*\}',
    '.term-body{padding:1.5rem;font-family:var(--mono);font-size:.9rem;line-height:1.6;color:var(--muted);box-shadow:var(--neu-in);margin:1.5rem;border-radius:12px;background:var(--bg)}', html)

# DP shadow
html = html.replace('box-shadow: 0 0 40px var(--accent-dim);', 'box-shadow: var(--neu-out);')

# Skill Cards (.fc)
html = re.sub(r'\.fc\{[^}]*\}',
    '.fc{background:var(--bg);border-radius:24px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem;box-shadow:var(--neu-out);transition:all .3s ease;border:none;}', html)
html = re.sub(r'\.fc:hover\{[^}]*\}',
    '.fc:hover{box-shadow:var(--neu-in);transform:scale(0.98);}', html)

# Tags inside fc
html = re.sub(r'\.tag\{[^}]*\}',
    '.tag{background:var(--bg);color:var(--accent);font-size:.8rem;font-weight:600;padding:.4rem 1rem;border-radius:999px;box-shadow:var(--neu-out-sm);border:none}', html)

# Exp Item
html = re.sub(r'\.exp-item\{[^}]*\}',
    '.exp-item{background:var(--bg);border-radius:24px;padding:2.5rem;margin-bottom:2rem;box-shadow:var(--neu-out);border:none;transition:box-shadow .3s ease}', html)
html = re.sub(r'\.exp-item:hover\{[^}]*\}',
    '.exp-item:hover{box-shadow:var(--neu-in);}', html)

html = re.sub(r'\.exp-dot\{[^}]*\}',
    '.exp-dot{width:16px;height:16px;background:var(--accent);border-radius:50%;box-shadow:var(--neu-out-sm);z-index:2}', html)

# Project Cards
html = re.sub(r'\.proj-grid\{[^}]*\}',
    '.proj-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:3rem;margin-top:4rem}', html)
html = re.sub(r'\.proj-card\{[^}]*\}',
    '.proj-card{background:var(--bg);border-radius:24px;overflow:hidden;box-shadow:var(--neu-out);transition:all .3s ease;cursor:pointer;border:none}', html)
html = re.sub(r'\.proj-card:hover\{[^}]*\}',
    '.proj-card:hover{box-shadow:var(--neu-in);transform:scale(0.98);}', html)

html = re.sub(r'\.proj-thumb\{[^}]*\}',
    '.proj-thumb{width:100%;height:180px;background:var(--bg);position:relative;display:flex;align-items:center;justify-content:center;box-shadow:var(--neu-in);margin-bottom:1.5rem;border-bottom-left-radius:24px;border-bottom-right-radius:24px}', html)
html = re.sub(r'\.proj-body\{[^}]*\}',
    '.proj-body{padding:0 2rem 2rem}', html)

# Contact Pills
html = re.sub(r'\.ct-pill\{[^}]*\}',
    '.ct-pill{display:inline-flex;align-items:center;gap:.8rem;padding:.8rem 1.6rem;background:var(--bg);border-radius:999px;text-decoration:none;color:var(--text);font-weight:600;box-shadow:var(--neu-out);transition:all .3s ease;border:none;}', html)
html = re.sub(r'\.ct-pill:hover\{[^}]*\}',
    '.ct-pill:hover{box-shadow:var(--neu-in);color:var(--accent);transform:scale(0.96);}', html)

# Remove background overrides on sections to ensure pure Neumorphism
html = html.replace('style="background:var(--surface)"', '')
html = html.replace('style="background:var(--bg)"', '')
html = html.replace('class="ct-box reveal"', 'class="ct-box neu reveal" style="padding:4rem;border-radius:32px;margin:2rem auto"')
html = html.replace('box-shadow: 0 0 30px rgba(0,0,0,0.5)', 'box-shadow:var(--neu-out)')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Finished complete Neumorphic flip!")
