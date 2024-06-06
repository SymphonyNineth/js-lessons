

function addAddressInfo<T>(data: T) {
    return {...data, addressInfo: {city: "Yerevan", street: "Tumanyan"}};
}

function addAddressInfo2(data: any) {
    return {...data, addressInfo: {city: "Yerevan", street: "Tumanyan"}};
}

function logName<T extends {name: string}>(data: T) {
    console.log(data.name);
}


const user = {
    name: "John",
    age: 30,
    profession: "Developer",
    website: "https://www.google.com"
};

const admin = {
    name: "Jane",
    age: 25,
    email: "email@gmail.com",
    isAdmin: true,   
}

logName(user)
// const userWithAddress = addAddressInfo2(user);
// const adminWithAddress = addAddressInfo2(admin);

const userWithAddress = addAddressInfo(user);
const adminWithAddress = addAddressInfo(admin);

adminWithAddress.addressInfo.street;


console.log(adminWithAddress)

