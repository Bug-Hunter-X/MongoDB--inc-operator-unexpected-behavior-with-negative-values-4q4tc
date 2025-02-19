```javascript
// Correct usage of $inc operator using $inc and $min
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{count:-1},$min:[0, "$count"]});
//This will decrement the count if it is greater than 0, else will set the count to 0
```