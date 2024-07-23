import React from 'react';
import LogoInput from './GeneratorComponents/LogoInput';
import ContactDetails from './GeneratorComponents/ContactDetails';
import SocialMediaInput from './GeneratorComponents/SocialMediaInput';
import SignaturePreview from './GeneratorComponents/SignaturePreview';
import { Layout, H1 } from '../styled/Layout.styled';

const SignGenerator = () => (
  <>
    <H1>Sign Generator</H1>
    <div className="container">
      <Layout>
        <div>
          <LogoInput />
          <ContactDetails />
          <SocialMediaInput />
        </div>
        <div>
          <SignaturePreview />
        </div>
      </Layout>
    </div>
  </>
);

export default SignGenerator;
