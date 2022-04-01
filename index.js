//PRVA IZMENA/


const fs = require('fs');

fs.mkdir('data/samples/', {recursive: true}, err =>{
    if (err) {
        console.log('Nije moguce napraviti strukturu direktorijuma');
    return;
    }

    fs.writeFile('data/samples/sample.dat','Neki tekst!', err => {
        if(err){
            console.log('Nije moguce napraviti datoteku i upisati sadrzaj!');
            return;
        }

        fs.readdir('data/samples/', (err, files) => {
            if(err){
                console.log('Nije moguce procitati spisak datoteka u direktorijumu.');
                return;
            }

                for (let file of files){
                    let filePath = 'data/samples/' + file;

                    fs.readFile(filePath, 'utf-8', (err, data) =>{
                        if(err){
                            console.log('Greska kod citanja datoteke:', filePath);
                            return; 
                        }

                        console.log('Sadrzaj datoteke:' , filePath, data);
                    });
                }
                
                
                


        })


    }) 

})

    // fs.writeFile('data/samples/sample.data', 'Neki tekst!' ), err =>{
    //    if (err) {
    //     console.log('Nije moguce napraviti datoteku i upisati sadrzaj!');
    // return;  
    // }

    // fsreaddir('data/samples/', (err, files) => {
    //     if (err) {
    //         console.log('Nije moguce napraviti procitati spisak datoteka u direktorijumu!');
    //     return;  

    //     console.log(files);
    // } 

    // }
   
    // };



    // for (let i = 0; i <10; i++){
    //     let poruka = "ovo je broj:" + (i+1);
    //     console.log(poruka);
    //     
