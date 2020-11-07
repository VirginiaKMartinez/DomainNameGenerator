/*Create a script that generate all the 
possible domain name combinations from a list 
of pronouns, adjectives and nouns*/

let pronoun = ['the','our', 'yours'];
let adj = ['great', 'big','small' ];
let noun = ['jogger','racoon','dog'];
let domain = ['.es', '.com','.net']
  
for(let indexAdj=0; indexAdj<adj.length; indexAdj++) {
    for (let indexPronoun=0; indexPronoun<pronoun.length; indexPronoun++){
        for (let indexNoun=0; indexNoun<noun.length; indexNoun++){
            for (let indexDomain=0; indexDomain<domain.length; indexDomain++){
                console.log(pronoun[indexPronoun]+adj[indexAdj]+noun[indexNoun]+domain[indexDomain]);
            }    
   
        }
   
    }
  
}
 
