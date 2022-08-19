// Code your solutions in this file
const names=['Guadalupe', 'Ollie', 'Aki']
const event='surprise'

function writeCards(names,event){
    let thankYou=[]
    for(let i=0;i<names.length;i++){
       thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
       
    }
    return thankYou;
}

function countDown(){
   let countDown=11
    while(countDown--){
        console.log(countDown) ;
      
      }
        

}