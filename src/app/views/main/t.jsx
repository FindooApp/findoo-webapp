var dirs=[
  "apps",
  "events",
"jobs",
"posts",
"products",
"profiles",
"resources",
"services"];
var fs=require('fs');
var path=require('path');
function createDir(p){
  if(!fs.existsSync(p)){
    fs.mkdirSync(p);
  }
}
function createFiles(){
  dirs.forEach(function(d){
    fs.writeFileSync(path.join(d,d+".html"),"<h1>"+d+"</h1><ui-view></ui-view>");
    createDir(path.join(d,"list"));
    fs.writeFileSync(path.join(d,"list","list.html"),"<h1>list</h1>");
    createDir(path.join(d,"map"));
    fs.writeFileSync(path.join(d,"map","map.html"),"<h1>map</h1>");
    createDir(path.join(d,"detail"));
    fs.writeFileSync(path.join(d,"detail","detail.html"),"<h1>detail</h1>");
  });
}

dirs.forEach(function(d){
  console.log(`.state('search.${d}',{
        url:'/${d}',
        templateUrl: 'app/views/main/${d}/${d}.html'
      }).state('search.${d}.list',{
    url:'/list',
    templateUrl: 'app/views/main/${d}/list/list.html'
  })
    .state('search.${d}.map',{
      url:'/map',
      templateUrl: 'app/views/main/${d}/map/map.html'
    })
    .state('search.${d}.detail',{
      url:'/detail',
      templateUrl: 'app/views/main/${d}/detail/detail.html'
    })`);
});
