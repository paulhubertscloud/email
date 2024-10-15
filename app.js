const { response } = require("express");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 5002;
const cron = require("node-cron");

var email = "pntzasyx@gmail.com";
var myemail = "paul.hubert.knows.it@gmail.com";
var mypassword = process.env.application_password;

function sendEmail(name) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myemail,
        pass: mypassword,
      },
    });

    const mail_configs = {
      from: myemail,
      to: email,
      attachments: [
        {
          filename: "Hubert_Paul_Resume.docx",
          path: "C:\Users\TwoSnailz\awsDemoCode\email\Hubert_Paul_Resume.docx"
        },
      ],
      subject: "Testing Resume Sending",
      html: `<!DOCTYPE html>
      <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
      
      <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
      
          body {
            margin: 0;
            padding: 0;
          }
      
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
      
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
      
          p {
            line-height: inherit
          }
      
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
      
          @media (max-width:700px) {
      
            .desktop_hide table.icons-inner,
            .social_block.desktop_hide .social-table {
              display: inline-block !important;
            }
      
            .icons-inner {
              text-align: center;
            }
      
            .icons-inner td {
              margin: 0 auto;
            }
      
            .fullMobileWidth,
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
      
            .mobile_hide {
              display: none;
            }
      
            .stack .column {
              width: 100%;
              display: block;
            }
      
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
      
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
      
            .reverse {
              display: table;
              width: 100%;
            }
      
            .reverse .column.first {
              display: table-footer-group !important;
            }
      
            .reverse .column.last {
              display: table-header-group !important;
            }
      
            .row-5 td.column.first .border,
            .row-5 td.column.last .border {
              padding-left: 0;
              padding-right: 0;
              border-top: 0;
              border-right: 0px;
              border-bottom: 0;
              border-left: 0;
            }
          }
        </style>
      </head>
      
      <body style="background-color: #f5d3ab; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5d3ab;">
          <tbody>
            <tr>
              <td>
                <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171b1b; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/bg_XMAS.png'); background-position: center top; background-repeat: no-repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;width:100%;padding-top:110px;">
                                      <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/Logo_christmas_light.png" style="display: block; height: auto; border: 0; width: 159px; max-width: 100%;" width="159" alt="Compnay logo" title="Compnay logo"></a></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="heading_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Permanent Marker', Impact, Charcoal, sans-serif; font-size: 62px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>&nbsp;Merry</strong><strong> Christmas&nbsp;</strong> ${name} </h1>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #f5f5f5; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 39px;"><span style="font-size:26px;">Enjoy 40% off on all products</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:56px;width:318px;v-text-anchor:middle;" arcsize="8%" strokeweight="0.75pt" strokecolor="#C92727" fillcolor="#ffd8d8"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#c92727; font-family:Arial, sans-serif; font-size:22px"><![endif]--><a href="www.example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#c92727;background-color:#ffd8d8;border-radius:4px;width:auto;border-top:1px solid #C92727;font-weight:undefined;border-right:1px solid #C92727;border-bottom:1px solid #C92727;border-left:1px solid #C92727;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:22px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:22px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word;"><span style="line-height: 44px;" data-mce-style>Coupon Code: 40XMAS</span></span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #f5f5f5; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;"><span style="font-size:15px;">*The code is valid until 06.01.2022*</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="image_block block-8" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/chocolate.png" style="display: block; height: auto; border: 0; width: 578px; max-width: 100%;" width="578" alt="Chocolate box" title="Chocolate box"></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171b1b; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/bg_XMAS.png'); background-position: center top; background-repeat: no-repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;width:100%;padding-top:110px;">
                                      <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/Logo_christmas_light.png" style="display: block; height: auto; border: 0; width: 159px; max-width: 100%;" width="159" alt="Compnay logo" title="Compnay logo"></a></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="heading_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Permanent Marker', Impact, Charcoal, sans-serif; font-size: 62px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>&nbsp;Merry</strong><strong> Christmas&nbsp;</strong></h1>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #f5f5f5; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: right; mso-line-height-alt: 39px;"><span style="font-size:26px;">Enjoy 40% off on all products</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:56px;width:318px;v-text-anchor:middle;" arcsize="8%" strokeweight="0.75pt" strokecolor="#C92727" fillcolor="#ffd8d8"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#c92727; font-family:Arial, sans-serif; font-size:22px"><![endif]--><a href="www.example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#c92727;background-color:#ffd8d8;border-radius:4px;width:auto;border-top:1px solid #C92727;font-weight:undefined;border-right:1px solid #C92727;border-bottom:1px solid #C92727;border-left:1px solid #C92727;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:22px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:22px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word;"><span style="line-height: 44px;" data-mce-style>Coupon Code: 40XMAS</span></span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #f5f5f5; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;"><span style="font-size:15px;">*The code is valid until 06.01.2022*</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="image_block block-8" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/chocolate.png" style="display: block; height: auto; border: 0; width: 578px; max-width: 100%;" width="578" alt="Chocolate box" title="Chocolate box"></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171b1b; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/bg_XMAS.png'); background-position: center top; background-repeat: no-repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;width:100%;padding-top:110px;">
                                      <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/Logo_christmas_light.png" style="display: block; height: auto; border: 0; width: 159px; max-width: 100%;" width="159" alt="Compnay logo" title="Compnay logo"></a></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="heading_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Permanent Marker', Impact, Charcoal, sans-serif; font-size: 62px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>&nbsp;Merry</strong><strong> Christmas&nbsp;</strong></h1>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #f5f5f5; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: right; mso-line-height-alt: 39px;"><span style="font-size:26px;">Enjoy 40% off on all products</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:56px;width:318px;v-text-anchor:middle;" arcsize="8%" strokeweight="0.75pt" strokecolor="#C92727" fillcolor="#ffd8d8"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#c92727; font-family:Arial, sans-serif; font-size:22px"><![endif]--><a href="www.example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#c92727;background-color:#ffd8d8;border-radius:4px;width:auto;border-top:1px solid #C92727;font-weight:undefined;border-right:1px solid #C92727;border-bottom:1px solid #C92727;border-left:1px solid #C92727;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:22px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:22px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word;"><span style="line-height: 44px;" data-mce-style>Coupon Code: 40XMAS</span></span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #f5f5f5; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;"><span style="font-size:15px;">*The code is valid until 06.01.2022*</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="image_block block-8" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/chocolate.png" style="display: block; height: auto; border: 0; width: 578px; max-width: 100%;" width="578" alt="Chocolate box" title="Chocolate box"></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5d3ab; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/bg_choco_1.png'); background-position: center top; background-repeat: no-repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:90px;padding-bottom:5px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/choco.png" style="display: block; height: auto; border: 0; width: 340px; max-width: 100%;" width="340" alt="Mixing chocolate" title="Mixing chocolate"></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:95px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #bf0000; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="font-size:16px;">DISCOVER YOUR TASTE</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="heading_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-top:10px;text-align:center;width:100%;">
                                      <h1 style="margin: 0; color: #333333; direction: ltr; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 62px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Magical Chocolate</strong></h1>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #333333; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit consectetuer adipiscing elit.</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #333333; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="font-size:16px;"><span style="text-decoration:line-through;">40.99€</span>&nbsp; <strong><span style="font-size:20px;">23.99</span></strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:95px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:left;">
                                      <div class="alignment" align="left">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:179px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#171B1B" fillcolor="#171b1b"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="www.example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#171b1b;border-radius:4px;width:auto;border-top:1px solid #171B1B;font-weight:undefined;border-right:1px solid #171B1B;border-bottom:1px solid #171B1B;border-left:1px solid #171B1B;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Explore Now!</span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5d3ab; background-position: center top;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr class="reverse">
                              <td class="column column-1 first" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="border">
                                  <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                    <tr>
                                      <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:80px;">
                                        <div style="font-family: sans-serif">
                                          <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #bf0000; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                            <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="font-size:16px;">DISCOVER YOUR TASTE</span></p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table class="heading_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                    <tr>
                                      <td class="pad" style="padding-left:10px;padding-top:10px;text-align:center;width:100%;">
                                        <h1 style="margin: 0; color: #333333; direction: ltr; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 62px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Chocolate Cookies</strong></h1>
                                      </td>
                                    </tr>
                                  </table>
                                  <table class="text_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                    <tr>
                                      <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                        <div style="font-family: sans-serif">
                                          <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #333333; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                            <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit consectetuer adipiscing elit.</span></p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table class="text_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                    <tr>
                                      <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                        <div style="font-family: sans-serif">
                                          <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #333333; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                            <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="font-size:16px;"><span style="text-decoration:line-through;">40.99€</span>&nbsp; <strong><span style="font-size:20px;">23.99</span></strong></span></p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table class="button_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                    <tr>
                                      <td class="pad" style="padding-bottom:80px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:left;">
                                        <div class="alignment" align="left">
                                          <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:179px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#171B1B" fillcolor="#171b1b"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="www.example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#171b1b;border-radius:4px;width:auto;border-top:1px solid #171B1B;font-weight:undefined;border-right:1px solid #171B1B;border-bottom:1px solid #171B1B;border-left:1px solid #171B1B;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Explore Now!</span></span></a>
                                          <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                              <td class="column column-2 last" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="border">
                                  <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                    <tr>
                                      <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:85px;padding-bottom:85px;">
                                        <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/chocolate_1.png" style="display: block; height: auto; border: 0; width: 340px; max-width: 100%;" width="340" alt="White chocolate" title="White chocolate"></div>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171b1b; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/bg_dark_area.png'); background-position: center top; background-repeat: no-repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:90px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #bf0000; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;"><span style="font-size:16px;">DISCOVER YOUR TASTE</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-top:10px;text-align:center;width:100%;">
                                      <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 62px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Gift Basket</strong></h1>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #c2c2c2; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit consectetuer adipiscing elit.</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #fbfbfb; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;"><span style="font-size:16px;"><span style="text-decoration:line-through;">40.99€</span>&nbsp; <strong><span style="font-size:20px;">23.99</span></strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:165px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#C92727" fillcolor="#c92727"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="www.example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#c92727;border-radius:4px;width:auto;border-top:1px solid #C92727;font-weight:undefined;border-right:1px solid #C92727;border-bottom:1px solid #C92727;border-left:1px solid #C92727;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Order Now!</span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="image_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:70px;padding-left:10px;padding-right:10px;padding-top:25px;width:100%;">
                                      <div class="alignment" align="center" style="line-height:10px"><img class="fullMobileWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/Christmas_chocolate.png" style="display: block; height: auto; border: 0; width: 476px; max-width: 100%;" width="476" alt="Chocolate Christmas Basket" title="Chocolate Christmas Basket"></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5d3ab; background-position: center top;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:65px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #bf0000; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;"><span style="font-size:16px;">DISCOVER YOUR TASTE</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-top:10px;text-align:center;width:100%;">
                                      <h1 style="margin: 0; color: #333333; direction: ltr; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 62px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Create Your Own</strong></h1>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:50px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #333333; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit consectetuer adipiscing elit.</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 8px solid #171B1B; border-left: 8px solid #171B1B; border-right: 8px solid #171B1B; border-top: 8px solid #171B1B; vertical-align: top;">
                                <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:35px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img class="fullMobileWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/chocolate_balls_2.png" style="display: block; height: auto; border: 0; width: 169px; max-width: 100%;" width="169" alt="Chocolate in Black Box" title="Chocolate in Black Box"></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #333333; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 27px;"><span style="font-size:18px;">Lorem ipsum dolor sit</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #333333; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;"><span style="font-size:16px;"><span style="text-decoration:line-through;">40.99€</span>&nbsp; <strong><span style="font-size:20px;">23.99</span></strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:45px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:179px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#171B1B" fillcolor="#171b1b"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="www.example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#171b1b;border-radius:4px;width:auto;border-top:1px solid #171B1B;font-weight:undefined;border-right:1px solid #171B1B;border-bottom:1px solid #171B1B;border-left:1px solid #171B1B;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Explore Now!</span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #171b1b; border-bottom: 8px solid #F5D3AB; border-left: 8px solid #F5D3AB; border-right: 8px solid #F5D3AB; border-top: 8px solid #F5D3AB; vertical-align: top;">
                                <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:35px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img class="fullMobileWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/chocolate_box_white.png" style="display: block; height: auto; border: 0; width: 181px; max-width: 100%;" width="181" alt="Chocolate in White Box" title="Chocolate in White Box"></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #e9e9e9; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 27px;"><span style="font-size:18px;">Dark Chocolate Box</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #e8e8e8; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;"><span style="font-size:16px;"><span style="text-decoration:line-through;">40.99€</span>&nbsp; <strong><span style="font-size:20px;">23.99</span></strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:45px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:139px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#C92727" fillcolor="#c92727"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="www.example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#c92727;border-radius:4px;width:auto;border-top:1px solid #C92727;font-weight:undefined;border-right:1px solid #C92727;border-bottom:1px solid #C92727;border-left:1px solid #C92727;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Explore Now!</span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 8px solid #171B1B; border-left: 8px solid #171B1B; border-right: 8px solid #171B1B; border-top: 8px solid #171B1B; vertical-align: top;">
                                <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:30px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img class="fullMobileWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/chocolate_ball.png" style="display: block; height: auto; border: 0; width: 179px; max-width: 100%;" width="179" alt="Chocolate in Black Box" title="Chocolate in Black Box"></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #333333; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 27px;"><span style="font-size:18px;">Lorem ipsum dolor sit</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 14px; mso-line-height-alt: 21px; color: #333333; line-height: 1.5; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;"><span style="font-size:16px;"><span style="text-decoration:line-through;">40.99€</span>&nbsp; <strong><span style="font-size:20px;">23.99</span></strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:45px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:179px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#171B1B" fillcolor="#171b1b"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="www.example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#171b1b;border-radius:4px;width:auto;border-top:1px solid #171B1B;font-weight:undefined;border-right:1px solid #171B1B;border-bottom:1px solid #171B1B;border-left:1px solid #171B1B;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Explore Now!</span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171b1b;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171b1b;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:20px;width:100%;padding-right:0px;padding-top:5px;">
                                      <div class="alignment" align="left" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5091/Logo_christmas_light.png" style="display: block; height: auto; border: 0; width: 159px; max-width: 100%;" width="159" alt="company logo" title="company logo"></a></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 12px; mso-line-height-alt: 24px; color: #ffffff; line-height: 2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 28px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,&nbsp;</p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-left:20px;text-align:center;width:100%;padding-top:5px;">
                                      <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: normal; line-height: 200%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Links</strong></h1>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><a href="http://www.example.com" target="_blank" style="text-decoration: none; color: #ffffff;" rel="noopener">Chocolate Basket</a></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><a href="http://www.example.com" target="_blank" style="text-decoration: none; color: #ffffff;" rel="noopener">Products</a></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><a href="http://www.example.com" target="_blank" style="text-decoration: none; color: #ffffff;" rel="noopener">Offers</a></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><a href="http://www.example.com" target="_blank" style="text-decoration: none; color: #ffffff;" rel="noopener">Unsubscribe</a></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-left:20px;text-align:center;width:100%;padding-top:5px;">
                                      <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: normal; line-height: 200%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Contact</strong></h1>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><a href="http://www.example.com" target="_blank" style="text-decoration: none; color: #ffffff;" rel="noopener">Info@company.com</a></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><a href="http://www.example.com" target="_blank" style="text-decoration: none; color: #ffffff;" rel="noopener">Help Center</a></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="social_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:left;">
                                      <div class="alignment" align="left">
                                        <table class="social-table" width="144px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                          <tr>
                                            <td style="padding:0 4px 0 0;"><a href="https://www.facebook.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/facebook@2x.png" width="32" height="32" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
                                            <td style="padding:0 4px 0 0;"><a href="https://www.twitter.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/twitter@2x.png" width="32" height="32" alt="Twitter" title="twitter" style="display: block; height: auto; border: 0;"></a></td>
                                            <td style="padding:0 4px 0 0;"><a href="https://www.linkedin.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/linkedin@2x.png" width="32" height="32" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
                                            <td style="padding:0 4px 0 0;"><a href="https://www.instagram.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/instagram@2x.png" width="32" height="32" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-12" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171b1b;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-13" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="alignment" style="vertical-align: middle; text-align: center;">
                                            <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                            <!--[if !vml]><!-->
                                            <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
                                              <!--<![endif]-->
                                              <tr>
                                                <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Designed with BEE" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                <td style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" target="_blank" style="color: #9d9d9d; text-decoration: none;">Designed with BEE</a></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table><!-- End -->
      </body>
      
      </html>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}

app.get("/", (req, res) => {
  const { name } = req.query;
  sendEmail(name)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

const task = () => {
  console.log("Running a task every minute");
};

cron.schedule("0 12 28 * *", sendEmail);

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
