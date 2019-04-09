export const config = {
    name: {
        isRequired: "Name field is required",
    },
    address: {
        isRequired: "Address field is required",
    },
    position: {
        isRequired: "Position field is required",
    },
    email:{
        isEmail:'Please enter a valid email',
        isRequired: "Email field is required",
    },
    phone_number:{
        isNumber: 'You need to enter a number',
        isRequired: "Phone number field is required",
    },
    description: {
        isRequired:'Description field is required',
    }
};