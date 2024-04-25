let totalIDs = []
if(window.localStorage.getItem('taskIDs') !== null){
    totalIDs = window.localStorage.getItem('taskIDs').split(',').map(x => Number(x));
}
let i = 0
if(window.localStorage.getItem('i') !== null){
    i = window.localStorage.getItem('i');

}

function DeleteTask(id) {
    document.getElementById(`${id}`).remove();
    totalIDs = totalIDs.filter(x => x !== id);
    window.localStorage.setItem('taskIDs', totalIDs);


    window.localStorage.removeItem(`${id}name`);
    window.localStorage.removeItem(`${id}desc`);
    window.localStorage.removeItem(`${id}time`);

}

function CreateTask(name, desc, time, _id) {

    // e.preventDefault();

    let date = new Date()
    let f_name = '';
    let f_desc = '';

    if(name === undefined){
        f_name = document.getElementById('task_name_f').value;
        f_desc = document.getElementById('task_description_f').value;
        totalIDs.push(i)
    }




    let main = document.querySelector('main');


    // let main = document.querySelector('main');

    let taskBody = document.createElement('div')
    taskBody.setAttribute('class', 'task');
    taskBody.setAttribute('id',`${_id ? _id : totalIDs[i]}` );

    let taskName = document.createElement('h2');
    taskName.setAttribute('class', 'task_title')
    taskName.innerText = name ? name : f_name;

    let taskDesc = document.createElement('p');
    taskDesc.setAttribute('class', 'task_description')
    taskDesc.innerText = desc ? desc : f_desc;

    let controls = document.createElement('div');
    controls.setAttribute('class', 'controls');

    let createTime = document.createElement('p');
    createTime.setAttribute('class', 'create_time');
    createTime.innerText = time ? time : 'created at: ' + date.getHours() + ':' + date.getMinutes();

    let delIco = document.createElement('img');
    delIco.setAttribute('src', 'assets/delete.svg');
    delIco.setAttribute('class', 'icon del');
    delIco.setAttribute('onclick', `DeleteTask(${_id ? _id : i})`);


    let editIco = document.createElement('img');
    editIco.setAttribute('src', 'assets/edit.svg');
    editIco.setAttribute('class', 'icon edit');

    let markIco = document.createElement('img');
    markIco.setAttribute('src', 'assets/mark.svg');
    markIco.setAttribute('class', 'icon mark');

    controls.appendChild(createTime);
    controls.appendChild(delIco);
    controls.appendChild(editIco);
    controls.appendChild(markIco);

    taskBody.appendChild(taskName);
    taskBody.appendChild(taskDesc);
    taskBody.appendChild(controls);

    main.appendChild(taskBody);

    if(name === undefined){
        window.localStorage.setItem(`${i}name`, f_name);
        window.localStorage.setItem(`${i}desc`, f_desc);
        window.localStorage.setItem(`${i}time`, 'created at: ' + date.getHours() + ':' + date.getMinutes());

        // SaveArrToLS(totalIDs);
        window.localStorage.setItem('taskIDs', totalIDs);
        i++;

        window.localStorage.setItem('i', i);
    }



    console.log(totalIDs);

}

function Load(){
    console.log('loading')
    for(let id of totalIDs){
        console.log('inBase: ' + id)
        if(window.localStorage.getItem(`${id}name`) !== ''){
            CreateTask(window.localStorage.getItem(`${id}name`),window.localStorage.getItem(`${id}desc`), window.localStorage.getItem(`${id}time`), id);

        }

    }
}

