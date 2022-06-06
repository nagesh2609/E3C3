

function myfunction(){
    // let name=document.createElement("p");
    let name=document.getElementById("name").value;
    // let email=document.createElement("p");
    let email=document.getElementById("email").value;
    // let address=document.createElement("p");
    let address=document.getElementById("address").value;
    // let amount=document.createElement("p");
    let amount=document.getElementById("amount").value;
    let myobj=new Myobj(name, email, address, amount );
    console.log(myobj)
    let userobj=JSON.parse(localStorage.getItem("user")) || [];

    userobj.push(myobj);
    localStorage.setItem("user",JSON.stringify(userobj));



    
}

function Myobj(name, email, address, amount ){
    this.name=name;
    this.email=email,
    this.address=address,
    this.amount=amount;



}

