* UVOD *
ofd-client je http server koji predstavlja klijent za OFD HTTP pusher.
Sve što OFD klijent primi preko HTTP request-a pamti se u MySQL bazi.
SQL upit za generisanje prazne baze nalazi se u fajlu create_database.sql.

* PREDUSLOVI *
Instaliran MySQL server i kreirana prazna baza.
Instaliran node.js

* KONFIGURACIJA *
Konfiguracija klineta nalazi se u fajlu config.js

------- config.js ----------------------------
function getConfig(){
	return params = 
	{
		port: 8888,                  // port na kojem server osluškuje
		db: {                        // parametri za pristup bazi 
			host:     'localhost',
			user:     'root',
			password: '',
			database: 'ofd_client'		
		}
	}
}

exports.getConfig = getConfig;
---------------------------------------------

* POKRETANJE SERVERA *
Server se pokreće komandom 

node index.js

Ukoliko sve prođe kako treba, server javlja 

Server is listening on port 8888.