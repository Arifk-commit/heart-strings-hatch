# PawConnect Delight

Build a modern, visually stunning, responsive pet adoption website called "PawConnect."

IMPORTANT:

This is a FRONTEND-ONLY project.

Do NOT use Supabase, Firebase, MongoDB, PostgreSQL, APIs, or any backend services.

Do NOT implement real authentication, real payments, or server-side functionality.

Use only:

- React

- TypeScript

- Tailwind CSS

- shadcn/ui

- Local mock data

- React state management

- LocalStorage where necessary to simulate persistence

The goal is to create a polished, production-quality frontend prototype for a pet adoption platform.

==================================================

1. DESIGN AND BRANDING

==================================================

Website name: PawConnect

Brand identity:

- Warm, friendly, trustworthy, and emotionally engaging.

- Focus on animal welfare and connecting pets with loving families.

Design style:

- Modern startup-quality UI.

- Clean layouts with generous spacing.

- Rounded cards and soft shadows.

- Beautiful micro-interactions and smooth animations.

- High-quality pet photography.

- Friendly and accessible typography.

- Fully responsive on mobile, tablet, and desktop.

Color palette:

- Primary: Warm orange (#F59E0B)

- Secondary: Soft cream (#FFF7ED)

- Accent: Teal (#0D9488)

- Background: White and light cream.

- Text: Dark charcoal.

Use Lucide icons wherever appropriate.

Add:

- Smooth page transitions.

- Hover effects.

- Button animations.

- Loading states where relevant.

- Empty states.

- Toast notifications.

- Light and dark mode.

==================================================

2. NAVIGATION

==================================================

Create a responsive navigation bar with:

- PawConnect logo with a paw icon.

- Home

- Find a Pet

- How It Works

- Success Stories

- Donate

- About Us

Right side:

- Favorites icon with a counter.

- "Adopt a Pet" CTA button.

- Mobile hamburger menu.

The navbar should remain visually consistent across all pages.

Use React Router for navigation.

==================================================

3. HOMEPAGE

==================================================

Create an engaging homepage.

HERO SECTION:

Heading:

"Every Pet Deserves a Loving Home."

Subheading:

"Find your perfect companion and give a rescue animal a second chance at happiness."

Buttons:

- "Find Your Companion"

- "How It Works"

Hero design:

- Large, beautiful image of a happy dog or cat.

- Use a modern split-screen or editorial layout.

- Add decorative organic shapes.

- Include a small floating card:

  "2,500+ pets waiting for a home"

Add subtle entrance animations.

--------------------------------------------------

PET SEARCH SECTION:

Create a search interface with:

- Search by pet name.

- Select pet type:

  - Dogs

  - Cats

  - Rabbits

  - Birds

  - Other

- Location input.

- Age filter.

- Search button.

The search should work with local mock data.

--------------------------------------------------

FEATURED PETS:

Display 6–8 beautiful pet cards.

Each card should include:

- Large pet image.

- Pet name.

- Species.

- Breed.

- Age.

- Gender.

- Location.

- Adoption status.

- Heart/favorite button.

- "Meet [Pet Name]" button.

Interactions:

- Favorite/unfavorite pets.

- Navigate to the pet details page.

- Show toast notifications.

--------------------------------------------------

PET CATEGORIES:

Create visually appealing category cards for:

- Dogs

- Cats

- Rabbits

- Birds

Each category should have:

- Image.

- Icon.

- Pet count.

- Clickable interaction to filter pets.

--------------------------------------------------

HOW IT WORKS:

Display three steps:

1. Discover Your Companion

   "Browse pets looking for a loving family."

2. Submit an Application

   "Tell us a little about yourself and your home."

3. Meet Your New Best Friend

   "Connect with the organization and start your adoption journey."

Use beautiful icons and illustrations.

--------------------------------------------------

STATISTICS SECTION:

Display attractive statistic cards:

- 2,500+ Pets Rescued

- 1,800+ Successful Adoptions

- 150+ Partner Organizations

- 95% Happy Families

These are DEMO statistics and should be clearly treated as sample content.

--------------------------------------------------

SUCCESS STORIES:

Display 3–4 adoption success stories.

Each story should include:

- Pet image.

- Pet name.

- Adopter name.

- Short story.

- Before-and-after style visuals where appropriate.

Add a "Read More Stories" button.

--------------------------------------------------

CALL TO ACTION:

Add a prominent section:

"Your New Best Friend Is Waiting."

"One small act of kindness can change a life forever."

Button:

"Start Your Adoption Journey"

--------------------------------------------------

FOOTER:

Include:

- PawConnect branding.

- Short description.

- Navigation links.

- Social media icons.

- Contact email as demo content.

- Privacy Policy.

- Terms of Use.

- Copyright information.

==================================================

4. FIND A PET PAGE

==================================================

Create a dedicated pet discovery page.

Layout:

- Page heading: "Find Your New Best Friend."

- Friendly introductory text.

- Search and filter panel.

- Responsive pet grid.

FILTERS:

- Search by name.

- Species.

- Breed.

- Age:

  - Baby

  - Young

  - Adult

  - Senior

- Gender.

- Size:

  - Small

  - Medium

  - Large

- Location.

- Good with children.

- Good with dogs.

- Good with cats.

SORTING:

- Newest arrivals.

- Name A–Z.

- Age.

- Recommended.

FUNCTIONALITY:

- Filters should work with local mock data.

- Search should update results dynamically.

- Add a grid/list view toggle.

- Add pagination or a "Load More" button.

- Show result count.

- Show a friendly empty state when no pets match.

- Add loading skeletons for visual polish.

==================================================

5. PET DETAILS PAGE

==================================================

Create a detailed pet profile page.

Layout:

- Large image gallery.

- Pet information panel.

- Adoption CTA.

Display:

- Pet name.

- Breed.

- Species.

- Age.

- Gender.

- Size.

- Location.

- Adoption status.

- Description.

- Personality traits.

- Medical information.

- Vaccination status.

- Sterilization status.

- Good with children.

- Good with dogs.

- Good with cats.

Additional sections:

- "About Me"

- "My Personality"

- "My Care Needs"

- "About My Rescue Organization"

Buttons:

- "Apply for Adoption"

- "Save to Favorites"

- "Contact Organization"

Since this is frontend-only:

- The adoption application should open a simulated application form.

- Contact Organization should display a demo contact modal.

- Show appropriate demo messages.

- Do not pretend that any real application has been submitted.

Add a "You May Also Like" section with similar pets.

==================================================

6. ADOPTION APPLICATION MODAL

==================================================

Create a beautiful multi-step frontend-only adoption form.

Step 1: About You

- Full name.

- Email.

- Phone number.

- City.

Step 2: About Your Home

- Housing type.

- Do you own or rent?

- Do you have other pets?

- Do you have children?

Step 3: Adoption Motivation

- Why do you want to adopt this pet?

- Previous pet ownership experience.

- Daily availability.

Step 4: Review and Submit.

Functionality:

- Form validation.

- Progress indicator.

- Back and Next buttons.

- Review submitted information.

- Simulate submission using React state.

- Show a success confirmation screen.

IMPORTANT:

Clearly label the entire process as a DEMO.

Do not send data to any server.

Do not claim that a real adoption application has been submitted.

==================================================

7. FAVORITES PAGE

==================================================

Create a Favorites page.

Features:

- Display saved pets.

- Allow users to remove favorites.

- Show an empty state when there are no favorites.

- Persist favorites using LocalStorage.

- Clicking a pet opens its details page.

Add a favorites counter in the navbar.

==================================================

8. HOW IT WORKS PAGE

==================================================

Create a visually engaging informational page.

Sections:

1. Browse Available Pets.

2. Learn About Their Needs.

3. Submit an Adoption Application.

4. Connect With the Rescue Organization.

5. Meet Your Potential New Companion.

6. Complete the Adoption Process.

Include:

- Illustrations.

- Icons.

- Timeline layout.

- Frequently asked questions.

- Adoption tips.

Clearly explain that actual adoption procedures vary by organization.

==================================================

9. SUCCESS STORIES PAGE

==================================================

Create a success stories page.

Features:

- Beautiful story cards.

- Pet images.

- Adopter testimonials.

- Adoption dates.

- Filter by pet type.

- Read More modal for each story.

Use realistic but fictional demo content.

==================================================

10. DONATION PAGE

==================================================

Create a frontend-only donation page.

Design:

- Emotional and engaging.

- Explain how donations can support animal welfare.

Include:

- Donation amount buttons:

  - ₹100

  - ₹500

  - ₹1,000

  - Custom amount

- One-time / Monthly toggle.

- Donation purpose:

  - Food

  - Medical Care

  - Shelter

  - Rescue Operations

IMPORTANT:

This is a DEMO donation interface only.

Do not integrate payment gateways.

Do not process real payments.

After clicking "Donate," display a message:

"This is a demo donation experience. No payment has been processed."

==================================================

11. ABOUT US PAGE

==================================================

Create an About Us page.

Include:

- PawConnect mission.

- Vision.

- Values.

- How the platform helps connect adopters and rescue organizations.

- Team member cards using fictional demo profiles.

- Impact statistics labeled as sample data.

Add an FAQ section.

==================================================

12. LOGIN / SIGNUP SIMULATION

==================================================

Create a frontend-only login and signup interface if needed.

IMPORTANT:

- No real authentication.

- No backend.

- No database.

- Use React state to simulate login.

- Store demo login state in LocalStorage.

- Clearly indicate that this is a demo.

Include:

- Login form.

- Signup form.

- Form validation.

- Logout button.

- Demo user profile page.

Do not collect or transmit real sensitive information.

==================================================

13. MOCK DATA

==================================================

Create a dedicated mock data file.

Example pet data:

[

  {

    "id": 1,

    "name": "Buddy",

    "species": "Dog",

    "breed": "Golden Retriever",

    "age": "2 years",

    "ageCategory": "Adult",

    "gender": "Male",

    "size": "Large",

    "location": "Mumbai, India",

    "image": "high-quality pet image",

    "description": "Buddy is a friendly and playful dog who loves outdoor adventures.",

    "traits": ["Friendly", "Playful", "Energetic"],

    "vaccinated": true,

    "sterilized": true,

    "goodWithChildren": true,

    "goodWithDogs": true,

    "goodWithCats": true,

    "status": "Available"

  },

  {

    "id": 2,

    "name": "Luna",

    "species": "Cat",

    "breed": "Domestic Shorthair",

    "age": "1 year",

    "ageCategory": "Young",

    "gender": "Female",

    "size": "Small",

    "location": "Pune, India",

    "image": "high-quality cat image",

    "description": "Luna is a calm and affectionate cat who enjoys cuddles.",

    "traits": ["Calm", "Affectionate", "Gentle"],

    "vaccinated": true,

    "sterilized": false,

    "goodWithChildren": true,

    "goodWithDogs": false,

    "goodWithCats": true,

    "status": "Available"

  }

]

Create at least 12–16 fictional demo pets with varied breeds, ages, locations, and personalities.

Use reliable image URLs or suitable local placeholder images.

==================================================

14. COMPONENT ARCHITECTURE

==================================================

Organize the frontend into reusable components:

- Navbar

- Footer

- HeroSection

- PetCard

- PetGrid

- SearchBar

- FilterSidebar

- CategoryCard

- AdoptionForm

- PetImageGallery

- SuccessStoryCard

- TestimonialCard

- StatsCard

- Modal

- ToastNotification

- EmptyState

- LoadingSkeleton

Use React hooks and reusable utility functions.

==================================================

15. TECHNICAL REQUIREMENTS

==================================================

- React + TypeScript.

- Tailwind CSS.

- shadcn/ui.

- React Router.

- Lucide React icons.

- Local mock data only.

- LocalStorage for favorites and demo preferences.

- No backend services.

- No API calls.

- No database.

- No Supabase.

- No Firebase.

- No authentication providers.

- No payment gateways.

Ensure:

- Clean folder structure.

- Responsive layouts.

- Accessible components.

- Form validation.

- Proper TypeScript types.

- Error handling.

- Good performance.

- SEO-friendly page structure.

- Reusable components.

- No unnecessary dependencies.

==================================================

16. FINAL DESIGN GOAL

==================================================

The final website should look like a premium pet adoption startup.

It should be:

- Beautiful.

- Emotional.

- Trustworthy.

- Interactive.

- Responsive.

- Easy to navigate.

- Suitable for a college project demonstration.

IMPORTANT:

Every interactive feature must work locally in the browser using mock data and React state.

Clearly label all simulated features, demo statistics, fictional organizations, and sample content.

Start by implementing the homepage, pet discovery page, pet details page, and favorites functionality with a polished UI.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/89d91101-ecfb-4e9f-b5ef-debf50031bbf).

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
