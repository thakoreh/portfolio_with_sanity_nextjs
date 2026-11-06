# Portfolio direction

Reference: [Lakshmi Narayana’s portfolio](https://laksh05.vercel.app/).

The redesign follows the reference’s centered editorial hero, violet horizon, compact floating navigation, wide globe card, portrait at the right, smaller technology and contact cards, project previews, and prominent contact footer. Hiren’s identity, résumé, professional experience, and projects supply the content.

## Scope

- Home, About, and Work share typography, navigation, contact, search, and dark/light themes.
- Sanity supplies the public profile, email, social links, and résumé. A cached loader and public fallback keep navigation usable if the CMS is unavailable.
- Selected work links to public destinations: ARA Calls, LLM Speedtest MCP, and agent-tally. Private repositories are not presented as public source links.
- Existing project-detail, studio, and app privacy routes are retained.
- No fabricated statistics, testimonials, client logos, blog posts, guestbook entries, or booking calendar.

## Responsive behavior

Desktop follows the reference’s three-column bento composition. On phones, the globe and portrait receive full-width rows, followed by smaller technology and contact cards. This keeps the portrait text legible and separate from the face.

The globe uses COBE’s real map data and a city-level Hamilton marker. Rotation stops for reduced-motion preferences; the renderer is torn down outside the viewport, and the decorative canvas does not intercept scrolling. CSS motion also respects reduced motion.

Contact and search use native modal dialogs with keyboard focus management, Escape dismissal, and backdrop-only click dismissal. Email copying has a visible confirmation and a mailto fallback. Theme preference is stored locally.

## Assets

- Hiren’s portrait: existing public Sanity profile image, downloaded for a stable local fallback.
- ARA Calls preview: actual public homepage captured during implementation.
- LLM Speedtest artwork: existing repository asset, presented as concept artwork rather than a product screenshot.
- Globe fallback: [Earth photograph from Unsplash](https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4).

## Verification

Run the production build and a separate `tsc --noEmit` check (the repository’s existing Next configuration skips its internal type check). Review desktop and phone layouts in the browser, including Home/About/Work navigation, image loading, contact, copy feedback, search filtering, theme switching, and reduced motion. Independent subagent review compares saved reference and implementation screenshots; resolved findings include desktop bento spans, mobile portrait width, hero rhythm, dialog dismissal, and small-screen type.
