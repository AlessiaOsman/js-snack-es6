/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.
Stampare in console la bici con peso minore utilizzando il destructuring*/

console.log('js ok')

const racingBikes = [
    { 
        name: "Bianchi Oltre XR4", 
        weight: 7.0 
    },
    { 
        name: "Specialized Tarmac SL7",
        weight: 6.7 
    },
    { 
        name: "Canyon Ultimate CF SLX", 
        weight: 7.1 
    },
    { 
        name: "Trek Madone SLR 9", 
        weight: 7.2 
    }
];




const lowerWeightBike = racingBikes.reduce((result, bike)=> result.weight < bike.weight ? result : bike , racingBikes[0])

console.log(lowerWeightBike)






