const School = require('../models/schoolModel.js')
const calculatDistance = require('../utils/calculateDistance.js')

exports.postSchool = async(req,res)=>{
    try{
        const {name,address,latitude,longitude} = req.body;
        if(!name || !address || !latitude || !longitude){
            return res.status(400).json({success: false,message: 'Please fill all fields'})
        }
        const posted = await School.create({name,address,latitude,longitude})
        res.status(200).json({success: true,message: 'School Posted',data: posted})
    }catch(err){
        console.log(`Post Error : ${err.message}`)
        res.status(400).json({success: false,message: 'Internal Server Error'})
    }
}

exports.getSchoolsList = async(req,res)=>{
    try{
        const {latitude,longitude} = req.query;
        
        if(!latitude || !longitude){
            return res.status(400).json({message: 'Latitude and Longitude are required'});
        }

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        const schools = await School.find();

        const schoolsWithDistance = schools.map(school => ({
        ...school._doc,
        distance: Math.floor(calculatDistance(userLat, userLon, school.latitude, school.longitude))
        })).sort((a, b) => a.distance - b.distance);

        res.status(200).json({success: true,message: 'Schools List Getting in',data: schoolsWithDistance})
    }catch(err){
        console.log(`Post Error : ${err.message}`)
        res.status(400).json({success: false,message: 'Internal Server Error'})
    }
}