let welcomeWord = ''
let hours = new Date().getHours()
if (hours < 9) {
    welcomeWord = '上午好！'
} else if (hours > 9 && hours < 14) {
    welcomeWord = '中午好！'
} else if (hours > 14 && hours < 18) {
    welcomeWord = '下午好！'
} else {
    welcomeWord = '晚上好！'
}

export default welcomeWord