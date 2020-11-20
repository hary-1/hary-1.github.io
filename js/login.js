let val = document.getElementById('input')
     let btn = document.getElementById('btn')
     btn.onclick=function(){
       if(val.value == 'wx'){
         window.location.href = 'day1.html'
         window.localStorage.setItem('token','lizefeng')
       }else{
         val.value = ''
         alert('密码错误')
       }
     }