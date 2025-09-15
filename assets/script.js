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
  usd_rate = 5.15,
  tng_to_usd_rate = 550,
  rub_rate = 360

  conversion.addEventListener('change', function() {
    if (conversion.checked) {
    conversion_value = 0.71
    console.log('ok')
  } else {
    conversion_value = 0
    console.log('zero')
  }
  })

  ltw.addEventListener('change', function() {
    if (ltw.checked) {
    ltw_value = 0.71
    console.log('ok')
  } else {
    ltw_value = 0
    console.log('zero')
  }
  })

  lpw.addEventListener('change', function() {
    if (lpw.checked) {
    lpw_value = 0.71
    console.log('ok')
  } else {
    lpw_value = 0
    console.log('zero')
  }
  })

  amount_lessons.addEventListener('input', function() {
    usd.innerHTML = amount_lessons.value * (usd_rate + conversion_value + ltw_value + lpw_value)
    tng.innerHTML = usd.innerHTML * tng_to_usd_rate
    rub.innerHTML = amount_lessons.value * (rub_rate + conversion_value + ltw_value + lpw_value)
  })
});