const DOM = {
    table: document.getElementById("table")
}
const classList = [
    {
        Mon: {
            className: "创造学基础",
            address: "@A-206"
        },
        Tues: {
            className: "体育1",
            address: "@足球场"
        },
        Wed: {
            className: "DSP技术",
            address: "@xx-429"
        },
        Thur: {
            className: "",
            address: ""
        },
        Fri: {
            className: "",
            address: ""
        },
        Sat: {
            className: "",
            address: ""
        },
        Sun: {
            className: "营销综合模拟",
            address: "@JMB-203"
        }
    },
    {
        Mon: {
            className: "",
            address: ""
        },
        Tues: {
            className: "思想道德与法制",
            address: "A-120"
        },
        Wed: {
            className: "",
            address: ""
        },
        Thur: {
            className: "思想道德与法制",
            address: "A-120"
        },
        Fri: {
            className: "",
            address: ""
        },
        Sat: {
            className: "大学生健康教育",
            address: "@a-120"
        },
        Sun: {
            className: "营销综合模拟",
            address: "@JMB-203"
        }
    },
    {
        Mon: {
            className: "程序设计实践",
            address: "@xx-303"
        },
        Tues: {
            className: "程序设计基础",
            address: "@xx-227"
        },
        Wed: {
            className: "",
            address: ""
        },
        Thur: {
            className: "",
            address: ""
        },
        Fri: {
            className: "高等数学",
            address: "@A-214"
        },
        Sat: {
            className: "大学生心理健康指导",
            address: "A-211"
        },
        Sun: {
            className: "",
            address: ""
        }
    },
    {
        Mon: {
            className: "高等数学A1",
            address: "@A-214"
        },
        Tues: {
            className: "计算机导论",
            address: "@xx-227"
        },
        Wed: {
            className: "大学外语1",
            address: "@A-210"
        },
        Thur: {
            className: "程序设计基础",
            address: "@xx-228"
        },
        Fri: {
            className: "大学外语1",
            address: "@A-210"
        },
        Sat: {
            className: "",
            address: ""
        },
        Sun: {
            className: "",
            address: ""
        }
    },
    {
        Mon: {
            className: "戏剧影视表演艺术",
            address: "@A-321"
        },
        Tues: {
            className: "大学外语1",
            address: "@A-210"
        },
        Wed: {
            className: "",
            address: ""
        },
        Thur: {
            className: "大学外语1",
            address: "@A-210"
        },
        Fri: {
            className: "",
            address: ""
        },
        Sat: {
            className: "",
            address: ""
        },
        Sun: {
            className: "",
            address: ""
        }
    }
];
function createDom() {
    let num = 1;
    classList.map(item => {
        const tr = document.createElement('tr');
        tr.className = 'part1';
        const td1 = document.createElement('td');
        td1.textContent = `第${lowToUp(num)}节`;
        const td2 = document.createElement('td');
        td2.textContent = `${item.Mon.className}\n${item.Mon.address}`;
        td2.setAttribute('rowspan', 2);
        const td3 = document.createElement('td');
        td3.textContent = `${item.Tues.className}\n${item.Tues.address}`;
        td3.setAttribute('rowspan', 2);
        const td4 = document.createElement('td');
        td4.textContent = `${item.Wed.className}\n${item.Wed.address}`;
        td4.setAttribute('rowspan', 2);
        const td5 = document.createElement('td');
        td5.textContent = `${item.Thur.className}\n${item.Thur.address}`;
        td5.setAttribute('rowspan', 2);
        const td6 = document.createElement('td');
        td6.textContent = `${item.Fri.className}\n${item.Fri.address}`;
        td6.setAttribute('rowspan', 2);
        const td7 = document.createElement('td');
        td7.textContent = `${item.Sat.className}\n${item.Sat.address}`;
        td7.setAttribute('rowspan', 2);
        const td8 = document.createElement('td');
        td8.textContent = `${item.Sun.className}\n${item.Sun.address}`;
        td8.setAttribute('rowspan', 2);
        const tr2 = document.createElement('tr');
        tr2.className = 'part1';
        const td9 = document.createElement('td');
        td9.textContent = `第${lowToUp(num + 1)}节`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr2.appendChild(td9);
        num = num + 2;
        DOM['table'].appendChild(tr);
        DOM['table'].appendChild(tr2);
    })
}
createDom()
// 小写数字转大写数字
function lowToUp(num) {
    const obj = {
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        7: "七",
        8: "八",
        9: "九",
        10: "十"

    }
    let value = obj[num]
    return value;
}