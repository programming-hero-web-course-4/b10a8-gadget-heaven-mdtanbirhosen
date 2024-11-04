import React, { useEffect, useState } from 'react';

function Title({setTitle}) {
  const [title, setTitle] = useState("GadgetHaven");

  useEffect(() => {
    document.title = title;
  }, [title]);

  
}

export default Title;
