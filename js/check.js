/* DICHIARAZIONE VARIABILI */
var pattTxt = new RegExp("[^a-z^A-Z]");

var pattPassword = new RegExp("[^a-z^A-Z^0-9]");
var okName = 0;
var okSurname = 0;
var okDate = 0;
var okPassword = 0;

/* SOTTOPROGRAMMI */
function check(){
	checkName();
	checkSurname();
	checkDate();
	checkPassword();

	if (okName == 1 && okSurname == 1 && okDate == 1 && okPassword == 1){
		document.getElementById("registration").submit();
	}
}

/* NAME */
function checkName(){
	var sName = document.getElementById("txtName").value;
	if (pattTxt.test(sName) || sName  == "") {
		document.getElementById("txtName").className = "error";
		document.getElementById("labelName").className = "red";
		document.getElementById("labelName").innerHTML = "Nome*";
		document.getElementById("message").style.visibility = "visible";
		okName = 0;
	}
	
	else{
		document.getElementById("txtName").className = "ok";
		document.getElementById("labelName").className = "";
		document.getElementById("labelName").innerHTML = "Nome";
		document.getElementById("message").style.visibility = "hidden";
		okName = 1;
	}
}

/* SURNAME */
function checkSurname(){
	var sSurname = document.getElementById("txtSurname").value;
	if (pattTxt.test(sSurname) || sSurname  == "") {
		document.getElementById("txtSurname").className = "error";
		document.getElementById("labelSurname").className = "red";
		document.getElementById("labelSurname").innerHTML = "Cognome*";
		document.getElementById("message").style.visibility = "visible";
		okSurname = 0;
	}
	
	else{
		document.getElementById("txtSurname").className = "ok";
		document.getElementById("labelSurname").className = "";
		document.getElementById("labelSurname").innerHTML = "Cognome";
		document.getElementById("message").style.visibility = "hidden";
		okSurname = 1;
	}
}

/* DATE */
function checkDate() {
    sDD = document.getElementById("cDD").value;
    sMM = document.getElementById("cMM").value;
    sYYYY = document.getElementById("cYYYY").value;

    if ((sMM==1)||(sMM==3)||(sMM==5)||(sMM==7)||(sMM==8)||(sMM=10)||(sMM==12)) {
        document.getElementById("cDD").className = "first ok";
        document.getElementById("cMM").className = "ok";
        document.getElementById("cYYYY").className = "ok";
        document.getElementById("labelDate").innerHTML = "Data";
        okDate = 1;
    }

    else if (((sMM==4)||(sMM==6)||(sMM==9)||(sMM==11))&&(sDD<31)) {
        document.getElementById("cDD").className = "first ok";
        document.getElementById("cMM").className = "ok";
        document.getElementById("cYYYY").className = "ok";
        document.getElementById("labelDate").innerHTML = "Data";
        document.getElementById("message").style.visibility = "hidden";
        okDate = 1;    
    }
    
    else if ( sMM==2 && sDD < 30) {
    	alert("entro");
        if ((((sYYYY%4==0)&&(sYYYY%100!=0))||(sYYYY%400==0))||(sDD<29)) {
            document.getElementById("cDD").className = "first ok";
            document.getElementById("cMM").className = "ok";
            document.getElementById("cYYYY").className = "ok";
            document.getElementById("labelDate").innerHTML = "Data";
            document.getElementById("message").style.visibility = "hidden";
            okDate = 1;
        }
    }
    else {
        document.getElementById("cDD").className = "first error";
        document.getElementById("cMM").className = "error";
        document.getElementById("cYYYY").className = "error";
        document.getElementById("labelDate").className = "red";
        document.getElementById("labelDate").innerHTML = "Data*";
        document.getElementById("message").style.visibility = "visible";
        okDate = 0;
    }
}

/* PASSWORD */
function checkPassword(){
	var sPassword = document.getElementById("pPassword").value;
	if (pattTxt.test(sPassword) || sPassword  == "") {
		document.getElementById("pPassword").className = "error";
		document.getElementById("labelPassword").className = "red";
		document.getElementById("labelPassword").innerHTML = "Password*";
		document.getElementById("message").style.visibility = "visible";
		okPassword = 0;
	}
	
	else{
		document.getElementById("pPassword").className = "ok";
		document.getElementById("labelPassword").className = "";
		document.getElementById("labelPassword").innerHTML = "Password";
		document.getElementById("message").style.visibility = "hidden";
		okPassword = 1;
	}
}
