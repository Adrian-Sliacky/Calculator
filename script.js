const res = document.getElementById("result")
const memDisButtons = document.querySelectorAll(".memory_op_disabled")
const changeAllMemButtons = (disabled) => {
    for (let i = 0; i < memDisButtons.length; i++) {
        if (disabled) {
            memDisButtons[i].setAttribute("disabled", "")

        } else {
            memDisButtons[i].removeAttribute("disabled")
        }
    }
}
let memory = false
changeAllMemButtons(true)

const mathErrorMsg = "undefined"
const maxLengthRes = 16

const calc = (value) => {
    value = value.replace("×", "*")
    value = value.replace("÷", "/")
    const calculatedValue = parseFloat(eval(value || null).toFixed(maxLengthRes - (String(value).split(".")[0].length + 1)))
    if (isNaN(calculatedValue)) {
        res.value = mathErrorMsg
        setTimeout(() => {
            res.value = ""
        }, 2200)
    } else {
        res.value = calculatedValue
    }
}

const memClear = () => {
    memory = false
    changeAllMemButtons(true)
}

const memPlus = () => {
    if (memory === false) {
        memory = parseFloat(res.value)
    } else {
        memory += parseFloat(res.value)
    }
    changeAllMemButtons(false)
}


const memRead = () => {
    // add operand
    let operand
    if ("+-/÷.×*".includes(String(res.value).charAt(String(res.value.length) - 1))) {
        operand = ""
    } else {
        operand = "+"
    }
    if (!memory === false) {
        if (res.value === "0") {
            res.value = memory
        } else {
            res.value = `${res.value}${operand}${memory}`
        }
    }
}


const addCalc = (enteredValue) => {
    if (res.value !== mathErrorMsg) {
        if (!res.value) {
            res.value = ""
        }
        if ((String(res.value).length + String(enteredValue).length) < maxLengthRes) {
            res.value += enteredValue
        }
    }
}

document.addEventListener("keydown", liveKeyboardInputHandler)

function liveKeyboardInputHandler(e) {
    e.preventDefault()
    if (e.key === "0") {
        addCalc(0)
    } else if (e.key === "1") {
        addCalc(1)
    } else if (e.key === "2") {
        addCalc(2)
    } else if (e.key === "3") {
        addCalc(3)
    } else if (e.key === "4") {
        addCalc(4)
    } else if (e.key === "5") {
        addCalc(5)
    } else if (e.key === "6") {
        addCalc(6)
    } else if (e.key === "7") {
        addCalc(7)
    } else if (e.key === "8") {
        addCalc(8)
    } else if (e.key === "9") {
        addCalc(9)
    }
    if (e.key === "+") {
        addCalc("+")
    } else if (e.key === "-") {
        addCalc("-")
    } else if (e.key === "*") {
        addCalc("*")
    } else if (e.key === "/") {
        addCalc("/")
    }
    if (e.key === ".") {
        addCalc(".")
    }
    if (e.key === "Enter") {
        calc(result.value)
    }
    if (e.key === "Backspace") {
        const resultInput = res.value
        res.value = resultInput.substring(0, res.value.length - 1)
    }
    if (e.key === "Delete") {
        res.value = ''
    }
}