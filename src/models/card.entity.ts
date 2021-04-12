export class CardEntity {

    number: number

    getNormNumber() {
        const number = String(this.number)
        const arrNumbers = number.split('')
        for (let i = 0; i < arrNumbers.length; i++) {
            if (i % 5 === 0) {
                arrNumbers.splice(i, 0, ' ')
            }

        }
        return arrNumbers.join('')
    }

}