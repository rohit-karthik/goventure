
export async function search(origin, destination, date) {
    const res = await fetch(`http://127.0.0.1:5000/flights/${origin}/${destination}/${date}`)
    return await res.json()
}

export async function hotelSearch(city, inDate, outDate) {
    const res = await fetch(`http://127.0.0.1:5000/hotels/${city}/${inDate}/${outDate}`)
    return await res.json()
}