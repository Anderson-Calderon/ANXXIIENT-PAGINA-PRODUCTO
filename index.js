import funcion01 from './funciones/funcion01.js';

funcion01();

document.addEventListener("DOMContentLoaded",function(){
	
	
	
	
	function funcionObservadora(mutations,observe){
		
		let existeElElementoObservado = false;
		
		mutations.forEach((mutation)=>{
			
			
			const summaryBefore = document.querySelector(".summary-before");
			if(summaryBefore && !existeElElementoObservado){
				
				
				
			 

				cambiarElAnchoDeLasColumnas()
					
				window.addEventListener("resize",function(){
					
					cambiarElAnchoDeLasColumnas()
					
					
				});
				
				
				
				
				existeElElementoObservado=true;
				
				
				
			   
			   }
			
			
		})
		
	}
	
	
	function cambiarElAnchoDeLasColumnas(){


		const summary = document.querySelector(".summary");
		const summaryBefore = document.querySelector(".summary-before");
		
		const anchoPantalla = window.innerWidth;
					
					if(anchoPantalla >1024){
					   
						
						   summaryBefore.classList.remove("col-lg-6");
						   summaryBefore.classList.add("col-lg-5");
						   
						   summary.classList.remove("col-lg-6");
						   summary.classList.add("col-lg-5");
					   
					   }else{
						   
						   summaryBefore.classList.remove("col-lg-5");
						   summaryBefore.classList.add("col-lg-6");
						   
						   summary.classList.remove("col-lg-5");
						   summary.classList.add("col-lg-6");
						   
						   
						   
					   }
		
	}
	
	
	//CONFIGURACIÓN DE LA MUTATION OBSERVER
	const observer = new MutationObserver(funcionObservadora);
	
	const config = {
						
						childList:true,
						subtree:true
		
		
					}
	
	const nodo = document.querySelector("body");
	
	observer.observe(nodo,config);
	
	
	
});
