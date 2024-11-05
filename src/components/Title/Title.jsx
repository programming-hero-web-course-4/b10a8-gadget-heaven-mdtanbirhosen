
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Title = () => {
  const location = useLocation();

  useEffect(() => {
    
    const titles = {
      '/': 'Gadgets | Gadget Heaven',
      '/statistics': 'Statistics | Gadget Heaven',
      '/dashboard': 'Dashboard | Gadget Heaven',
      '/dashboard/wishlist':'Wishlist | Gadget Heaven',
      '/account':'Account | Gadget Heaven'
    };

    document.title = titles[location.pathname] || 'Gadget Heaven';
  }, [location]);

  return null; 
};
export default Title;
