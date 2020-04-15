$(document).ready(() => {

    var dp = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var month = dp.getMonth()+1;
    var day = dp.getDate();
    var output = dp.getFullYear() + '-' +
        (month<10 ? '0' : '') + month + '-' +
        (day<10 ? '0' : '') + day;
    document.getElementById("exampleFormControlInput2").defaultValue = output;

   
       var refreshTasks = function(){
        $.ajax({
            datatype: 'json',
            url: '/api/tasks',
            type: 'get',
           
            success: (data) => {
              var count = 0;
                data.forEach(element => {
                    count++;
                    $('#left-column').append(
                      
                      '<div class="card">'+
                        '<div class="card-header" id="'+element.title+count+'">'+
                          '<h2 class="mb-0">'+
                            '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#'+element.title+'" aria-expanded="true" aria-controls="'+element.title+'">'+
                              element.title +
                            '</button>'+
                          '</h2>'+
                        '</div>'+
                        '<div id="'+element.title+'" class="collapse" aria-labelledby="'+element.title+count+'" data-parent="#accordionExample">'+
                          '<div class="card-body" id ="cardbody'+count+'">'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '</div>'
    
                    );
                      notesCall(element.title,count)
                });
                
            }

        });
      }

refreshTasks();

    var notesCall = function(title,count){

      $.ajax({
        datatype: 'json',
        url: '/api/tasks/'+title+'/notes',
        type: 'get',
      
        success: (data) => {

          data.forEach(element =>{
            
            $('#cardbody'+count).append(
              
              element.Note

            );

          })

        }

      });

    }

    $('#button1').click(() => {
      if($('#exampleFormControlInput1').val()==""){return;}
    var createTasks = function(){

      var newTitle = $('#exampleFormControlInput1').val()
      var newDescription = $('#exampleFormControlTextarea1').val()
      var newDue_date = $('#exampleFormControlInput2').val()
      var newPriority = $('#exampleFormControlSelect1').val()

      $.ajax({
        datatype: 'json',
        url: '/api/tasks',
        type: 'post',
      
        data: {title: newTitle, due_date: newDue_date, description: newDescription, status: 'Incomplete', priority: newPriority},
        success: function(data){
          alert("task with title--"+data.title+"---inserted succesfully");
      }
      });
      
    }
    createTasks();
    $('#left-column').empty();
    refreshTasks();
    });

});



