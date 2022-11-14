let submit = document.getElementById('submit').addEventListener("click", (() => {
    dataInput = document.getElementById('dataInput').value;
    showTodo = document.getElementById('showTodo');
    let erase = `<input type="button" onclick="delRow(event)" value="Delete">`
    let d = new Date();
    date=d.toLocaleDateString()
     template = `
        <tr>
            <td>${date}</td>
            <td>${dataInput} </td>
            <td> ${erase}</td>
        </tr>`

    
    if (dataInput != "") {
        showTodo.innerHTML += template;
        
          setTimeout(() => {
              alert("Data added successfully")
          }, 0);
    } else {
        alert("Please enter data")
    }

   
}))    


function delRow(e) {
    e.target.parentNode.parentNode.innerHTML = ""
    setTimeout(() => {
         alert("Data deleted successfully")     
    }, 0);
    
}
