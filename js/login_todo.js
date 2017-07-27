
$(function() {
		$("#login").click(function(e) {
			//alert("D");
			$(function() {
				var user = {};
				user.act = "login";
				user.ac = $("input[name='log_ac']").val();
				user.pw = $("input[name='log_pw']").val();
				//	alert(user.ac);
				$.ajax({
					url: "http://port-5000.desmond2-desmondyiu724118.codeanyapp.com/todo.html",
					type: "POST",
					data: user,
					success: function(result) {
						
							var ss = result.split(",");
							var dya=[];
							for (var i in ss) {
									dya[i]=ss[i];
							}
						
						//alert(dya[0]);
						//alert(result);
						if (dya[0] == "Login successful") {
							localStorage.setItem("login", user.ac);
							$('.loginname').html(user.ac);
							$('.loginstay').html("Logout");
							$(".popupLogin_DY").fadeOut();
							$(".logined").show();
							$('.loginfirst').hide();
							localStorage.setItem("fav", dya[1]);
							likebox = [].slice.call(dya[1]);
							var cars=[];
					
							likebox = [].slice.call(dya[1]);
							cars[0] = likebox[0];
							cars[1] = likebox[1];
							cars[2] = likebox[2];
							cars[3] = likebox[3];
							cars[4] = likebox[4];
								if (cars[0] == "1") {
					document.getElementById("check0").checked = true;
				} else {
					document.getElementById("check0").checked = false;
				}
				if (cars[1] == "1") {
					document.getElementById("check1").checked = true;
				} else {
					document.getElementById("check1").checked = false;
				}
				if (cars[2] == "1") {
					document.getElementById("check2").checked = true;
				} else {
					document.getElementById("check2").checked = false;
				}
				if (cars[3] == "1") {
					document.getElementById("check3").checked = true;
				} else {
					document.getElementById("check3").checked = false;
				}
				if (cars[4] == "1") {
					document.getElementById("check4").checked = true;
				} else {
					document.getElementById("check4").checked = false;
				}
							//updatecheck();
							//getfavlogin();
							
						}
						console.log(result);
						if (result.status == 200) {
							console.log("hope can see here");
						}
					},
					error: function(result) {
						console.log(result);
					}
				});
				return false;
			});
		});
		$("#sign_up").click(function(e) {
			var user = {};
			user.act = "signup";
			user.ac = $("input[name='ac']").val();
			user.pw = $("input[name='pw']").val();
			user.email = $("input[name='email']").val();
			if (user.ac == "" || user.pw == "" || $("input[name='re_pw']").val() == "" || user.email == "") {
				alert("Please input all infomration!");
			} else if ($("input[name='re_pw']").val() != user.pw) {
				alert("Please input same password at repeat password!");
			} else {
				$.ajax({
					url: "http://port-5000.desmond2-desmondyiu724118.codeanyapp.com/todo.html",
					type: "POST",
					data: user,
					datatype: "json",
					success: function(result) {
						alert(result);
						localStorage.setItem("login", user.ac);
						$('.loginname').html(user.ac);
						$('.loginstay').html("Logout");
						$(".popupLogin_DY").fadeOut();
						$(".logined").show();
						$('.loginfirst').hide();
							localStorage.setItem("fav","00000");
							likebox = [].slice.call(result);
							cars[0] = likebox[0];
							cars[1] = likebox[1];
							cars[2] = likebox[2];
							cars[3] = likebox[3];
							cars[4] = likebox[4];
							updatecheck();
						
						console.log(result);
						if (result.status == 200) {
							console.log("hope can see here");
						}
					},
					error: function(result) {
						console.log(result);
						
					}
				});
			}
			return false;
		});
	});
function getfavlogin() {
							var cars1=[];
					
							likebox = [].slice.call(dya[1]);
							cars1[0] = likebox[0];
							cars1[1] = likebox[1];
							cars1[2] = likebox[2];
							cars1[3] = likebox[3];
							cars1[4] = likebox[4];
							updatecheck();
}
function updatecheck() {
				if (cars[0] == "1") {
					document.getElementById("check0").checked = true;
				} else {
					document.getElementById("check0").checked = false;
				}
				if (cars[1] == "1") {
					document.getElementById("check1").checked = true;
				} else {
					document.getElementById("check1").checked = false;
				}
				if (cars[2] == "1") {
					document.getElementById("check2").checked = true;
				} else {
					document.getElementById("check2").checked = false;
				}
				if (cars[3] == "1") {
					document.getElementById("check3").checked = true;
				} else {
					document.getElementById("check3").checked = false;
				}
				if (cars[4] == "1") {
					document.getElementById("check4").checked = true;
				} else {
					document.getElementById("check4").checked = false;
				}
			}