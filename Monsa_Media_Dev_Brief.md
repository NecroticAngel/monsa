# **Monsa Media: Web Design & Development Brief**

## **1\. Sitemap**

/                 Home  
/services         Services  
/case-studies     Case studies (stub for launch, build out post-launch)  
/about            About Monika Länge  
/contact          Book intro call

Optional later: /blog, /playbook.

---

## **2\. Visual Direction**

### **Core mood references**

* **Lovable.dev**: brand feel, soft gradients, logo style, typographic restraint. Core mood.

* **404media.at**: structure, section rhythm, generous whitespace. **But lighter**, we want off-white or cream backgrounds, not dark.

### **Palette (refine together)**

* Background: off-white or warm neutral (\#FAFAF7 or similar cream)

* Text: near-black (\#0F0F0F) for body, softer grey for muted copy

* Accent: one confident color. Consider a deep electric blue, warm coral, or soft violet gradient (test against logo once finalized).

* No more than 2 accent colors total.

### **Typography**

* Headings: a modern geometric sans (*Inter Display*, *General Sans*, *Geist*, or *Söhne*).

* Body: *Inter* or *Geist*.

* Tight letter-spacing on H1. Generous line-height on body (1.55 to 1.7).

### **Imagery**

* No stock photography of people.

* Subtle 3D renders, gradients, or abstract SVG shapes (Lovable / Linear style).

* Real screenshots of campaigns or sanitized performance charts for case studies (when built out).

### **Motion**

* Subtle. Fade-in on scroll, small hover states on CTAs and case study cards.

* No parallax, no heavy Lottie, no cursor effects.

### **Anti-references (do NOT do)**

* Cursor trails, magnetic buttons, custom cursors

* Stock photography of laptops, handshakes, or meeting scenes

* Dark backgrounds (we explicitly want light)

* Walls of award badges in the hero

* Heavy parallax or scroll-jacking

* Auto-playing video heroes

* Multi-step contact forms with more than 6 fields

---

## **3\. Stack Recommendation**

* **Framer** or **Webflow** preferred. Both support the Lovable / 404media aesthetic and let Monika Länge edit content without code. Framer for speed, Webflow for CMS flexibility.

* Alternative: Next.js \+ Tailwind \+ Sanity (overkill unless we want a blog or resource hub at launch).

* Forms: **Formspree** or native form posting to Slack and email.

* Booking: Calendly embed.

* Analytics: GA4 \+ Plausible (optional) \+ Meta Pixel.

---

## **4\. Must-Haves**

* Page speed ≥ 90 on Lighthouse mobile.

* Open Graph and Twitter card metadata for every page.

* GA4, GTM, and Meta Pixel installed with server-side option ready.

* Schema markup (Organization \+ Service \+ Article for case studies once built).

* EU cookie consent banner (GDPR compliant).

* All forms POST to Slack \+ email \+ a backup Google Sheet.

* Case study pages built on CMS so Monika Länge can add new ones without touching code.

---

## **5\. Website Copy (final)**

### **5.1 Home**

#### *Hero*

**H1:** Senior paid media, run by the people Google used to trust with its biggest accounts.

**Subhead:** Monsa Media is a boutique Google Ads and Meta Ads agency for B2B SaaS, DTC, and lead-gen brands that have outgrown freelancers and don’t want to be the smallest logo at a big agency. Trained inside Google. Proven on accounts we’ve built from the ground up.

**Primary CTA:** Book a 20-min intro call **Secondary CTA:** See results

*Visual: clean, light hero. Subtle gradient or soft 3D object (Lovable-style). Not dark. No stock photos.*

#### *Social proof strip*

Heading (small, muted): *Trusted by teams at* Logos: Cortavo · Fish4Me · Rapid Tee Golf · Rare Assembly · BS Sales Academy · Keikku · Drivebeem · Drive It Austin

#### *Section: Why teams hire us*

**H2:** You don’t need another agency. You need a senior operator.

Three-column layout with small icons:

**Founder-led strategy** Strategy on every account is owned by Monika Länge personally. Senior technical specialists with 5+ years of experience handle deeper execution tasks. No account execs learning on your spend.

**Google rigor, operator results** Founder Monika Länge spent 8 years at Google as a YouTube product lead, working across both large enterprise advertisers and SMB accounts in finance, retail, automotive, and travel. Since leaving, she’s built client accounts from zero, scaled them to seven figures in spend, and run rebuilds that have shifted CTRs by 50%+ and tripled conversion volume. The playbook is Google-trained. The proof is in the client work.

**Boutique by design** We cap our client roster. You get direct access to the person running your campaigns, not a ticket queue.

#### *Section: What we do*

**H2:** Three services. Done properly.

**Google Ads management** Search, Shopping, Performance Max, Demand Gen, YouTube. Built to scale spend without breaking ROAS or CPL targets.

**Meta Ads management** Full-funnel paid social across Facebook and Instagram. Creative testing systems, audience strategy, and proper attribution. Not “boosted posts.”

**Audits & consulting** One-off audits, tracking and GA4/GTM setup, and fractional paid media leadership for teams running their own accounts but wanting senior eyes on the strategy.

CTA: \[See full services →\]

#### *Section: Results*

**H2:** What this looks like in practice.

*3 case study cards with headline metric, client logo, and one-sentence summary:*

**Cortavo** · Generated 90 qualified leads with CTR up \+51.75% and conversion rate up \+118%. **Rapid Tee Golf** · Grew new trial conversions \+327.66% while holding CPA stable. CTR 8.14% (+18.85%). **Fish4Me** · Scaled sales \+448.70% while improving ROAS \+62%.

CTA: \[See more →\] *(links to /case-studies)*

#### *Section: How we work*

**H2:** How a Monsa engagement runs.

**1\. Discovery (week 0\)** 30-min call, followed by a free 48-hour account scan. You get a written opinion whether we can help, even if the answer is no.

**2\. Month-to-month engagement** Open-ended retainers, but no annual lock-in. We work month-to-month with a 30-day notice period. Every engagement starts with a written thesis and clear KPIs, and we earn the next month every month. If it isn’t working, you walk. No contracts designed to trap budget.

**3\. Weekly cadence** Async Loom updates, a shared Slack or WhatsApp channel, and one working session every two weeks. No 20-slide status decks.

#### *Section: About the founder (short)*

**H2:** Run by someone who actually ran the platforms.

*Photo of Monika Länge \+ bio:*

Monika Länge spent 8 years at Google, most recently as a YouTube product lead, working across the full advertiser spectrum from large enterprise accounts to SMB. Since leaving Google, she’s built and scaled paid media accounts from the ground up for clients in SaaS, DTC, and lead gen, with results that have tripled conversion volume and lifted ROAS by 60%+ on accounts that were already running. She founded Monsa Media to bring that combination of platform-level rigor and operator chops to a small number of clients she genuinely believes in.

CTA: \[More about Monika Länge →\]

#### *FAQ (accordion)*

* **Who do you work with?** B2B SaaS, DTC and eCommerce brands, and service or lead-gen businesses (academies, local service scale-ups). What matters more than spend size is whether the business has a real offer and we believe paid media can move the needle.

* **Who actually runs my account?** Strategy is owned by Monika Länge, the founder, on every engagement. Senior technical specialists with 5+ years of experience are pulled in for the more technical execution tasks. You will never be handed off to a junior account manager.

* **Do you have a minimum spend?** No hard minimum. We’ve built accounts from the ground up and we’re happy to take on smaller spend levels if the business is the right fit. The conversation is always about fit first, spend second.

* **Do you handle creative?** We direct creative strategy and brief it, and work with a short list of editors and designers we trust. We don’t sell creative as a line item.

* **Do you do SEO, influencer, TikTok, email?** No. We do Google and Meta, properly. We’ll refer out everything else.

* **What does it cost?** Every engagement is scoped individually based on objectives, account complexity, and spend. We don’t take a percentage of ad spend, because it rewards the wrong behavior. Book a call and we’ll send a scoped proposal within 48 hours.

#### *Final CTA block*

**H2:** Ready for senior eyes on your account?

Short line: Tell us a bit about your business. We’ll reply within one working day with an honest take on whether we’re the right fit. If we’re not, we’ll say so.

CTA button: \[Book a 20-min intro call\]

---

### **5.2 Services page**

**H1:** Services built around what actually moves numbers.

Intro: We don’t do 14-channel retainers. We do three things well: Google Ads, Meta Ads, and senior consulting. Engagements are month-to-month with no annual lock-in. Every one starts with a written thesis and clear KPIs.

**Service block 1: Google Ads** \- Search, Shopping, Performance Max, Demand Gen, YouTube \- Full account restructures and new builds (we’ve built accounts from scratch, not just optimized existing ones) \- Feed optimization for eCommerce (Merchant Center, supplemental feeds) \- Offline conversion imports and proper attribution for lead gen \- Scoped per engagement · month-to-month, no annual lock-in

**Service block 2: Meta Ads** \- Full-funnel strategy across Facebook and Instagram \- Creative testing systems (not one-off boosts) \- Advantage+ and manual campaign architecture \- CAPI and server-side tracking setup \- Scoped per engagement · month-to-month, no annual lock-in

**Service block 3: Audits & consulting** \- 2-week written audit of Google or Meta accounts with a prioritized fix list \- GA4, GTM, CAPI, offline conversion, and server-side tracking implementation \- Fractional paid media leadership for in-house teams \- Audits and consulting scoped per engagement

---

**Founder’s edge: YouTube and video, done by someone who built the product.**

*Visual treatment: full-width feature panel below the three service blocks. Different background tone (subtle accent gradient or off-cream tile) so it reads as a specialty, not a fourth equal service.*

Most agencies treat YouTube as a checkbox under “Google Ads.” Monika Länge spent 8 years at Google, most recently as a Regional YouTube product lead. That means video on Monsa accounts isn’t an afterthought, it’s run by someone who actually shaped how the platform works.

Where this matters most: \- YouTube performance campaigns built for direct response, not just brand awareness \- Demand Gen across YouTube, Discover, and Gmail with creative tested for the platform \- Video creative direction and briefing aligned to what actually performs \- Cross-channel measurement so YouTube spend ties back to downstream conversion

Available as a layer inside any Google Ads engagement, or as a standalone YouTube and video retainer.

CTA: \[Talk to Monika Länge about YouTube →\]

---

Closing CTA: \[Book a 20-min call →\]

---

### **5.3 Case studies page (stub for launch)**

**H1:** Real numbers from real accounts.

Intro: The detail behind every win lives in the work itself, not in a 20-page case study deck. Want the full breakdown on any of the accounts below? Book a call and we’ll walk you through it.

*Show the same three metric tiles from the home page (Cortavo, Rapid Tee Golf, Fish4Me) with logos.*

CTA: \[Book a 20-min call →\]

---

### **5.4 About page**

**H1:** Built by someone who ran these platforms from the inside.

**The short version** Monsa Media is run by Monika Länge, a former YouTube product lead with 8 years at Google, who has spent the years since proving that the playbook works outside the building too. She’s built client accounts from zero and scaled them to seven figures in spend, run rebuilds that lifted CTRs 50%+, and delivered ROAS gains of 60%+ on accounts that already had budget moving. She founded Monsa for the kind of clients who have been burned by agencies that overpromise and underdeliver, and who want someone who will be upfront about what will and won’t work before any contract is signed.

**The longer version** \- 8 years at Google. Product lead on YouTube. Portfolio work across finance, retail, automotive, and travel, spanning both large enterprise advertisers and SMB accounts. \- Saw from the inside how Google’s biggest accounts actually win, and what mid-market brands miss because nobody’s told them. \- Since leaving Google: built client accounts from scratch, scaled them to seven figures in spend, and run account rebuilds that have shifted CTRs by 50%+, lifted ROAS by 60%+, and tripled conversion volume on accounts that were already running. \- Founded Monsa Media to stay close to the work: small roster, founder-led strategy, senior specialists for execution, direct client contact. \- Works globally. Speaks English, German, and Portuguese.

**The philosophy** \- We only work with businesses we genuinely believe in. If we don’t think paid media can move the needle for you, we’ll tell you before we send a proposal. \- We’d rather say no to a bad-fit client than pad a roster. \- We don’t take a percentage of ad spend, because it rewards the wrong behavior. \- We write things down. Every engagement has a thesis. \- Month-to-month, no annual lock-in. We earn the next month every month. \- If we can’t beat what you’re doing today, we’ll tell you in week two, not month six.

CTA: \[Book a 20-min call →\]

---

### **5.5 Contact / Book a call**

**H1:** Tell us about your business.

Intro: The faster you tell us the business, the faster we can tell you honestly whether we’re the right team. Expect a reply within one working day.

**Form fields:** \- Name \- Work email \- Company \+ website \- Monthly ad spend (dropdown: \<€5K, €5–25K, €25–75K, €75–250K, €250K+) \- Primary channel interest (Google Ads, Meta Ads, Both, or Consulting) \- What are you trying to solve? (free text)

Calendly embed below the form.

---

## **6\. Case Study Page Templates (for post-launch buildout)**

Each individual case study page should follow this structure once built:

* **Client:** Name, one-line description

* **Channels:** Google Ads, Meta Ads, or Both

* **Engagement:** Ongoing or project-based

* **Headline result:** Primary metric

* **Situation:** 2 to 3 sentences

* **What we did:** 3 to 5 specific bullets

* **Outcome:** Numbers as metric tiles or chart

* **What the client said:** One short quote if available

**Starter list to build out post-launch:** Cortavo · Fish4Me · Rapid Tee Golf · Rare Assembly · BS Sales Academy · Keikku · Drivebeem · Drive It Austin

Three full drafts (Cortavo, Rapid Tee Golf, Fish4Me) are available on request when ready to build.

---

