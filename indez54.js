//function miFuncion(...args) {
//    console.log(args.length)//;
//}

//miFuncion([123],[4567],[890],[4645757],[54])

const sumar = (...args) => {
    return args.reduce((a,b) => a + b, 0);
}