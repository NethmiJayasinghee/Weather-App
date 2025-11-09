let apiKey = "a93609377d4c4192a95160849252107";

function loadWeatherData(searchValue) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchValue}`) // bandi mark ek (`) dala click event eken nama allgn hdnw
        .then(res => res.json()) // convert response to JSON  //.then ------>kiyl kiyne itpse wge meaning ekk
        .then(data => {  //me then kiyn eken access wenne fetch krpu objct eketkot . eken chain ekk wge conndct wenw
          
            document.getElementById("root").innerHTML = `
<section class="flex flex-col items-center justify-center p-6 gap-6 bg-gray-100 dark:bg-gray-900 min-h-screen">

  <!-- Shared Container for Equal Width -->
  <div class="w-full max-w-4xl space-y-6">

    <!-- Weather Card -->
    <div class="flex flex-col md:flex-row items-center bg-white border border-gray-300 rounded-lg shadow-lg w-full dark:border-gray-700 dark:bg-blue-900 dark:hover:bg-gray-700">
      <img class="object-cover w-full md:w-[300px] h-[250px] md:h-auto rounded-t-lg md:rounded-none md:rounded-s-lg" src="https:${data.current.condition.icon}"  alt="Weather Icon">
      
      <div class="flex flex-col justify-center items-center md:items-start p-6 w-full">
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-1">${data.current.condition.text}</p>
        <h5 class="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center md:text-left">${data.location.country}</h5>
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-1">${data.location.name}</p>
        <p class="text-lg text-gray-700 dark:text-white">${data.current.temp_c} °C</p>
      </div>
    </div>

    <!-- User Message Box -->
    <div class="flex items-start bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full dark:bg-gray-800 dark:border-gray-700">
      <img class="w-16 h-16 rounded-full mr-4" src="images/user.jpg" alt="User">

      <div class="flex items-start bg-gray-50 dark:bg-gray-600 rounded-xl p-4 w-full">
      <div class="me-2">
        
        <div class="w-full max-w-full px-4">
  <p class="text-xl text-gray-900 dark:text-white leading-loose">
    ${data.location.localtime}<br><br>
    Have a nice Day!...
  </p>
</div>
      </div>
    </div>

  </div>
</section>


            `
            console.log(data);

        })
        //.catch(error => console.error("Error fetching weather data:", error));
        //data kiyn object eke first pramaetr ek access krnw eket atule tiyn eke data on ekt access welm dam. eken
    }

function searchByName() {
    let searchValue = document.getElementById("txtsearchField").value;
    loadWeatherData(searchValue);
    console.log(searchValue);
}

function getGeoLocation(){
    navigator.geolocation.getCurrentPosition(showPosition);//navigator kiyn eken gdk wistr access krn puluwn location idnm user ge pc deatils okom
}
//me getCureentPosition function ek showPosition kiyn function ek arn gihin call krn ek krne position parameter
function showPosition(position){
    console.log(position.coords.latitude);//methn hdn function ek uda function ek arn gihin call krn ek tama wenne
    console.log(position.coords.longitude);
    loadWeatherData(position.coords.latitude + "," + position.coords.longitude); //mekt uda tiyn para meter tika pass krn ek tama krne output bln
}

getGeoLocation();