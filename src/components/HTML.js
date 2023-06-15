import React from 'react';

export const telImg = "https://citizengo-brand.wsc.design/firmas/img/tel.png";
export const mailImg = "https://citizengo-brand.wsc.design/firmas/img/env.png";
export const facebookLogo = "https://citizengo-brand.wsc.design/firmas/img/facebook_2x.png";
export const twitterLogo = "https://citizengo-brand.wsc.design/firmas/img/twitter_2x.png";
export const linkedinLogo = "https://citizengo-brand.wsc.design/firmas/img/linkedin_2x.png";

export const HTML = ({
  logo,
  userName,
  possition,
  phoneNumber,
  email,
  fbCompanyName,
  twCompanyName,
  ldCompanyName,
  websiteUrl,
}) => {
  return `<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <title></title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
        <meta name="viewport" content="width=device-width,initial-scale=1"> 
        <style type="text/css"> 
          #outlook a{padding: 0}.ReadMsgBody{width: 100%}.ExternalClass{width: 100%}.ExternalClass 
          *{line-height: 100%}body{margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%}table, td{border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0}img{border: 0; height: auto; line-height: 100%; outline: 0; text-decoration: none; -ms-interpolation-mode: bicubic}p{display: block; margin: 13px 0}
        </style> 
        <style type="text/css"> 
          @media only screen and (max-width:480px){@-ms-viewport{width: 320px}
                                                  @viewport{width: 320px}}
        </style>
        <!--[if mso]><xml><o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]>
        <style type="text/css"> .outlook-group-fix{width:100% !important;}</style><![endif]--> 
        <style type="text/css"> 
          @media only screen and (min-width:480px){.mj-column-per-100{width: 100% !important; max-width: 100%}}
        </style> 
        <style type="text/css"> @media only screen and (max-width:480px){table.full-width-mobile{width: 100% !important}td.full-width-mobile{width: auto !important}}
        </style> 
        <style type="text/css"> 
          a{text-decoration: none !important}
          .body-left>div {margin: 0 20px !important}
          .graytext{color: #666 !important; text-decoration: none !important}
          .bluetext{color: #4185f5 !important; text-decoration: none !important}
        </style>
        <meta http-equiv=Content-Type content="text/html; charset=windows-1252">
      </head>
      <body style="background-color:#fff">
        <div id="temp" style="background-color:#fff"> 
          <div class="body-left"> 
            <div style="Margin:0 auto;max-width:600px"> 
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%">
                <tbody> 
                  <tr> 
                    <td style="direction:ltr;font-size:0;padding:20px 0;text-align:center;vertical-align:top">
                      <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%"> 
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                          <tbody> 
                            <tr> 
                              <td style="vertical-align:top;padding:0"> 
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                                  <tr> 
                                    <td align="left" style="font-size:0;padding:10px 25px;padding-bottom:0;padding-left:10px;word-break:break-word"> 
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0"> 
                                        <tbody> 
                                          <tr> 
                                            <td style="width:90px">
                                              <img height="auto" src="${logo}" style="border:0;display:block;outline:0;text-decoration:none;height:auto;width:100%" width="90">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table> 
            </div>
            <div class="main-sec" style="Margin:0 auto;max-width:600px"> 
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%"> 
                <tbody> 
                  <tr> 
                    <td style="direction:ltr;font-size:0;padding:20px 0;padding-bottom:25px;padding-top:0;text-align:center;vertical-align:top"> 
                      <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%"> 
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                          <tbody> 
                            <tr> 
                              <td style="vertical-align:top;padding:0"> 
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                  <tr> 
                                    <td align="left" style="font-size:0;padding:5px 15px 0;word-break:break-word">
                                      <div style="font-family:Arial;font-size:14px;font-weight:600;line-height:12px;text-align:left;color:#444"> ${userName}</div>
                                    </td>
                                  </tr>
                                  <tr> 
                                    <td align="left" style="font-size:0;padding:5px 15px 0;word-break:break-word"> 
                                      <div style="font-family:Arial;font-size:11px;line-height:12px;text-align:left;color:#666"> ${possition}</div>
                                    </td>
                                  </tr>
                                  <tr> 
                                    <td style="font-size:0;word-break:break-word"> 
                                      <div style="height:15px">&nbsp;</div>
                                    </td>
                                  </tr>
                                  <tr> 
                                    <td align="left" style="font-size:0;padding:5px 15px 0;word-break:break-word"> 
                                      <div style="font-family:Arial;font-size:11px;line-height:12px;text-align:left;color:#333"> 
                                        <img src="${telImg}" style="padding-left:1px;padding-right:4px"> 
                                        <a class="graytext" href="tel:${phoneNumber}">${phoneNumber}</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr> 
                                    <td align="left" style="font-size:0;padding:5px 15px 0;word-break:break-word"> 
                                      <div style="font-family:Arial;font-size:11px;line-height:12px;text-align:left;color:#333"> 
                                        <img width="14px" src="${mailImg}" style="padding-right:4px"> 
                                        <a class="graytext" href="mailto:${email}">${email}</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr> 
                                    <td style="font-size:0;word-break:break-word"> 
                                      <div style="height:15px">&nbsp;</div>
                                    </td>
                                  </tr>
                                  <tr> 
                                    <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-bottom:3px;padding-left:15px;word-break:break-word"> 
                                      <div style="font-family:Arial;font-size:11px;line-height:1;text-align:left;color:#4185f5"> 
                                        <a class="bluetext" href="https://www.facebook.com/${fbCompanyName}" target="_blank">
                                          <img width="20px" src="${facebookLogo}" style="padding-right:8px">
                                        </a>
                                        <a class="bluetext" href="https://twitter.com/${twCompanyName}" target="_blank">
                                          <img width="20px" src="${twitterLogo}" style="padding-right:8px">
                                        </a>
                                        <a class="bluetext" href="https://www.linkedin.com/${ldCompanyName}" target="_blank">
                                          <img width="20px" src="${linkedinLogo}" style="padding-right:8px">
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr> 
                                    <td style="font-size:0;word-break:break-word">
                                      <div style="height:5px">&nbsp;</div>
                                    </td>
                                  </tr>
                                  <tr> 
                                    <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-bottom:0;padding-left:15px;word-break:break-word"> 
                                      <div style="font-family:Arial;font-size:11px;line-height:1;text-align:left;color:#4185f5">
                                        <a class="bluetext" href="${websiteUrl}" target="_blank">${websiteUrl}</a>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> 
      </body>
    </html>`;
};

export const HTML_VAR = (logo,
    userName,
    possition,
    phoneNumber,
    email,
    fbCompanyName,
  twCompanyName,
  ldCompanyName,
    websiteUrl) => {
  return `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
    <meta name="viewport" content="width=device-width,initial-scale=1"> 
    <style type="text/css"> 
      #outlook a{padding: 0}.ReadMsgBody{width: 100%}.ExternalClass{width: 100%}.ExternalClass 
      *{line-height: 100%}body{margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%}table, td{border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0}img{border: 0; height: auto; line-height: 100%; outline: 0; text-decoration: none; -ms-interpolation-mode: bicubic}p{display: block; margin: 13px 0}
    </style> 
    <style type="text/css"> 
      @media only screen and (max-width:480px){@-ms-viewport{width: 320px}
                                              @viewport{width: 320px}}
    </style>
    <!--[if mso]><xml><o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]>
    <style type="text/css"> .outlook-group-fix{width:100% !important;}</style><![endif]--> 
    <style type="text/css"> 
      @media only screen and (min-width:480px){.mj-column-per-100{width: 100% !important; max-width: 100%}}
    </style> 
    <style type="text/css"> @media only screen and (max-width:480px){table.full-width-mobile{width: 100% !important}td.full-width-mobile{width: auto !important}}
    </style> 
    <style type="text/css"> 
      a{text-decoration: none !important}
      .body-left>div {margin: 0 20px !important}
      .graytext{color: #666 !important; text-decoration: none !important}
      .bluetext{color: #4185f5 !important; text-decoration: none !important}
    </style>
    <meta http-equiv=Content-Type content="text/html; charset=windows-1252">
  </head>
  <body style="background-color:#fff">
    <div id="temp" style="background-color:#fff"> 
      <div class="body-left"> 
        <div style="Margin:0 auto;max-width:600px"> 
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%">
            <tbody> 
              <tr> 
                <td style="direction:ltr;font-size:0;padding:20px 0;text-align:center;vertical-align:top">
                  <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%"> 
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                      <tbody> 
                        <tr> 
                          <td style="vertical-align:top;padding:0"> 
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                              <tr> 
                                <td align="left" style="font-size:0;padding:10px 25px;padding-bottom:0;padding-left:10px;word-break:break-word"> 
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0"> 
                                    <tbody> 
                                      <tr> 
                                        <td style="width:90px">
                                          <img height="auto" src="${logo}" style="border:0;display:block;outline:0;text-decoration:none;height:auto;width:100%" width="90">
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> 
        </div>
        <div class="main-sec" style="Margin:0 auto;max-width:600px"> 
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%"> 
            <tbody> 
              <tr> 
                <td style="direction:ltr;font-size:0;padding:20px 0;padding-bottom:25px;padding-top:0;text-align:center;vertical-align:top"> 
                  <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%"> 
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"> 
                      <tbody> 
                        <tr> 
                          <td style="vertical-align:top;padding:0"> 
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr> 
                                <td align="left" style="font-size:0;padding:5px 15px 0;word-break:break-word">
                                  <div style="font-family:Arial;font-size:14px;font-weight:600;line-height:12px;text-align:left;color:#444"> ${userName}</div>
                                </td>
                              </tr>
                              <tr> 
                                <td align="left" style="font-size:0;padding:5px 15px 0;word-break:break-word"> 
                                  <div style="font-family:Arial;font-size:11px;line-height:12px;text-align:left;color:#666"> ${possition}</div>
                                </td>
                              </tr>
                              <tr> 
                                <td style="font-size:0;word-break:break-word"> 
                                  <div style="height:15px">&nbsp;</div>
                                </td>
                              </tr>
                              <tr> 
                                <td align="left" style="font-size:0;padding:5px 15px 0;word-break:break-word"> 
                                  <div style="font-family:Arial;font-size:11px;line-height:12px;text-align:left;color:#333;flex-direction:row;"> 
                                    <img src="${telImg}" style="padding-left:1px;padding-right:4px;width:12px;height:auto;"> 
                                    <a class="graytext" href="tel:${phoneNumber}">${phoneNumber}</a>
                                  </div>
                                </td>
                              </tr>
                              <tr> 
                                <td align="left" style="font-size:0;padding:5px 15px 0;word-break:break-word"> 
                                  <div style="font-family:Arial;font-size:11px;line-height:12px;text-align:left;color:#333;flex-direction:row;"> 
                                    <img width="14px" src="${mailImg}" style="padding-right:4px"> 
                                    <a class="graytext" href="mailto:${email}">${email}</a>
                                  </div>
                                </td>
                              </tr>
                              <tr> 
                                <td style="font-size:0;word-break:break-word"> 
                                  <div style="height:15px">&nbsp;</div>
                                </td>
                              </tr>
                              <tr> 
                                <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-bottom:3px;padding-left:15px;word-break:break-word"> 
                                  <div style="font-family:Arial;font-size:11px;line-height:1;text-align:left;color:#4185f5;flex-direction:row;"> 
                                    <a class="bluetext" href="https://www.facebook.com/${fbCompanyName}" target="_blank">
                                      <img width="20px" src="${facebookLogo}" style="padding-right:8px">
                                    </a>
                                    <a class="bluetext" href="https://twitter.com/${twCompanyName}" target="_blank">
                                      <img width="20px" src="${twitterLogo}" style="padding-right:8px">
                                    </a>
                                    <a class="bluetext" href="https://www.linkedin.com/${ldCompanyName}" target="_blank">
                                      <img width="20px" src="${linkedinLogo}" style="padding-right:8px">
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr> 
                                <td style="font-size:0;word-break:break-word">
                                  <div style="height:5px">&nbsp;</div>
                                </td>
                              </tr>
                              <tr> 
                                <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-bottom:0;padding-left:15px;word-break:break-word"> 
                                  <div style="font-family:Arial;font-size:11px;line-height:1;text-align:left;color:#4185f5">
                                    <a class="bluetext" href="${websiteUrl}" target="_blank">${websiteUrl}</a>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> 
  </body>
</html>`;
};
