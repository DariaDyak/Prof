# Design Guidelines: IT Company Corporate Website

## Design Approach
**Selected Approach:** Design System (Material Design)
- **Justification:** IT company website requires professional credibility, clear information hierarchy, and consistent user experience across multiple content sections
- **Key Principles:** Clean, modern aesthetic with strong visual hierarchy, professional color palette, and efficient content organization

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Light Mode: 220 85% 25% (deep blue)
- Dark Mode: 220 70% 85% (light blue)

**Neutral Colors:**
- Background Light: 0 0% 98%
- Background Dark: 220 15% 8%
- Text Light: 220 20% 15%
- Text Dark: 220 15% 85%

**Accent Colors:**
- Success/CTA: 142 76% 36% (emerald green)
- Secondary: 220 25% 65% (muted blue-gray)

### B. Typography
- **Primary Font:** Inter (Google Fonts)
- **Headings:** Bold weights (600-700), larger sizes for hierarchy
- **Body Text:** Regular weight (400), medium weight (500) for emphasis
- **Technical Content:** Use monospace for code snippets if needed

### C. Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 24
- Consistent spacing creates visual rhythm
- Larger spacing (16, 24) for section separation
- Medium spacing (6, 8, 12) for component internal spacing

### D. Component Library

**Navigation Header:**
- Clean horizontal navigation with subtle hover states
- Company logo on left, navigation links centered/right
- Sticky header with backdrop blur on scroll

**Content Sections:**
- Generous padding and margins for readability
- Alternating layouts (text-left/image-right, then reverse)
- Card-based design for services and activity directions
- Grid layouts for multiple items (3-column for services, 2-column for directions)

**Interactive Elements:**
- Primary buttons with solid background and white text
- Secondary buttons with outline style
- Subtle shadows and rounded corners (8px radius)
- Smooth transitions for hover states

**Contact Section:**
- Split layout: contact form/info on left, map on right
- Clean form design with proper validation states

**Footer:**
- Multi-column layout with company info, links, and social media
- Subtle background differentiation from main content

### E. Visual Hierarchy
- Large, bold headings for each section
- Consistent spacing between elements
- Strategic use of white space
- Clear content grouping with subtle borders or background variations

## Images
**Hero Section:** Large background image or subtle gradient - tech/office environment
**Company Info:** Professional team photos, office spaces, or abstract tech imagery
**Services:** Icon-based illustrations or stock photos representing each service
**Directions:** Industry-specific imagery or abstract representations
**Contact:** Office exterior/interior or map integration

**Image Treatment:** Subtle overlays for text readability, consistent aspect ratios, professional photography style

## Content Organization
- Maximum 7 main sections to maintain focus
- Each section serves specific purpose in user journey
- Progressive disclosure of information from general to specific
- Clear calls-to-action throughout the experience