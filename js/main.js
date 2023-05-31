let toDoList = [];
let tr = 1;
let allTask = 0
let complateTask = 0

function addTask(){
    let taskName = document.getElementById('taskInput').value
    if (taskName !=''){
        let obj = {
            tartib: tr++,
            name: taskName,
            complete:false
        };
        toDoList.push(obj);
        chizish();
        allTask = toDoList.length;
        document.getElementById('allTask').innerText = allTask
    }
}

function chizish(){
    let list = ''
    console.log(toDoList)
    toDoList.forEach(function (item){
        if (item.complete){
            complateTask++
        }else{
            complateTask--
        }
      list += '<li class="list-group-item">' +
                 '<input'+ (item.complete ? "checked" :"") +'onchange="completed(this)" type="checkbox" class="mr-2" id="'+item.tartib+'"><label For="'+item.tartib+'">'+item.name+'</label>' +
              '</li>'
    });
    document.getElementById('list').innerHTML = list
    document.getElementById('completeTask').innerText = complateTask
    let progressW = (complateTask * 100 / allTask)
    document.getElementById("progress").style.width = progressW + "%";``
}


function completed(input){
    let searchId = input.getAttribute('id')
    let checked = input.getAttribute('checked')
    toDoList.forEach(function (item,i){
        if (item.tartib == searchId){
            toDoList[i].complete = item.complete ? false : true
        }
    })
    chizish()
}
