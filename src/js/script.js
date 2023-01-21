// As chaves que utilizaremos são
/* A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat" */



let copyBtn = document.querySelector("#copyBtn");
let inputText = document.getElementById("entrance") ; 
let output = document.getElementById("out"); 

 
 
  
 

let encode = ()=>{
    let text = inputText.value.toLowerCase(); 
    var encodedText = text.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat")
     output.innerHTML = `<p id="output">Mensagem Codificada</p><textarea name="" id="outputText"  cols="30" rows="10" maxlength="100px">${encodedText}</textarea>
      <button id="copyBtn" onclick="copy()">Copiar Texto</button>`
    console.log(encodedText)

}

 
let decode =()=>{
    let text = inputText.value.toLowerCase(); 
    var decodedText = text.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi, "o").replace(/ufat/gi,"u");
    output.innerHTML = `<p id="output">Mensagem Decodificada</p><textarea name="" id="outputText"  cols="30" rows="10" maxlength="100px">${decodedText}</textarea>
    <button id="copyBtn" onclick="copy()">Copiar Texto</button>`
    console.log(decodedText);
}

 

const copy=()=>{
    let textCopy = document.getElementById("outputText") ;
    textCopy.select();
    navigator.clipboard.writeText(textCopy.value)
    textCopy.value=''
    console.log(textCopy);
   
      
}
copyBtn.addEventListener('click',copy)
 