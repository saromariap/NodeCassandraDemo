$(document).ready(function() {
	//alert(1);
	$('.deletesubscriber').on('click', deleteSubscriber);
});

function deleteSubscriber() {
	event.preventDefault(); //prevents the default action when the link is clicked

	var confirmation = confirm('Are you sure');

	if(confirmation) {
		$.ajax({
			type: 'DELETE',
			url: '/subscriber/'+ $('.deletesubscriber').data('id')
		}).done(function(response) {
			window.location.replace('/');
		});
	} else {
		return false;
	}
}