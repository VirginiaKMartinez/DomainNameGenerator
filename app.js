let pronoun = ['the','our', 'yours'];
let adj = ['great', 'big','small' ];
let noun = ['jogger','racoon','dog'];
let domain = ['.es', '.com','.net']
  
for (let i=0; i<pronoun.length; i++){
    for (let j=0; j<adj.length; j++){
        for (let z=0; z<noun.length; z++){
            for (let n=0; n<domain.length; n++){
                console.log(pronoun[i]+adj[j]+noun[z]+domain[n]);
            }    
   
        }
   
    }
  
}
 
