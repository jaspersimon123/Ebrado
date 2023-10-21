var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["Subject"] = document.getElementById("Subject").value;
    formData["Day"] = document.getElementById("Day").value;
    formData["Time"] = document.getElementById("Time").value;
    formData["Room"] = document.getElementById("Room").value;
    formData["Instructor"] = document.getElementById("Instructor").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Subject;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Day;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Time;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.Room;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.Instructor;
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Subject").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Day").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Time").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Room").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Instructor").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Subject;
    selectedRow.cells[1].innerHTML = formData.Day;
    selectedRow.cells[2].innerHTML = formData.Time;
    selectedRow.cells[3].innerHTML = formData.Room;
    selectedRow.cells[3].innerHTML = formData.Instructor;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("Subject").value = '';
    document.getElementById("Day").value = '';
    document.getElementById("Time").value = '';
    document.getElementById("Room").value = '';
    document.getElementById("Instructor").value = '';
    selectedRow = null;
}


function search_any() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('instructor'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 






