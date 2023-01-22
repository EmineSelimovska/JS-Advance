function townToJson(arr) {
    const newArr = [];

    for (let i = 1; i < arr.length;i++) {
        let city = arr[i].split(/\s*\|\s*/g);
        const town = city[1];
        const latitude = Number(city[2]).toFixed(2);
        const longitude = Number(city[3]).toFixed(2);

        const obj = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),

        }
        newArr.push(obj);
    }
    console.log(JSON.stringify(newArr));
}
townToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);