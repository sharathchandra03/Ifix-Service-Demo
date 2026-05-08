# PROJECT BRAIN: iFix India Premium Redesign

## 1. Design Direction
- **Vibe:** Premium, trustworthy, futuristic, Apple-level polish. 
- **Goal:** Evolve the current site to look like a high-end SaaS / tech repair ecosystem without losing the original brand identity.
- **Key Elements:** Cinematic scroll storytelling, 3D/depth motion, glassmorphism, refined editorial typography, and strong whitespace.

## 2. Brand Interpretation
- **Core Message:** "We are the most prestigious, reliable, and premium Apple device repair service in Bangalore."
- **Tone:** Professional, high-end, clean, and reassuring.
- **Colors:** Deep blacks, clean whites, premium silvers, and subtle glowing accents. 

## 3. Homepage Structure Map
1. **Hero Section:** High-end motion reveal, premium typography, primary CTAs (Book Device, Call Us).
2. **Scroll-driven 3D Experience:** An animated sequence showing a device (using the provided 3D scroll frame sequence).
3. **Services Grid:** Interactive cards for iPhone, iPad, MacBook, iMac, iWatch.
4. **Why Choose Us / Trust Indicators:** Premium service points.
5. **Locations:** Indiranagar, Koramangala, Kammanahalli, Marathahalli, BEL Road.
6. **Footer:** Clean, comprehensive links.

## 4. Typography System
- **Headings:** Plus Jakarta Sans or Inter (bold, tight tracking).
- **Body:** Inter (readable, refined line height).
- **Hierarchy:** Dramatic scale differences between hero text and body.

## 5. Color System
- **Background:** #000000 (Deep rich black) to provide a premium canvas.
- **Text:** #F5F5F7 (Apple silver/white) and #86868B (Secondary text).
- **Accents:** Subtle glowing gradients.

## 6. Spacing Logic
- **Base Unit:** 8px.
- **Sections:** Massive breathing room (e.g., 120px to 160px padding between major sections).

## 7. Animation Architecture
- **Engine:** GSAP (Core, ScrollTrigger).
- **Style:** Smooth, inertial, staggered, physical.

## 8. GSAP Usage Structure
- **Hero:** Timeline sequence on load.
- **Scroll:** ScrollTrigger pinning and scrubbing for the image sequence in `3d scroll`.

## 9. 3D Implementation Notes
- Use the provided image sequence in the `3d scroll` folder.
- Implement a canvas-based image sequence scrubber driven by GSAP ScrollTrigger.

## 10. Responsive Strategy
- Mobile-first approach for layouts, progressively enhancing for desktop.
- Scroll sequence must scale and crop appropriately on mobile to avoid breaking layouts.

## 11. Component Map
- `Navbar`: Glassmorphic, sticky, smooth.
- `Hero`: Motion-heavy entrance.
- `SequenceScrubber`: Canvas scrubber.
- `ServiceGrid` & `ServiceCard`: Hover effects (glow, lift).
- `Footer`: Clean list grids.

## 12. Tech Stack
- React + Vite
- Tailwind CSS
- GSAP
