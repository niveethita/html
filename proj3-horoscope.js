
let input = 5
let zodiac

if (input===1) { zodiac = "Capricorn ♑"}
else if (input===2) { zodiac = "Aquarius ♒"}
else if (input===3) { zodiac = "Pisces ♓"}
else if (input===4) { zodiac = "Aries ♈"}
else if (input===5) { zodiac = "Taurus ♉"}
else if (input===6) { zodiac = "Gemini ♊"}
else if (input===7) { zodiac = "Cancer ♋"}
else if (input===8) { zodiac = "Leo ♌"}
else if (input===9) { zodiac = "Virgo ♍"}
else if (input===10) { zodiac = "Libra ♎"}
else if (input===11) { zodiac = "Scorpio ♏"}
else if (input===12) { zodiac = "Sagittarius ♐"}
else {console.log("ERROR\n IT IS NOT A VALID MONTH")}

console.log("Your zodiac sign is " + zodiac +"!")

let no = Math.floor(Math.random()*10)
let fortune
if (no===1) {fortune ="A surprise opportunity will knock on your door ✨"}
else if (no===2) {fortune ="Good vibes are coming your way 🌈"}
else if (no===3) {fortune ="Trust your gut, it knows the way 💡"}
else if (no===4) {fortune ="Today is the perfect day to start something new 🎉"}
else if (no===5) {fortune ="Big changes are ahead, embrace them! 🚀"}
else if (no===6) {fortune ="Luck is on your side 🍀"}
else if (no===7) {fortune ="A calm mind brings inner strength 🧘‍♀️"}
else if (no===8) {fortune ="An unexpected gift will find you soon 🎁"}
else if (no===9) {fortune ="Your hard work will soon pay off 🌟"}
else if (no===10) {fortune ="Someone is thinking of you today 🌻"}
else {console.log("ERROR")}

console.log("Let's see what is your fortune today...")
console.log(fortune)