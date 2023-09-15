import React from 'react';

export const HTML_VAR = (logo,
    userName,
    possition,
    phoneNumber,
    email,
    fbCompanyName,
  twCompanyName,
  ldCompanyName,
  websiteUrl,
  mailImg,
  telImg,
  facebookLogo,
  twitterLogo,
  linkedinLogo, instagramLogo,
  instaCompanyName,
  fontColor
  ) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: Arial, Helvetica, sans-serif;
          }
      </style>
  </head>
  <body>
      <section style="display: flex;flex-direction: column;margin-left: 50px;margin-top: 50px;max-width: 500px;">
          <div style="padding: 20px 0" >
              <img width="90" height="auto" src="${logo}" />
          </div>
          <div>
              <p style="padding: 5px 0;font-weight: 700;color: #444;font-size: 14px;line-height:12px;">${userName}</p>
              <p style="margin-bottom: 15px;font-family:Arial;color:#666;line-height:12px;font-size:11px;text-transform:uppercase;">${possition}</p>
          </div>
          <div style="display: flex;align-items: center;padding-bottom:5px;" >
              <img style="margin-right: 4px;" width="14" src="${telImg}">
              <p style="color:#666;text-decoration:underline;font-size: 11px;">${phoneNumber}</p>
          </div>
          <div style="display: flex;align-items: center;" >
              <img style="margin-right: 4px;" width="14" src="${mailImg}">
              <p style="color:#666;text-decoration:underline;font-size: 11px">${email}</p>
          </div>
          <section style="margin: 15px 0 0;width: 25%;">
          <span style="margin-right: 10px;" ><a href="${fbCompanyName}"><img width="20" height="20" src="${facebookLogo}"></a></span>
          <span style="margin-right: 10px;" ><a href="${twCompanyName}"><img width="20" height="20" src="${twitterLogo}"></a></span>
          <span style="margin-right: 10px;" ><a href="${ldCompanyName}"><img width="20" height="20" src="${linkedinLogo}"></a></span>
          <span class="instagram" ><a href="${instaCompanyName}"><img width="20" height="20" src="${instagramLogo}"></a></span>
      </section>
          <div><a style="font-size:11px;color:${fontColor};text-decoration: underline;" href="${websiteUrl}">${websiteUrl}</a></div>
      </section>
  </body>
  </html>`;
};
