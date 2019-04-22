import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Line } from "react-chartjs-2";


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    padding: "20px",
    "& h5": {
      display: "block",
      width: "100%",
      fontWeight: 500
    },
    "& h6": {
      display: "block",
      width: "100%",
      fontWeight: 400,
      marginBottom: "10px"
    },
    "& svg": {
      display: "block",
      width: "100%"
    }
  },
  value_percentage: {
    display: "flex",
    width: "100%"
  },
  positive_percentage: {
    color: theme.palette.success,
    fontSize:'14px',
  },
  negative_percentage: {
    color: theme.palette.error,
    fontSize:'14px',
  }
});


class ChartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const options = {
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)"
          }
        }],
        yAxes: [{
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)"
          }
        }]
      },
      tooltips: {
        // callbacks: {
        //   title: function(tooltipItem, data) {
        //     return data["labels"][tooltipItem[0]["index"]];
        //   },
        //   label: function(tooltipItem, data) {
        //     return data["datasets"][0]["data"][tooltipItem["index"]];
        //   },
        //   afterLabel: function(tooltipItem, data) {
        //     var dataset = data["datasets"][0];
        //     var percent = Math.round((dataset["data"][tooltipItem["index"]] / dataset["_meta"][0]["total"]) * 100);
        //     return "(" + percent + "%)";
        //   }
        // },
        backgroundColor: "#686969",
        titleFontSize: 12,
        xPadding: 30,
        yPadding: 10,
        titleFontColor: "#949494",
        titleMarginBottom: 15,
        bodyFontColor: "#fff",
        bodyFontSize: 12,
        displayColors: false,
        cornerRadius: 2
      }
    };
    const data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 350);
      gradientFill.addColorStop(0, "rgba(125,205,255,1)");
      gradientFill.addColorStop(0.5, "rgba(116,193,241,1)");
      gradientFill.addColorStop(1, "rgba(0,0,0,1)");
      return {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            fill: true,
            lineTension: 0.1,
            backgroundColor: gradientFill,
            borderCapStyle: "butt",
            borderWidth: 0,
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBackgroundColor: "#245275",
            pointBorderWidth: 0,
            data: [20, 59, 80, 81, 56, 15, 40]
          }
        ]
      };
    };

    return (
      <Paper className={classes.root}>
        <Typography variant={"h6"}>
          Label
        </Typography>
        <div className={classes.value_percentage}>
          <Typography variant={"h5"}>
            2360
          </Typography>
          <div className={classes.positive_percentage}>
            3%
          </div>
        </div>
        <Line data={data} options={options}/>
      </Paper>
    );
  }
}

export default withStyles(styles)(ChartItem);