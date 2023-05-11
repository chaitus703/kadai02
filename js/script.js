var numbtn = $(".num");
var dis1 = $("#display .text1");
var dis2 = $("#display .text2");
var dis3 = $("#display .text3");
var dis4 = $("#display .text4");
var dec = $("#dec");
var eq = $("#eq");
var ac = $("#ac");
 
var decflg = false;  //小数点が使える状況かどうかを判断するフラグ
var second = false;  //一度計算を行った後かどうか確認するフラグ
var number1,number2;  //計算に使う数字を格納する変数
var calc;  //計算式のタイプを格納する変数（1=足し算、2=引き算、3=掛け算、4=割り算）
var op;  //演算子を格納する変数
var result;  //計算結果を格納する変数

//全ての表示を消す関数
function allclear(){
  dis1.text("");
  dis2.text("");
  number1 = number2 = calc = '';
}
 
//#displayに数字を表示する関数
function output1(i){
  var j = dis1.text();
  dis1.text(j+i);
}
function output2(i){
  var j = dis2.text();
  dis2.text(j+i);
}
 
//表示されている数字をnumber1に保存して液晶表示を消す関数
function save(){
  number1 = dis2.text();
  dis2.text('');
}

//数字ボタンをクリックした時の処理
numbtn.click(function(){
    if(second == true) {  //2回目以降の計算の場合
        allclear();  //表示をクリアー
        second = false;  //secondフラグの無効化
  }
    var moji = $(this).text();  //クリックしたボタンの値をmojiに格納
    output1(moji);  //.text1へ記憶した値を表示させる
    output2(moji);  //.text2へ記憶した文字を表示させる
});
 
//小数点ボタンを押した時の処理
dec.click(function(){
  if(decflg == false) {  //小数点フラグがfalseの場合
    if(second == true) {  //2回目以降の計算の場合
      allclear();  //表示をクリアー
      second = false;  //secondフラグの無効化
    }
    var moji = $(this).text();  //クリックしたボタンの文字をmojiに格納
    output1(moji);  //.text1へ格納した文字を表示させる
    output2(moji);  //.text2へ格納した文字を表示させる
    decflg = true;  //小数点フラグの無効化
  }
});
 
//「AC」ボタンを押した時の処理
ac.click(function(){
  allclear();  //全てクリアー
});
 
//演算子ボタンを押した時の処理
function edit(elem) {
            save();  //入力されている文字をnumber1へ保存
            op = $(elem).text();
            output1(op);   //opへ数式記号を保存
            calc = elem.value;  //計算のタイプを記述（1=足し算）
            second = decflg = false;  //secondフラグと小数点フラグを無効化
};

//【妖怪の動作】：じゃんけん開始時
function play_start() {
    setTimeout(function () {
    $("#display").css({"height": "145px"});
    dis3.text('じゃんけんを始めるよ！君の手を選んでね☆');
    dis4.text('ボクの手は・・・・・・・');
    $(".jan p").slideDown();}, 700);
};

//【妖怪の動作】:じゃんけん中：一定時間クリックを無効化
function btnX() { 
    $('.jan p').click(function() {
      var $this = $(this)
      $this.css('pointer-events', 'none');
      setTimeout(function () {
        $this.css('pointer-events', '');
      }, 2000);
    });
    $(".num").css('pointer-events', 'none');
};

//【妖怪の動作】:パターン①ーーーーーーーーーーーー
//【妖怪の動作】:じゃんけん中：勝った時
function win1(){
    setTimeout(function(){
        $(function() {
            if( confirm("あなたの勝ちです\nじゃんけんを続けますか") ) {}
            else {alert("おやすみなさい");
                goodnight();} 
        });
    }, 1000 );
};
//【妖怪の動作】:じゃんけん中：負けた時
function lose1(){
    setTimeout(function(){
        $(function() {
            if( confirm("あなたの負けです\nじゃんけんを続けますか") ) {}
            else {alert("おやすみなさい");
                goodnight();} 
        });
    }, 1000 );
};
//【妖怪の動作】:じゃんけん中：あいこの時
function draw1(){
    setTimeout(function(){
        $(function() {
            if( confirm("あいこです\nじゃんけんを続けますか") ) {}
            else {alert("おやすみなさい");
                goodnight();} 
        });
    }, 1000 );
};
//【妖怪の動作】:パターン②ーーーーーーーーーーーー
//【妖怪の動作】:じゃんけん中：勝った時
function win2(){
    setTimeout(function(){
        alert("あなたの勝ちです")}, 500 );
    };
//【妖怪の動作】:じゃんけん中：負けた時
function lose2(){
        setTimeout(function(){
            alert("あなたの負けです")}, 500 );
        };

//【妖怪の動作】:じゃんけん中：あいこの時
function draw2(){
    setTimeout(function(){
        alert("あいこです")}, 500 );
    };


//ーーーーーーーーーーーーーーーーーーーーーーーー
//じゃんけんの勝敗カウント
class Participant {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
    win() {
      this.score += 1;
      console.log(`${this.name}の勝ちです！勝利回数：${this.score}`);
    }
    win2() {
        this.score += 1;
        console.log(`${this.name}の勝ちです！勝利回数：${this.score}`);
        if(this.score==3){
                setTimeout(function(){
                    alert("3回勝利しました")}, 600 );
                setTimeout(function(){
                    goodnight();}, 700 );
                    const you = new Participant("あなた", 0);
                };
        }
    lose() {
      console.log(`${this.name}の負けです。勝利回数：${this.score}`);
    }
    draw() {
      console.log(`あいこです。勝利回数：${this.score}`);
    }
}
const you = new Participant("あなた", 0);


//【妖怪の動作】:パターン①ーーーーーーーーーーーー
//【妖怪の動作】:じゃんけん動作
function play_judge(){
    $("#gu").on("click", function() {
        var random = Math.floor(Math.random() * 3+1);
        if(random===1){
            dis4.text('ボクの手は「グー」だよ！');
            draw1();
            you.draw();
        }else if(random===2){
            dis4.text('ボクの手は「チョキ」だよ');
            win1();
            you.win();
        }else if(random===3){
            dis4.text('ボクの手は「パー」だよ！');
            lose1();
            you.lose();
        }
    });
    $("#cho").on("click", function() {
        var random = Math.floor(Math.random() * 3+1);
        if(random===1){
            dis4.text('ボクの手は「グー」だよ！');
            lose1();
            you.lose();
        }else if(random===2){
            dis4.text('ボクの手は「チョキ」だよ');
            draw1();
            you.draw();
        }else if(random===3){
            dis4.text('ボクの手は「パー」だよ！');
            win1();
            you.win();
        }
    });
    $("#pa").on("click", function() {
        var random = Math.floor(Math.random() * 3+1);
        if(random===1){
            dis4.text('ボクの手は「グー」だよ！');
            win1();
            you.win();
        }else if(random===2){
            dis4.text('ボクの手は「チョキ」だよ');
            lose1();
            you.lose();
        }else if(random===3){
            dis4.text('ボクの手は「パー」だよ！');
            draw1();
            you.draw();
        }
    });
};

//【妖怪の動作】:パターン②ーーーーーーーーーーーー
//【妖怪の動作】:じゃんけん動作
function play_judge2(){
    $("#gu").on("click", function() {
        var random = Math.floor(Math.random() * 3+1);
        if(random===1){
            dis4.text('ボクの手は「グー」だよ！');
            draw2();
            you.draw();
        }else if(random===2){
            dis4.text('ボクの手は「チョキ」だよ');
            win2();
            you.win2();
        }else if(random===3){
            dis4.text('ボクの手は「パー」だよ！');
            lose2();
            you.lose();
        }
    });
    $("#cho").on("click", function() {
        var random = Math.floor(Math.random() * 3+1);
        if(random===1){
            dis4.text('ボクの手は「グー」だよ！');
            lose2();
            you.lose();
        }else if(random===2){
            dis4.text('ボクの手は「チョキ」だよ');
            draw2();
            you.draw();
        }else if(random===3){
            dis4.text('ボクの手は「パー」だよ！');
            win2();
            you.win2();
        }
    });
    $("#pa").on("click", function() {
        var random = Math.floor(Math.random() * 3+1);
        if(random===1){
            dis4.text('ボクの手は「グー」だよ！');
            win2();
            you.win2();
        }else if(random===2){
            dis4.text('ボクの手は「チョキ」だよ');
            lose2();
            you.lose();
        }else if(random===3){
            dis4.text('ボクの手は「パー」だよ！');
            draw2();
            you.draw();
        }
    });
};


//【妖怪の動作】：電卓に戻る時
function goodnight() {
    document.getElementById("image").src="img/d1.png";
    $("#display").css({"height": "75px"});
    dis3.text('');
    dis4.text('');
    $(".jan p").slideUp(1000);
    $(".num").css('pointer-events', '');
    setTimeout(function(){
        location.assign(location.href); ;}, 2000 );
};

//「＝」ボタンを押した時の処理
eq.click(function(){
  number2 = dis2.text();  //入力されている文字をnumber2へ保存
  if(calc == 1) {  //足し算ならば
    result = Number(number1) + Number(number2);
  } else if(calc == 2) {  //引き算ならば
    result = Number(number1) - Number(number2);
  } else if(calc == 3) {  //掛け算ならば
    result = Number(number1) * Number(number2);
  } else if(calc == 4) {  //割り算ならば
    result = Number(number1) / Number(number2);
  }
  dis2.text(result);  //計算結果をp.text2へ表示させる
  if(result >= 1000){ //【妖怪の動作】:計算結果の数値次第で目覚める
    document.getElementById("image").src="img/d2.png";
    setTimeout(function(){
    var res = confirm("あそぼー！！！");
    if(res==true){  //★★★★★あそぶ：YES
        play_start();
        btnX();
        play_judge();
    } else {  //★★★★★あそぶ：NO
        console.log("aaa");
        alert("あなたが３勝するまで眠りません");
        document.getElementById("image").src="img/d3.png";
        play_start();
        btnX();
        play_judge2();
    }}, 1500 );
} 
  localStorage.setItem("memo",result);
  decflg = false;  //小数点フラグを無効化
  second = true;  //secondフラグをtrueへ
});


