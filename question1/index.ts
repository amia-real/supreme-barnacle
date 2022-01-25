

const takeInteger = (chosenInteger:number) => {
    if (chosenInteger % 22 === 0) {
        console.log('candybar')
    }else if ( chosenInteger % 11 === 0) {
        console.log('bar')
    }else if (chosenInteger % 2 === 0) {
        console.log('candy')
    }else {
        console.log(chosenInteger)
    }
}

takeInteger(9)
