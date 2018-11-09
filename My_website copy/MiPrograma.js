

  var url = "https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv"

  d3.csv(url, loadAndParse)

  function loadAndParse(data){
  data.forEach(function(d) {
  d.Xi = +d.Xi;
  d.Yi = +d.Yi;
  d.Xf = +d.Xf;
  d.Yf = +d.Yf;
  });



  var circles = d3.select('svg').selectAll('circle').data(data)

  circles.enter()
     .append('circle')
     .attr('cx', d => d.Xi)
     .attr('cy', d => d.Yi)
     .attr('r',5)
     .attr('fill', d => d.color)



  circles.transition()
          .duration(5000)
          .attr('cx', d => d.Xf)
          .attr('cy', d => d.Yf)
          .ease('bounce')


  circles.on("click",function2(){
      d3.select(this).transition().attr('r', 20));
    })

  //console.log(data);
  }
