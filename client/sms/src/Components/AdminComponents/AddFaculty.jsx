import { useState } from "react";
import facultyValidation from "../../Validations/facultyValidation";

export default function AddFaculty() {

    const [validationError, setValidationError] = useState({
        first_name: null,
        last_name: null,
        phone: '',
        email: '',
        gender: '',
        role: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        let first_name = e.target.first_name.value;

        let last_name = e.target.last_name.value;

        let phone = e.target.phone.value;

        let email = e.target.email.value;

        let gender = e.target.gender.value;

        let role = e.target.role.value;

        let data = {
            first_name,
            last_name,
            phone,
            email,
            gender,
            role,
        }

        let errs = facultyValidation(data);

        if (errs.first_name) {
            setValidationError((obj) => {
                let obj1 = {
                    ...obj,
                    first_name: errs.first_name
                }
                return obj1;
            });
        } else {
            setValidationError((obj) => {
               let obj1 = {
                    ...obj,
                    first_name: '',
                }
                return obj1;
            });
        }

        if (errs.last_name) {
            setValidationError((obj) => {
                let obj1 = {
                    ...obj,
                    last_name : errs.last_name,
                }
                return obj1;
            });
        } else {
            setValidationError((obj) =>{
                let obj1 = {
                    ...obj,
                    last_name : '',
                }
                return obj1;
            });
        }

        if (errs.phone) {
            setValidationError((obj) => {
                let obj1 = {
                    ...obj,
                    phone : errs.phone,
                }
                return obj1;
            })
        } else {
            setValidationError((obj) => {
                let obj1 = {
                    ...obj,
                    phone : '',
                }
                return obj1;
            })
        }

        if (errs.email) {
            setValidationError((obj) => {
                let obj1 = {
                    ...obj,
                    email : errs.email,
                }
                return obj1;
            })
        } else {
            setValidationError((obj) => {
                let obj1 = {
                    ...obj,
                    email : '',
                }
                return obj1;
            })
        }

        if (errs.gender) {
            setValidationError((obj) => {
                let obj1 = {
                    ...obj,
                    gender : errs.gender,
                }
                return obj1;
            })
        } else {
            setValidationError((obj) => {
              let  obj1 = {
                    ...obj,
                    gender : '',
                }
                return obj1;
            })
        }

        if (errs.role) {
            setValidationError((obj) => {
               let obj1 = {
                    ...obj,
                    role : errs.role,
                }
                return obj1;
            })
        } else {
            setValidationError((obj) => {
                let obj1 = {
                    ...obj,
                    role : '',
                }
                return obj1;
            })
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    Add Faculty
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Faculty Details
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John"
                                    required=""
                                />
                                <div style={{ fontSize: '20px', color: 'red' }}>{validationError.first_name ? validationError.first_name : ''}</div>
                            </div>
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Doe"
                                    required=""
                                />
                                <div style={{ fontSize: '20px', color: 'red' }}>{validationError.last_name ? validationError.last_name : ''}</div>

                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="9875489215"
                                    required=""
                                />
                                <div style={{ fontSize: '20px', color: 'red' }}>{validationError.phone ? validationError.phone : ''}</div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                />
                                <div style={{ fontSize: '20px', color: 'red' }}>{validationError.email ? validationError.email : ''}</div>
                            </div>
                            <div className="flex">
                                <div className="male flex mx-8">
                                    <label htmlFor="male">Male</label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="male"
                                        className="mx-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required=""
                                    />
                                </div>
                                <div className="female flex mx-8">
                                    <label htmlFor="female">Female</label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        className="mx-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div style={{ fontSize: '20px', color: 'red' }}>{validationError.gender ? validationError.gender : ''}</div>
                            <div>
                                <label
                                    htmlFor="role"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Role
                                </label>
                                <select
                                    name="role"
                                    id="role"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                >
                                    <option value="none">None</option>
                                    <option value="mern">MERN</option>
                                    <option value="python">Python</option>
                                    <option value="flutter">Flutter</option>
                                </select>
                                <div style={{ fontSize: '20px', color: 'red' }}>{validationError.role ? validationError.role : ''}</div>
                            </div>
                            <div>
                                <button className="bg-sky-500/100 p-3 rounded-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
