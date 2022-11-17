function tampil(){
    let data = localStorage.getItem("localtask");
    if(data == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(data);
    }
    let html = '';
    let tambah = document.getElementById("tambah");
    taskObj.forEach((item, food) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        html += `<tr>
                    <th scope="row">${food+1}</th>
                    ${taskCompleteValue}
                    <td>
                    <button type="button" onclick="edit(${food})" class='btn-edit'>Edit</button>
                    <button type="button" onclick="hapus(${food})" class='btn-hapus'>Delete</button>
                    </td>
                </tr>`;
    });
    tambah.innerHTML = html;
}
tampil();
let tambahkan = document.getElementById("tambahkan");
let tambahbtn = document.getElementById("tambahbtn");

tambahbtn.addEventListener("click", function(){
    addtaskinputval = tambahkan.value;
    if(addtaskinputval.trim()!=0){
        let data = localStorage.getItem("localtask");
        if(data == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(data);
        }
        taskObj.push({'task_name':addtaskinputval, 'completeStatus':false});
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        tambahkan.value = '';
    }
    tampil();
})

function edit(food){
    let savefood = document.getElementById("savefood");
    let tambahbtn = document.getElementById("tambahbtn");
    let editbtn = document.getElementById("editbtn");
    savefood.value = food;
    let data = localStorage.getItem("localtask");
    let taskObj = JSON.parse(data); 
    
    tambahkan.value = taskObj[food]['task_name'];
    tambahbtn.style.display="none";
    editbtn.style.display="block";
}
let editbtn = document.getElementById("editbtn");
editbtn.addEventListener("click", function(){
    let tambahbtn = document.getElementById("tambahbtn");
    let data = localStorage.getItem("localtask");
    let taskObj = JSON.parse(data); 
    let savefood = document.getElementById("savefood").value;
    
    for (keys in taskObj[savefood]) {
        if(keys == 'task_name'){
            taskObj[savefood].task_name = tambahkan.value;
        }
      }
    editbtn.style.display="none";
    tambahbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    tambahkan.value='';
    tampil();
})

function hapus(food){
    let data = localStorage.getItem("localtask");
    let taskObj = JSON.parse(data);
    taskObj.splice(food, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    alert('Data Makanan berhasil dihapus.');
    tampil();
}

//Randomize
function random(data){
    for (var x = data.length - 1; x > 0; x--){
        var y = Math.floor(Math.random() * (x + 1));
        var temp = data[x];
        data[x] = data[y];
        data[y] = temp;
    }
    return data;
}
function muncul(){
    var data = [
        "Rendang",
        "Gurame Bakar",
        "Ayam Goreng Sambal Matah",
        "Cah Kangkung"
    ];
    var random1 = random(data)
    document.getElementById("breakfast").value = data[0]
    document.getElementById("lunch").value = data[1]
    document.getElementById("dinner").value = data[2]
}

// JS FONT STYLE
var textWrapper = document.querySelector('.top');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.top .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.top',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });












