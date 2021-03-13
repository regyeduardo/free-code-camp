function checkCashRegister(price, cash, cid) {
    let values = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }
    let ret = {}
    let change = []
    let diff = cash - price;

    const sum = () => cid.reduce((a, b) => a += b[1], 0)

    const defineStatus = () => {
        let vTotal = sum()
        if (vTotal === diff) {
            ret.status = "CLOSED"
            cid.map(i => change.push(i))
        } else if (vTotal < diff) {
            execInsufficient()
        } else {
            ret.status = "OPEN"
            execOpen()
        }
    }

    const execInsufficient = () => {
        change = []
        ret.status = "INSUFFICIENT_FUNDS"
    }

    const execOpen = () => {
        for (let i = cid.length - 1; i >= 0; i--) {
            if (diff >= values[cid[i][0]] && cid[i][1] > 0) {
                let place = cid[i][0]
                let qtd = parseInt(diff / values[place])
                let total = qtd * values[place]
                if (total > cid[i][1]) {
                    total = cid[i][1]
                }
                diff -= total
                diff = Number(diff.toFixed(2))
                cid[i][1] -= total
                let changes = [place, total]
                change.push(changes)
            }
        }
        if (diff > 0) {
            execInsufficient()
        }
    }


    defineStatus()
    ret.change = change
    return ret

}



console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))