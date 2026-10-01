// ─── Everything editable lives here: copy, prices, photos, links. ───────────
import {
  Sparkles, Dumbbell, Flame, Briefcase, Sunrise, Target, Trophy, Repeat,
  ClipboardList, Video, Calendar, MessageCircle, TrendingUp, MapPin,
  GraduationCap, Apple, Award, Heart, ShieldCheck, Utensils, ShoppingBasket, Scale,
} from 'lucide-react'

export const brand = {
  name: 'Pretty N Fit',
  sub: 'coaching',
  coach: 'Jaycelyn Zimmer',
  firstName: 'Jaycelyn',
  email: 'prettynfitcoaching@hotmail.com',
  gym: {
    name: 'Anytime Fitness Lacombe',
    address: 'Unit 301, 4457 50 Ave, Lacombe, AB T4L 1A5',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Anytime+Fitness+Lacombe+AB',
  },
  // Empty url = link hidden.
  socials: [
    { name: 'Instagram', url: '' },
    { name: 'TikTok', url: '' },
    { name: 'Facebook', url: 'https://www.facebook.com/AFLacombe/' },
  ],
}

// Drop photos into /public/images with these names. Missing files show a placeholder.
export const photos = {
  hero: { src: '/images/jaycelyn-hero.jpg', alt: 'Jaycelyn Zimmer, personal trainer and nutrition coach' },
  heroSmall: { src: '/images/jaycelyn-back.jpg', alt: 'Jaycelyn flexing her back' },
  about: { src: '/images/jaycelyn-about.jpg', alt: 'Jaycelyn at Anytime Fitness Lacombe' },
}

// Nutrition photos (Unsplash License, free for commercial use). Credits in README.
export const foodImages = {
  flatlay: { src: '/images/food-flatlay.jpg', alt: 'Avocado, eggs, tomatoes and greens on a cutting board' },
  prep: { src: '/images/food-prep.jpg', alt: 'Glass meal-prep containers filled with rice, vegetables and salad' },
  basket: { src: '/images/food-basket.jpg', alt: 'A basket of fresh vegetables' },
  herbs: { src: '/images/nutrition.jpg', alt: 'Hands chopping fresh herbs on a cutting board' },
}

// Nutrition coaching, the way it actually runs: intake, targets, real food, weekly adjustment.
export const nutritionSteps = [
  { image: 'flatlay', title: 'Start where you are', text: 'Three normal days of eating. No cleanse, no judgment.' },
  { image: 'prep', title: 'Get your numbers', text: 'Calories and protein set for your goal, your body, your week.' },
  { image: 'basket', title: 'Eat food you like', text: 'Simple meal frameworks, a grocery list, a playbook for eating out.' },
  { image: 'herbs', title: 'Adjust weekly', text: 'Photos, measurements, energy and hunger tell us what to change.' },
]

export const nutritionIncluded = [
  { icon: Scale, text: 'Personal macro + calorie targets' },
  { icon: Utensils, text: 'Meal frameworks + recipes' },
  { icon: ShoppingBasket, text: 'Grocery list + eating-out playbook' },
  { icon: Calendar, text: 'Weekly check-ins' },
  { icon: Heart, text: 'Habit coaching' },
  { icon: MessageCircle, text: 'Message support' },
]

export const credentials = [
  { icon: GraduationCap, text: 'ISSA Certified Personal Trainer' },
  { icon: Apple, text: 'Certified Nutrition Coach' },
  { icon: Award, text: 'Strength & Conditioning Specialist' },
  { icon: MapPin, text: 'Manager, Anytime Fitness Lacombe' },
]

export const audiences = [
  { icon: Sparkles, title: 'New to the gym', text: 'Learn the basics properly. Zero judgment.' },
  { icon: Dumbbell, title: 'Women who lift', text: 'Build strength and shape with confidence.' },
  { icon: Flame, title: 'Men building muscle', text: 'Progressive programming that adds size.' },
  { icon: Briefcase, title: 'Busy parents & pros', text: 'Efficient sessions that fit real life.' },
  { icon: Sunrise, title: '40+ and active', text: 'Strength and mobility for the long run.' },
  { icon: Target, title: 'Fat loss', text: 'Sustainable nutrition. Keep the muscle.' },
  { icon: Trophy, title: 'Athletes', text: 'Conditioning for your sport or first show.' },
  { icon: Repeat, title: 'Coming back', text: 'After a break or injury, at your pace.' },
]

// checkoutUrl: paste a Stripe Payment Link to send people straight to checkout.
// Empty = button opens the inquiry form with the plan pre-selected.
export const plans = [
  {
    id: 'training',
    name: 'Personal Training',
    price: 199,
    tagline: 'Custom program + coaching, online.',
    features: ['Custom training plan', 'Form checks via video', 'Weekly check-ins', 'Message support'],
    note: 'In person from $60 / session',
    cta: 'Start training',
    checkoutUrl: '',
  },
  {
    id: 'complete',
    name: 'Complete Coaching',
    price: 299,
    badge: 'Best value',
    featured: true,
    tagline: 'Training + nutrition. Fastest results.',
    features: ['Everything in Personal Training', 'Personalized macros + calories', 'Nutrition check-ins', 'Priority support'],
    note: 'Save $49 / month vs. buying both',
    cta: 'Start Complete Coaching',
    checkoutUrl: '',
  },
  {
    id: 'nutrition',
    name: 'Nutrition Coaching',
    price: 149,
    tagline: 'Eat for your goals. No diet drama.',
    features: ['Personalized macro + calorie targets', 'Weekly accountability', 'Habit coaching', 'Message support'],
    note: 'Pairs with any training you already do',
    cta: 'Start nutrition',
    checkoutUrl: '',
  },
]

// Commitment options. `save` is the discount off the monthly rate (0.1 = 10% off).
// Set each to the real number once Jaycelyn confirms; 0 hides the savings badge.
export const terms = [
  { id: 'monthly', label: 'Month to month', months: 1, save: 0 },
  { id: '3mo', label: '3 months', months: 3, save: 0 },
  { id: '6mo', label: '6 months', months: 6, save: 0 },
  { id: '12mo', label: '12 months', months: 12, save: 0 },
]

export const included = [
  { icon: ClipboardList, text: 'Custom plan' },
  { icon: Video, text: 'Form feedback' },
  { icon: Calendar, text: 'Weekly check-ins' },
  { icon: MessageCircle, text: 'Message support' },
  { icon: TrendingUp, text: 'Progress tracking' },
  { icon: Heart, text: 'Habit coaching' },
  { icon: MapPin, text: 'Train anywhere' },
  { icon: Sparkles, text: 'Free Strategy Session' },
]

export const benefits = [
  { icon: ClipboardList, title: 'A plan built for you', text: 'Your goals, schedule and equipment. Not a template.' },
  { icon: ShieldCheck, title: 'Technique that protects you', text: 'Form checks on every lift so you train safely and keep progressing.' },
  { icon: Apple, title: 'Nutrition without the diet', text: 'Macro targets that fit real meals. No cutting out food you love.' },
  { icon: Calendar, title: 'Weekly accountability', text: 'Check-ins that keep you on track when motivation dips.' },
  { icon: MessageCircle, title: 'A coach in your pocket', text: 'Questions answered between sessions, not next month.' },
  { icon: TrendingUp, title: 'Progress you can measure', text: 'Track strength, habits and measurements. Watch them climb.' },
  { icon: Dumbbell, title: 'Confidence in the gym', text: 'Know exactly what to do, how to do it, and why.' },
  { icon: Repeat, title: 'Habits that last', text: 'Finish with a routine you can keep for life, not a rebound.' },
]

export const inquiryOptions = [
  { id: 'strategy', name: 'Free Strategy Session' },
  ...plans.map((p) => ({ id: p.id, name: p.name })),
  { id: 'inperson', name: 'In-person sessions' },
  { id: 'unsure', name: 'Not sure yet' },
]

export const steps = [
  { title: 'Book your free session', text: 'We map your goal, your schedule and your starting point. In person or online.' },
  { title: 'Get your plan', text: 'Training, nutrition or both. Built for you, not copied from a template.' },
  { title: 'Check in weekly', text: 'Adjust, progress, repeat. Consistency does the rest.' },
]

// Add real client words here. Section stays hidden while this is empty.
// Example: { quote: 'I finally feel strong.', name: 'Sarah M.', detail: 'Complete Coaching, 6 months' }
export const testimonials = []

export const faqs = [
  { q: 'I have never trained before. Is this for me?', a: 'Yes. Most clients start at zero. You will learn the basics properly, at your pace, with no judgment.' },
  { q: "What happens at the free Strategy Session?", a: 'A relaxed conversation about your goals, your schedule and your history, in person or online. You leave with a clear next step whether or not you sign up.' },
  { q: "I'm out of shape. Is it too late to start?", a: 'No. Starting where you are is the whole point. Your plan begins at your level and builds from there.' },
  { q: 'How many days a week do I need to train?', a: 'Most clients start with two or three sessions a week. Your plan is built around the time you actually have.' },
  { q: 'How does online coaching work?', a: 'Custom plan and macro targets, weekly check-ins, form videos reviewed by Jaycelyn, and messaging in between.' },
  { q: 'Do I have to track macros?', a: 'No. If tracking is not for you, nutrition coaching runs habit by habit instead: one or two changes at a time that stick.' },
  { q: 'Do I need equipment for online coaching?', a: 'No. Plans work with a full gym, a few dumbbells, or just your bodyweight. Tell Jaycelyn what you have.' },
  { q: 'What should I bring to my first in-person session?', a: 'Comfortable clothes, runners and water. That is it.' },
  { q: 'How fast will I see results?', a: 'Strength and energy usually come first, within the first few weeks. Visible change builds over months of consistency, which is exactly what the weekly check-ins are for.' },
  { q: 'I have an injury or a health condition. Can I still train?', a: 'Often, yes. Tell Jaycelyn about it at your Strategy Session so your plan works around it. Check with your doctor before starting a new training or nutrition program.' },
  { q: 'Do I need an Anytime Fitness membership?', a: 'Only for in-person sessions at Anytime Fitness Lacombe. Online coaching works with any gym or home setup.' },
  { q: 'How does billing work?', a: 'Choose month to month, or commit to 3, 6 or 12 months. In-person sessions are billed per session. Nothing is charged until you have had your free session.' },
  { q: 'Do you coach men?', a: 'Yes. Every body, every level.' },
]
