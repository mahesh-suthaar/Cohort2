// 1. Weather Dashboard with Error Handling
async function getWeather(city){
    try{
    let key=`379c251a9d43397fb6f40867bc5f9723`
    let APIOpenWeatherMap = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}`
    // encodeURIComponent(city) Handles city names containing spaces or special characters

    let row = await fetch(APIOpenWeatherMap);
    
    if(!row.ok) {throw new Error('city not found or something went wrong')}
    let {name, main, weather} = await row.json()
    console.log("City:",name)
    console.log("Temperature:",(main.temp-273.15).toFixed(2)+"°C")
    console.log("Weather:",weather[0].description)
    }
    catch(err){
        console.log(err.message)
    }

}
getWeather('Jaipur')



// 2. Bulk Email Sending Simulation with Parallel Promises and Error Handling

// const users = [
//     "user1@gmail.com",
//     "user2@gmail.com",
//     "user3@gmail.com",
//     "user4@gmail.com",
//     "user5@gmail.com"
// ];

// function sendEmail(email) {
//     return new Promise((resolve, reject) => {
//         const delay = Math.random() * 3000 + 1000;

//         setTimeout(() => {
//             const isSuccess = Math.random() > 0.3;

//             if (isSuccess) {
//                 resolve(`Email sent to ${email}`);
//             } else {
//                 reject(new Error(`Failed to send email to ${email}`));
//             }
//         }, delay);
//     });
// }

// async function sendBulkEmails() {
//     console.log("Starting bulk email process...");

//     const results = await Promise.allSettled(
//         users.map(email => sendEmail(email))
//     );

//     const successful = [];
//     const failed = [];

//     results.forEach((result, index) => {
//         if (result.status === "fulfilled") {
//             successful.push(users[index]);
//             console.log("✅", result.value);
//         } else {
//             failed.push(users[index]);
//             console.error("❌", result.reason.message);
//         }
//     });

//     console.log("\n--- Email Report ---");
//     console.log("Total:", users.length);
//     console.log("Successful:", successful.length);
//     console.log("Failed:", failed.length);

//     try {
//         // Demonstrate Promise.all() rejecting on a failure.
//         await Promise.all(users.map(sendEmail));
//         console.log("All emails sent successfully!");
//     } catch (error) {
//         console.error("Promise.all error:", error.message);
//     } finally {
//         console.log("Email process is complete.");
//     }
// }

// sendBulkEmails();