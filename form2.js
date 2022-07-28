var nameError = document.getElementById('name-error');
var addressError = document.getElementById('address-error');

function validateName(){
    var name = document.getElementById('contact-name').value;


    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateAddress(){
    var address = document.getElementById('contact-address').value;

    if(address.length == 0){
        addressError.innerHTML = 'Password is required';
        return false;
    }
    addressError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateAddress()){
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    } 
    else{
        swal({
            title: "Success",
            title: "You login",
            icon: "success",
        }).then((terus) => {
            if (terus){
                window.location.href = "sidebar.html";
            }
        });
    }
} 