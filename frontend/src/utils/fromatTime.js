
export default function formatTime(time) {
    const dateObject = new Date(time);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'UTC', // Чтобы отобразить время в формате UTC
        timeZoneName: 'short' // Чтобы отобразить сокращенное имя временной зоны
    };

    return dateObject.toLocaleString('en-US', options);

}
