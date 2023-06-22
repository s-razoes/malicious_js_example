let malicious_code = 'console.log("Evil things executed")';
let key = 'asdf0';

function ext(input, key)
{
    var cipherText = '';
    var length = input.length;

    for(var i=0; i < length; i++)
    {
        cipherText += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(Math.floor(i % key.length)));
    }
    var arr = []
    for(var i=0;i<cipherText.length;i++)arr[arr.length] = cipherText.charCodeAt(i)
    return arr.join();
}
let texec = malicious_code + ';return "window.location.href=\'www.google.com\'"';
ext(texec,key)
//grab the output
