# TEDxCMICH Website

Official website for TEDx Central Michigan University — Year III (2026).

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Vercel** (deployment)

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Updating Content

**Everything lives in one file: `content.config.js`**

You never need to touch any component files. Just edit `content.config.js` and the site updates automatically.

### Add/update a speaker photo

1. Drop the photo into `/public/images/` (e.g. `lauren.jpg`)
2. Open `content.config.js`, find the speaker
3. Change `image: null` → `image: "/images/lauren.jpg"`

```js
{
  name: "Lauren Lasceski",
  image: "/images/lauren.jpg", // ← add photo here
  role: "Speaker",
  bio: "Her talk description here.",
}
```

### Update the event theme

```js
export const siteConfig = {
  theme: "Beyond Borders", // ← was null, now shows in hero
  date: "April 18, 2026",  // ← update when confirmed
  ...
}
```

### Add a committee member

Find the right department in the `committee` array and add to `members`:

```js
{
  department: "Marketing",
  members: [
    { name: "New Person", initials: "NP", role: "Designer", image: null, bio: "Their bio here." },
    // existing members...
  ]
}
```

### Add a past event to the archive

```js
export const archive = [
  {
    year: 2026,
    theme: "Beyond Borders",
    description: "...",
    soldOut: true,
    image: "/images/2026-event.jpg",
  },
  // existing events...
];
```

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → select repo
3. Vercel auto-detects Next.js — just click **Deploy**
4. Every `git push` auto-redeploys

---

## Folder Structure

```
tedxcmich/
├── content.config.js       ← EDIT THIS for all content
├── app/
│   ├── layout.jsx          ← fonts, metadata
│   ├── page.jsx            ← assembles all sections
│   └── globals.css         ← base styles
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Countdown.jsx       ← live countdown from eventDate
│   ├── Speakers.jsx
│   ├── SpeakerCard.jsx
│   ├── Leads.jsx
│   ├── LeadCard.jsx
│   ├── Archive.jsx
│   ├── Committee.jsx
│   └── Footer.jsx
└── public/
    └── images/             ← drop speaker/team photos here
```
