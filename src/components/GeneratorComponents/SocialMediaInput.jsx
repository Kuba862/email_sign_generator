import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Global';
import { Input, InputDiv, InputLabel } from '../../styled/Input.styled';
import { H3, Button } from '../../styled/Layout.styled';

const SocialMediaInput = () => {
  const { socialMedia, handleSocialMediaChange, addSocialMedia } =
    useContext(GlobalContext);
  return (
    <div>
      <H3>Social Media</H3>
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
            <>
              <InputDiv>
                <InputLabel>Social media URL:</InputLabel>
                <Input
                  type="url"
                  value={social.url || ''}
                  onChange={(e) =>
                    handleSocialMediaChange(index, 'url', e.target.value)
                  }
                  placeholder='opening in a new tab after clicking the icon'
                />
              </InputDiv>
              <InputDiv>
                <InputLabel>Icon Width: </InputLabel>
                <Input
                  type="number"
                  value={social.iconWidth || ''}
                  onChange={(e) => {
                    handleSocialMediaChange(index, 'iconWidth', e.target.value);
                  }}
                />
              </InputDiv>
              <InputDiv>
                <InputLabel>Icon Left Space:</InputLabel>
                <Input
                  type="number"
                  value={social.left || ''}
                  onChange={(e) =>
                    handleSocialMediaChange(index, 'left', e.target.value)
                  }
                />
              </InputDiv>
              <InputDiv>
                <InputLabel>Icon Top Space:</InputLabel>
                <Input
                  type="number"
                  value={social.top || ''}
                  onChange={(e) =>
                    handleSocialMediaChange(index, 'top', e.target.value)
                  }
                />
              </InputDiv>
            </>
          )}
        </div>
      ))}
      <Button onClick={addSocialMedia}>Add more social media</Button>
    </div>
  );
};

export default SocialMediaInput;
