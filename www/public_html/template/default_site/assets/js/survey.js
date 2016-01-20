$(document).ready(function() {
	
	$('#handover').validate({
	
		rules: {
			client_name: {
				required: true
			},
			job_number: {
				required: true
			},
			contracts_administrator: {
				required: true
			},
			supervisor: {
				required: true
			},
			client_liaison_officer: {
				required: true
			},
			contracts_administrator_availabilty: {
				required: true
			},
			contracts_administrator_product_knowledge: {
				required: true
			},
			contracts_administrator_helpfulness_assistance: {
				required: true
			},
			contracts_administrator_responsiveness_to_requests: {
				required: true
			},
			supervisor_availability: {
				required: true
			},
			supervisor_product_knowledge: {
				required: true
			},
			supervisor_helpfulness_assistance: {
				required: true
			},
			supervisor_responsiveness_to_requests: {
				required: true
			},
			availability_client_officer: {
				required: true
			},
			product_knowledge_client_officer: {
				required: true
			},
			helpfulness_assistance_client_officer: {
				required: true
			},
			responsiveness_to_requests_client_officer: {
				required: true
			},
			quality_of_construction: {
				required: true
			},
			would_you_consider_building_with_us_again: {
				required: true
			},
			would_you_recommend_our_company_to_other_homebuyers: {
				required: true
			},
			contact_email: {
				required: true
			},
			contact_phone: {
				required: true
			},
			contact_mobile: {
				required: true
			}
		},
		// showErrors: function(errorMap, errorList) {
			
		// 	var errorCount = this.numberOfInvalids();
			
		// 	if (errorCount > 0) {
		// 		var message = "Your form contains "
		// 			+ errorCount
		// 			+ " errors - Please ensure you have completed all required fields.";
		// 	}
		// 	// else {
		// 	// 	var message = "All fields are now complete, Thank you.";	
		// 	// }
			
		// 	$("#summary").html(message);
		// 	this.defaultShowErrors();
		// },
		invalidHandler: function(event, validator) {
			var errors = validator.numberOfInvalids();
			if (errors) {
				var message = errors == 1
					? 'Your form contains 1 error - Please ensure you have completed all required fields.'
					: 'Your form contains ' + errors + ' errors - Please ensure you have completed all required fields.';
				$("#summary").html(message).show();
			} else {
				$("#summary").hide();
			}
		}
	});

	$('#handover input, #handover textarea').on('change blur', function() {
		var isValid = (
			$('[name=client_name]').valid() &&
			$('[name=job_number]').valid() &&
			$('[name=contracts_administrator]').valid() &&
			$('[name=supervisor]').valid() &&
			$('[name=client_liaison_officer]').valid() &&
			$('[name=contracts_administrator_availabilty]').valid() &&
			$('[name=contracts_administrator_product_knowledge]').valid() &&
			$('[name=contracts_administrator_helpfulness_assistance]').valid() &&
			$('[name=contracts_administrator_responsiveness_to_requests]').valid() &&
			$('[name=supervisor_availability]').valid() &&
			$('[name=supervisor_product_knowledge]').valid() &&
			$('[name=supervisor_helpfulness_assistance]').valid() &&
			$('[name=supervisor_responsiveness_to_requests]').valid() &&
			$('[name=availability_client_officer]').valid() &&
			$('[name=product_knowledge_client_officer]').valid() &&
			$('[name=helpfulness_assistance_client_officer]').valid() &&
			$('[name=responsiveness_to_requests_client_officer]').valid() &&
			$('[name=quality_of_construction]').valid() &&
			$('[name=would_you_consider_building_with_us_again]').valid() &&
			$('[name=would_you_recommend_our_company_to_other_homebuyers]').valid() &&
			$('[name=contact_email]').valid() &&
			$('[name=contact_phone]').valid() &&
			$('[name=contact_mobile]').valid()
		);
		if(isValid) $('#summary').text('All fields are now complete, thank you.').show();
	});
	
	$('#prestart').validate({
		rules: {
			client_name: {
				required: true
			},
			job_number: {
				required: true
			},
			sales_consultant: {
				required: true
			},
			contracts_administrator: {
				required: true
			},
			contracts_administrator_availabilty: {
				required: true
			},
			contracts_administrator_product_knowledge: {
				required: true
			},
			contracts_administrator_helpfulness_assistance: {
				required: true
			},
			contracts_administrator_responsiveness_to_requests: {
				required: true
			},
			sales_availability: {
				required: true
			},
			sales_product_knowledge: {
				required: true
			},
			sales_helpfulness_assistance: {
				required: true
			},
			sales_responsiveness_to_requests: {
				required: true
			},
			prestart_age: {
				required: true
			},
			marital_status: {
				required: true
			},
			prestart_number_of_children: {
				required: true
			},
			do_you_currently: {
				required: true
			},
			purpose_of_new_home: {
				required: true
			},
			are_you_a_first_home_buyer: {
				required: true
			},
			why_did_you_choose_to_build_with_homestart: {
				required: true
			}
		},
		// showErrors: function(errorMap, errorList) {
			
		// 	var errorCount = this.numberOfInvalids();
			
		// 	if (errorCount > 0) {
		// 		var message = "Your form contains "
		// 			+ errorCount
		// 			+ " errors - Please ensure you have completed all required fields.";
		// 	}
		// 	// else {
		// 	// 	var message = "All fields are now complete, Thank you.";	
		// 	// }
			
		// 	$("#summary").html(message);
		// 	this.defaultShowErrors();
		// },
		invalidHandler: function(event, validator) {
			var errors = validator.numberOfInvalids();
			if (errors) {
				var message = errors == 1
					? 'Your form contains 1 error - Please ensure you have completed all required fields.'
					: 'Your form contains ' + errors + ' errors - Please ensure you have completed all required fields.';
				$("#summary").html(message).show();
			} else {
				$("#summary").hide();
			}
		}
	});

	$('#prestart input, #prestart textarea, #prestart select').on('change blur', function() {
		var isValid = (
			$('[name=client_name]').valid() &&
			$('[name=job_number]').valid() &&
			$('[name=sales_consultant]').valid() &&
			$('[name=contracts_administrator]').valid() &&
			$('[name=contracts_administrator_availabilty]').valid() &&
			$('[name=contracts_administrator_product_knowledge]').valid() &&
			$('[name=contracts_administrator_helpfulness_assistance]').valid() &&
			$('[name=contracts_administrator_responsiveness_to_requests]').valid() &&
			$('[name=sales_availability]').valid() &&
			$('[name=sales_product_knowledge]').valid() &&
			$('[name=sales_helpfulness_assistance]').valid() &&
			$('[name=sales_responsiveness_to_requests]').valid() &&
			$('[name=prestart_age]').valid() &&
			$('[name=marital_status]').valid() &&
			$('[name=prestart_number_of_children]').valid() &&
			$('[name=do_you_currently]').valid() &&
			$('[name=purpose_of_new_home]').valid() &&
			$('[name=are_you_a_first_home_buyer]').valid() &&
			$('[name=why_did_you_choose_to_build_with_homestart]').valid() && 
			$('[name=how_did_you_hear_about_homestart').val() &&
			$('[name=which_websites_did_you_use_to_research_your_new_home').val() &&
			$('[name=do_you_regularly_read_any_of_the_following_newspapers').val() &&
			$('[name=what_is_your_preferred_radio_station').val()
		);
		if(isValid) $('#summary').text('All fields are now complete, thank you.').show();
	});

});