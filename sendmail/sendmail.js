var http = require('http');
var nodemailer = require('nodemailer');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var fromEmail = '';
  var toEmail = '';
  var transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true, // use SSL
    debug: true,
      auth: {
        user: fromEmail,
        pass: ''
      }
  });
   transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: 'Regarding forget password request',
      text: 'This is forget password response from Trendalyze',
      html: '<p>Your password is <b>sample</b></p>'
  }, function(error, response){
      if(error){
          console.log('Failed in sending mail');
          console.dir({success: false, existing: false, sendError: true});
          console.dir(error);
          res.end('Failed in sending mail');
      }else{
          console.log('Successful in sedning email');
          console.dir({success: true, existing: false, sendError: false});
          console.dir(response);
          res.end('Successful in sedning email');
      }
  });
}).listen(8000);
console.log('Server listening on port 8000');
