import inq from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'
inq.prompt([
    {
        message:"enter your url:",
        name:"urll"
    }
  ]).then((answers) => {
 const url =answers.urll;
 var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qurl.png'));

fs.writeFile('input.txt', url, (err) => {
    if (err) throw err;

    console.log('The file has been saved!');
  }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
