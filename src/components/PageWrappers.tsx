import React, { Suspense } from 'react';

// Loading component for better UX
const PageLoader = () => (
  <div className="min-h-screen bg-luxury-cream flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-luxury-bronze font-light uppercase tracking-widest text-sm">Loading...</p>
    </div>
  </div>
);

// Lazy load pages for better performance
const Collections = React.lazy(() => import('../pages/Collections'));
const Women = React.lazy(() => import('../pages/Women'));
const Men = React.lazy(() => import('../pages/Men'));
const About = React.lazy(() => import('../pages/About'));

// Higher-order component for page transitions
const withPageTransition = (Component: React.ComponentType) => {
  return (props: any) => (
    <div className="animate-fade-in">
      <Component {...props} />
    </div>
  );
};

export const CollectionsPage = withPageTransition(() => (
  <Suspense fallback={<PageLoader />}>
    <Collections />
  </Suspense>
));

export const WomenPage = withPageTransition(() => (
  <Suspense fallback={<PageLoader />}>
    <Women />
  </Suspense>
));

export const MenPage = withPageTransition(() => (
  <Suspense fallback={<PageLoader />}>
    <Men />
  </Suspense>
));

export const AboutPage = withPageTransition(() => (
  <Suspense fallback={<PageLoader />}>
    <About />
  </Suspense>
));