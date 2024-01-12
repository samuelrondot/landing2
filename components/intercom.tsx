"use client"
import { useEffect } from 'react';

export default function Intercom() {
  // Example useEffect
  useEffect(() => {
    const loadIntercom = () => {
      (window as any).intercomSettings = {
        api_base: "https://api-iam.intercom.io",
        app_id: "hav4rqtk",
        custom_launcher_selector:'#my_custom_link'
      };
  
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://widget.intercom.io/widget/hav4rqtk';
      script.onload = () => {
        (window as any).Intercom('reattach_activator');
        (window as any).Intercom('update',  (window as any).intercomSettings);
      };
      document.body.appendChild(script);
    };
  
    const handleScroll = () => {
      if (window.scrollY > 1000) { // Adjust as needed
        loadIntercom();
        window.removeEventListener('scroll', handleScroll);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
   null
  )
}