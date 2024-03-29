var eventList = {}

const $on = (eventName,callback)=>{
    if(!eventList[eventName]){
        eventList[eventName] = [];
    }

    eventList[eventName].push(callback);
}

const $emit = (eventName,params)=>{
    if(eventList[eventName]){
        eventList[eventName].forEach(cb=>{
            cb(params)
        })
    }
}


const $off = (eventName,callback)=>{
    if(eventList[eventName]){
        if(callback){

           let flag =  eventList[eventName].includes(callback);
           if(flag){
               let index = eventList[eventName].indexOf(callback);
               eventList[eventName].splice(index,1);

           }

        }else{
            eventList[eventName].length = 0;
        }
    }
}


export default {//导出去
    $on,
    $emit,
    $off
}