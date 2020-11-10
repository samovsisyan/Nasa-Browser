const API_KEY = "vsOioM79hYpi8fMRm0Bs5kwcffjwKdzXYc5LqwCs"



export const getApod = async (date) => {
    try {
        // const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`);
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=573cUUcMGssr0HUH9lnrDw9i7Q4kGciCZ7fuqGbx`);
        const data = await response.json();
        console.log('AstronomyPictureOfTheDay', data)
        console.log('datedatedatedatedatedate', date)
        return data;
    } catch (e) {
        console.log(e)
    }
};