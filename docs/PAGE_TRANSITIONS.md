# Page Transition Animations

## Overview

Smooth page transition animations have been implemented to mimic the routing animations seen on modern Next.js applications, similar to the reference site at https://nesti-realestate.onrender.com/.

## Implementation Details

### 1. Route Transition Overlay (`components/RouteTransition.tsx`)
- Shows a subtle loading indicator during route changes
- Appears briefly (200ms) when navigating between pages
- Uses a blurred white overlay with a spinner
- Automatically detects route changes using `usePathname()` hook

### 2. Page Template (`app/template.tsx`)
- Wraps all pages with smooth fade and slide animations
- Automatically applies to all routes in Next.js App Router
- Uses opacity and translateY transforms for smooth transitions
- Duration: 300ms with ease-in-out timing

### 3. CSS Animations (`app/globals.css`)
- **pageFadeIn**: Smooth fade-in with slight upward movement and scale
- **pageFadeOut**: Smooth fade-out with slight downward movement
- **page-container**: Applied to all page containers for initial load animation
- Respects `prefers-reduced-motion` for accessibility

### 4. Page-Level Animations
- All pages have the `page-container` class for consistent animations
- Initial page load uses fade-in animation
- Route changes trigger template animations

## Features

✅ **Smooth Fade Transitions**: Pages fade in/out smoothly
✅ **Slide Animation**: Subtle vertical movement during transitions
✅ **Loading Indicator**: Brief overlay during route changes
✅ **Accessibility**: Respects reduced motion preferences
✅ **Performance**: Uses CSS transforms for GPU acceleration
✅ **Consistent**: All pages use the same transition pattern

## How It Works

1. **User clicks a link** → RouteTransition shows loading overlay
2. **Next.js navigates** → Template component detects route change
3. **Old page fades out** → Opacity and transform animations
4. **New page fades in** → Smooth entrance animation
5. **Overlay disappears** → After 200ms

## Customization

### Adjust Transition Speed
Edit `app/template.tsx`:
```tsx
const timer = setTimeout(() => {
  setDisplayChildren(children);
  setIsAnimating(false);
}, 200); // Change this value (in milliseconds)
```

### Change Animation Style
Edit `app/globals.css`:
```css
@keyframes pageFadeIn {
  from {
    opacity: 0;
    transform: translateY(15px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### Disable Transitions
Remove or comment out:
- `app/template.tsx`
- `components/RouteTransition.tsx` from `app/layout.tsx`
- Remove `page-container` class from pages

## Testing

1. Navigate between pages using the navigation links
2. Observe the smooth fade and slide animations
3. Notice the brief loading overlay during transitions
4. Check that animations work on initial page load

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

All animations use CSS transforms and opacity, which are well-supported across modern browsers.

