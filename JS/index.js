$(document).ready(function(){

	add=document.getElementById("add");
	
	function refresh(){
				let tablebody=document.getElementById('tbody1');
				let str='';
				data=localStorage.getItem('item');
				data=JSON.parse(data);
				if(data!=undefined){
								data.forEach((element,index)=>{
									str +=`
									<tr>
										<td class="td">${index+1}</td>
										<td class="td">${element[0]}</td>
										<td class="td">${element[1]}</td>
										<td class="delete td">
										<button type="button" id="remove" onclick="deleted(${index})">DELETE</button>
										</td>
						
									</tr>`;
								})
								tablebody.innerHTML=str;
					}
				
				else{
					console.log("empty");
				}
			}
	function update(){
		title=document.getElementById("title").value;
		desc=document.getElementById("description").value;
		if((title != "" && desc!="") || localStorage.getItem('item')!=null)
		{
			if(localStorage.getItem('item')==null){
					values=[];
					values.push([title,desc]);
					
					localStorage.setItem('item',JSON.stringify(values));
					// console.log(localStorage.getItem('item'));
				}
				else{
					data=localStorage.getItem('item');
					data=JSON.parse(data);
					data.push([title,desc]);
					localStorage.setItem('item',JSON.stringify(data));
				}
		
			
				let tablebody=document.getElementById('tbody1');
				let str='';
				data=localStorage.getItem('item');
				data=JSON.parse(data);
				data.forEach((element,index)=>{
					str +=`
					<tr>
						<td class="td">${index+1}</td>
						<td class="td">${element[0]}</td>
						<td class="td">${element[1]}</td>
						<td class="delete td">
						<button type="button" id="remove" onclick="deleted(${index})">DELETE</button>
						</td>
		
					</tr>`;
				})
				tablebody.innerHTML=str;
				
		}
	}
	refresh();
	add.addEventListener("click",update);
	
	
			





})