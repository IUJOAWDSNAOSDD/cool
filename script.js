function calculate() {
    let bases = document.getElementById('inputBase').value
    if (bases == false) {
        document.getElementById('outputBase').innerHTML = 'Please Enter A Base Line'
    } else {
        let basesLength = bases.length

    console.log(bases)

    console.log(basesLength)

    const basesTranscribed = []

    for (let i = 0; i < basesLength; i++) {
        console.log(bases.charAt(i))
        basesTranscribed[i] = bases.charAt(i)

        if (basesTranscribed[i] === 'A') {
            basesTranscribed[i] = 'T'
        } else if (basesTranscribed[i] === 'T') {
            basesTranscribed[i] = 'A'
        } else if (basesTranscribed[i] === 'C') {
            basesTranscribed[i] = 'G'
        } else {
            basesTranscribed[i] = 'C'
        }
    }

    console.log(basesTranscribed.join(''))
    
    document.getElementById('outputBase').innerHTML = 'Output: ' + basesTranscribed.join('')
    }
}