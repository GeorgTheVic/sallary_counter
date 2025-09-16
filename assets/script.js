document.addEventListener('DOMContentLoaded', function() {
  const amount_lessons = document.querySelector('#amount_lessons'),
  usd = document.querySelector('#usd'),
  tng = document.querySelector('#tng'),
  rub = document.querySelector('#rub'),
  conversion = document.querySelector('#conversion'),
  ltw =  document.querySelector('#ltw'),
  lpw = document.querySelector('#lpw')
  let conversion_value = 0,
  ltw_value = 0,
  lpw_value = 0,
  rub_conversion_value = 0,
  rub_ltw_value = 0,
  rub_lpw_value = 0,
  usd_rate = 5.15,
  tng_to_usd_rate = 540,
  rub_rate = 360

  conversion.addEventListener('change', function() {
    if (conversion.checked) {
    conversion_value = 0.71
    rub_conversion_value = 50
  } else {
    conversion_value = 0
    rub_conversion_value = 0
  }
  })

  ltw.addEventListener('change', function() {
    if (ltw.checked) {
    ltw_value = 0.71
    rub_ltw_value = 50
  } else {
    ltw_value = 0
    rub_ltw_value = 0
  }
  })

  lpw.addEventListener('change', function() {
    if (lpw.checked) {
    lpw_value = 0.71
    rub_lpw_value = 50
  } else {
    lpw_value = 0
    rub_lpw_value = 0
  }
  })

  amount_lessons.addEventListener('input', function() {
    usd.innerHTML = (amount_lessons.value * (usd_rate + conversion_value + ltw_value + lpw_value)).toFixed(2)

    tng.innerHTML = (usd.innerHTML * tng_to_usd_rate).toFixed(2)

    rub.innerHTML = (amount_lessons.value * (rub_rate + rub_conversion_value + rub_ltw_value + rub_lpw_value)).toFixed(2)
  })
});