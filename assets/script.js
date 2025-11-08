async function getExchangeRate() {
    const apiKey = 'ecaff23e2224cd9dec67a511bafc9b56'
    const url = `https://api.currencylayer.com/live?access_key=${apiKey}&currencies=KZT&source=USD&format=1`

    try {
        const response = await fetch(url)
        const data = await response.json()

        if (data.success) {
            return data.quotes.USDKZT
        } else {
            console.log('Ошибка API:', data.error.info)
            return 520
        }
    } catch (error) {
        console.error('Ошибка сети:', error)
        return 520
    }
}


let tng_to_usd_rate = 520

document.addEventListener('DOMContentLoaded', async function () {

    let conversion_value = 0,
        ltw_value = 0,
        lpw_value = 0,
        rub_conversion_value = 0,
        rub_ltw_value = 0,
        rub_lpw_value = 0,
        usd_rate = 5.15,
        rub_rate = 360

    tng_to_usd_rate = await getExchangeRate()

    console.log('Курс загружен', tng_to_usd_rate)



    const amount_lessons = document.querySelector('#amount_lessons'),
        usd = document.querySelector('#usd'),
        tng = document.querySelector('#tng'),
        rub = document.querySelector('#rub'),
        conversion = document.querySelector('#conversion'),
        ltw = document.querySelector('#ltw'),
        lpw = document.querySelector('#lpw')

    conversion.addEventListener('change', function () {
        if (conversion.checked) {
            conversion_value = 0.71
            rub_conversion_value = 50
        } else {
            conversion_value = 0
            rub_conversion_value = 0
        }
    })

    ltw.addEventListener('change', function () {
        if (ltw.checked) {
            ltw_value = 0.71
            rub_ltw_value = 50
        } else {
            ltw_value = 0
            rub_ltw_value = 0
        }
    })

    lpw.addEventListener('change', function () {
        if (lpw.checked) {
            lpw_value = 0.71
            rub_lpw_value = 50
        } else {
            lpw_value = 0
            rub_lpw_value = 0
        }
    })

    amount_lessons.addEventListener('input', function () {
        usd.innerHTML = (amount_lessons.value * (usd_rate + conversion_value + ltw_value + lpw_value)).toFixed(2)

        tng.innerHTML = (usd.innerHTML * tng_to_usd_rate).toFixed(2)

        rub.innerHTML = (amount_lessons.value * (rub_rate + rub_conversion_value + rub_ltw_value + rub_lpw_value)).toFixed(2)
    })
});
