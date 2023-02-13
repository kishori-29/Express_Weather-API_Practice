const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const getInfo = async (event) => {
    event.preventDefault();
    let val = cityName.value;
    if (val === "") {
        city_name.innerHTML = "Please write the city name before search!";
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=f6b17387fa622aff8bc4a3bd043728ea`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerHTML = `${val}, ${arrData[0].sys.country}`;
            temp.innerText = Math.round(arrData[0].main.temp - 273);
            temp_status.innerText = arrData[0].weather[0].main;
            console.log(data);
        } catch {
            city_name.innerHTML = "Please enter city name properly!";
        }
    }
    // alert("sdkld");
}
submitBtn.addEventListener('click', getInfo);

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// f6b17387fa622aff8bc4a3bd043728ea