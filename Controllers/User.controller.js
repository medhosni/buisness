import  User  from "../Models/user.model.js";

import { hashSync, compare } from "bcrypt";

import {} from 'dotenv/config'
import { createTransport } from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

var transporter = createTransport(
  smtpTransport({
    service: process.env.service,
    host: process.env.host,
    port: process.env.portMAil||587,
    secure: process.env.secure,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  })
);

export async function createUser(req, res) {
  const users = new User({ ...req.body });
  console.log({ ...req.body });
  var hash = hashSync(users.password, 10);
  users.password = hash;
  
  await users.save();

  if (users)
    res.status(200).json(users);
  else {
    res.status(400).json({ Message: "Can't create this user " });
  }
}
export async function createUserPhoto(req, res) {
  const users = new User({ ...req.body });
  console.log({ ...req.body });
  var hash = hashSync(users.password, 10);
  users.password = hash;
  users.photo = `/img/${req.file.filename}`;
  
  await users.save();

  if (users)
    res.status(200).json(users);
  else {
    res.status(400).json({ Message: "Can't create this user " });
  }
}
export async function getUsers(req, res) {
  const users = await User.find();
  res.json(users);
}
export async function login(req, res) {
  var { email, password } = req.body;
  console.log(req.body)
User.findOne({email:email}).then(async user=>{
  console.log(user)
  if (user == null) {
 res
      .status(501)
      .json({ message: "Your email address don't exist." });
  }else{const match = await compare(password, user.password) ;
    console.log(match );
    if ( !match) {
       res
        .status(500)
        .json({ message: "Your password is incorrect." });
    } else {
      res.status(200).json( user );
    }}
  
  
})


  /*const users = await User.findOne({ email: email });
  console.log(users)
  if (users == null) {
    return res
      .status(404)
      .json({ message: "Your email address don't exist." });
  }
  const match = compare(password, users.password);
  console.log(match);
  if (!match) {
    return res
      .status(404)
      .json({ message: "Your password is incorrect." });
  } else {
    res.status(200).json({ result: users });
  }*/
}
export async function update(req, res) {
  const user = new User(req.body);
  var hash = hashSync(req.body.password, 10);

  user.password = hash;


  const newuser = await User.updateOne(
    { _id: user._id },
    user
  );

  if (newuser == null) {
    return res.status(400).json({ message: "not updated " });
  } else {
    console.log(newuser);
    res.status(200).json(newuser);
  }
}
export async function showprofile(req, res) {
  const { _id } = req.body;

  const user = await User.findById(_id);
  if (user) {
    res.status(200).json(user);
  } else {
    return res.status(400).json({ message: "errore" });
  }
}
export async function fogetpwd(req, res) {
  const code = Math.floor(Math.random() * 9999);
 
  User.findOneAndUpdate({ "mail": req.body.email }, { "code": code })
            .then(doc => {
              var mailOptions = {
                to: doc.mail,
                subject: "Mot de passe oublié " + doc.fullname,
                html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
                <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
                  <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!-->
                    <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]-->
                    <!--[if (gte mso 9)|(IE)]>
                    <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                    </xml>
                    <![endif]-->
                    <!--[if (gte mso 9)|(IE)]>
                    <style type="text/css">
                      body {width: 600px;margin: 0 auto;}
                      table {border-collapse: collapse;}
                      table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
                      img {-ms-interpolation-mode: bicubic;}
                    </style>
                    <![endif]-->
                
                    <style type="text/css">
                      body, p, div {
                        font-family: inherit;
                        font-size: 14px;
                      }
                      body {
                        color: #000000;
                      }
                      body a {
                        color: #1188E6;
                        text-decoration: none;
                      }
                      p { margin: 0; padding: 0; }
                      table.wrapper {
                        width:100% !important;
                        table-layout: fixed;
                        -webkit-font-smoothing: antialiased;
                        -webkit-text-size-adjust: 100%;
                        -moz-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                      }
                      img.max-width {
                        max-width: 100% !important;
                      }
                      .column.of-2 {
                        width: 50%;
                      }
                      .column.of-3 {
                        width: 33.333%;
                      }
                      .column.of-4 {
                        width: 25%;
                      }
                      @media screen and (max-width:480px) {
                        .preheader .rightColumnContent,
                        .footer .rightColumnContent {
                            text-align: left !important;
                        }
                        .preheader .rightColumnContent div,
                        .preheader .rightColumnContent span,
                        .footer .rightColumnContent div,
                        .footer .rightColumnContent span {
                          text-align: left !important;
                        }
                        .preheader .rightColumnContent,
                        .preheader .leftColumnContent {
                          font-size: 80% !important;
                          padding: 5px 0;
                        }
                        table.wrapper-mobile {
                          width: 100% !important;
                          table-layout: fixed;
                        }
                        img.max-width {
                          height: auto !important;
                          max-width: 480px !important;
                        }
                        a.bulletproof-button {
                          display: block !important;
                          width: auto !important;
                          font-size: 80%;
                          padding-left: 0 !important;
                          padding-right: 0 !important;
                        }
                        .columns {
                          width: 100% !important;
                        }
                        .column {
                          display: block !important;
                          width: 100% !important;
                          padding-left: 0 !important;
                          padding-right: 0 !important;
                          margin-left: 0 !important;
                          margin-right: 0 !important;
                        }
                      }
                    </style>
                    <!--user entered Head Start-->
                    <link href="https://fonts.googleapis.com/css?family=Lato:300&display=swap" rel="stylesheet"><style>
                body {font-family: 'Lato', sans-serif;}
                </style>
                     <!--End Head user entered-->
                  </head>
                  <body>
                    <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size: 14px; font-family: inherit; color: #000000; background-color: #f3f3f3;">
                      <div class="webkit">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f3f3f3">
                          <tr>
                            <td valign="top" bgcolor="#f3f3f3" width="100%">
                              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td width="100%">
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                      <tr>
                                        <td>
                                          <!--[if mso]>
                                          <center>
                                          <table><tr><td width="600">
                                          <![endif]-->
                                          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center">
                                            <tr>
                                              <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #000000; text-align: left;" bgcolor="#FFFFFF" width="100%" align="left">
                                                
                    <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%"
                           style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                      <tr>
                        <td role="module-content">
                          <p>Brima Distribution</p>
                        </td>
                      </tr>
                    </table>
                  
                    <table  border="0"
                            cellpadding="0"
                            cellspacing="0"
                            align="center"
                            width="100%"
                            role="module"
                            data-type="columns"
                            data-version="2"
                            style="padding:0px 0px 0px 0px;"
                            bgcolor="">
                      <tr role='module-content'>
                        <td height="100%" valign="top">
                            <!--[if (gte mso 9)|(IE)]>
                              <center>
                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-spacing:0;border-collapse:collapse;table-layout: fixed;" >
                                  <tr>
                            <![endif]-->
                          
                    <!--[if (gte mso 9)|(IE)]>
                      <td width="NaNpx" valign="top" style="padding: 0px 0px 0px 0px;border-collapse: collapse;" >
                    <![endif]-->
                
                    <table  width="NaN"
                            style="width:NaNpx;border-spacing:0;border-collapse:collapse;margin:0px undefinedpx 0px undefinedpx;"
                            cellpadding="0"
                            cellspacing="0"
                            align="left"
                            border="0"
                            bgcolor=""
                            class="column column-0 of-1
                                  empty"
                      >
                      <tr>
                        <td style="padding:0px;margin:0px;border-spacing:0;">
                            
                    <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
                      <tr>
                        <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px;" valign="top" align="center">
                          <img class="max-width" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:100% !important;width:100%;height:auto !important;" width="NaN" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/514c48a1cd734446/84d0f610-444b-4e63-b904-3212550be696/2666x2000.png">
                        </td>
                      </tr>
                    </table>
                  
                        </td>
                      </tr>
                    </table>
                
                    <!--[if (gte mso 9)|(IE)]>
                      </td>
                    <![endif]-->
                            <!--[if (gte mso 9)|(IE)]>
                                  <tr>
                                </table>
                              </center>
                            <![endif]-->
                        </td>
                      </tr>
                    </table>
                 
                    <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
                      <tr>
                        <td style="padding:50px 20px 10px 20px;line-height:22px;text-align:inherit;"
                            height="100%"
                            valign="top"
                            bgcolor="">
                            <div><div style="font-family: inherit; text-align: center"><span style="font-size: 48px; font-family: inherit">Mot de passe Oublier </span></div><div></div></div>
                        </td>
                      </tr>
                    </table>
                  
                    <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
                      <tr>
                        <td style="padding:0px 20px 10px 20px;line-height:22px;text-align:inherit;"
                            height="100%"
                            valign="top"
                            bgcolor="">
                            <div><div style="font-family: inherit; text-align: center"><span style="font-size: 16px; font-family: inherit">Voici Votre code de recuperation : </span><hr><span style="font-size: 38px; font-family: fantasy;"><u>${code}</u><hr></span></div><div></div></div>
                        </td>
                      </tr>
                    </table>
                  
                
                
                    <table class="module"
                           role="module"
                           data-type="spacer"
                           border="0"
                           cellpadding="0"
                           cellspacing="0"
                           width="100%"
                           style="table-layout: fixed;">
                      <tr>
                        <td style="padding:0px 0px 30px 0px;"
                            role="module-content"
                            bgcolor="">
                        </td>
                      </tr>
                    </table>
                  
                                              </td>
                                            </tr>
                                          </table>
                                          <!--[if mso]>
                                          </td></tr></table>
                                          </center>
                                          <![endif]-->
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </center>
                  </body>
                </html>`,
              };
            
              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  res.status(500).json({ error: error });
                } else {
                  console.log("the mail has been send ....");
                  res.status(200) .json(doc);
                  
                }
              });
            
            })
           

  

}

export async function updatePwd(req, res) {
  User.findById(req.body._id).then(user =>{
    
    if (user.code === req.body.code ){
      var hash = hashSync(user.password, 10);
user.password = hash
      user.updateOne(
        { _id: user._id },
        user);
      res.status(200).json({message :"Mot de passe Modifié"})
    }else{
      res.status(400).json({message :"Code non conforme "})
    }
  }

  ).catch(err => res.status(500).json({message :err}))
}
//**SEARCH BY NAME AND EMAIL */
export async function search(req, res) {
  const { username, email } = req.body;
  const user = await User.find().or([{ username }, { email }]);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).json({ Messager: "erroooor" });
  }
}
export async function deleteUser(req, res) {
  console.log("****************************")
  
  const { email } = req.params;
  console.log(email)
  const user =User.findOne({ email:email })
  user.deleteOne().then(user =>{
    res.status(203).json({message :"user deleted "})
  }).catch(err =>{
res.status(400).json({err :err})
  })
  
}