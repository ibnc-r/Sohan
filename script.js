
function contactMe() {
            // Detect if the user is on an Android device
            if (/Android/.test(navigator.userAgent)) {
                // Construct a mailto link with pre-filled details
                window.location.href = "mailto:mdsohanahmed2005@gmail.com?subject=Contact%20Request&body=Hi%20Buddy!%20How%20are%20you...";
            } else {
                // Redirect to a specific URL (e.g., a contact form or email address)
                window.location.href = "https://www.facebook.com/SohanAhmed.XXi";
            }
        }
