import React, { useState, useEffect } from 'react';
import { PersonalDataForm, LinksDataForm } from '../components/Components';
import { FormSelection } from '../styled.components/Styled';

const HomePage = () => {
  const [showLinks, setLinks] = useState(true);

  return (
    <>
      <FormSelection>
        <button className={showLinks ? 'active' : ''} onClick={() => setLinks(true)}>Personal Data</button>
        <button className={showLinks ? '' : 'active'} onClick={() => setLinks(false)}>Company Data</button>
      </FormSelection>
      <PersonalDataForm showLinks={showLinks} />
      <LinksDataForm showLinks={showLinks} />
    </>
  );
};

export default HomePage;
