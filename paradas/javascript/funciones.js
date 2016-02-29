function enviar()
{

	datosEnviados={
		idClient:document.getElementById("idcliente").value,
		passKey:document.getElementById("passkey").value,
		idStop:document.getElementById("idparada").value,
		cultureInfo:document.getElementById("es").value		
	}	
	$.post("https://openbus.emtmadrid.es:9443/emt-proxy-server/last/geo/GetArriveStop.php",datosEnviados, function(data){
				
				for(i=0;i<data.arrives.length;i++)
				{
				
				alert("Autobus: "+data.arrives[i].lineId+" tarda: "+data.arrives[i].busTimeLeft+" segundos");
				}
	});
}
