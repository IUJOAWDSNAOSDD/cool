const baseArray = [
    'A', 'T', 'C', 'G'
]

const baseTranscribedArray = [
    'U', 'A', 'G', 'C'
]

const aminoAcid = [
    ala = ['GCU', 'GCC', 'GCA', 'GCG'],
    arg = ['CGU', 'CGC', 'CGA', 'CGG'],
    asn = ['AAU', 'AAC'],
    asp = ['GAU', 'GAC'],
    cys = ['UGU', 'UGC'],
    gln = ['CAA', 'CAG'],
    glu = ['GAA', 'GAG'],
    gly = ['GGU', 'GGC', 'GGA', 'GGG'],
    his = ['CAU', 'CAC'],
    ile = ['AUU', 'AUC', 'AUA'],
    leu = ['UUA', 'UUG', 'CUU', 'CUC', 'CUA', 'CUG'],
    lys = ['AAA', 'AAG'],
    met = ['AUG'],
    phe = ['UUU', 'UUC'],
    pro = ['CCU', 'CCC', 'CCA', 'CCG'],
    ser = ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC'],
    thr = ['ACU', 'ACC', 'ACA', 'ACG'],
    trp = ['UGG'],
    tyr = ['UAU', 'UAC'],
    val = ['GUU', 'GUC', 'GUA', 'GUG'],
    stop = ['UAA', 'UAG', 'UGA', 'UGG']
]

const aminoAcidName = [
    'Ala',
    'Arg',
    'Asn',
    'Asp',
    'Cys',
    'Gln',
    'Glu',
    'Gly',
    'His',
    'Ile',
    'Leu',
    'Lys',
    'Met',
    'Phe',
    'Pro',
    'Ser',
    'Thr',
    'Trp',
    'Tyr',
    'Val',
    'Stop'
];

function calculate() {
    let base = document.getElementById('inputBase').value
    if (base == false) {
        document.getElementById('outputBase').innerHTML = 'Base Output: Please Enter A Base Line'
    } else {
        let baseLength = base.length

        if (Number.isInteger(baseLength/3) == false) {
            document.getElementById('outputBase').innerHTML = 'Base Output: Bases are not in multiples of 3 *support for not multiples of 3 will be added never'
            return
        } else {
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
            
            document.getElementById('outputBase').innerHTML = 'Base Output: ' + baseTranscribed.join('')

            console.log(baseTranscribed)

            const baseTranscribedLineArray = []

            const aminoAcidLineArray = []

            let baseNumber = 0
            let aminoAcidNumber = 0
            
            for (let b = 0; b < baseLength/3; b++) {
                let baseTemp = []
                for (let c = 0; c < 3; c++) {
                    baseTemp[c] = baseTranscribed[baseNumber]
                    baseNumber += 1
                }
                baseTranscribedLineArray[b] = baseTemp.join('')

                console.log(baseTranscribedLineArray[b])

                for (let d = 0; d < aminoAcid.length; d++) {
                    for (let e = 0; e < aminoAcid[d].length; e++) {
                        if (baseTranscribedLineArray[b] === aminoAcid[d][e]) {
                            aminoAcidLineArray[b] = aminoAcidName[d]
                            if (aminoAcidLineArray[b] === aminoAcidName[20]) {
                                document.getElementById('outputAminoAcid').innerHTML = 'Amino Acid Output: ' + aminoAcidLineArray.join('-')
                                return
                            }
                        }
                    }
                }
            }

            document.getElementById('outputAminoAcid').innerHTML = 'Amino Acid Output: ' + aminoAcidLineArray.join('-')

            console.log(baseTranscribedLineArray)
        }
    }
}
