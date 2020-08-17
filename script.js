function idCard() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var Address = document.getElementById("address").value;
    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    var fullName = firstName +" "+ lastName;
   
    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = Address;

    function loopingThroughArray(numberArray){

        for (var i = 0; i < numberArray.length; i++){
               
            if (numberArray[i] <= 100){
            document.getElementById("postAge").innerHTML = "Age: " + age
            }
            else if (numberArray[i] >= 100) {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber
            }
        }            
    }
    var numbers = [age, phoneNumber];
        loopingThroughArray(numbers);
}        
idCard()