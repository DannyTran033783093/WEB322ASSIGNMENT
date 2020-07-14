const express = require('express')
const router = express.Router();

const foodModel = require("../models/foodDB");


router.get("/",(req,res)=>{

    res.render("../views/home",{
        food:foodModel.getFood(),
        title: "Home"});

    })
router.get("/login",(req,res)=>{

    res.render("../views/login", {title: "Login"});
})

router.get("/customerRegistration",(req,res)=>{

    res.render("../views/registration", {title: "Customer Registration"});
});

router.post("/customerRegistration",(req,res)=>{

    res.render();
});

router.get("/mealPackagePage",(req,res)=>{
   
   
    res.render("../views/meals",
    {
        food:foodModel.getFood(),
        title: "Meal Package Page"
    });
});

module.exports = router;