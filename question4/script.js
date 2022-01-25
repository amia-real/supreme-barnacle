// original code

var server_echo;
var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    server_echo = response.json().echo
    return response.json();
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});
server_echo.forEach(
    element => console.log(element)
)

// Problem with the code

// on line 23 you would need to use JSON.stringify(result) to get access to the data we submitted through POST as an alert.
// because the fetch call is asynchronous, the server_echo for each call (line 29) happens before server_echo can be assigned its value and is thus undefined. We could add a setTimeout function to wait for the fetch to finish before calling the function.
// additionally forEach is usually used on an array and not an object. As such, using a for in method might be a better choice.
// There is an error with line 20 when we are defining server_echo. A way to fix that is instead writing server_echo = result after the alert on line 24

// Additionally we can remove server_echo entirely and instead call the for in loop after the alert on line 24 on the variable result which will also display each element.

var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};
fetch('/echo/json/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, *',
        'Content-Type': 'application/json'
            },
            body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
        })
        .then(function (response) {
           
        
            return response.json();
        })
        .then(function (result) {
            alert(JSON.stringify(result));
            for( element in result) {
            console.log(element)
            }
        })
        .catch (function (error) {
            console.log('Request failed', error);
        });
