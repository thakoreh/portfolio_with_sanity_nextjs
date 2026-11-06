# Portfolio direction

Reference: [Lakshmi Narayana’s portfolio](https://laksh05.vercel.app/).

The redesign follows the reference’s centered editorial hero, violet horizon, compact floating navigation, wide globe card, portrait at the right, smaller technology and contact cards, project previews, and prominent contact footer. Hiren’s identity, résumé, professional experience, and projects supply the content.

## Scope

- Home, About, and Work share typography, navigation, contact, search, and dark/light themes.
- Sanity supplies the public profile, email, and social links. A cached loader and public fallback keep navigation usable if the CMS is unavailable. Résumé links use the supplied local PDF at `/hiren-thakore-resume.pdf`.
- Selected work links to public destinations: ARA Calls, LLM Speedtest MCP, and agent-tally. Private repositories are not presented as public source links.
- Existing project-detail, studio, and app privacy routes are retained.
- No fabricated statistics, testimonials, client logos, blog posts, guestbook entries, or booking calendar.

## Responsive behavior

Desktop follows the reference’s three-column bento composition. On phones, the globe, portrait, technology, and contact cards each receive a full-width row. A floating circular menu replaces the desktop navigation; the header retains search and theme controls.

The globe uses COBE’s real map data and an approximate Ontario marker. The visible location is Paris, Ontario, matching the supplied résumé. Rotation stops for reduced-motion preferences; the renderer is torn down outside the viewport, and the decorative canvas does not intercept scrolling. CSS motion also respects reduced motion.

Contact and search use native modal dialogs with keyboard focus management, Escape dismissal, and backdrop-only click dismissal. Email copying has a visible confirmation and a mailto fallback. Theme preference is stored locally.

## Assets

- Hiren’s portrait: existing public Sanity profile image, downloaded for a stable local fallback.
- ARA Calls previews: actual public homepage captured at desktop 1440×900 and phone 390×844. The responsive showcase switches between both captures.
- LLM Speedtest artwork: an original ChatGPT image-generated conceptual instrument, presented as artwork rather than a product screenshot or measured results.
- agent-tally preview: the original terminal-style illustration restored at the user’s preference. It uses real installation/help commands and does not display fabricated usage results.
- Globe fallback: [Earth photograph from Unsplash](https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4).

## Verification

Run the production build and a separate `tsc --noEmit` check (the repository’s existing Next configuration skips its internal type check). Review desktop and phone layouts in the browser, including Home/About/Work navigation, image loading, contact, copy feedback, search filtering, theme switching, and reduced motion. Independent subagent review compares saved reference and implementation screenshots; resolved findings include desktop bento spans, mobile portrait width, hero rhythm, dialog dismissal, and small-screen type.

The latest reference pass adds the framed About portrait, branded skill tiles, real responsive preview, detailed project rows, creative cards, and the reference’s editorial/monospace/handwritten typography. Hiren’s three real projects, public GitHub activity, and contact links replace reference-only content. The footer does not contain a View source link.

Final phone checks cover 390×844 and 320×844, with no horizontal overflow, functional mobile navigation, search filtering, device-preview switching, theme controls, and contact-dialog focus return. Independent review approved desktop and both phone widths after the mobile portrait crop was recentered on Hiren’s face. No material visual gaps remain in the reviewed Home, About, Work, menu, contact, and showcase layouts.

## Release

The user authorized pushing, merging, and deploying the reviewed changes on November 6, 2026, lifting the earlier deployment hold. The supplied newer résumé has been copied byte-for-byte into the public asset location and is included in verification.
