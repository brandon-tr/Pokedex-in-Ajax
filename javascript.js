$(document).ready(function(){

  for(var i = 1; i <= 151; i++) {
    $('#images').append('<img id='+i+' src=http://pokeapi.co/media/img/'+i+'.png>');

  }

  $('img').click(function(){
    var id = $(this).attr('id');
                $.get("http://pokeapi.co/api/v2/pokemon/"+id+"/", function(res) {
                    $('#side').html(`
                      <img src=http://pokeapi.co/media/img/${id}.png>
                      <h3><strong>Type  </strong></h3>
                      <ul>
                        ${getTypes(res.types)}
                      </ul>
                      <h3><strong>Height </strong></h3>
                        ${res.height}
                      <h3><strong>Weight </strong></h3>
                        ${res.weight}


                    `);
                }, "json");
             })
          });


function getTypes(ta){
  var o = '';
  for (var i = 0; i < ta.length; i++) {
    o+=`<li>${ta[i].type.name}</li>`
  }
  return o;
}
