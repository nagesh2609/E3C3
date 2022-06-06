let userobj=JSON.parse(localStorage.getItem("user")) || [];
console.log(userobj)

let API="https://masai-vouchers-api.herokuapp.com/api/vouchers"

async function getData(){
    let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
    let api=await fetch(url)
    let data=await api.json();
    console.log(data);



}

function showdata(){

}

getData();