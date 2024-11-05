
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
    };

    document.title = titles[location.pathname] || 'Gadget Heaven';
  }, [location]);

  return null; // This component does not render anything
};
export default Title;
