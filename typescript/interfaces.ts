interface User {
    name: string;
    age: number;
    address: {
        street: string;
        home?: string;
    }

    deleteAccount() => void;
    regesiterData(data: string) => boolean; 
}

const user: User = {
    
}