
type User={
    name:string,
    email:string,
    isActive:boolean,
    readonly _id:string // here we add readonly means we can't change the _id manually let's see how

}

let newUser: User = {
    name:"Snikdhendu",
    email:"s@gmail.com",
    isActive:true,
    _id:"1234"
}

// now if we want to change the user email we can do this

newUser.email="S@GMAIL.COM"

// but if we want to change _id that will give error as this is readonly

// newUser._id='ghghhghg';