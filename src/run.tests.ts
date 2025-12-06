import {glob} from 'glob';

(async() => {

    const files = await glob("src/tests/**/*.ts");
    var i=1;
    
    for(const file of  files) {
        
        const it = i++;
        import ("./" + file.replace("src/" , "") );
        await console.log(`${it} - Executando test de unidade: ${file} !`);
    }

})();