var inputElements = document.getElementsByTagName("input");
for (var i=0; i<inputElements.length; i++) {
if (inputElements[i].getAttribute('type') == 'radio' && inputElements[i].getAttribute('value') == Math.floor(Math.random() * (4 - 3 + 1)) + 3)
{inputElements[i].checked
}
true;
}