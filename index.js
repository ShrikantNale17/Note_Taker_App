let myNotes = []
const noteEl = document.getElementById("note")
const addBtn = document.getElementById("add-btn")
const notesBody = document.getElementById("notesBody")
const noteDetails = document.getElementById("noteDetails")
const notesFromLocalStorage = JSON.parse(localStorage.getItem("notes"))
const popid = document.getElementById("popup")
let popupBody = document.getElementById("popup-body")
let staticBackdropLabel = document.getElementById("staticBackdropLabel")

if (notesFromLocalStorage) {
    myNotes = notesFromLocalStorage
    render(myNotes)
}

addBtn.addEventListener("click", function () {
    /* alert("add btn clicked!") */
    if(noteEl.value == "") {
        alert("Enter data to Save Note!")
        return
    }
    const note = JSON.stringify(noteEl.value)
    noteEl.value = ''
    if(myNotes.push(note)) {
        alert("Note added successfully!")
    }
    localStorage.setItem("notes", JSON.stringify(myNotes))
    render(myNotes)
})

function viewDetails(noteNo) {
    const note = myNotes[noteNo]
    popupBody.textContent = note
    staticBackdropLabel.textContent = `Note ${noteNo+1}`
    popid.click()      
    
}

function render(allnotes) {
    let noteList = ""
    for (let i = 0; i < allnotes.length; i++) {
        noteList += `
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Note ${i + 1}</h5>
                        <p class="card-text">${allnotes[i].substr(0, 50)}...</p>
                        <button class="btn btn-primary" onclick="viewDetails(${i})">View Details</button>
                        
                    </div>
                </div>
            </div>
        `
    }
    notesBody.innerHTML = noteList

}
