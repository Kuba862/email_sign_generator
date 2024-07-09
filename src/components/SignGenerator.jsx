import React from 'react';
import LogoInput from './GeneratorComponents/LogoInput';
import ContactDetails from './GeneratorComponents/ContactDetails';
import SocialMediaInput from './GeneratorComponents/SocialMediaInput';
import TextStyleOptions from './GeneratorComponents/TextStyleOptions';
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
          <TextStyleOptions />
        </div>
        <div>
          <SignaturePreview />
        </div>
      </Layout>
    </div>
  </>
);

export default SignGenerator;
