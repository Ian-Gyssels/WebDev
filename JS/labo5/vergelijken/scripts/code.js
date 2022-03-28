const setup = () => {
    literals()
    literalSlice()
    sliceConcat()
}


const literals = () => {
    let a = "hallo"
    let b = "hallo"
    console.log(a == b)
    console.log(a === b)
}

const literalSlice = () => {
    let a = "hallo"
    let b = "hallo123".slice(0,5)
    console.log(a == b)
    console.log(a === b)
}

const sliceConcat = () => {
    let a = "hallo123".slice(0,5)
    let b = "hal" + "lo"
    console.log(a == b)
    console.log(a === b)
}

window.addEventListener("load", setup);