// 一、柱状图
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area1 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "white",
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "4%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 176,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 10,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 35,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 7,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 617,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 16,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 1201,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 2062,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            lineStyle: {
              width: 0.1,
              color: "#012f4a",
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area2 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 115,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 10,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 12,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 30,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 326,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 15,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 677,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 1185,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area3 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 26,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 4,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 6,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 10,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 144,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 14,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 260,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 464,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area4 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 53,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 10,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 3,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 12,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 94,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 5,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 186,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 363,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area5 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 7,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 4,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 1,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 181,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 275,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 472,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area6 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 23,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 7,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 3,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 23,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 174,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 6,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 232,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 468,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area7 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 1,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 6,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 11,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 77,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 6,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 113,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 216,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area8 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 6,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 4,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 23,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 64,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 3,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 118,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 220,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area9 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 4,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 3,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 1,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 31,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 70,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 127,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 238,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area10 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 11,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 5,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 13,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 149,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 3,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 208,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 391,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area11 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 19,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 8,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 3,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 33,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 152,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 13,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 325,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 553,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area12 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 6,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 3,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 7,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 39,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 104,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 8,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 129,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 296,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area13 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 5,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 5,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 47,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 79,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 6,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 117,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 261,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area14 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 7,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 10,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 3,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 22,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 125,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 168,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 337,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area15 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 17,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 2,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 4,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 13,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 164,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 1,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 294,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 495,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area16 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 15,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 2,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 8,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 115,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 1,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 117,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 260,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area17 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 491,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 93,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 88,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 324,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 2635,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 103,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 4547,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 8281,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
(function () {
  var myChat = echarts.init(document.querySelector(".column3 .area18 .panel"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "行政\n企事业",
        "村支\n两委",
        "公益性\n岗位",
        "种养殖",
        "其他",
        "无劳动\n能力\n（人）",
        "未就业\n（人）",
        "60岁\n以上\n（人）",
        "合计\n（人）",
      ],
      axisLabel: {
        color: "white",
        fontSize: "15px",

        show: true,
        interval: 0,
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    grid: {
      left: "10%",
      right: "6%",
      top: "5%",
      buttom: "4%",
    },
    series: [
      {
        data: [
          {
            value: 0,
            itemStyle: {
              color: "#032a3d",
            },
          },

          {
            value: 0,
            itemStyle: {
              color: "#27ae60",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#8e44ad",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#a90000",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#95a5a6",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#2c3e50",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#9b59b6",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#d35400",
            },
          },
          {
            value: 0,
            itemStyle: {
              color: "#f39c12",
            },
          },
        ],
        type: "bar",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
                fontSize: 16,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
// 时间效果
(function () {
  const div = document.querySelector(".time");
  function getMyDate() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${h}:${m}:${s}`;
  }
  div.innerHTML = getMyDate();
  setInterval(function () {
    div.innerHTML = getMyDate();
  }, 1000);
})();
// 折现图
(function () {
  var myChat = echarts.init(
    document.querySelector(".column1 .panelb .panel-footer")
  );
  var option = {
    grid: {
      top: "4%",
      left: "0%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: [
          "地方安置",
          "安保协警",
          "物业管理",
          "物流快递",
          "拓展训练",
          "自主创业",
        ],
        axisLabel: {
          color: "white",
          fontSize: 16,
          interval: 0,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          lineStyle: {
            color: "#012f4a", // 分割线颜色
          },
        },
        axisLabel: {
          formatter: "{value}%",
          color: "white",
        },
      },
    ],
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [25, 20, 5, 15, 5, 30],
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#bcef48",
              },
              {
                offset: 1,
                color: "#e150e9",
              },
            ]), //背景渐变色
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
// 横向条形图
(function () {
  var myChat = echarts.init(
    document.querySelector(".column3 .panelc .panel-footer")
  );
  var option = {
    dataset: {
      source: [
        ["amount", "product"],
        [108, "个体"],
        [87, "企业"],
        [26, "合作社"],
      ],
    },
    grid: {
      top: "0%",
      left: "16%",
    },
    xAxis: {
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
      name: "amount",
      axisLabel: {
        color: "white",
      },
    },
    yAxis: {
      type: "category",
      axisLabel: {
        fontSize: 18,
        color: "white",
      },
    },
    series: [
      {
        type: "bar",
        barWidth: "60%",
        encode: {
          x: "amount",

          y: "product",
        },
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = ["#b0dd44", "#f8df2a", "#f59a17"];
              return colorList[params.dataIndex];
            },
            label: {
              show: true, //开启显示
              position: "right", //在上方显示
              textStyle: {
                //数值样式
                color: "white",
                fontSize: 18,
              },
            },
          },
        },
      },
    ],
  };
  myChat.setOption(option);
})();
// 圆饼图
(function () {
  var myChart = echarts.init(
    document.querySelector(".column1 .panela .panel-footer")
  );
  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}:({d}%)",
    },
    legend: {
      orient: "vertical",
      // 距离底部为0%
      bottom: "0",
      right: "0",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      data: ["法律咨询", "市场推广", "技术支持", "电商", "短视频"],
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "white",
        fontSize: "18",
      },
    },

    series: [
      {
        name: "服务需求",
        type: "pie",
        radius: ["40%", "80%"],

        emphasis: {
          label: {
            fontSize: "18",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },

        data: [
          { value: 3, name: "法律咨询3%" },
          { value: 9, name: "市场推广9%" },
          { value: 18, name: "技术支持18%" },
          { value: 35, name: "电商35%" },
          { value: 35, name: "短视频35%" },
        ],
      },
    ],
  };
  myChart.setOption(option);
})();
// 全屏js
(function () {
  const html = document.querySelector("html");
  html.requestFullscreen();
})();
