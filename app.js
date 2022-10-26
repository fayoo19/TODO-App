const input = document.getElementById("myinput")
console.log(input)
const todolist = document.querySelector(".mylist")
console.log(todolist)


const list = []
const todoapp = {
    addfun(){
        if(input.value){
            list.push(input.value)
            input.value= ""
        }
        
       this.myfun ()
    },
    myfun(){
        todolist.innerHTML = ""
     list.forEach((value,index)=>{
        todolist.innerHTML +=`<li>${value} <button class="btnscnd" onclick="todoapp.delete(${index})">X</button> </li>`
     })

    
    
    },
    clear(){
        list.splice(0, list.length)
        this.myfun()


    },
    delete(index){
        list.splice(index, 1)
        this.myfun()
    }
}