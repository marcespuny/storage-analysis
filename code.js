<script>
var inc = document.querySelector('.calculator-input.income')
var incSel= document.getElementById('income')
var vac = document.querySelector('.calculator-input.vacancy')
var vacSel= document.getElementById('vacancy')
var con = document.querySelector('.calculator-input.concessions')
var conSel= document.getElementById('concessions')

if(inc.value!==''){
if(incSel.value==='year'){
document.querySelector('.total-income').innerHTML= inc.value
}
else if(incSel.value==='revenue'){
var rv = (parseFloat(inc.value.split('$')[1].replaceAll(',', ''))/100)*parseFloat(document.querySelector('.gross').innerHTML.split('$')[1].replaceAll(',', ''))
rv=rv.toLocaleString('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})                    
document.querySelector('.total-income').innerHTML='$'+rv
}
else if(incSel.value==='sqft'){
var sq = parseFloat(inc.value.split('$')[1].replaceAll(',', ''))*parseFloat(document.querySelector('.total-nsrf').innerHTML.replaceAll(',', ''))
sq=sq.toLocaleString('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})                    
document.querySelector('.total-income').innerHTML='$'+sq
}
}
if(vac.value!==''){
if(vacSel.value==='year'){
document.querySelector('.total-vacancy').innerHTML= vac.value
}
else if(vacSel.value==='revenue'){
var rv = (parseFloat(vac.value.split('$')[1].replaceAll(',', ''))/100)*parseFloat(document.querySelector('.gross').innerHTML.split('$')[1].replaceAll(',', ''))
rv=rv.toLocaleString('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})                    
document.querySelector('.total-vacancy').innerHTML='$'+rv
}
else if(vacSel.value==='sqft'){
var sq = parseFloat(vac.value.split('$')[1].replaceAll(',', ''))*parseFloat(document.querySelector('.total-nsrf').innerHTML.replaceAll(',', ''))
sq=sq.toLocaleString('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})                    
document.querySelector('.total-vacancy').innerHTML='$'+sq
}
}
if(con.value!==''){
if(conSel.value==='year'){
document.querySelector('.total-concessions').innerHTML= con.value
}
else if(conSel.value==='revenue'){
var cn = (parseFloat(con.value.split('$')[1].replaceAll(',', ''))/100)*parseFloat(document.querySelector('.gross').innerHTML.split('$')[1].replaceAll(',', ''))
cn=cn.toLocaleString('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})                    
document.querySelector('.total-concessions').innerHTML='$'+cn
}
else if(conSel.value==='sqft'){
var sq = parseFloat(con.value.split('$')[1].replaceAll(',', ''))*parseFloat(document.querySelector('.total-nsrf').innerHTML.replaceAll(',', ''))
sq=sq.toLocaleString('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})                    
document.querySelector('.total-concessions').innerHTML='$'+sq
}
}
var op = parseFloat(document.querySelector('.gross').innerHTML.split('$')[1].replaceAll(',', ''))+
parseFloat(document.querySelector('.total-income').innerHTML.split('$')[1].replaceAll(',', ''))-
parseFloat(document.querySelector('.total-vacancy').innerHTML.split('$')[1].replaceAll(',', ''))-
parseFloat(document.querySelector('.total-concessions').innerHTML.split('$')[1].replaceAll(',', ''))
op=op.toLocaleString('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})                    
document.querySelector('.operating').innerHTML='$'+op
</script>
