export default function(data) {
    try {
        let errs = {};

        if(!data.first_name || data.first_name.length <1) {
            errs.first_name = "First Name is required";
        }

        if(!data.last_name || data.last_name.length <1) {
            errs.last_name = "Last Name is required";
        }

        let nameRegex = /^[a-zA-Z]{2,30}$/;
        
        let firstNameValid = nameRegex.test(data.first_name);
        let lastNameValid = nameRegex.test(data.last_name);

        if(!firstNameValid) {
            errs.first_name = "Invalid name";
        }

        if(!lastNameValid) {
            errs.last_name = "Invalid name";
        }

        if(!data.phone || data.phone.length < 1) {
            errs.phone = "Phone number is required";
        }

        let phoneRegex = /^\d{10}$/;
        let phoneValid = phoneRegex.test(data.phone);

        if(!phoneValid) {
            errs.phone = "Invalid phone number";
        }

        if(!data.email || data.email.length < 1) {
            errs.email = "Email is required";
        }

        if(!data.gender) {
            errs.gender = "Gender is required";
        }

        if(data.gender !== "male" || data.gender !== "female") {
            errs.gender = "Invalid gender";
        }

        if(!data.role) {
            errs.role = "Role is required";
        }

        if(data.role === 'none') {
            errs.role = "Role is required";
        }

        let emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        let emailValid = emailRegex.test(data.email);

        if(!emailValid) {
            errs.email = "Invalid email";
        }

         return errs;
    } catch (error) {
        console.log("error : ", error);
    }
}