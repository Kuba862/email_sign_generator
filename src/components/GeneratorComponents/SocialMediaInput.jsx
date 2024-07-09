import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Global';
import { Input, InputDiv, InputLabel } from '../../styled/Input.styled';
import { H3, Button } from '../../styled/Layout.styled';

const SocialMediaInput = () => {
  const { socialMedia, handleSocialMediaChange, addSocialMedia } =
    useContext(GlobalContext);
  return (
    <div>
      <H3>Social Media Icons</H3>
      {socialMedia.map((social, index) => (
        <div key={index}>
          <InputDiv>
            <InputLabel>Icon URL: </InputLabel>
            <Input
              type="url"
              value={social.iconUrl || ''}
              onChange={(e) =>
                handleSocialMediaChange(index, 'iconUrl', e.target.value)
              }
            />
          </InputDiv>
          {social.iconUrl && (
            <InputDiv>
              <InputLabel>Icon Width: </InputLabel>
              <Input
                type="number"
                value={social.iconWidth || ''}
                onChange={(e) => {
                    console.log(social.iconWidth)
                    handleSocialMediaChange(index, 'iconWidth', e.target.value)
                }
                }
              />
            </InputDiv>
          )}
          <InputDiv>
            <InputLabel>URL:</InputLabel>
            <Input
              type="url"
              value={social.url || ''}
              onChange={(e) =>
                handleSocialMediaChange(index, 'url', e.target.value)
              }
            />
          </InputDiv>
        </div>
      ))}
      <Button onClick={addSocialMedia}>Add social media</Button>
    </div>
  );
};

export default SocialMediaInput;
