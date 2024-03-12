'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Custom hook to get the previous route
function usePreviousRoute() {
  const [currentRoute, setCurrentRoute] = useState('');
  const [previousRoute, setPreviousRoute] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Update the previous route based on the current route
      setPreviousRoute(currentRoute);
      // Update the current route
      setCurrentRoute(url);
    };

    // Initialize the current route
    setCurrentRoute(window.location.pathname);

    // Listen to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, currentRoute]);

  return previousRoute;
}

export default usePreviousRoute;
