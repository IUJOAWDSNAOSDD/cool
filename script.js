const baseArray = [
    'A', 'T', 'C', 'G'
]


const baseTranscribedArray = [
    'U', 'A', 'G', 'C'
]

function calculate() {
    let base = document.getElementById('inputBase').value
    if (base == false) {
        document.getElementById('outputBase').innerHTML = 'Output: Please Enter A Base Line'
    } else {
        let baseLength = base.length


        console.log(base)


        console.log(baseLength)


        const baseTranscribed = []


        for (let i = 0; i < baseLength; i++) {
            baseTranscribed[i] = base.charAt(i)
            for (let a = 0; a < 4; a++) {
                if (baseTranscribed[i] === baseArray[a]) {
                    baseTranscribed[i] = baseTranscribedArray[a]
                    break
                }
            }
        }


        console.log(baseTranscribed.join(''))
        
        document.getElementById('outputBase').innerHTML = 'Output: ' + baseTranscribed.join('')


        console.log(baseTranscribed)


        const baseTranscribedLineArray = []


        let baseNumber = 0;
        
        for (let b = 0; b < baseLength/3; b++) {
            let baseTemp = []
            for (c = 0; c < 3; c++) {
                baseTemp[c] = baseTranscribed[baseNumber]
                baseNumber += 1
            }
            baseTranscribedLineArray[b] = baseTemp.join('')
        }

        console.log(baseTranscribedLineArray)
    }
}
