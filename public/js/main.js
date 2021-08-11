const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer')

const getInfo = async(event)=>{
    event.preventDefault();

    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText = 'PLEASE WRITE THE CITY NAME BEFORE SERCHING!';
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ddd055515cf1c4e4410ff84869d671f7`
            
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText= arrData[0].main.temp;
            const tempMood  = arrData[0].weather[0].main;

            if(tempMood =="clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i> ";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML ="<i class='fas fa-cloud' style='color:#009ad8 ;'></i> ";
            }else if(tempMood == "Mist"){
                temp_status.innerHTML ="<i class='fas fa-smog' style='color: #a4b0be;'></i> ";
            }else if (tempMood == "Sunny"){
                temp_status.innerHTML ="<i class='fas fa-sun' style='color: #eccc68;'></i> ";
            }else if (tempMood == "Haze"){
                temp_status.innerHTML ="<i class='fas fa-sun' style='color: #eccc68;'></i> ";
            }else if (tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i> ";
            }else {
                temp_status.innerHTML = "<i class='fal fa-cloud' style='color: #a44c3de;'></i> ";
            }
            datahide.classList.remove('data_hide');
            
        }
        catch{
            city_name.innerText = 'PLEASE ENTER THE CITY NAME PROPERLY!';
            datahide.classList.add('data_hide');
        }       
    }
}
submitBtn.addEventListener('click',getInfo);