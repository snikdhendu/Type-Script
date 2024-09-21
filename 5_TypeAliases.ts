// in this particular process we basically create a custom type just like string , number or other type in ts
// we basically create this when we use same type many time in a function or anyother place .

// to create this we have to first write the type keyword then the name of the type we want to create let see how

type User={
    name:string;
    email:string;
    isPaid:boolean;

}

// now if we specify the type as User then we have to pass every parameter that are in the User

function createUser(user:User){

}

createUser({name:"Snikdhendu",email:"snikdhendu@gmail.com",isPaid:true})

export{}