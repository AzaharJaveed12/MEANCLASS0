$.getJSON('/data',function(d){
      $('#name').text(d.name);
      $('#age').text(d.age);
})