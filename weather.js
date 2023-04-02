function find(){
   try{
    city=cname.value
    console.log('city:',city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
    .then((result)=>{
        result.json()
        .then(data=>{
            viewData(data);;
        })
    })
   }
   catch{
    errorText.innerHTML="Enter valid city"
   }
}
function viewData(data){
    let cityname=data.name
    let temp=data.main.temp
    res=temp-273.15
    let feeltemp=data.main.feels_like
    res1=feeltemp-273.15
    let country=data.sys.country
    let pressure=data.main.pressure
    let humidity=data.main.humidity


    temperature.innerHTML=`${res.toFixed(2)} °C`
    feelLike.innerHTML=`Feels like ${res1.toFixed(2)} °C`
    cityName.innerHTML=cityname
    countryName.innerHTML=country
    press.innerHTML=`Pressure: ${pressure}`
    humid.innerHTML=`Humidity: ${humidity} %`

}
function myFunction() {
    let x = document.getElementById("cname");
    x.value = x.value.toUpperCase();
  }