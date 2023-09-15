import React, { useState } from 'react';
import { PersonalDataForm } from '../components/Components';

const HomePage = () => {
  const [showLinks, setLinks] = useState(true);

  return (
    <>
      <PersonalDataForm showLinks={showLinks} />
    </>
  );
};

export default HomePage;
