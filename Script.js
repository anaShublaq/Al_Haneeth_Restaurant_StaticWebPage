// This code is for displaying the menu of the three meals


var divContent = document.getElementById('meals');
var button1 = document.getElementById('but1');
var button2 = document.getElementById('but2');
var button3 = document.getElementById('but3');




// Change the menu of foods when the button is clicked

function changeContent(button) {

    var button = document.getElementById(button);
    if (button == button1) {
        divContent.innerHTML = '<div class="meal"><img src="photo/1.jpg" alt="chicken thigh" height="200" width="300"><div class="info"><h1>$السعر 70</h1><h3>اسم الوجبة: ورك دجاج</h3><div class="clearfix"></div><p>متاح<img src="icons/check.png"></p><ul><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star.png"></li><li><img src="icons/star.png"></li></ul></div><div class="clearfix"></div></div><div class="meal"><img src="photo/2.jpg" alt="meat with vegetables" height="200" width="300"><div class="info"><h1>$السعر 50</h1><h3>اسم الوجبة: كفتة</h3><div class="clearfix"></div><p>متاح<img src="icons/check.png"></p><ul><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li></ul></div><div class="clearfix"></div></div><div class="meal"><img src="photo/3.jpg" alt="chicken with potatoes" height="200" width="300"><div class="info"><h1>$السعر 60</h1><h3>اسم الوجبة: كنتاكي</h3><div class="clearfix"></div><p>غير متاح<img src="icons/remove.png"></p><ul><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star.png"></li></ul></div><div class="clearfix"></div></div>';
    } else if (button == button2) {
        divContent.innerHTML = '<div class="meal"><img src="photo/7.jpg" alt="معكرونة" height="200" width="300"><div class="info"><h1>$السعر 40</h1><h3>اسم الوجبة: معكرونة</h3><div class="clearfix"></div><p>غير متاح<img src="icons/remove.png"></p><ul><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star.png"></li></ul></div><div class="clearfix"></div></div><div class="meal"><img src="photo/9.jpg" alt="بيتزا" height="200" width="300"><div class="info"><h1>$السعر 65</h1><h3>اسم الوجبة: بيتزا</h3><div class="clearfix"></div><p>غير متاح<img src="icons/remove.png"></p><ul><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li></ul></div><div class="clearfix"></div></div><div class="meal"><img src="photo/4.jpg" alt="chicken thigh" height="200" width="300"><div class="info"><h1>$السعر 10</h1><h3>اسم الوجبة: مهلبية</h3><div class="clearfix"></div><p>متاح<img src="icons/check.png"></p><ul><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star.png"></li><li><img src="icons/star.png"></li></ul></div><div class="clearfix"></div></div>';
    } else if (button == button3) {
        divContent.innerHTML = '<div class="meal"><img src="photo/10.jpg" alt="سمك مشوي" height="200" width="300"><div class="info"><h1>$السعر 70</h1><h3>اسم الوجبة: سمك مشوي</h3><div class="clearfix"></div><p>متاح<img src="icons/check.png"></p><ul><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li></ul></div><div class="clearfix"></div></div><div class="meal"><img src="photo/6.jpg" alt="كباب" height="200" width="300"><div class="info"><h1>$السعر 60</h1><h3>اسم الوجبة: كباب</h3><div class="clearfix"></div><p>متاح<img src="icons/check.png"></p><ul><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star.png"></li></ul></div><div class="clearfix"></div></div><div class="meal"><img src="photo/8.jpg" alt="مشاوي" height="200" width="300"><div class="info"><h1>$السعر 55</h1><h3>اسم الوجبة: مشاوي</h3><div class="clearfix"></div><p>متاح<img src="icons/check.png"></p><ul><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star%20(1).png"></li><li><img src="icons/star.png"></li></ul></div><div class="clearfix"></div></div>';
    }

}




//Initial style when opening the page

document.getElementById('but1').setAttribute("style", "color:#7C2323; border-bottom: 2px solid #7C2323;");


//Change the style when pressing any button

function changeStyle(el) {

    document.getElementById('but1').setAttribute("style", "color:#000; border-bottom: 2px solid darkgray;");
    document.getElementById('but2').setAttribute("style", "color:#000; border-bottom: 2px solid darkgray;");
    document.getElementById('but3').setAttribute("style", "color:#000; border-bottom: 2px solid darkgray;");

    var button = document.getElementById(el);

    button.setAttribute("style", "color:#7C2323; border-bottom: 2px solid #7C2323;");

}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//This code is for contact information



var emailInput = document.getElementById('email');
var spanSubscribe = document.getElementById('spanSubscribe');



var email2Input = document.getElementById('email2');
var messageInput = document.getElementById('message');

var spanName = document.getElementById('spanName');
var spanEmail = document.getElementById('spanEmail');
var spanMessage = document.getElementById('spanMessage');



// To see if a value has been entered into the subscription box

function enteredEmailValue() {

    spanSubscribe.innerHTML = "";

    if (emailInput.value.length == 0) {
        massage(spanSubscribe, true);
    } else if (!emailInput.value.endsWith("@hotmail.com")) {
        massageForEmail(spanSubscribe, true);
    } else if (emailInput.value.length > 0) {
        massage(spanSubscribe, false);
        alert("تم اشتراكك بنجاح ^_^" + "\n* بريدك الالكتروني: " + emailInput.value);
    }
    clear(emailInput);
}




// To see if all the sender's data has been entered

function sendMessage() {

    var name = document.getElementById('name');

    spanName.innerHTML = "";
    spanEmail.innerHTML = "";
    spanMessage.innerHTML = "";

    var n = 0;

    if (name.value.length > 0) {
        massage(spanName, false);
        n++;
    } else if (name.value.length == 0) {
        massage(spanName, true);
    }

    if (email2Input.value.length > 0 && email2Input.value.endsWith("@hotmail.com")) {
        massage(spanEmail, false);
        n++;
    } else if (!email2Input.value.endsWith("@hotmail.com")) {
        massageForEmail(spanEmail, true);
    } else if (email2Input.value.length == 0) {
        massage(spanEmail, true);
    }

    if (messageInput.value.length > 0) {
        massage(spanMessage, false);
        n++;
    } else if (messageInput.value.length == 0) {
        massage(spanMessage, true);
    }

    if (n == 3) {
        var conf = confirm("هل أنت متأكد من البيانات التالية:-\n" + "\nالاسم: " + name.value + "\nالبريد الالكتروني: " + email2Input.value + "\nالرسالة: " + "(" + messageInput.value + ")");

        if (conf == true) {
            alert("تم ارسال الرسالة بنجاح  ^_^");
        } else {
            alert("تم الغاء ارسال الرسالة  -_-");
        }
        clear(name);
        clear(email2Input);
        clear(messageInput);
    }

}


// In the event that any box is empty of data, the ID value is taken to the appropriate span and the text is placed in it

function massage(span, isEmpty) {
    if (isEmpty) {
        span.innerHTML = "!! هذا الحقل مطلوب";
        span.setAttribute("style", "color:red;float: right;margin-top: 2%;font-weight: bolder;")
    } else {
        span.innerHTML = "";
    }
}


// if the email does not end in @hotmail.com

function massageForEmail(span, isEmpty) {
    if (isEmpty) {
        span.innerHTML = "!!@hotmail.com يجب أن ينتهي الايميل ب";
        span.setAttribute("style", "color:red;float: right;margin-top: 2%;font-weight: bolder;")
    } else {
        span.innerHTML = "";
    }
}


// When you click on any box, the text that was previously placed inside the span will be deleted

function clickInput(span) {
    span.innerHTML = "";
}


//to delete the values entered inside the boxes after confirming the information

function clear(input) {
    input.value = "";
}