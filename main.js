document.addEventListener('DOMContentLoaded', async () => {
    const countries = ["China", "India", "United States", "Indonesia", "Pakistan", "Brazil", "Nigeria", "Bangladesh", "Russia", "Mexico", "Japan", "Ethiopia", "Philippines", "Egypt", "Vietnam", "DR Congo", "Turkey", "Iran", "Germany", "Thailand", "United Kingdom", "France", "Italy", "Tanzania", "South Africa", "Myanmar", "Kenya", "South Korea", "Colombia", "Spain", "Uganda", "Argentina", "Algeria", "Sudan", "Ukraine", "Iraq", "Afghanistan", "Poland", "Canada", "Morocco", "Saudi Arabia", "Uzbekistan", "Peru", "Angola", "Malaysia", "Mozambique", "Ghana", "Yemen", "Nepal", "Venezuela", "Madagascar", "Cameroon", "Côte d'Ivoire", "North Korea", "Australia", "Niger", "Taiwan", "Sri Lanka", "Burkina Faso", "Mali", "Romania", "Malawi", "Chile", "Kazakhstan", "Zambia", "Guatemala", "Ecuador", "Syria", "Netherlands", "Senegal", "Cambodia", "Chad", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "Tunisia", "Bolivia", "Belgium", "Haiti", "Cuba", "South Sudan", "Dominican Republic", "Czech Republic (Czechia)", "Greece", "Jordan", "Portugal", "Azerbaijan", "Sweden", "Honduras", "United Arab Emirates", "Hungary", "Tajikistan", "Belarus", "Austria", "Papua New Guinea", "Serbia", "Israel", "Switzerland", "Togo", "Sierra Leone", "Hong Kong", "Laos", "Paraguay", "Bulgaria", "Libya", "Lebanon", "Nicaragua", "Kyrgyzstan", "El Salvador", "Turkmenistan", "Singapore", "Denmark", "Finland", "Congo", "Slovakia", "Norway", "Oman", "State of Palestine", "Costa Rica", "Liberia", "Ireland", "Central African Republic", "New Zealand", "Mauritania", "Panama", "Kuwait", "Croatia", "Moldova", "Georgia", "Eritrea", "Uruguay", "Bosnia and Herzegovina", "Mongolia", "Armenia", "Jamaica", "Qatar", "Albania", "Puerto Rico", "Lithuania", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "North Macedonia", "Slovenia", "Guinea-Bissau", "Latvia", "Bahrain", "Equatorial Guinea", "Trinidad and Tobago", "Estonia", "Timor-Leste", "Mauritius", "Cyprus", "Eswatini", "Djibouti", "Fiji", "Réunion", "Comoros", "Guyana", "Bhutan", "Solomon Islands", "Macao", "Montenegro", "Luxembourg", "Western Sahara", "Suriname", "Cabo Verde", "Micronesia", "Maldives", "Malta", "Brunei", "Guadeloupe", "Belize", "Bahamas", "Martinique", "Iceland", "Vanuatu", "French Guiana", "Barbados", "New Caledonia", "French Polynesia", "Mayotte", "Sao Tome & Principe", "Samoa", "Saint Lucia", "Channel Islands", "Guam", "Curaçao", "Kiribati", "Grenada", "St. Vincent & Grenadines", "Aruba", "Tonga", "U.S. Virgin Islands", "Seychelles", "Antigua and Barbuda", "Isle of Man", "Andorra", "Dominica", "Cayman Islands", "Bermuda", "Marshall Islands", "Northern Mariana Islands", "Greenland", "American Samoa", "Saint Kitts & Nevis", "Faeroe Islands", "Sint Maarten", "Monaco", "Turks and Caicos", "Saint Martin", "Liechtenstein", "San Marino", "Gibraltar", "British Virgin Islands", "Caribbean Netherlands", "Palau", "Cook Islands", "Anguilla", "Tuvalu", "Wallis & Futuna", "Nauru", "Saint Barthelemy", "Saint Helena", "Saint Pierre & Miquelon", "Montserrat", "Falkland Islands", "Niue", "Tokelau", "Holy See"]
    const populations = [1439323776, 1380004385, 331002651, 273523615, 220892340, 212559417, 206139589, 164689383, 145934462, 128932753, 126476461, 114963588, 109581078, 102334404, 97338579, 89561403, 84339067, 83992949, 83783942, 69799978, 67886011, 65273511, 60461826, 59734218, 59308690, 54409800, 53771296, 51269185, 50882891, 46754778, 45741007, 45195774, 43851044, 43849260, 43733762, 40222493, 38928346, 37846611, 37742154, 36910560, 34813871, 33469203, 32971854, 32866272, 32365999, 31255435, 31072940, 29825964, 29136808, 28435940, 27691018, 26545863, 26378274, 25778816, 25499884, 24206644, 23816775, 21413249, 20903273, 20250833, 19237691, 19129952, 19116201, 18776707, 18383955, 17915568, 17643054, 17500658, 17134872, 16743927, 16718965, 16425864, 15893222, 14862924, 13132795, 12952218, 12123200, 11890784, 11818619, 11673021, 11589623, 11402528, 11326616, 11193725, 10847910, 10708981, 10423054, 10203134, 10196709, 10139177, 10099265, 9904607, 9890402, 9660351, 9537645, 9449323, 9006398, 8947024, 8737371, 8655535, 8654622, 8278724, 7976983, 7496981, 7275560, 7132538, 6948445, 6871292, 6825445, 6624554, 6524195, 6486205, 6031200, 5850342, 5792202, 5540720, 5518087, 5459642, 5421241, 5106626, 5101414, 5094118, 5057681, 4937786, 4829767, 4822233, 4649658, 4314767, 4270571, 4105267, 4033963, 3989167, 3546421, 3473730, 3280819, 3278290, 2963243, 2961167, 2881053, 2877797, 2860853, 2722289, 2540905, 2416668, 2351627, 2225734, 2142249, 2083374, 2078938, 1968001, 1886198, 1701575, 1402985, 1399488, 1326535, 1318445, 1271768, 1207359, 1160164, 988000, 896445, 895312, 869601, 786552, 771608, 686884, 649335, 628066, 625978, 597339, 586632, 555987, 548914, 540544, 441543, 437479, 400124, 397628, 393244, 375265, 341243, 307145, 298682, 287375, 285498, 280908, 272815, 219159, 198414, 183627, 173863, 168775, 164093, 119449, 112523, 110940, 106766, 105695, 104425, 98347, 97929, 85033, 77265, 71986, 65722, 62278, 59190, 57559, 56770, 55191, 53199, 48863, 42876, 39242, 38717, 38666, 38128, 33931, 33691, 30231, 26223, 18094, 17564, 15003, 11792, 11239, 10824, 9877, 6077, 5794, 4992, 3480, 1626, 1357, 801]

    const prevHash = localStorage.getItem('hash')
    let d = new Date()
    d.setHours(0, 0, 0, 0)
    let string = (+d).toString(36)
    let hash = 0
    for (let i = 0; i < string.length; i++) {
        hash = ((hash << 5) - hash) + string.charCodeAt(i)
        hash |= 0
    }
    localStorage.setItem('hash', String(hash))
    const targetCountry = countries[hash % 235]
    const targetPopulation = populations[hash % 235]

    const root = document.documentElement
    const guessInput = document.getElementById('guessInput')
    const guessButton = document.getElementById('guessButton')
    const copyButton = document.getElementById('copyButton')
    const [instructionsModal, settingsModal] = document.getElementsByClassName('modal')
    const [instructionsButton, settingsButton] = document.getElementsByClassName('modal-button')
    const closeButtons = document.getElementsByClassName('close')
    const darkModeButton = document.getElementById('darkMode')

    let guesses = []
    const prevGuesses = JSON.parse(localStorage.getItem('guesses'))
    if (prevGuesses && (!prevHash || prevHash === String(hash))) prevGuesses.forEach(guess => addGuess(guess))

    function autocomplete(inp, arr) {
        const disp = arr.reverse()
        let currentFocus
        inp.addEventListener('input', function() {
            let a, b, val = this.value
            closeAllLists()
            if (!val) return false
            currentFocus = -1
            a = document.createElement('div');
            a.setAttribute('id', this.id + 'autocomplete-list')
            a.setAttribute('class', 'autocomplete-items')
            this.parentNode.appendChild(a)
            for (let i = 0; i < disp.length; i++) {
                if (disp[i].toUpperCase().includes(val.toUpperCase())) {
                    b = document.createElement('div')
                    const start = disp[i].toUpperCase().indexOf(val.toUpperCase())
                    const end = start + val.length
                    b.innerHTML = disp[i].substring(0, start)
                    b.innerHTML += '<strong>' + disp[i].substring(start, end) + '</strong>'
                    b.innerHTML += disp[i].substring(end)
                    b.innerHTML += "<input type='hidden' value='" + disp[i] + "'>"
                    b.addEventListener('click', function() {
                        inp.value = this.getElementsByTagName('input')[0].value
                        closeAllLists()
                    })
                    a.appendChild(b)
                }
            }
        })
        inp.addEventListener('keydown', function(event) {
            let x = document.getElementById(this.id + 'autocomplete-list')
            if (x) x = x.getElementsByTagName('div')
            if (event.keyCode === 40) {
                currentFocus++
                addActive(x)
            } else if (event.keyCode === 38) {
                currentFocus--
                addActive(x)
            } else if (event.keyCode === 13) {
                if (currentFocus > -1 && x) {
                    inp.value = x[currentFocus].innerText
                    closeAllLists()
                }
            }
        })
        function addActive(x) {
            if (!x) return false
            removeActive(x)
            if (currentFocus >= x.length) currentFocus = 0
            if (currentFocus < 0) currentFocus = x.length - 1
            x[currentFocus].classList.add('autocomplete-active')
        }
        function removeActive(x) {
            for (let i = 0; i < x.length; i++) {
                x[i].classList.remove('autocomplete-active')
            }
        }
        function closeAllLists(element) {
            let x = document.getElementsByClassName('autocomplete-items')
            for (let i = 0; i < x.length; i++) {
                if (element !== x[i] && element !== inp) {
                    x[i].parentNode.removeChild(x[i])
                }
            }
        }
        document.addEventListener('click', event => closeAllLists(event.target))
    }
    autocomplete(guessInput, countries.slice().sort())

    function addGuess(guess) {
        if (guesses.length < 6) {
            guessInput.value = ''
            const guessRectangle = document.getElementById(String(2 * guesses.length + 1))
            guessRectangle.innerText = guess
            const hintSquare = document.getElementById(String(2 * guesses.length + 2))
            hintSquare.setAttribute('data-animation', 'flip-in')
            setTimeout(() => hintSquare.setAttribute('data-animation', 'flip-out'), 100)
            let icon = document.createElement('i')
            if (targetPopulation > populations[countries.indexOf(guess)]) {
                icon.setAttribute('class', 'fa-solid fa-arrow-up')
            } else if (targetPopulation < populations[countries.indexOf(guess)]) {
                icon.setAttribute('class', 'fa-solid fa-arrow-down')
            } else {
                icon.setAttribute('class', 'fa-solid fa-check')
                guessInput.style.display = 'none'
                guessButton.style.display = 'none'
                copyButton.style.display = 'block'
                for (let i = 2 * guesses.length + 3; i <= 12; i++) document.getElementById(String(i)).style.display = 'none'
                document.getElementById('answer').innerText = targetCountry.toUpperCase() + '\nPopulation: ' + targetPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            if (targetPopulation !== populations[countries.indexOf(guess)] && guesses.length === 5) {
                guessInput.style.display = 'none'
                guessButton.style.display = 'none'
                copyButton.style.display = 'block'
                document.getElementById('answer').innerText = targetCountry.toUpperCase() + '\nPopulation: ' + targetPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            setTimeout(() => hintSquare.appendChild(icon), 100)
            guesses.push(guess)
            localStorage.setItem('guesses', JSON.stringify(guesses))
        }
    }

    guessButton.addEventListener('click', () => {
        const country = countries.find(country => country.toUpperCase() === guessInput.value.toUpperCase())
        if (country) {
            addGuess(country)
        } else {
            guessInput.setAttribute('data-animation', 'shake')
            setTimeout(() => guessInput.removeAttribute('data-animation'), 1000)
        }
    })

    copyButton.addEventListener('click', () => {
        for (let i = 1; i <= guesses.length; i++) {
            const square = document.getElementById(String(i * 2))
            square.setAttribute('data-animation', 'bounce')
            setTimeout(() => square.removeAttribute('data-animation'), 1000)
        }

        let game = 'Pople ' + d.getDate() + '/' + (d.getMonth() + 1) + ' ' + guesses.length + '/6\n'
        for (let i = 1; i <= 6; i++) {
            const icon = document.getElementById(String(i * 2)).childNodes[0]
            if (icon) {
                const classes = icon.getAttribute('class')
                if (classes.includes('fa-arrow-up')) game += '⬆️\n'
                else if (classes.includes('fa-arrow-down')) game += '⬇️\n'
                else game += '☑️\n'
            } else {
                break
            }
        }
        game += 'https://tusharmurali.github.io/pople'
        if (!game.includes('☑️'))
            game = game.replace('Pople ' + d.getDate() + '/' + (d.getMonth() + 1) + ' ' + guesses.length + '/6\n','Pople ' + d.getDate() + '/' + (d.getMonth() + 1) + ' X/6\n')
        navigator.clipboard.writeText(game)
    })
    instructionsButton.addEventListener('click', () => {
        instructionsModal.style.display = 'block'
    })
    settingsButton.addEventListener('click', () => {
        settingsModal.style.display = 'block'
    })
    closeButtons[1].addEventListener('click', () => {
        instructionsModal.style.display = 'none'
    })
    closeButtons[3].addEventListener('click', () => {
        settingsModal.style.display = 'none'
    })
    if (localStorage.getItem('darkMode')) {
        darkModeButton.checked = JSON.parse(localStorage.getItem('darkMode'))
    } else {
        darkModeButton.checked = false
    }
    if (darkModeButton.checked) {
        enableDarkMode()
    }
    darkModeButton.addEventListener('click', () => {
        localStorage.setItem('darkMode', darkModeButton.checked)
        if (darkModeButton.checked) {
            enableDarkMode()
        } else {
            disableDarkMode()
        }
    })
    function enableDarkMode() {
        root.style.setProperty('--border', '#3a3a3c')
        root.style.setProperty('--title', '#d7dadc')
        root.style.setProperty('--text', '#121213')
        root.style.setProperty('--description', '#818384')
        root.style.setProperty('--icon', '#565758')
    }
    function disableDarkMode() {
        root.style.setProperty('--border', '#d3d6da')
        root.style.setProperty('--title', '#1a1a1b')
        root.style.setProperty('--text', '#ffffff')
        root.style.setProperty('--description', '#787c7e')
        root.style.setProperty('--icon', '#878a8c')
    }
})