fetch("https://jsonplaceholder.typicode.com/users")
.then(Response=>Response.json())
.then(data=>{
    let card=""
    data.forEach(user => {
        card+=`
        <div class="col">
            <div class ="card">
            <img src="https://www.cavsi.com/espanol/wp-content/uploads/informatica/usuario-de-computadoras.jpg" 
            class="card-img-top" alt="Usuario">
            <div class="card-body">
                <h5 class card-title>${user.name}</h5>
                <ul class=list-group list-group-flush>
                <li class="list-group-item"><strong>Usuario </strong>${user.name}</li>

                <li class="list-group-item"><strong>Email </strong>${user.email}</li>
                
                <li class="list-group-item"><strong>Direccion </strong>${user.address.street},${user.address.city}</li>
                
                <li class="list-group-item"><strong>telefono </strong>${user.phone}</li>

                <li class="list-group-item"><strong>Compañia </strong>${user.company.name}</li>
                
                </ul>
            </div>
        </div>
        </div>
         `
        
    });
    document.getElementById("cardlist").innerHTML=card
})
