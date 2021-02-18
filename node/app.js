const fs = require('fs');

const genders = {
    male: 'male',
    female: 'female'
}

function sortByGender(gender, timeFrom, timeTo){
    fs.readdir(`${__dirname}/files/${timeFrom}`, (err, files) => {
        if (err){
            console.log(err);
            return;
        }
        console.log(files);
        files.forEach(file => {
            fs.readFile(`${__dirname}/files/${timeFrom}/${file}`, (err, data) => {
                const json = data.toString();
                const obj = JSON.parse(json);
                console.log(obj);
                if (obj.gender === gender){
                    fs.rename(
                        `${__dirname}/files/${timeFrom}/${file}`,
                        `${__dirname}/files/${timeTo}/${file}`,
                        err1 => {
                            if (err1){
                                console.log(err1);
                            }
                        })
                }
            })
        })
    })
}

sortByGender(genders.female, '18_00', '20_00');
sortByGender(genders.male, '20_00', '18_00');
