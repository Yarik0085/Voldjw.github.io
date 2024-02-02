setTimeout(function(){$('.flash_error').fadeOut('fast')},3000);
setTimeout(function(){$('.flash_message').fadeOut('fast')},3000);

function add_reply(parent){
$("#addcomment").clone().addClass("reply_form").appendTo($("#reply_"+parent).closest("#reply_block"));
var $cancel = $(".reply_form").find(".cancel_reply");
$cancel.show();
document.getElementById("parent_comment").value=parent;
}

function cancel_reply(){
var $form = $('.reply_form');
$form.remove();
}

function order(value){
var value = $(value).val();
var link = window.location.href;
	$.ajax({
		type: "POST",
		url: link,
		data: {
			'order': value
		},
		success: function(data) {
			window.location.assign(window.location.href);
		}
	})
}

function sort(value){
var value = $(value).val();
var link = window.location.href;
	$.ajax({
		type: "POST",
		url: link,
		data: {
			'sort': value
		},
		success: function(data) {
			window.location.assign(window.location.href);
		}
	})
}

$(function(){

	/* Автозаполнитель поиска */
	$( ".fn-search.nimble" ).autocomplete({
		serviceUrl: '/ajax/live_search/get'+nimble.url_suffix+'?model='+nimble.model,
		minChars: 1,
		noCache: false,
		onSelect: function(suggestion) {
			$( "#fn-search" ).submit();
		},
		formatResult: function(suggestion, currentValue) {
			var reEscape = new RegExp( '(\\' + ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'].join( '|\\' ) + ')', 'g' );
			var pattern = '(' + currentValue.replace( reEscape, '\\$1' ) + ')';
			return "<div>" + (suggestion.thumb_image ? "<img align=absmiddle src='" + suggestion.thumb_image + "'> " : '') + "<a href='" + suggestion.url + "'>" + suggestion.value.replace( new RegExp( pattern, 'gi' ), '<strong>$1<\/strong>' ) + "</a></div>";
		}
	});

});

$(document).ready(function() {
	
	function send_form() {
	  	var form = $('.zayavka_form');
		var valemail = $("#email").val();
		$('#subButton').on('click', function(){     
		if($("#pers").prop("checked")) {  
	  	if(form.length > 0){

		  	form.submit(function(event) {
			  	event.preventDefault();
				$(this).find(':input[type=submit]').prop('disabled', true);
				$.ajax({
				   url: '/ajax/demand/set'+nimble.url_suffix,
				   type: 'POST',
				   dataType: 'json',
				   data: form.serialize(),
				})
				.done(function(data) {
						form[0].reset();
						form.find('input').val('');
						form.hide();
						if(data.status == 2){
							form.next('.hedden_text').next('.hedden_text_error').show();
						}else{
							form.next('.hedden_text').show();
						}
				});
		  	});
	  	}
		} else {
            window.alert('Поставьте галку - Даю согласие на обработку персональных данных.');
            $("#pers").css('border', '1px solid red');
        }
		});
	};
	
	function send_form2() {
	  	var form = $('.zayavka_form_nti');
		var valemail = $("#email").val();
		$('#subButton').on('click', function(){     
		if($("#pers").prop("checked")) {  
	  	if(form.length > 0){

		  	form.submit(function(event) {
			  	event.preventDefault();
				$(this).find(':input[type=submit]').prop('disabled', true);
				$.ajax({
				   url: '/ajax/demand/set_nti'+nimble.url_suffix,
				   type: 'POST',
				   dataType: 'json',
				   data: form.serialize(),
				})
				.done(function(data) {
						form[0].reset();
						form.find('input').val('');
						form.hide();
						if(data.status == 2){
							form.next('.hedden_text').next('.hedden_text_error').show();
						}else{
							form.next('.hedden_text').show();
						}
				});
		  	});
	  	}
		} else {
            window.alert('Поставьте галку - Даю согласие на обработку персональных данных.');
            $("#pers").css('border', '1px solid red');
        }
		});
	};
	
	function send_form3() {
	  	var form = $('.zayavka_form_certificate');
		var valemail = $("#email").val();
		$('#subButton').on('click', function(){     
		if($("#pers").prop("checked")) {  
	  	if(form.length > 0){

		  	form.submit(function(event) {
			  	event.preventDefault();
				$(this).find(':input[type=submit]').prop('disabled', true);
				$.ajax({
				   url: '/ajax/demand/set_certificate'+nimble.url_suffix,
				   type: 'POST',
				   dataType: 'json',
				   data: form.serialize(),
				})
				.done(function(data) {
						form[0].reset();
						form.find('input').val('');
						form.hide();
						if(data.status == 2){
							form.next('.hedden_text').next('.hedden_text_error').show();
						}else{
							form.next('.hedden_text').show();
						}
				});
		  	});
	  	}
		} else {
            window.alert('Поставьте галку - Даю согласие на обработку персональных данных.');
            $("#pers").css('border', '1px solid red');
        }
		});
	};
	
	function send_form4() {
	  	var form = $('.zayavka_form_school');
		var valemail = $("#email").val();
		$('#subButton').on('click', function(){     
		if($("#pers").prop("checked")) {  
	  	if(form.length > 0){

		  	form.submit(function(event) {
			  	event.preventDefault();
				$(this).find(':input[type=submit]').prop('disabled', true);
				$.ajax({
				   url: '/ajax/demand/set_school'+nimble.url_suffix,
				   type: 'POST',
				   dataType: 'json',
				   data: form.serialize(),
				})
				.done(function(data) {
						form[0].reset();
						form.find('input').val('');
						form.hide();
						if(data.status == 2){
							form.next('.hedden_text').next('.hedden_text_error').show();
						}else{
							form.next('.hedden_text').show();
						}
				});
		  	});
	  	}
		} else {
            window.alert('Поставьте галку - Даю согласие на обработку персональных данных.');
            $("#pers").css('border', '1px solid red');
        }
		});
	};
	
	function send_form5() {
	  	var form = $('.zayavka_form_school1');
		var valemail = $("#email").val();
		$('#subButton').on('click', function(){     
		if($("#pers").prop("checked")) {  
	  	if(form.length > 0){

		  	form.submit(function(event) {
			  	event.preventDefault();
				$(this).find(':input[type=submit]').prop('disabled', true);
				$.ajax({
				   url: '/ajax/demand/set_school1'+nimble.url_suffix,
				   type: 'POST',
				   dataType: 'json',
				   data: form.serialize(),
				})
				.done(function(data) {
						form[0].reset();
						form.find('input').val('');
						form.hide();
						if(data.status == 2){
							form.next('.hedden_text').next('.hedden_text_error').show();
						}else{
							form.next('.hedden_text').show();
						}
				});
		  	});
	  	}
		} else {
            window.alert('Поставьте галку - Даю согласие на обработку персональных данных.');
            $("#pers").css('border', '1px solid red');
        }
		});
	};
	
	send_form();
	send_form2();
	send_form3();
	send_form4();
	send_form5();
});