let tableBody=document.getElementById("table-body");
console.log(tableBody);
// tableBody.style.border="2px solid red"
let url="https://mock-api-template-rh6s.onrender.com/userlist";
window.addEventListener("load", () => {
    fetchData();
});
function fetchData() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            displayData(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
}
function displayData(data){
    tableBody.innerHTML=''||null;
 data.forEach(element => {
    let newRow=document.createElement("tr");
    let profile=document.createElement('td');
    let img=document.createElement('img');
    img.style.width='40px';
    profile.append(img);
    img.setAttribute("src",element.profile);
    let name=document.createElement('td');
    name.textContent=element.name;
    let contact=document.createElement('td');
    contact.textContent=element.contact
    let email=document.createElement('td');
    email.innerText=element.email
    let country=document.createElement('td');
    country.textContent=element.country;
    let status=document.createElement('td');
    let statusBtn=document.createElement('button');
    statusBtn.textContent=element.status;
    status.append(statusBtn)
    // status.textContent=element.status
    let company=document.createElement('td');
    company.textContent=element.company
    let joindate=document.createElement('td');
    joindate.textContent=element.joinDate;
    let actions=document.createElement('td')

    actions.style.display="flex";

    let editBtn=document.createElement('button')
    editBtn.className='fas fa-edit'
    editBtn.style.marginLeft="3%"
    editBtn.style.padding="5px";
    let delBtn=document.createElement('button')
    delBtn.className='fas fa-trash'
    delBtn.style.marginLeft='3%';
    delBtn.style.padding='5px';
    let addBtn=document.createElement('button');
    addBtn.className='fa-solid fa-user-plus';
    addBtn.style.padding="2px";
    statusBtn.style.borderRadius='20px';
    statusBtn.style.height='10px';
    statusBtn.style.width='80px'
    statusBtn.style.padding='0 10px 25px 10px'
    if(status.innerText==='active'){
        statusBtn.style.backgroundColor='blue';
        statusBtn.style.padding=' 0px 15px 25px 15px'
    }
    else if(status.innerText==='inactive'){
        statusBtn.style.backgroundColor='red'

    }
    else if(status.innerText==='pending'){
        statusBtn.style.backgroundColor='orange'
    }
    else if(status.innerText==='hold'){
        statusBtn.style.backgroundColor='lightblue'
    }
    else{
        statusBtn.style.backgroundColor='green'
    }
    editBtn.style.backgroundColor='#F16A18'
    editBtn.style.borderColor='#F16A18'
    editBtn.style.color='#FFFFFF';
    editBtn.style.fontWeight='100';
    delBtn.style.backgroundColor='#C03221';
    delBtn.style.borderColor='#C03221';
    delBtn.style.color='#FFFFFF'
    // delBtn.style.fontWeight='300';
    addBtn.style.backgroundColor='#1AA053'
    addBtn.style.borderColor='#1AA053'
    addBtn.style.color='#FFFFFF'
    // addBtn.style.fontWeight='100';
    actions.append(addBtn,editBtn,delBtn);
    
    newRow.append(profile,name,contact,email,country,status,company,joindate,actions);
    
    tableBody.append(newRow)
    
 });
}