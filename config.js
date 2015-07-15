function getConfig(){
	return params = 
	{
		port: 8888,
		db: {
			host:     'localhost',
			user:     'root',
			password: '',
			database: 'ofd_client'		
		}
	}
}

exports.getConfig = getConfig;