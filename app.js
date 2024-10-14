var numEquivDominoPairs = function(dominoes) {
    const hash = {}
    for(let i=0; i < dominoes.length; i++){
        const domino = dominoes[i].sort((a,b) => a-b);
        const str = `${domino[0]}-${domino[1]}`;
        if (hash[str]) {
            hash[str] +=1;
        } else {
            hash[str] = 1;
        }
    }

console.log(hash);
        let result=0;
        for (k in hash){
            if (hash[k] > 1) {
                let sum = 0;
                for (let i=1; i< hash[k]; i++){
                    sum = sum + i;
                    console.log(sum)
                }
                result += sum;
            }
        }
        return result;
};