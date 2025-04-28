function calculatDistance (userLat,userLon,schoolLat,schoolLon){
    const radiusOfEarth = 6371;
    const diffLat = (userLat - schoolLat) * Math.PI / 180
    const diffLon = (userLon - schoolLon)* Math.PI / 180
    const a = Math.sin(diffLat/2) * Math.sin(diffLat/2) + Math.cos(userLat * Math.PI/180) * Math.cos(schoolLat * Math.PI/180) * Math.sin(diffLon/2) * Math.sin(diffLon/2);
    const angularDistance = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return radiusOfEarth * angularDistance;
}

module.exports = calculatDistance;
