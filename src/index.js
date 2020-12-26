
// ******************* Var vs Let vs Const

// let edad = 10
// console.log(edad)

// if(true){
//   let edad = 20
//   console.log(edad)
// }

// console.log(edad)

// const edad = 10

// if(true){
//   const edad = 20
//   console.log(edad)
// }
// console.log(edad)

//  *************************** Funciones arrow

// function sumar(num){
//   console.log(num)
// }
// sumar(10)

// const sumarDos = (num1, num2) => (num1 + num2)


// const resultado = sumarDos(20, 30)

// console.log(resultado)

// const mensaje = nombre => {
//   return 'Hola soy ' + nombre
// }

// const resultado_2 = mensaje('Jairo')
// console.log(resultado_2)

// const sumaTres = (num = 1) =>{
//   console.log(num + 3)
// }

// sumaTres()

// ********************************* Template Strig


// const numero = (num1, num2) => `El número es: ${num1 + num2}` 

// const resultado = numero(10, 20)
// console.log(resultado)

// ********************************** Objetos

// const mascota = {
//   nombre: 'Jairo'
//   ,edad: 10
//   ,vivo: true
// }
// console.log(mascota)
// console.log(mascota.nombre)
// console.log(mascota.edad)
// console.log(mascota.vivo)
// mascota.id = 1
// mascota.razas = [12, 23, 12, 3]
// console.log(mascota)
// ********************************** Destructure Objects

// const nombreMascota = mascota.nombre
// const {edad, nombre} = mascota
// console.log(edad, nombre)

// const web = {
  //   nombre:'bluuweb',
  //   links: {
    //     enlace: 'www.bluuweb.com'
    //   },
    //   redesSociales:{
      //     youtube:{
        //       enlace: 'youtube.com/bluuweb'
        //       ,nombre: 'bluuweb yt'
        //     }
        //   }
        // }
        // console.log(web.redesSociales.youtube.enlace)

// ********************************** Fetch

// fetch("https://pokeapi.co/api/v2/pokemon")
// .then(res => res.json())
// .then(data => {
//   console.log(data.results)
//   data.results.forEach(element => {
//     console.log(element.name)
//   });
  
// })
// .catch(error => console.log(error))

// ********************************** Async Await

const obtenerpokemones = async() => {
  try{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await res.json()
    const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur')

    console.log(arrayNombres)
  }
  catch (error){
    console.log(error)
  }
}
obtenerpokemones()