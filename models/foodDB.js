const food =
{
fakeDB : [] ,

init()
{
this.fakeDB.push({title: "Muscle Gain", price: 7.99, 
description:"Higher Protein and calorie portions to support your muscle gain momentum"});
this.fakeDB.push({title:"Keto", price:8.99, 
description:"High fat, low carb meals with moderate protein to achieve and sustain ketosis"});
this.fakeDB.push({title:"Weight Loss",price:6.99, 
description:"High protein, low-calorie meals with a nutrient profile tuned for weight loss"});
this.fakeDB.push({title:"Fat Burner", price:7.99, 
description:"Low carb, nurtient-rich meals with fat-burning profiles to support fat loss"});
},

getFood(){
    return this.fakeDB;
}

}
food.init();
module.exports = food;
