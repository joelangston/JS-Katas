const mainElement = document.querySelector('main')

const kata1heading = document.createElement('h1')
kata1heading.append('Kata1' + ' ')
mainElement.append(kata1heading)
let counter1 = 0
  while (counter1<= 19 ) {
    console.log (counter1)
    counter1 += 1
    kata1heading.append(counter1 + ',')
}

  

const kata2heading = document.createElement('h1')
kata2heading.append('Kata2' + ' ')
mainElement.append(kata2heading)


let counter2 = 0
while (counter2 <=18) {
console.log (counter2)
counter2 += 2
kata2heading.append(counter2 + ',')
} 

const kata3heading = document.createElement('h1')
kata3heading.append('Kata3' + ' ')
mainElement.append(kata3heading)
let counter3 = 1
 while (counter3 <= 20) {
     if (counter3 %2 ==1)
  console.log (counter3)
   counter3 += 2
   kata3heading.append(counter3 + ',')
 }



 const kata4heading = document.createElement('h1')
kata4heading.append('Kata4' + ' ')
mainElement.append(kata4heading)

let counter4 = 0
while (counter4 <= 100){
  console.log (counter4)
  counter4 += 5
  kata4heading.append(counter4 + ',')
}


const kata5heading = document.createElement('h1')
kata5heading.append('Kata5' + ' ')
mainElement.append(kata5heading)
let counter5 = 1
while (counter5 <= 100 ){
  const isSquare = Number.isInteger(Math.sqrt(counter5))
  if (isSquare){kata5heading.append(counter5 + ',')}
  console.log (counter5)
counter5 += 1



}
const kata6heading = document.createElement('h1')
kata6heading.append('Kata6' + ' ')
mainElement.append(kata6heading)

let counter6 = 20
while (counter6 >= 1 ){
  console.log (counter6)
  counter6 -= 1
  kata6heading.append(counter6 + ',')

}
const kata7heading = document.createElement('h1')
kata7heading.append('Kata7' + ' ')
mainElement.append(kata7heading)
let counter7 = 20
while (counter7 >= 1 ){
  console.log (counter7)
  counter7 -= 2
  kata7heading.append(counter7 + ',')
}

const kata8heading = document.createElement('h1')
kata8heading.append('Kata8' + ' ')
mainElement.append(kata8heading)

let counter8 = 20
while (counter8 >= 1){
  console.log (counter8)
  counter8 -= 1
  kata8heading.append(counter8 + ',')

}

const kata9heading = document.createElement('h1')
kata9heading.append('Kata9' + ' ')
mainElement.append(kata9heading)

let counter9 = 100
while (counter9 >= 1){
  console.log (counter9)
  counter9 -= 5
  kata9heading.append(counter9 + ',')

}
const kata10heading = document.createElement('h1')
kata10heading.append('Kata10' + ' ')
mainElement.append(kata10heading)
let counter10 = 100
while (counter10 >= 1 ){
  const isSquare = Number.isInteger(Math.sqrt(counter10))
  if (isSquare){kata10heading.append(counter10 + ',')}
  console.log (counter10)
counter10 -= 1
}



const kata11heading = document.createElement('h1')
kata11heading.append('Kata 11')
mainElement.append(kata11heading)
  
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
kata11heading.append(sampleArray)



const kata12heading = document.createElement('h1')
  mainElement.append(kata12heading)
  kata12heading.append('Kata 12:')
  for (let index = 0; index < sampleArray.length; index +=1) {
    let evenArray = []
    if (sampleArray[index] % 2 !== 0) {
        continue
    }
    else
    {
      evenArray.push(sampleArray[index])}
      kata12heading.append(evenArray + ", ")
  }
  
  const kata13heading = document.createElement('h1')
  mainElement.append(kata13heading)
  kata13heading.append('Kata 13:')
  for (let index = 0; index < sampleArray.length; index +=1) {
    let oddArray = []
    if (sampleArray[index] % 2 == 0) {
        continue}
    else{
      oddArray.push(sampleArray[index])}
      kata13heading.append(oddArray + ",")
  }


  
  const kata14heading = document.createElement('h1')
  mainElement.append(kata14heading)
  kata14heading.append('Kata 14:')
  for (let index = 0; index < sampleArray.length; index +=1) {
    let squareArray = []
    squareArray = sampleArray[index] * sampleArray[index]
    kata14heading.append(squareArray + ', ')
  }
  const kata15heading = document.createElement('h1')
  mainElement.append(kata15heading)
  kata15heading.append('Kata 15: ')
  let result = 0;
  for (let index = 1; index <= 20; index++) {  
      result += index;
      }
      
      kata15heading.append(result)
      const kata16heading = document.createElement('h1')
mainElement.append(kata16heading)
kata16heading.append('Kata 16: ')
let result2 = 0
for (let index = 0; index < sampleArray.length; index ++) {  
      result2 += sampleArray[index]
} 
    kata16heading.append(result2)
    
    
    const kata17heading = document.createElement('h1')
    mainElement.append(kata17heading)
    kata17heading.append('Kata 17: ')
    
    for(let index = 0; index <sampleArray.length; index += 1 ){
        for(let j = index +1; j<sampleArray.length; j+= 1){
           if(sampleArray[index]>sampleArray[j]){
              temp = sampleArray[index];
              sampleArray[index] = sampleArray[j];
              sampleArray[j] = temp;
      
           }}}
    kata17heading.append(sampleArray[0])
    
    
    
    const kata18heading = document.createElement('h1')
    mainElement.append(kata18heading)
    kata18heading.append('Kata 18: ')

    for(let index = 0; index <sampleArray.length; index += 1 ){
        for(let j = index +1; j<sampleArray.length; j+= 1){
            if(sampleArray[index]<sampleArray[j]){
                  temp = sampleArray[index];
                  sampleArray[index] = sampleArray[j];
                  sampleArray[j] = temp;
          
               }}}
        kata18heading.append(sampleArray[0])

//Mike Reames, katrine Jackson, Samantha Taylor