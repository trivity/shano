# Shano's Skips - PRD

## Original Problem Statement
Build a multi-page website for Shano's Skips, a skip bin hire business in Port Augusta, SA, Australia. Pages: Home, Skip Bin Sizes, Waste Guide, Delivery Area, About Us, FAQ, Contact Us.

## User Personas
- **Homeowners (25-65+)**: Looking for easy skip bin hire for renovations, clean-ups
- **Tradies/Builders**: Need reliable waste management for construction projects
- **Commercial clients**: Businesses, councils, hospitals, events needing waste solutions
- **Deceased estate handlers**: Need compassionate, thorough clean-out service

## Core Requirements
- Informational website showcasing services and skip bin sizes
- Contact form (name, email, phone, message) stored in MongoDB
- SVG visual representations of Marrel skip bins (no product photos available)
- Google Maps embed for delivery area
- FAQ accordion section
- Waste guide with do's and don'ts
- Mobile-responsive design
- Brand colors: #bf0403 (primary red), #ff1420 (hover accent), white, black
- Fonts: Outfit (headings), Manrope (body)

## What's Been Implemented (April 2, 2026)
- All 7 pages: Home, Skip Bin Sizes, Waste Guide, Delivery Area, About Us, FAQ, Contact
- Sticky navigation with mobile hamburger menu
- Hero section with gradient background and CTAs
- 8 service cards with lucide-react icons
- Custom SVG Marrel skip bin visuals (2m³, 3m³, 4m³, 6m³)
- FAQ accordion using Shadcn UI
- Contact form with backend API + validation + Sonner toast notifications
- Google Maps iframe embed for Port Augusta
- Town pills for 10 delivery areas
- Footer with contact info, quick links, social links
- Scroll-to-top on route changes
- "Contact us for pricing" CTAs on all bin cards
- Heavy bin surcharge notice in Waste Guide
- Backend validation for contact form (min_length, required fields)

## Updates (Feb 26, 2026)
- HomePage Hero CTA: "Call Now" replaced with "Get a Quote" button (red, arrow icon) linking to `/contact`
- HomePage section reorder: "Choose your size" now appears above "Our services"

## P0 Features Remaining
None - all core pages and functionality complete

## P1 Features (Backlog)
- Go Highlevel form integration (when client provides embed code)
- Booking/enquiry system
- Admin dashboard for viewing contact submissions

## P2 Features (Backlog)
- Blog/news section
- Testimonials/reviews section
- Online payment integration
- Skip bin availability checker
- Refactor large pages (HomePage.js, WasteGuidePage.js) into smaller components

## Next Tasks
- Add Go Highlevel form when embed code is provided
- Run full testing_agent_v3 sweep across all pages for any layout regressions
- Consider adding a booking/enquiry system
