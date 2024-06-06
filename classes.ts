// const user = {
//     name: "John",
//     age: 30,
// }

// class User {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const user2 = new User("Vardan", 24);

// console.log(user);
// console.log(user2);

// function printUserInfo(user: User) {

//     console.log(`Name: ${user.name}, Age: ${user.age}`);
    
// }

// printUserInfo(user2);
// printUserInfo(user);


abstract class Data<T> {
    data: T;
    constructor(data: T) {
        this.data = data;
    }

    abstract prepareData(): any;
}

class JSONData extends Data<{[key: string]: any}> {
    constructor(data: {[key: string]: any}) {
        super(data);
    }
    prepareData() {
        return JSON.stringify(this.data);
    }
}

class XMLData extends Data<{[key: string]: any}> {
    constructor(data: {[key: string]: any}) {
        super(data);
    }
    prepareData() {
        let xml = '<data>';
        for(let key in this.data) {
            xml += `<${key}>${this.data[key]}</${key}>`;
        }
        xml += '</data>';
        return xml;
    }
}

class CSVData extends Data<{[key: string]: any}> {
    constructor(data: {[key: string]: any}) {
        super(data);
    }
    prepareData() {
        let csv = '';
        for(let key in this.data) {
            csv += `${key},${this.data[key]}\n`;
        }
        return csv;
    }
}


function sendDataToServer<T>(data: Data<T>) {
    const preparedData = data.prepareData();
    console.log(preparedData);
}

const jsonData = new JSONData({name: "John", age: 30});
const xmlData = new XMLData({name: "John", age: 30});
const csvData = new CSVData({name: "John", age: 30});

sendDataToServer(jsonData);
sendDataToServer(xmlData);
sendDataToServer(csvData);