var name_students_array = [];

function submit() {
    var name1 = document.getElementById("name_1").value; 
    var name2 = document.getElementById("name_2").value;
    var name3 = document.getElementById("name_3").value;  
    var name4 = document.getElementById("name_4").value; 
    var name5 = document.getElementById("name_5").value; 
    var name6 = document.getElementById("name_6").value; 
    var name7 = document.getElementById("name_7").value; 
    var name8 = document.getElementById("name_8").value; 
    var name9 = document.getElementById("name_9").value; 
    var name10 = document.getElementById("name_10").value; 

    name_students_array.push(name1); 
    name_students_array.push(name2); 
    name_students_array.push(name3); 
    name_students_array.push(name4); 
    name_students_array.push(name5); 
    name_students_array.push(name6); 
    name_students_array.push(name7); 
    name_students_array.push(name8); 
    name_students_array.push(name9); 
    name_students_array.push(name10); 

    console.log(name_students_array);
    document.getElementById("display").innerHTML=name_students_array;
    document.getElementById("submit").style.display='none';
    document.getElementById("sort").style.display="inline-block";
}

function sorting() {
    name_students_array.sort(); 
    console.log(name_students_array);
    document.getElementById("display").innerHTML=name_students_array;
}