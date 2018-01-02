import React, { Component } from 'react';
import * as d3 from 'd3';

class CoursesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthlySales: [
        {"month":20130101, "sales":38, "id": 1},
        {"month":20130201, "sales":35, "id": 2},
        {"month":20130301, "sales":41, "id": 3},
        {"month":20130401, "sales":55, "id": 4},
        {"month":20130501, "sales":58, "id": 5},
        {"month":20130601, "sales":66, "id": 'sad ashdkh sdfsd fe32'},
        {"month":20130701, "sales":74, "id": 7},
        {"month":20130801, "sales":78, "id": 8},
        {"month":20130901, "sales":38, "id": 9},
        {"month":20131001, "sales":30, "id": 10},
        {"month":20131101, "sales":26, "id": 11},
        {"month":20131201, "sales":29, "id": 12}
      ]
    };
  }

  componentDidMount() {
    this.createGraph();
  }

  createGraph() {
    const h = 300,
      w = 600,
      padding = 20,
      axisPadding = 40;
    const monthlySales = this.state.monthlySales;

    function getDate(d) {
      // 20130101
      const strDate = new String(d),
          year = strDate.substr(0,4),
          month = strDate.substr(4,2)-1,
          day = strDate.substr(6,2);
      
        return new Date(year, month, day);
    }

    const minDate = getDate(monthlySales[0]['month']);
    const maxDate = getDate(monthlySales[monthlySales.length-1]['month']);

    // add tooltip
    const tooltip = d3.select('.graph-view').append('div')
                  .attr('class', 'tooltip')
                  .style('opacity', 0);

    // Scaling Data
    const xScale = d3.scaleTime()
                  .domain([minDate,maxDate])
                  .range([axisPadding + padding, w-axisPadding]);

    const yScale = d3.scaleLinear()
                  .domain([ 0, d3.max(monthlySales, function(d) { return d.sales; }) ])
                  .range([h-axisPadding, axisPadding]);

    // Axis
    const xAxisGen = d3.axisBottom(xScale).tickFormat(d3.timeFormat('%b'));
    const yAxisGen = d3.axisLeft(yScale).ticks(5);

    // line function
    const lineFunc = d3.line()
      .x(function(d) {
        return xScale(getDate(d.month));
      })
      .y(function(d) {
        return yScale(d.sales);
      });

    const svg = d3.select('.graph-view').append('svg')
      .attr('width', w)
      .attr('height', h);

    // Y Axis
    const yAxis = svg.append('g').call(yAxisGen)
                .attr('class', 'axis')
                .attr('transform', 'translate(30, 0)');

    // Y Axis
    const xAxis = svg.append('g').call(xAxisGen)
                .attr('class', 'axis')
                .attr('transform', 'translate(0,' + (h-padding) + ')');

    // ------- line plotting
    const line = svg.append('path')
      .attr('d', lineFunc(monthlySales))
      .attr('stroke', '#00c19f')
      .attr('fill', 'none')
      .attr('stroke-width', 3);

    // ----- dots plotting
    const dots = svg.selectAll('circle')
      .data(monthlySales)
      .enter()
      .append('circle')
        .attr('cx', function(d) {return xScale(getDate(d.month));})
        .attr('cy', function(d) {return yScale(d.sales);})
        .attr('r', 8)
        .attr('class', 'data-points')
        .attr('stroke', "#fff")
        .attr('fill', function(d) { return '#8ef5e3'; })
        .on('mouseover', function(d) {
          tooltip.transition()
            .duration(500)
            .style('opacity', 1);

          tooltip.html('<strong>' + d.id + '</strong>')
            .style('left', xScale(getDate(d.month)) - 54 + 'px')
            .style('top', yScale(d.sales) - 70 + 'px');
        })
        .on('mouseout', function(d) {
          tooltip.transition()
            .duration(300)
            .style('opacity', 0);
        });
  }

  render() {
    return (
      <div>
        <h1>Courses new</h1>
        <div className="graph-view"></div>
      </div>
    );
  }
}

export default CoursesPage;
