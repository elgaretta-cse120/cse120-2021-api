var requiredFields = [
  "fullname", "age"
]


var myhobby = {
  "project" : "Painting",
  "owner": "Elgaretta Beglaryan",
  "fullname": "",
  "age": "",
  "gender": "",
  "question3": "",
  "question4": "",
  "profession": "",
  "otherProfessionValue": "",
  "time": "",
  "purchasePaintbrushes": "",
  "otherPurchasePaintbrushesValue": "",
  "question8": "",
  "enjoypainting": "",
  "question10": "",
  "paintbrushesCleaning": "",
  "otherPaintbrushesCleaningValue": "",



}

function handleFullnameChange() {
  var fullNameBox = document.getElementById("fullname")
  myhobby.fullname = fullNameBox.value;
  fullNameBox.style.backgroundColor = "white";
}


function handleAgeChange(){ 
  myhobby.age= document.getElementById("age").value
  document.getElementById("age").style.backgroundColor = "white";

}

function handleGenderChange() {
  myhobby.gender = document.getElementById("gender").value;
}

function handleQuestion3Change() {
  myhobby.question3 = document.getElementById("artactivity").value;
}

function handleQuestion4Change() {
  myhobby.question4 = document.getElementById("talentedyourself").value;
}

function handleProfessionChange(e) {
  myhobby.profession = e.target.value;
  if (myhobby.profession != "otherP") {
    myhobby.otherProfessionValue = "";
    document.getElementById("otherProfession").style.display = "none";
  } else {
    document.getElementById("otherProfession").style.display = "block";
  }
}

function handleCustomProfessionChange() {
  if (myhobby.profession == "otherP") {
    myhobby.otherProfessionValue = document.getElementById("otherProfession").value;
  }

  console.log(myhobby);
}


function handleTimeChange(e){ 
  myhobby.time= document.getElementById("timeoftheday").value

}


function handlePurchaseReplaceChange(e) {
  myhobby.purchasePaintbrushes = e.target.value;
  if (myhobby.purchasePaintbrushes != "other") {
    myhobby.otherPurchasePaintbrushesValue = "";
    document.getElementById("othertool").style.display = "none";
  } else {
    document.getElementById("othertool").style.display = "block";
  }
}

function handleCustomPurchaseReplaceChange() {
  if (myhobby.purchasePaintbrushes == "other") {
    myhobby.otherPurchasePaintbrushesValue = document.getElementById("othertool").value;
  }

  console.log(myhobby);
}

function handleQuestion8Change() {
  myhobby.question8 = document.getElementById("paintbrushlast").value;
}


function handleCheckboxChange(e) {
 var value = e.target.value;
 if (e.target.checked == true) {
   myhobby.enjoypainting = myhobby.enjoypainting + "," + value;
  }
}


function handleQuestion10Change() {
  myhobby.question10 = document.getElementById("clean").value;
}

function handlePaintbrushCleaningChange(e) {
  myhobby.paintbrushesCleaning = e.target.value;
  if (myhobby.paintbrushesCleaning != "otheranswer") {
    myhobby.otherPaintbrushesCleaningValue = "";
    document.getElementById("othertext").style.display = "none";
  } else {
    document.getElementById("othertext").style.display = "block";
  }
}

function handleCustomPaintbrushCleaningChange() {
  if (myhobby.paintbrushesCleaning == "otheranswer") {
    myhobby.otherPaintbrushesCleaningValue = document.getElementById("othertext").value;
  }

  console.log(myhobby);
}

function validateFormData() {
  var isFormValid = true;
  var keys = Object.keys(myhobby);
  keys.forEach(key => {
      if (requiredFields.indexOf(key) > -1 && myhobby[key] == "") { console.log(key, " is a required field, please add a value") 
      if(document.getElementById(key)) {
        document.getElementById(key).style.backgroundColor = "red"; 
        isFormValid = false;
      }
    }   
  })
  return isFormValid;
}

function showTheHobbyData(e){
  e.preventDefault();
  if(validateFormData() == false) {
    return;
  } else {
    console.log(myhobby);
    $.ajax({
      type: 'POST',
      url: "https://cse120-2021-api-elgaretta.herokuapp.com/data",
      data: myhobby,
      cache: false,
      dataType : 'json',
      success: function (data) {
        console.log("success");
      },
      error: function (xhr) {
        console.error("Error in post", xhr);
      },
      complete: function () {
        console.log("Complete");  
      }
    });
  }
}

function updateBook(){
  var tmp = {
   "id" : document.getElementById("_id").value,
   "fullname" : document.getElementById("fullname").value,
   "title": document.getElementById("title").value,
   "author": document.getElementById("author").value,
   "covertype": document.getElementById("covertype").value,
   "npages": document.getElementById("npages").value,
   "price": document.getElementById("price").value,
   "currency": document.getElementById("currency").value,
   "language": document.getElementById("language").value,
   "olanguage": document.getElementById("olanguage").value,
   "edition": document.getElementById("edition").value,
   "dimensions": document.getElementById("dimensions").value,
   "publisher": document.getElementById("publisher").value,
   "PDate": document.getElementById("PDate").value,
   "ODate": document.getElementById("ODate").value,
   "restriction": document.getElementById("restriction").value,
   "age": document.getElementById("age").value,
   "genre": document.getElementById("genre").value,
   }
  
  $.ajax({
      type: 'POST',
      url: "https://cse120-2021-api-elgaretta.herokuapp.com/data/update",
      data: myhobby,
      cache: false,
      dataType : 'json',
      success: function (data) {
        console.log("success");
      },
      error: function (xhr) {
        console.error("Error in post", xhr);
      },
      complete: function () {
        console.log("Complete");  
      }
    });
  }

function updateHobby(){
  var tmp = {
   "id" : document.getElementById("_id").value,
   "fullname" : document.getElementById("fullname").value,
   "age" : document.getElementById("age").value,
   "gender" : document.getElementById("gender").value,
   "question3" : document.getElementById("question3").value,
   "question4" : document.getElementById("question4").value,
   "profession" : document.getElementById("question5").value,
   "time" : document.getElementById("question6").value,
   "purchasePaintbrushes" : document.getElementById("question7").value,
   "question8" : document.getElementById("question8").value,
   "enjoypainting" : document.getElementById("question9").value,
   "question10" : document.getElementById("question10").value,
   "paintbrushesCleaning" : document.getElementById("question11").value
   
   
   }
  
  $.ajax({
      type: 'POST',
      url: "https://cse120-2021-api-elgaretta.herokuapp.com/data/update",
      data: myhobby,
      cache: false,
      dataType : 'json',
      success: function (data) {
        console.log("success");
      },
      error: function (xhr) {
        console.error("Error in post", xhr);
      },
      complete: function () {
        console.log("Complete");  
      }
    });
  }
















function loadExistingData() {
	var existingData = [];
  $.ajax({
    type : "GET",
    url : "https://cse120-2021-api-elgaretta.herokuapp.com/data",
    dataType : "json",
    success : function(data) {
      console.log("success", data);
      existingData = data;
      displayData(existingData.data);
    },
    error : function(data) {
        console.log("Error")
    }
  });
}

function displayData(existingData) {
  document.getElementById("existingData").innerHTML = "<ul>";
  for (var i = 0; i < existingData.length; i++) {
    currentBook = existingData[i];
    document.getElementById("existingData").innerHTML += "<li><i>" + currentBook.fullname + "</li> : <b>" + currentBook.title + "</b></li>";
  }
  document.getElementById("existingData").innerHTML += "</ul>"
}

function displayData(data) {
    document.getElementById("dataContainer").innerHTML = "";
    data.forEach(elem => {
        var item = document.createElement("div");
        item.id = "div" + elem["_id"];
        item.className = "item";
        if (Object.keys(elem).length == 1) {
            var span = document.createElement("span");
            span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
            item.appendChild(span);
        }
        Object.keys(elem).forEach(key => {
            if (key != "_id") {
                var span = document.createElement("span");

                var b = document.createElement("b");
                b.innerHTML = key + ": ";
                span.appendChild(b);
                
                span.className = "item";
                if (elem[key]) {
                    span.innerHTML += elem[key];
                } else {
                    var span1 = document.createElement("span");
                    span1.className = "undefined";
                    span1.innerHTML = "---";
                    span.appendChild(span1)
                }
                item.appendChild(span);

                var br = document.createElement("br");
                item.appendChild(br);
            }
        })
        var button = document.createElement("button");
        button.innerHTML = "Delete";
        button.id = elem["_id"];
        button.addEventListener("click", function(e){
            deleteData(e.target.id);
        }, false);
        item.appendChild(button);
        document.getElementById("dataContainer").appendChild(item);
    })
}



var loadedData = [];

function loadEditItem() {
    localStorage = window.localStorage;
    editItem = JSON.parse(localStorage.getItem("editItem"));
    console.log(editItem);
    document.getElementById("_id").innerHTML = editItem["_id"];
    document.getElementById("fullname").value = editItem["fullname"];
    document.getElementById("title").value = editItem["title"];   
    document.getElementById("author").value = editItem["author"]; 
    document.getElementById("covertype").value = editItem["covertype"];
    document.getElementById("npages").value = editItem["npages"];
    document.getElementById("price").value = editItem["price"];
    document.getElementById("currency").value = editItem["currency"];
    document.getElementById("language").value = editItem["language"];
    document.getElementById("olanguage").value = editItem["olanguage"];
    document.getElementById("edition").value = editItem["edition"];
    document.getElementById("dimensions").value = editItem["dimensions"];
    document.getElementById("publisher").value = editItem["publisher"];
    document.getElementById("PDate").value = editItem["PDate"];
    document.getElementById("ODate").value = editItem["ODate"];
    document.getElementById("restriction").value = editItem["restriction"];
    document.getElementById("age").value = editItem["age"];
    document.getElementById("genre").value = editItem["genre"];
    
}

function loadHobbyEditItem() {
    localStorage = window.localStorage;
    editItem = JSON.parse(localStorage.getItem("editItem"));
    console.log(editItem);
    document.getElementById("_id").innerHTML = editItem["_id"];
    document.getElementById("fullname").value = editItem["fullname"];
    document.getElementById("age").value = editItem["age"];   
    document.getElementById("gender").value = editItem["gender"];   
    document.getElementById("question3").value = editItem["question3"];
    document.getElementById("question4").value = editItem["question4"];
    document.getElementById("question5").value = editItem["question5"];
    document.getElementById("question6").value = editItem["question6"];
    document.getElementById("question7").value = editItem["question7"];
    document.getElementById("question8").value = editItem["question8"];
    document.getElementById("question9").value = editItem["question9"];
    document.getElementById("question10").value = editItem["question10"];
    document.getElementById("question11").value = editItem["question11"];
    
}




function editData(id) {
    var tmp = id.split("edit_");
    var item_id = tmp[1];

    loadedData.forEach(item => {
        if (item._id == item_id) {
            console.log(item); 
            localStorage = window.localStorage;
            localStorage.setItem('editItem', JSON.stringify(item));
            if (item.project == "Painting") {
              document.location  = "hobby_form.html";
            } else {
              document.location  = "book_form.html"; 
            }
        }
    })
}

function deleteData(id) {

    var r = confirm("Are you sure you want to delete the item with the following ID? " + id);
    if (r == false) {
        return;
    }

    var tmp = {
        "id": id
    }

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api-elgaretta.herokuapp.com/data/delete",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.getElementById("div" + id).style.display = "none";
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function saveData() {
	var tmp = {
		"test": "Data"
	}

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api-elgaretta.herokuapp.com/data",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
        	console.log("success");
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function loadExistingData() {
  myPaintingData = [];
  myBookData = [];
  myGenericData = [];
  otherData = [];
  $.ajax({
      type : "GET",
      url : "https://cse120-2021-api-elgaretta.herokuapp.com/data",
      dataType : "json",
      success : function(data) {
        console.log("success", data);
        loadedData = data.data;
        data.data.forEach(elem => {
          if (elem["owner"] == "Elgaretta Beglaryan") {
            if (elem["project"] == "Painting") {
              myPaintingData.push(elem);
            } else {
              myBookData.push(elem);
            }
          } else if (elem["fullname"] && elem["fullname"].trim() == "Elgaretta Beglaryan")
            {
              myGenericData.push(elem); 
            } else {
              otherData.push(elem);
            }
        })
        displayData(myPaintingData, "paintingDataContainer");
        displayData(myBookData, "bookDataContainer");
        displayData(myGenericData, "myGenericDataContainer");
        displayData(otherData, "otherDataContainer");
      },
      error : function(data) {
          console.log("Error")
      }
  });
}

function displayData(data, containerDivName) {
    document.getElementById(containerDivName).innerHTML = "";
    data.forEach(elem => {
        var item = document.createElement("div");
        item.id = "div" + elem["_id"];
        item.className = "item";
        if (Object.keys(elem).length == 1) {
            var span = document.createElement("span");
            span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
            item.appendChild(span);
        }
        Object.keys(elem).forEach(key => {
            if (key != "_id") {
                var span = document.createElement("span");

                var b = document.createElement("b");
                b.innerHTML = key + ": ";
                span.appendChild(b);
                
                span.className = "item";
                if (elem[key]) {
                    span.innerHTML += elem[key];
                } else {
                    var span1 = document.createElement("span");
                    span1.className = "undefined";
                    span1.innerHTML = "---";
                    span.appendChild(span1)
                }
                item.appendChild(span);

                var br = document.createElement("br");
                item.appendChild(br);
            }
        })
        var edit_button = document.createElement("button");
        edit_button.innerHTML = "Edit";
        edit_button.id = "edit_" + elem["_id"];
        edit_button.className = "edit";
        edit_button.addEventListener("click", function(e){
            editData(e.target.id);
        }, false);
        item.appendChild(edit_button);

        var button = document.createElement("button");
        button.innerHTML = "Delete";
        button.id = elem["_id"];
        button.addEventListener("click", function(e){
            deleteData(e.target.id);
        }, false);
        item.appendChild(button);
        document.getElementById(containerDivName).appendChild(item);
    })

}

function toggleOtherData() {
  var otherData = document.getElementById("otherDataContainer");
  if (otherData.style.display == "block") {
    otherData.style.display = "none";
  } else {
    otherData.style.display = "block";
  }
}






const express = require('express');
const bodyParser  = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId; 

const uri =
  "mongodb+srv://elgaretta_admin:cse120-2021-gened@cluster0.h3hz7.mongodb.net/cse120-2021-db";

const client = new MongoClient(uri);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors())

app.use(function (req, res, next) {
    res.header('Cache-Control',
               'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods',
                  'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Max-Age', '30000');
    res.setHeader('Access-Control-Allow-Headers',
                  'Content-Type, Authorization, X-Requested-With');
    next();
});  

app.get('/', function (req, res) {
  res.render('index', {});
})

app.post('/', function (req, res) {
  res.send({"message":"Sent"});
})

app.get('/data', function (req, res) {
  client.connect()
  .then(client => {
    client.db('cse120-2021-db').collection('books').find().toArray()
      .then(results => {
        console.log(results)
        res.send({"data":results});
      })
      .catch(error => console.error(error))
  })
  .catch(console.error)
})

app.post('/data', function (req, res) {
  client.connect()
  .then(client => {
    client.db('cse120-2021-db').collection('books').insertOne(req.body)
      .then(result => {
        console.log(result)
        res.send({"message":"Added"});
      })
      .catch(error => console.error(error))
  })
  .catch(console.error)
})

app.post('/data/delete', function (req, res) {
  client.connect()
  .then(client => {
    let id = req.body.id;
    const query = { "_id": ObjectId(id)};
    client.db('cse120-2021-db').collection('books').deleteOne(query)
      .then(result => {
        console.log(result.deletedCount)
        res.send({"deleted":result.deletedCount});
      })
      .catch(error => console.error(error))
  })
  .catch(console.error)
})

app.post('/data/update', function (req, res) {
  client.connect()
  .then(client => {
    let id = req.body.id;
    const query = { "_id": ObjectId(id)};
    client.db('cse120-2021-db').collection('books').updateOne(query, {$set: req.body})
      .then(result => {
        console.log(result)
        res.send({"status":"updated"});
      })
      .catch(error => console.error(error))
  })
  .catch(console.error)
})




app.listen(port, function () {
    console.log('Example app listening on port 3001!')
})

app.get('*', function(req, res) {
        res.status(404).send('Bad/Default Route.');
});
