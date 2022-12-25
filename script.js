'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

///////////////////////////////////////

// let sayılar = [1, 4, 8, 9, 10]

// let yeniDizi = sayılar.map(function (değer) {
//   return değer * 5
// })

// console
//   .log(yeniDizi.toString())

//   [(1, 2, 3)].map((v) => v + 2)

// AJAX, X ---> XML
// JSON

//Constructor

// function Kullanıcı(isim) {
//   //this = {}

//   // bu nesneye yeni özellikler ekliyor
//   this.isim = isim
//   this.yöneticiMi = false
//   // return this //Dolaylı
// }

// let kullanıcı = new Kullanıcı('Murat')

// let kullanıcı = {
//   isim: 'Murat',
//   yöneticiMi: false,
// }

// let kullanıcı2 = new Kullanıcı('Eda')

// alert(kullanıcı.isim) //Murat
// alert(kullanıcı.yöneticiMi) // false

// let car = {
//   name: 'Tofaş',
//   date: 2000,
// }

//Person Constructor

// function Person(name, yearOfBirth, job) {
//   this.name = name
//   this.yearOfBirth = yearOfBirth
//   this.job = job
//   this.calculateAge = function () {
//     return 2040 - this.yearOfBirth
//   }
// }

// let yiğit = new Person('Yiğit', 2009, 'student')
// let murat = new Person('Murat', 1986, 'teacher')

// console.log(yiğit.name)
// console.log(yiğit.calculateAge())
// console.log(murat.name)
// console.log(murat.calculateAge())

// let personal = {
//   Adi: 'Murat',
//   Soyadi: 'Akdağ',
// }

// let { Adi: adı, Soyadi: soyad } = personal
// console.log(Adi, Soyadi)

// let personal = ['Murat', 'Engin', 'Berna']

// let p1 = personal[0]
// let p2 = personal[1]
// let p3 = personal[2]
// console.log(p1, p2, p3)

// let [p1, p2, p3] = personal
// console.log(p1, p2, p3)

// İlk AJAX Çağrımız: XMLHttpRequest

// const ÜlkeBilgisiAl = function (ülke) {
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`)
//   request.send()
//   // console.log(request.responseText)
//   request.addEventListener('load', function () {
//     // console.log(this.responseText)
//     const [data] = JSON.parse(this.responseText)
//     // const data = JSON.parse(this.responseText)[0]
//     const languages = Object.values(data.languages)
//     const currencies = Object.values(data.currencies)
//     console.log(data)
//     const html = `       <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//             <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//           </div>
//         </article>`
//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1
//   })
// }

// ÜlkeBilgisiAl('turkey')
// ÜlkeBilgisiAl('italy')
// ÜlkeBilgisiAl('germany')

// let kullanıcı = {
//   adı: 'Murat',
//   yaşı: 36,
// }

// Object.keys(kullanıcı) = [adı, yaşı]
// Object.values(kullanıcı) = ["Murat", 36]
// Object.entries(kullanıcı) = [["adı","Murat"], ["yaşı",36]]

// const object1 = {
//   a: 'Metin',
//   b: 42,
//   c: false,
// }

// console.log(Object.values(object1))
const hataGöster = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
  // countriesContainer.style.opacity = 1
}
const ülkeyiGöster = function (data, className = '') {
  const languages = Object.values(data.languages)
  const currencies = Object.values(data.currencies)
  console.log(data)
  const html = `       <article class="country  ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${languages[0]}</p>
            <p class="country__row"><span>💰</span>${currencies[0].name}</p>
          </div>
        </article>`
  countriesContainer.insertAdjacentHTML('beforeend', html)
  // countriesContainer.style.opacity = 1
}
// const ülkeVeKomşuBilgisiAl = function (ülke) {
//   //1. Ülke için Ajax Çağrısı
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`)
//   request.send()
//   // console.log(request.responseText)
//   request.addEventListener('load', function () {
//     // console.log(this.responseText)
//     const [data] = JSON.parse(this.responseText)
//     // const data = JSON.parse(this.responseText)[0]
//     //1. Ülkeyi Göster
//     ülkeyiGöster(data)
//     //Komşu ülkeyi al
//     const [komşu] = data.borders
//     if (!komşu) return
//     //2. Ülke için Ajax Çağrısı
//     const request2 = new XMLHttpRequest()
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${komşu}`)
//     request2.send()
//     request2.addEventListener('load', function () {
//       // console.log(this.responseText)
//       const [data2] = JSON.parse(this.responseText)
//       console.log(data2)
//       ülkeyiGöster(data2, 'neighbour')
//     })
//   })
// }

// ülkeVeKomşuBilgisiAl('spain')

// setTimeout(() => {
//   console.log('1 saniye geçti')
//   setTimeout(() => {
//     console.log('2 saniye geçti')
//     setTimeout(() => {
//       console.log('3 saniye geçti')
//       setTimeout(() => {
//         console.log('4 saniye geçti')
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

// const request = fetch('https://restcountries.com/v3.1/name/turkey')
// console.log(request)

// const ülkeBilgisiAl = function (ülke) {
//   fetch(`https://restcountries.com/v3.1/name/${ülke}`)
//     .then(function (response) {
//       console.log(response)
//       return response.json()
//     })
//     .then(function (data) {
//       console.log(data)
//       ülkeyiGöster(data[0])
//     })
// }
const getJSON = function (url, hataMsj = 'Bir şeyler ters gitti') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${hataMsj} (${response.status})`)
    return response.json()
  })
}

// const ülkeBilgisiAl = function (ülke) {
//   //Ülke 1
//   fetch(`https://restcountries.com/v3.1/name/${ülke}`)
//     .then(
//       (response) => {
//         console.log(response)
//         if (!response.ok)
//           throw new Error(`Ülke bulunamadı (${response.status})`)
//         return response.json()
//       }
//       // (err) => alert(err)
//     )
//     .then((data) => {
//       ülkeyiGöster(data[0])
//       // const komşu = data[0].borders[0]
//       const komşu = 'qwqwqwq'
//       if (!komşu) return
//       //Ülke 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${komşu}`)
//       // fetch(`https://restcountries.com/v3.1/alpha/${komşu}`).then((response) =>
//       //   response.json()
//       // )
//       // return 23
//     })
//     .then(
//       (response) => {
//         if (!response.ok)
//           throw new Error(`Ülke bulunamadı (${response.status})`)
//         return response.json()
//       }
//       // (err) => alert(err)
//     )
//     .then((data) => ülkeyiGöster(data[0], 'neighbour'))
//     .catch((err) => {
//       console.error(`${err} 🥔🥔🥔`)
//       hataGöster(`Bir şeyler ters gitti 🧨🎇🧨 ${err.message}`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1
//     })
// }
const ülkeBilgisiAl = function (ülke) {
  //Ülke 1
  getJSON(`https://restcountries.com/v3.1/name/${ülke}`, `Ülke Bulunamadı`)
    // (err) => alert(err)

    .then((data) => {
      ülkeyiGöster(data[0])
      // console.log(data[0])
      if (!data[0].borders) throw new Error('Komşu yok')
      const komşu = data[0].borders[0]
      // const komşu = 'qwqwqwq'
      if (!komşu) return
      //Ülke 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${komşu}`,
        `Ülke bulunamadı`
      )
      // fetch(`https://restcountries.com/v3.1/alpha/${komşu}`).then((response) =>
      //   response.json()
      // )
      // return 23
    })
    .then((data) => ülkeyiGöster(data[0], 'neighbour'))
    .catch((err) => {
      // console.error(`${err} 🥔🥔🥔`)
      hataGöster(`Bir şeyler ters gitti 🧨🎇🧨 ${err.message}`)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1
    })
}

btn.addEventListener('click', function () {
  ülkeBilgisiAl('japan')
})

// ülkeBilgisiAl('qwqwqwqw')

const benNeredeyim = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=xxxxxxxx `)
    .then((res) => {
      if (!res.ok) throw new Error(`Geocoding ile ilgili problem ${res.status}`)
      return res.json()
    })
    .then((data) => {
      console.log(data)
      console.log(`${data.country}, ${data.city}'desiniz`)
    })
    .catch((err) => console.error(`${err.message}`))
}

benNeredeyim(52.508, 13.381)
benNeredeyim(19.037, 72.873)
benNeredeyim(-33.933, 18.474)
