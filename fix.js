// const Key='&appid={48e336d340c773291772bb1254ded73e}'

const find=document.querySelector('.find')
const search=document.querySelector('.search')
const tempp=document.querySelector('.temp')
const country =document.querySelector('.country ')
const degree=document.querySelector('.degree-1')
const name=document.querySelector('.name-deg')
const wind=document.querySelector('.wind-1')
const windname=document.querySelector('.wind-name')
const clouds=document.querySelector('.cloud')
// const Api= 



find.addEventListener('click', function(e){
    e.preventDefault()
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ search.value +'&appid=48e336d340c773291772bb1254ded73e&units=metrics')
    .then((response)=> response.json())
    .then((data)=> {

        tempp.innerHTML=Math.round(data.main.temp) + "°C"
        country.innerHTML=search.value;
        degree.innerHTML=data.main.humidity + "°C"
        wind.innerHTML=data.wind.speed + "°C"
        console.log(data)

        // if (data.weather[0].main =='Rain'){
        //     clouds.textContent=`<img src='images/rain.jpg' alt='rain'/>`
        // }
    })
    .catch((err)=> alert('invalid'))

    
})


// search.addEventListener('submit',function(e){
//     if
// })
