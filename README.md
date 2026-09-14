# Pahadi Keeda Trails

Build a complete, modern and professional trekking website for an Instagram trekking community called **“Pahadi Keeda”**.

The website should be built using:

* React.js
* Vite
* JavaScript
* Tailwind CSS
* Lucide React icons

Do NOT use a backend, database, authentication, payment gateway or admin panel.

The website is only for showcasing treks and sending users to Google Forms for seat booking.

---

# BRAND

**Brand Name:** Pahadi Keeda

**Tagline:**

> Escape the Ordinary. Explore the Mountains.

Pahadi Keeda is a trekking community that organizes weekend treks and outdoor adventures across Maharashtra.

The website should feel:

* Professional
* Premium
* Minimal
* Adventurous
* Trustworthy
* Modern
* Nature-inspired

Avoid making it look like a generic AI-generated website.

---

# DESIGN DIRECTION

Create a **minimal premium outdoor/adventure design**.

Use:

* White / off-white background
* Dark charcoal text
* Subtle green nature accent
* Large high-quality mountain photography
* Rounded cards
* Soft shadows
* Clean typography
* Plenty of whitespace
* Subtle hover animations
* Smooth scrolling

Do NOT use:

* Excessive gradients
* Neon colors
* Heavy animations
* 3D effects
* Glassmorphism everywhere
* Excessive decorative elements

The design should look similar to a professional travel/adventure startup.

---

# RESPONSIVE DESIGN

The website must work perfectly on:

* Desktop
* Laptop
* Tablet
* Mobile

Use a mobile-first responsive layout.

---

# NAVBAR

Create a clean sticky navbar.

Left:

**PAHADI KEEDA**

Right:

* Home
* Treks
* About
* Contact

Add a highlighted button:

**Book a Trek**

On mobile, convert navigation into a hamburger menu.

Navbar should have a subtle background when scrolling.

---

# HERO SECTION

Create a beautiful full-screen hero section with an authentic Maharashtra mountain/trekking image.

Add a dark transparent overlay for readability.

Text:

### Adventure Starts Where The Road Ends.

Subtitle:

**Discover breathtaking trails, hidden landscapes and unforgettable weekend adventures with Pahadi Keeda.**

Buttons:

**Explore Treks**

and

**Book Your Adventure**

The Explore Treks button should smoothly scroll to the trek section.

The Book Your Adventure button should scroll to the trek section as well.

Add a small text:

**Weekend Treks • Maharashtra • Adventure Community**

Keep the hero clean and visually powerful.

---

# TREKS SECTION

Heading:

### Explore Our Treks

Subtitle:

**Choose your next adventure and join us on the trail.**

Create beautiful responsive trek cards.

The trek list is:

1. Rajgad
2. Ratangad
3. Kalsubai
4. Aadrai
5. Raigad
6. Harishchandragad
7. Blue Lagoon

Each card must contain:

* Trek image
* Trek name
* Location
* Date
* Duration
* Difficulty
* Price
* Available seats
* Short description
* Book Seat button

Example card:

```text
┌─────────────────────────────┐
│                             │
│        TREK IMAGE           │
│                             │
├─────────────────────────────┤
│ Rajgad                      │
│ 📍 Pune, Maharashtra        │
│                             │
│ 📅 Coming Soon              │
│ ⏱ 1 Day                     │
│ 🥾 Moderate                 │
│                             │
│ ₹999        Limited Seats   │
│                             │
│       [ BOOK SEAT ]         │
└─────────────────────────────┘
```

Do not invent actual trek dates, prices or seat availability.

Use placeholders such as:

```text
Date: Coming Soon
Price: Contact Us
Seats: Limited
```

Make these values easy to edit in one data file.

---

# TREK DATA

Create:

```text
src/data/treks.js
```

Store all trek information there.

Example:

```js
const treks = [
  {
    id: 1,
    name: "Rajgad",
    location: "Maharashtra",
    date: "Coming Soon",
    duration: "1 Day",
    difficulty: "Moderate",
    price: "Contact Us",
    seats: "Limited",
    description: "Experience the historic Rajgad fort surrounded by beautiful Sahyadri landscapes.",
    image: "/images/rajgad.jpg",
    googleFormUrl: "YOUR_GOOGLE_FORM_URL"
  }
];
```

Create the same structure for all 7 treks.

---

# GOOGLE FORM BOOKING

This is very important.

There should NOT be a custom booking form.

When a visitor clicks:

### BOOK SEAT

open the Google Form assigned to that particular trek.

Use:

```js
const handleBooking = (url) => {
  window.open(url, "_blank");
};
```

Every trek should have its own:

```js
googleFormUrl
```

Example:

```js
googleFormUrl: "YOUR_RAJGAD_GOOGLE_FORM_URL"
```

Use placeholders because the actual Google Form URLs will be added later.

The website owner should only need to edit:

```text
src/data/treks.js
```

to change:

* Trek date
* Price
* Seats
* Description
* Google Form URL
* Image

---

# FEATURE SECTION

Create a clean section:

### Why Trek With Pahadi Keeda?

Create 4 feature cards:

### Weekend Adventures

Every weekend brings a new opportunity to explore.

### Beautiful Trails

Discover the mountains, forts and hidden landscapes of Maharashtra.

### Adventure Community

Meet people who share your love for travel and the outdoors.

### Well Planned Treks

Enjoy organized trekking experiences with proper coordination.

Use Lucide React icons.

---

# ABOUT SECTION

Create an elegant split-layout section.

Left:

Large trekking image.

Right:

### We Are Pahadi Keeda

Text:

**Pahadi Keeda is a community for people who feel most alive when they are surrounded by mountains, trails and nature.**

**From sunrise hikes to challenging forts, we organize weekend adventures that bring people together and create unforgettable memories.**

Add button:

**Explore Our Treks**

Do not use fake statistics such as:

“10,000+ Trekkers”

unless actual numbers are provided.

---

# TREKKING EXPERIENCE SECTION

Create a visually beautiful image gallery.

Show images representing:

* Mountains
* Trekking trails
* Forts
* Sunrise
* Groups hiking
* Nature
* Adventure

Use a modern responsive masonry/grid layout.

Add heading:

### Moments From The Trail

Subtitle:

**Every trek has a story.**

Use lazy loading for images.

---

# INSTAGRAM CTA

Create a dark premium section.

Heading:

### Follow The Adventure

Text:

**See our latest treks, mountain moments and weekend adventures on Instagram.**

Button:

**Follow @pahadikeeda**

Make the Instagram URL configurable.

Use Instagram icon.

---

# CONTACT SECTION

Create a simple contact section.

Heading:

### Ready For Your Next Adventure?

Text:

**Have questions about an upcoming trek? Get in touch with the Pahadi Keeda team.**

Show:

Instagram
WhatsApp
Email

Use Lucide icons.

Buttons should be functional:

* Instagram → Instagram profile
* WhatsApp → WhatsApp chat
* Email → mailto link

Use placeholder links where actual links are not provided.

---

# FOOTER

Create a simple professional footer.

Logo:

**PAHADI KEEDA**

Tagline:

**Escape the Ordinary. Explore the Mountains.**

Links:

* Home
* Treks
* About
* Contact
* Instagram

Bottom:

**© 2026 Pahadi Keeda. All Rights Reserved.**

---

# COMPONENT STRUCTURE

Use reusable React components.

Project structure:

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TrekCard.jsx
│   ├── TrekSection.jsx
│   ├── WhyPahadiKeeda.jsx
│   ├── About.jsx
│   ├── TrekGallery.jsx
│   ├── InstagramCTA.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── data/
│   └── treks.js
│
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css
```

Keep components reusable and clean.

---

# ANIMATIONS

Use subtle animations only.

For example:

* Fade-in on sections
* Slight card hover
* Image zoom on hover
* Smooth scrolling
* Navbar transition

Animations should be fast and subtle.

Do not make the website slow.

---

# IMAGES

Use high-quality trekking and Maharashtra mountain images.

For development, use suitable remote image URLs or local `/assets` placeholders.

Make sure images have:

```html
loading="lazy"
```

except for the main hero image.

Use proper `alt` text for accessibility.

---

# UX REQUIREMENTS

The website should have a clear user journey:

```text
Visitor
   ↓
Hero
   ↓
Explore Treks
   ↓
Select Trek
   ↓
View Trek Details
   ↓
Book Seat
   ↓
Google Form Opens
   ↓
User Completes Booking
```

The **Book Seat** button should be the primary CTA throughout the website.

---

# IMPORTANT

Do NOT create:

* Login
* Signup
* Backend
* Database
* Admin dashboard
* Payment system
* Custom booking system
* Authentication
* User accounts

Google Forms will handle booking information.

The React website is only responsible for:

**Trek discovery + professional presentation + redirecting users to Google Forms.**

---

# FINAL QUALITY

Before finishing:

1. Make sure `npm install` works.
2. Make sure `npm run dev` works.
3. Make sure there are no console errors.
4. Make sure all buttons work.
5. Make sure navigation works.
6. Make sure Google Form buttons open in a new tab.
7. Make sure the website is fully responsive.
8. Make sure there are no horizontal scroll issues on mobile.
9. Make sure images do not break the layout.
10. Keep the code simple enough for a beginner React developer to understand.

The final website should look like a **real premium trekking community website for Pahadi Keeda**, not like a complex enterprise application.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/68883449-0190-442b-ac40-c1261561ed35).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
