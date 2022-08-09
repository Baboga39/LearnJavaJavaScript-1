const A = [ 1, 2, 3, 4 ,5 ];

//  Array.prototype.find2 = function (callback){
//     var a = this.length;
//     var b = 0;
//     for(var i = 0 ; i< a ;i++)
//     {
//       if(callback(this[i])== true){
//         b = i;
//         return b;
//       }
//     }
//  }
// var c = A.find2(function(A){
//   return A === 2;
// });
// console.log(c);

// Array.prototype.Filter2 = function(callback){
//   var dodai= this.length;
//   var output = [];
//   for(var i = 0 ; i< dodai ;i++)
//   {
//     if(callback(this[i]))
//       output.push(this[i]);
//   }
//   return output;
//   }
// var html = A.Filter2(function(a){
//   return a < 3;
// })
// console.log(html)
/* Foreach */
// Array.prototype.foreach2 = function(callback){
//   for(var i=0; i<this.length;i++)
//     callback(this[i],i)
// }
// var a = A.foreach2(function(c)
// {
//   console.log(c);
// })
// console.log(a); 
/*Some */
//  Array.prototype.Some2 = function(callback){
//   var d = false;
//    for(var i =0 ; i < this.length; i++)
//    {
//     if(
//     callback(this[i],i)== 10)
//       return d =true;
//    }
//    return d;
//  }
//  var e = A.Some2(function(c)
//   {
//     return c;
//   } 
//  )
//  console.log(e);
/* Every */
//  Array.prototype.every2 = function(callback){
//   var d = true;
//    for(var i =0 ; i < this.length; i++)
//    {
//     if(
//     callback(this[i],i) == 2)
//       return d =false;
//    }
//    return d;
//  }
//  var e = A.every2(function(c)
//   {
//     return c;
//   } 
//  )
//  console.log(e);

/* Events */
// var h1elements = document.querySelectorAll('h1');
// for( let i = 0 ; i < h1elements.length;i++){
//     h1elements[i].onclick = function(e){
//         console.log(e.target);
//     }
// }
/* Promise*/
//Fake API;
// var users = [
//     {
//         id : 1,
//         name : 'A',
//         age : 3,
//     },
//     {
//         id : 2,
//         name : 'B',
//         age : 3,
//     },
//     {
//         id : 3,
//         name : 'C',
//         age : 3,
//     },
// ];
// var comment = [
//     {
//         idCm : 1 ,
//         userI: 1,
//         content: ' ABC'
//     }
//     ,
//     {
//         idCm : 2 ,
//         userI: 2,
//         content: ' ABC'
//     }
//     ,
//     {
//         idCm : 3 ,
//         userId: 3,
//         content: ' ABC'
//     }

// ];
// function getComments(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(comment);
//         },1000)
//     })
// }
// getComments() 
//     .then(function(comment){
//         var userIds = comment.map(function (){
//             return comment.userId;
//         })
//         return getUserByIds([1,2])
//         .then(function(users){
//         return users;
//     })
//     })


// .then(function(data){
//   var commentblock = document.getElementById('comment-block');
//   var html='';
//   document.comment.forEach(function(comment){
//     var user = data.users.find(function(user){
//     return user.id === comment.userId;        
//     });
//     html += `${user.name}: ${user.content}`  
//   })
//   commentblock.html= html;
// })

// function getUserByIds(userIds){
//     return new Promise(function(resolve){
//         var result = users.filter(function(user){
//             return userIds.includes(user.id);
//         });
//         resolve(result);
//     })
// }
                            /*JSon Server */
// var sourceApi= " http://localhost:3000/course";
// fetch(sourceApi)
//     .then(function(respond){
//         return respond.json();
//     })
//     .then(function(course){
//         console.log(course);
//     })

            /*API */
// var listcourse = document.querySelector('#list-course')
// var courseApi = 'http://localhost:3000/course';
// function start(){
//     getCourse(renderCourse);
//     handleForm();
// }

// start();


// function getCourse(callback){
//     fetch(courseApi)
//         .then(function(respond)
//         {
//             return respond.json();
//         })
//         .then(callback);
// }
// function createCourse(data, callback){
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         body: JSON. stringify (data)}
//     fetch(courseApi,options)
//     .then(function(respond){
//         respond.json();
//     })
//     .then(callback)
// }
// function deleteHandleCourse(id){
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         }
//         fetch(courseApi + '/' + id ,options)
//     .then(function(respond){
//         respond.json();
//     })
//     .then(function(){
//         var courseItem = document.querySelector('course-item-' + id)
//         if(courseItem){
//             courseItem.remove();
//         }
//     })
// }
// function renderCourse(course){
//     var html = course.map(function(course){
//         return `
//             <li class="course-item-${course.id}">
//                 <h4>${course.name}</h4>
//                 <p>${course.description}</p>
//                 <button onclick="deleteHandleCourse(${course.id})">Xóa </button>
//             </li>
//         `
//     })
//     listcourse.innerHTML = html.join('')
// }
// function handleForm(){
//     var createBtn= document.querySelector('#create');
//     createBtn.onclick =function(){
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;
        
//         var formdata= {
//             name: name,
//             description:description,
//         }
//         createCourse(formdata,function(){
//             getCourse(renderCourse);
//         })
//     }
// }
            /*Tab */
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// const tabs = $$('.tab-item');
// const panes = $$('.tab-pane ');
// const tabActive=$('.tab-item');
// const line= $('.tabs .line');
// line.style.left = tabActive.offsetLeft + 'px'
// line.style.width = tabActive.offsetWidth+ 'px'
// console.log(tabs,panes)
// tabs.forEach((tab,index)=>{
//     const pane = panes[index]
//     tab.onclick=function(){
//        $('.tab-item.active').classList.remove('active');
//        $('.tab-pane.active').classList.remove('active');
//        line.style.left = this.offsetLeft + 'px'
//        line.style.width = this.offsetWidth+ 'px'
//        this.classList.add('active')
//        pane.classList.add('active')
//     }
// })