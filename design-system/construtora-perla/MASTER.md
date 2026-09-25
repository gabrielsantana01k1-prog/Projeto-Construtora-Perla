# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Construtora Perla
**Generated:** 2026-09-25 16:44:14
**Atualizado (identidade real):** 2026-09-25
**Category:** Luxury/Premium Brand
**Design Dials:** Variance 5/10 (Balanced / Modern) | Motion 4/10 (Standard) | Density 3/10 (Spacious)

> ⚠️ **STATUS: paleta/tipografia abaixo foram SUBSTITUÍDAS pela identidade real da marca**, extraída do briefing oficial (`docs/briefing/briefing-2026-09-25.html`, seção 07) e já implementada em `index.html`. A geração automática original (Cinzel/Josefin Sans, preto genérico + dourado) foi só um placeholder provisório — não usar mais. Esta é a "Direção definida · 25/09" da própria Perla.

---

## Global Rules

### Color Palette (real, extraída do logo/marca — não é mais provisória)

| Role | Hex | CSS Variable | Uso |
|------|-----|--------------|-----|
| Fundo (onix) | `#0E0D0C` | `--onix` | Fundo principal — mármore do logo |
| Superfície elevada | `#141210` | `--onix-2` | Cards, seções elevadas |
| Tinta principal | `#EFE7D6` | `--perola` | Texto principal — highlight do ouro do logo |
| Texto secundário | `#B3A994` | `--perola-2` | Parágrafos, texto de apoio |
| Legendas/metadados | `#7A7263` | `--perola-3` | Labels, legendas |
| **Acento único** | `#C2A56E` | `--ouro` | Ouro champanhe chapado — único acento do site |
| Acento hover | `#9C8A5E` | `--ouro-deep` | Hover/filetes fortes |
| Papel (única seção clara) | `#F4EEE6` | `--papel` | Só na seção "O custo" (dado dos 37%) |
| Tinta sobre papel | `#231A17` | `--tinta` | Texto na seção clara |

**Regra de marca:** 1 fundo, 1 tinta, 1 acento — nada além disso. O gradiente metálico (`#F0EAD0 → #9C8A5E`, usado no wordmark do logo) fica **restrito ao logo/wordmark**, não se espalha pela UI. O vinho (`#8C303C`, fase 2 do Instagram) **não entra no site** — fica reservado ao conteúdo editorial do Instagram, por decisão já tomada no briefing.

### Typography (real)

- **Display/títulos e corpo:** Newsreader (serifada, itálico disponível)
- **Números e destaques:** Cormorant Garamond itálico (ex: "37%", numerais de etapas, pontos finais em destaque)
- **Mood:** editorial, alto contraste, elegante, alinhado aos posts de 2026 da marca
- **Google Fonts:** `Cormorant+Garamond:ital,wght@1,400;1,500` + `Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400`

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap');
```

**Símbolo da marca:** leque/concha de cinco pétalas facetadas sobre uma pérola — usar em ícones, divisores e favicon quando o arquivo vetorial for enviado.

### Spacing Variables

*Density: 3/10 — Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `24px` / `1.5rem` | Standard padding |
| `--space-lg` | `32px` / `2rem` | Section padding |
| `--space-xl` | `48px` / `3rem` | Large gaps |
| `--space-2xl` | `64px` / `4rem` | Section margins |
| `--space-3xl` | `96px` / `6rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Component Specs

> ⚠️ Os blocos CSS genéricos que estavam aqui (botões/cards/inputs/modais com a paleta placeholder `#A16207`/`#1C1917`/`#FAFAF9`) foram **removidos** por estarem desatualizados. Os componentes reais (`.btn`, `.btn.solid`, `.door`, `.photo`, `.works li`, `.quotes figure`, etc.) já estão implementados e documentados diretamente em `/index.html` (bloco `<style>`), usando os tokens `--onix`/`--perola`/`--ouro` acima. Consulte o CSS de `index.html` como fonte da verdade de componentes — não este arquivo.

---

## Style Guidelines

**Style:** Editorial premium escuro (identidade real da marca, ver briefing seção 07 "Direção definida · 25/09")

**Keywords:** 1 fundo (onix) + 1 tinta (pérola) + 1 acento único (ouro champanhe chapado), textura sutil de mármore, tipografia serifada de alto contraste, itálico para números/destaques, seção clara única e intencional (dado dos 37%)

**Best For:** Construtora/arquitetura de alto padrão em BH — precisa carregar rápido em qualquer aparelho

**Key Effects:** Scroll-reveal sutil respeitando `prefers-reduced-motion` (classe `.rise`, já implementada em `index.html`), textura de mármore via gradientes CSS puros (sem imagens pesadas), hover discreto em cards/links, sem `backdrop-filter` pesado (só um uso leve — blur 10px — na nav sticky)

> **Histórico:** a busca automática do skill `ui-ux-pro-max` sugeriu originalmente "Liquid Glass" (efeitos de vidro/blur) e depois foi curada manualmente para "Refined Editorial Minimalism" com paleta preto+dourado+pérola genérica. Essa curadoria foi **substituída pela identidade real da marca** trazida pelo usuário (briefing + protótipo já prontos), que já resolve o mesmo objetivo (performance, elegância, sem blur pesado) com cores/fontes oficiais da Perla.

### Page Pattern

**Pattern Name:** Scroll-Triggered Storytelling

- **Conversion Strategy:** Keep the narrative understandable without scroll-driven effects. Use progress indicator. Mobile: simplify animations. Keep DOM reading order complete; disable parallax and scroll-scrub under reduced motion. Pause scroll animation when offscreen or hidden and render each chapter in its final readable state under reduced motion.
- **CTA Placement:** End of each chapter (mini) + Final climax CTA
- **Section Order:** Intro hook > Chapter 1 (problem) > Chapter 2 (journey) > Chapter 3 (solution) > Climax CTA

---

## Motion

**Stagger List** (Standard) — Trigger: load or scroll | Duration: 300-450ms | Easing: `back.out(1.4)`

```js
gsap.from('.grid-item', { opacity: 0, scale: 0.92, y: 16, duration: 0.4, stagger: { each: 0.06, from: 'start', grid: 'auto' }, ease: 'back.out(1.4)' });
```

**Framework notes:** grid: 'auto' lets GSAP infer rows/columns from a CSS grid layout for a natural wave stagger; Use matchMedia('(prefers-reduced-motion: reduce)') to skip non-essential motion and render the final state immediately

- ✅ Combine with from: 'center' for a bento-grid layout to draw the eye inward first
- ❌ Don't use back.out on dense data tables; the overshoot reads as sloppy on informational UI
- ⚡ Group DOM writes; avoid interleaving layout reads (getBoundingClientRect) between staggered tweens

---

## Anti-Patterns (Do NOT Use)

- ❌ Cheap visuals
- ❌ Fast animations
- ❌ Blur/glassmorphism pesado ou efeitos 3D custosos — requisito do cliente é performance em qualquer dispositivo

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
