const content=document.getElementById('content')
const date=document.getElementById('date')
const time=document.getElementById('time')
const addbtn=document.getElementById('addbtn')
const deletebtn=document.getElementById('deletebtn')
const list=document.getElementById('list')

const listcontent=[]




//+
addbtn.addEventListener('click',function(){
    listcontent.push({
        content:(content.value),
        date:(date.value),
        time:(time.value)
    })

    console.log(listcontent)

    let htmlshow = '' //字串用法

    listcontent.forEach(function(ooo){  //讓陣列迴圈
        htmlshow =  htmlshow +`
        <div class="item">
                <div>
                    <p>內容：${ooo.content}</p>
                    <p>日期：${ooo.date}</p>
                    <p>時間：${ooo.time}</p>
                </div>
            </div>
        `
        
    })
    list.innerHTML = htmlshow //對字串進行網頁上的渲染
})







//-
deletebtn.addEventListener('click',function(){
    listcontent.pop()

    let htmlshow = '' //字串用法

    listcontent.forEach(function(ooo){  //讓陣列迴圈
        htmlshow =  htmlshow +`
        <div class="item">
                <div>
                    <p>內容：${ooo.content}</p>
                    <p>日期：${ooo.date}</p>
                    <p>時間：${ooo.time}</p>
                </div>
            </div>
        `
        
    })
    list.innerHTML = htmlshow 
})