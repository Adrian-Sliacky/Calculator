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

// uncomment code below to disable right-click, that being said, don't do it! It will only annoy the user.
// document.addEventListener('contextmenu', event => event.preventDefault())


const liveKeyboardInputHandler = (k) => {
    // uncomment this if you want to catch all keyboard inputs, and sink them. But, it will also catch things like Ctrl/Cmd + R or Ctrl/Cmd + Shift/Option + I
    // k.preventDefault()

    if (k.key === "0") {
        addCalc(0)
    } else if (k.key === "1") {
        addCalc(1)
    } else if (k.key === "2") {
        addCalc(2)
    } else if (k.key === "3") {
        addCalc(3)
    } else if (k.key === "4") {
        addCalc(4)
    } else if (k.key === "5") {
        addCalc(5)
    } else if (k.key === "6") {
        addCalc(6)
    } else if (k.key === "7") {
        addCalc(7)
    } else if (k.key === "8") {
        addCalc(8)
    } else if (k.key === "9") {
        addCalc(9)
    }
    if (k.key === "+") {
        addCalc("+")
    } else if (k.key === "-") {
        addCalc("-")
    } else if (k.key === "*") {
        addCalc("*")
    } else if (k.key === "/") {
        addCalc("/")
    }
    if (k.key === ".") {
        addCalc(".")
    }
    if (k.key === "Enter") {
        calc(res.value)
    }
    if (k.key === "Backspace") {
        const resultInput = res.value
        res.value = resultInput.substring(0, res.value.length - 1)
    }
    if (k.key === "Delete") {
        res.value = ""
    }
}

document.addEventListener("keydown", liveKeyboardInputHandler)