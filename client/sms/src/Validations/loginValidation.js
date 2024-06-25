export default function(data) {
    try {
        let errs = {};

        if(!data.email || data.email.length < 1) {
            errs.email = "Email is required";
        }

        let emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        let emailValid = emailRegex.test(data.email);

        if(!emailValid) {
            errs.email = "Invalid email";
        }

        if(!data.password || data.password.length === 0) {
            errs.password = "Password is required";
        }

        let passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let passwordValid = passwordRegex.test(data.password);

        if(!passwordValid) {
            errs.password = "Invalid password";
        }
         return errs;
    } catch (error) {
        console.log("error : ", error);
    }
}