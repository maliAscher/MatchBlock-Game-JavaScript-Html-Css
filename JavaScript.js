var i, j, mone = 0, flag, k, x, o, f, ii, jj, p1, p2, xx, jj1, jj2, mone1, sum = 0, flagd, win, level,sum_c12;
var arr = new Array();
let endGame=false


//שולחת ליצירת טבלה לרמה המתאימה
function navigate() {
    if (localStorage.getItem("2") == 1)
        table111();
    else if (localStorage.getItem("2") == 2)
        table222();
    else
        table333();    
}
//יצירת טבלה לרמה 1
function table111() {
    document.getElementById("sum").innerText = 0;
    mone1 = 0;
    win = 0;
    var sum_c = 2;
    sum_c12 = 2;
    document.querySelector("table").innerHTML = "";
    for (var r = 0, id = '11'; r < 26; r++) {
        var tr = document.createElement("tr");
        for (var c = 0; c < 9; c++) {
            var td = document.createElement("td");
            td.setAttribute("name", id);
            var b = document.createElement("button");
            b.classList.add(b_color(b, sum_c));
            b.setAttribute("id", id++);
            b.setAttribute("border", "0");
            b.addEventListener("mouseover", opacity1);
            tr.appendChild(td).appendChild(b);
        }
        document.getElementById("table1").appendChild(tr);
        id += 1;//לסדר שיתאים לכל גדלי הלוחות במשחק    
    }
    id -= 2;
    parseInt(id);
    i = parseInt(id / 10);
    j = parseInt(id % 10);
    document.querySelector("table").border = "1";

    time();

}
//יצירת טבלה לרמה 2
function table222() {
    document.getElementById("sum").innerText = 0;
    mone1 = 0;
    win = 0;
    var sum_c = 3;
    sum_c12 = 3;
    document.querySelector("table").innerHTML = "";
    for (var r = 0, id = '11'; r < 26; r++) {
        var tr = document.createElement("tr");
        for (var c = 0; c < 9; c++) {
            var td = document.createElement("td");
            td.setAttribute("name", id);
            var b = document.createElement("button");
            b.classList.add(b_color(b, sum_c));
            b.setAttribute("id", id++);
            b.setAttribute("border", "0");
            b.addEventListener("mouseover", opacity1);
            tr.appendChild(td).appendChild(b);
        }
        document.getElementById("table1").appendChild(tr);
        id += 1;//לסדר שיתאים לכל גדלי הלוחות במשחק    
    }
    id -= 2;
    parseInt(id);
    i = parseInt(id / 10);
    j = parseInt(id % 10);
    document.querySelector("table").border = "1";
    time();

} 
//יצירת טבלה לרמה 3
function table333() {
    document.getElementById("sum").innerText = 0;
    mone1 = 0;
    win = 0;
    var sum_c = 4;
    sum_c12 = 4;
    document.querySelector("table").innerHTML = "";
    for (var r = 0, id = '11'; r < 26; r++) {
        var tr = document.createElement("tr");
        for (var c = 0; c < 9; c++) {
            var td = document.createElement("td");
            td.setAttribute("name", id);
            var b = document.createElement("button");
            b.classList.add(b_color(b, sum_c));
            b.setAttribute("id", id++);
            b.setAttribute("border", "0");
            b.addEventListener("mouseover", opacity1);
            tr.appendChild(td).appendChild(b);
        }
        document.getElementById("table1").appendChild(tr);
        id += 1;//לסדר שיתאים לכל גדלי הלוחות במשחק    
    }
    id -= 2;
    parseInt(id);
    i = parseInt(id / 10);
    j = parseInt(id % 10);
    document.querySelector("table").border = "1";
    time3();

} 
// רינדום צבע לקוביות במשחק
function b_color(b, sum_c) {
    var rnd = Math.round(Math.random() * sum_c);
    if (rnd == 0)
        return "color_1";
    if (rnd == 1)
        return "color_2";
    if (rnd == 2) 
        return "color_3";
    if (rnd == 3)
        return "color_4";
    if (rnd == 4)
        return "color_5";  
}

//פונקציות לאחר מציאת השכנים

//איתחול לפני חיפוש שכנים
function opacity1() {
    arr = new Array();
    arr1 = new Array();
    flag = 0;
    flagd = 0;
    f = 0;
    x = parseInt(event.target.id);
    mone = 0;
    if (f != 1)
        first();
    if (f != 1)
        opacity();
}
// הסרת שיקוף שכנים
function opacity2() {
  
    for (var k = 0; k < arr.length; k++) {
        document.getElementById(arr[k]).classList.remove("opac");
    }
}
//שקיפות שכנים
function opacity() {
    for (k = 0; k < arr.length; k++) {
        if (arr.length == 1)
            break;
        o = document.getElementById(arr[k]);
        o.classList.add("opac");
        f = 1;
        o.addEventListener("mouseout", opacity2); //להחזיר שכנים מהשקפתם בעת הורדת עכבר מהם 
        o.addEventListener("click", remove_buttons);//ריקון שכנים
    }
}


//פונקציות המתבצעות לאחר הלחיצה על השכנים הזהים
//
//העלמת קוביות זהות בעת לחיצה
function remove_buttons() {
    // אם התנאי נכון אז יפסיק את פעילות הפונקציה-מפסיק לספור את כמות הבלוקים שנלחצים לאחר שנגמר הזמן
 if(endGame) return
    for (var k = 0; k < arr.length; k++) {
        if (document.getElementsByName(arr[k])[0].innerHTML == "")
            continue;
        if (document.getElementById(arr[k]).classList.contains("opac"))//אם אתה שקוף
        {
            var z = document.getElementsByName(arr[k]);
            z[0].innerHTML = "";
            
        }
    }
    fmone();
    arr = new Array();

    down();

}
//בפונקציה זו מורידים את הקוביות הציבעוניות על ללמטה איפה שאין קוביה
function down() {
    for (jj = 1; jj < j + 1; jj++) {
        //ביצוע הפונקציה במשך זמן מסוים עד שאחליט לעצור אותה
        for (var ii = 2; ii < i + 1; ii++) {
            if (document.getElementsByName((ii * 10) + jj)[0].innerHTML == "") {
                var xx = ii * 10 + jj;
                for (var p1 = 0, p2 = 10; (xx - p2) > 10; p1 += 10, p2 += 10) {
                    if (document.getElementsByName(xx - p2)[0].innerHTML == "")
                        break;
                    document.getElementsByName(xx - p1)[0].appendChild(document.getElementById(xx - p2));//העברת כפתור עליון לתא שתחתיו
                    document.getElementById(xx - p2).id = (xx - p1);//שנה לקוביה חדשה בתא את הקוד לפי השם של התא
                }
            }
        }
    }
    together();
}
//איחוד עמודות
function together() {
    for (jj1 = 2, jj2 = 8; jj1 < 5 && jj2 > 5; jj1++ , jj2--) {
        //שמאל
        if (document.getElementsByName(i * 10 + jj1)[0].innerHTML == "") {
            for (xx = i * 10 + jj1; xx % 10 != 1; xx--) {
                if (document.getElementsByName(xx - 1)[0].innerHTML != "") {
                    for (p1 = 0; xx - p1 > 10; p1 += 10) {
                        if (document.getElementsByName(xx - 1 - p1)[0].innerHTML != "") {

                            document.getElementsByName(xx - p1)[0].appendChild(document.getElementById(xx - 1 - p1));
                            document.getElementById(xx - 1 - p1).id = xx - p1;
                        }
                        else
                            break;
                    }
                }
            }
        }
        //ימין
        if (document.getElementsByName(i * 10 + jj2)[0].innerHTML == "") {
            for (xx = i * 10 + jj2; xx % 10 != 9; xx++) {
                if (document.getElementsByName(xx + 1)[0].innerHTML != "") {
                    for (p1 = 0; xx - p1 > 10; p1 += 10) {

                        if (document.getElementsByName(xx + 1 - p1)[0].innerHTML != "") {

                            document.getElementsByName(xx - p1)[0].appendChild(document.getElementById(xx + 1 - p1));
                            document.getElementById(xx + 1 - p1).id = xx - p1;
                        }
                        else
                            break;
                    }
                }
            }
        }
    }
    //אמצע
    if (document.getElementsByName(i * 10 + 5)[0].innerHTML == "") {
        for (xx = i * 10 + 5; xx % 10 != 1; xx--) {
            if (document.getElementsByName(xx - 1)[0].innerHTML != "") {
                for (p1 = 0; xx - p1 > 10; p1 += 10) {
                    if (document.getElementsByName(xx - 1 - p1)[0].innerHTML != "") {

                        document.getElementsByName(xx - p1)[0].appendChild(document.getElementById(xx - 1 - p1));
                        document.getElementById(xx - 1 - p1).id = xx - p1;
                    }
                    else
                        break;
                }
            }
        }
    }
    finish();
}
//אם גמרת לוח או לא
function finish() {
    for (jj = 1, flag = 0; jj < 10; jj++) {
        if (document.getElementsByName(i * 10 + jj)[0].innerHTML != "")
            flag = 1;
    }
    if (flag == 0)// גמר
    {
        win++;
        table1();

    }
    if (flag == 1)//לא גמר 
        full();
}
//מונה נקודות
function fmone() {
    for (i1 = 0, k = arr.length; i1 < arr.length; i1++) {
        for (j1 = i1 + 1; j1 < arr.length; j1++) {
            if (arr[j1] == arr[i1]) {
                k--;
                break;
            }
        }
    }
    mone1 += k;
    document.getElementById("sum").innerText = mone1;
}
//בדיקה אם צריך למלא לוח מחדש=אם אין עוד שכנים זהים בלוח 
function full() {
    for (flag = 0, ii = i; ii > 1; ii--) {
        for (jj = 1; jj < j; jj++) {
            if (document.getElementsByName(ii * 10 + jj)[0].innerHTML != "") {
                if ((document.getElementsByName(ii * 10 + jj + 1)[0].innerHTML != "" &&
                    document.getElementById(ii * 10 + jj + 1).classList.contains(document.getElementById(ii * 10 + jj).classList[0]))
                    || (document.getElementsByName(ii * 10 + jj - 10)[0].innerHTML != "" &&
                        document.getElementById(ii * 10 + jj - 10).classList.contains(document.getElementById(ii * 10 + jj).classList[0])))
                //שיש עדיין שכנים
                {
                    flag = 1;
                    break;
                }
            }
        }
        if (flag == 1)
            break;
    }
    if (flag == 0)//שאין עוד שכנים בלוח והלוח לא ניגמר
    {
        if (sum_c12 == 2)
            table1();
        else if (sum_c12 == 2)
            table2();
        else
            table3();
    }
}
//מילוי לוח מחדש לרמה 1
function table1() {
    var sum_c = 2;
    var r = 0;
    id = '11';
    var interval = setInterval(function () {
        for (var c = 0; c < 9; c++) {   //עמודות
            if (document.getElementsByName(id)[0].innerHTML == "") {
                var b = document.createElement("button");
                b.classList.add(b_color(b, sum_c));
                b.setAttribute("id", id);
                b.setAttribute("border", "0");
                b.addEventListener("mouseover", opacity1);
                document.getElementsByName(id)[0].appendChild(b);
            }
            id++;
        }
        id += 2;
        r++;
        id += 1;     
        id -= 2;
        parseInt(id);
        if (r >= 26)
            clearInterval(interval);
    }, 85);
}
//מילוי לוח מחדש לרמה 2
function table2() {
    var sum_c = 3;
    var r = 0;
    id = '11';
    var interval = setInterval(function () {
        for (var c = 0; c < 9; c++) {   //עמודות
            if (document.getElementsByName(id)[0].innerHTML == "") {
                var b = document.createElement("button");
                b.classList.add(b_color(b, sum_c));
                b.setAttribute("id", id);
                b.setAttribute("border", "0");
                b.addEventListener("mouseover", opacity1);
                document.getElementsByName(id)[0].appendChild(b);
            }
            id++;
        }
        id += 2;
        r++;
        id += 1;
        id -= 2;
        parseInt(id);
        if (r >= 26)
            clearInterval(interval);
    }, 85);
}
 //מילוי לוח מחדש לרמה 3
function table3() {
    var sum_c = 4;
    var r = 0;
    id = '11';
    var interval = setInterval(function () {
        for (var c = 0; c < 9; c++) {   //עמודות
            if (document.getElementsByName(id)[0].innerHTML == "") {
                var b = document.createElement("button");
                b.classList.add(b_color(b, sum_c));
                b.setAttribute("id", id);
                b.setAttribute("border", "0");
                b.addEventListener("mouseover", opacity1);
                document.getElementsByName(id)[0].appendChild(b);
            }
            id++;
        }
        id += 2;
        r++;
        id += 1;
        id -= 2;
        parseInt(id);
        if (r >= 26)
            clearInterval(interval);
    }, 85);
}
                                    

//פונקציות חיפוש השכנים
function first() {
    if (f != 1)
        rightt();
    if (f != 1)
        topp();
    if (f != 1)
        bottomm();
    if (f != 1)
        leftt();
    flag = 1;
    arr[mone++] = x;
    if (f != 1)
        opacity();
}
function func1() {
    if (f != 1)
        rightt();
    if (f != 1)
        topp();
    if (f != 1)
        bottomm();
    if (arr[0] == x) {
        flag = 1;
        if (f != 1)
            opacity();
    }
    arr[mone++] = x;
    for (k = 0; k < arr.length; k++) {
        if (f == 1)
            break;
        if (arr[k] == x) {
            x = arr[k - 1];
            if (f != 1)
                func_a();
        }
    }
    if (f != 1)
        func_a();

}
function func2() {
    if (f != 1)
        topp();
    if (f != 1)
        leftt();
    if (f != 1)
        bottomm();
    if (arr[0] == x) {
        flag = 1;
        if (f != 1)
            opacity();
    }
    arr[mone++] = x;
    for (k = 0; k < arr.length; k++) {
        if (f == 1)
            break;
        if (arr[k] == x) {
            x = arr[k - 1];
            if (f != 1)
                func_a();
        }
    }
    if (f != 1)
        func_a();
}
function func3() {
    if (f != 1)
        rightt();
    if (f != 1)
        topp();
    if (f != 1)
        leftt();
    if (arr[0] == x) {
        flag = 1;
        if (f != 1)
            opacity();
    }
    arr[mone++] = x;
    for (k = 0; k < arr.length; k++) {
        if (f == 1)
            break;
        if (arr[k] == x) {
            x = arr[k - 1];
            if (f != 1)
                func_a();
        }
    }
    if (f != 1)
        func_a();
}
function func4() {
    if (f != 1)
        rightt();
    if (f != 1)
        bottomm();
    if (f != 1)
        leftt();
    if (arr[0] == x) {
        flag = 1;
        if (f != 1)
            opacity();
    }
    arr[mone++] = x;
    for (k = 0; k < arr.length; k++) {
        if (f == 1)
            break;
        if (arr[k] == x) {
            x = arr[k - 1];
            if (f != 1)
                func_a();
        }
    }
    if (f != 1)
        func_a();
}
function func_a() {

    if (arr[mone - 1] == x - 1)
        if (f != 1)
            func1();
    if (arr[mone - 1] == x + 1)
        if (f != 1)
            func2();
    if (arr[mone - 1] == x + 10)
        if (f != 1)
            func3();
    if (arr[mone - 1] == x - 10)
        if (f != 1)
            func4();
}
// בודקת מימין
function rightt() {
    if (x % 10 == j)
        return;
    for (k = 0; k < arr.length; k++) {
        if (arr[k] == x + 1)
            return;
    }
    if (document.getElementsByName(x + 1)[0].innerHTML != "") {
        if (document.getElementById(x).classList.contains(document.getElementById(x + 1).classList)) {
            arr[mone++] = x;
            x = x + 1;
            if (f != 1)
                func_a();
        }
    }
}
// בודקת מלמעלה
function topp() {
    if (parseInt(x / 10) == 1)
        return;
    for (k = 0; k < arr.length; k++) {
        if (arr[k] == x - 10)
            return;
    }
    if (document.getElementsByName(x - 10)[0].innerHTML != "") {
        if (document.getElementById(x).classList.contains(document.getElementById(x - 10).classList)) {
            arr[mone++] = x;
            x = x - 10;
            if (f != 1)
                func_a();
        }
    }
}
// בודקת משמאל
function leftt() {
    if (x % 10 == 1)
        return;
    for (k = 0; k < arr.length; k++) {
        if (arr[k] == x - 1)
            return;
    }
    if (document.getElementsByName(x - 1)[0].innerHTML != "") {
        if (document.getElementById(x).classList.contains(document.getElementById(x - 1).classList)) {
            arr[mone++] = x;
            x = x - 1;
            if (f != 1)
                func_a();
        }
    }
}
// בודקת מלמטה
function bottomm() {
    if (parseInt(x / 10) == i)
        return;
    for (k = 0; k < arr.length; k++) {
        if (arr[k] == x + 10)
            return;
    }
    if (document.getElementsByName(x + 10)[0].innerHTML != "") {
        if (document.getElementById(x).classList.contains(document.getElementById(x + 10).classList)) {
            arr[mone++] = x;
            x = x + 10;
            if (f != 1)
                func_a();
        }
    }
}

// מד זמן לרמה 1,2
function time() {
    var elem = document.getElementById("in");
    var height = 100;
    var id = setInterval(
        function () {
            if (height <= 0) {
                clearInterval(id);
                end();
            }
            else {
                height--;
                elem.style.height = height + '%';
            }
        }, 1000);

}

// מד זמן לרמה 3
function time3() {
    var elem = document.getElementById("in");
    var height = 100;
    var id = setInterval(
        function () {
            if (height <= 0) {
                clearInterval(id);
                end();
            }
            else {
                height--;
                elem.style.height = height + '%';
            }
        }, 1500);

}
//הודעה על גמר המשחק
function end() {
    endGame=true
    console.log(mone1)
    if (win == 0) {//הפסד
        document.getElementById("s").innerText =  "Game Over";
        document.getElementById("s1").innerText = "צברת במשחק זה " + mone1 + " נקודות";
        document.getElementById("endd").style.display = "block";
        document.getElementById("endd").style.width = "50vw";
        document.getElementById("endd").style.height = "30vw";
        document.getElementById("endd").style.marginLeft="20vw"
    }
    else {//ניצחון
        document.getElementById("s").innerText = localStorage.getItem("1") + " , " + "ניצחת!!! סיימת  " + win + "  לוחות";
        document.getElementById("s1").innerText ="צברת במשחק זה " + mone1 + " נקודות";
        document.getElementById("endd").style.display = "block";
        document.getElementById("endd").style.width = "55vw";
        document.getElementById("endd").style.height = "25vw";
        document.getElementById("endd").style.marginLeft="20vw"
    }
 }
//מציג הכנסת פרטים
function inputss() {
    document.getElementById("inputs").style.display = "inline-block";
}
//בודק איזו רמה נבחרה ושולח לטבלה המתאימה לפי הרמה
function levelss(level) {
    localStorage.setItem("1", document.getElementById("inputs").getElementsByTagName("input")[0].value);
    localStorage.setItem("2", level);
    localStorage.setItem("3", level);
    if (level == 1) {
        var nnn = document.getElementById("inputs").getElementsByTagName("img");
        nnn[0].style.opacity = 0.4;
        nnn[0].style.height = 9+"vh";
        nnn[1].style.opacity = 1;
        nnn[1].style.height = "unset";
    }
    else if (level == 2){
        var nnn = document.getElementById("inputs").getElementsByTagName("img");
        nnn[1].style.opacity = 0.4;
        nnn[1].style.height = 9+"vh";
        nnn[0].style.opacity = 1;
        nnn[0].style.height = "unset";
        
    }
    else {
        var nnn = document.getElementById("inputs").getElementsByTagName("img");
        nnn[1].style.opacity = 0.4;
        nnn[1].style.height = 9+"vh";
        nnn[0].style.opacity = 1;
        nnn[0].style.height = "unset";
        
    }
}
    // פונקציה לכפתור פתיחת ההוראות
function instruction() {
   document.getElementById("info").style.display = "unset";   
}
// פונקצית האיקס שסוגר את דף ההוראות
function closeInfo() {
  document.getElementById("info").style.display = "none";
}
