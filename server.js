var Hapi = require( 'hapi' );
var Inert = require( 'inert' );
var server = new Hapi.Server();

server.connection( {
    host: 'localhost',
    port: Number( process.argv[ 2 ] || 8000 )
} );

server.register( Inert, function ( err ) {
	if ( err ) {
		throw err;
	}
} );

var routes = [
	{
		method  : 'GET',
		path    : '/{params*}',
		handler : {
			directory : {
				path : 'client'
			}
		}
	},
	{
		method  : 'GET',
		path    : '/bower_components/{params*}',
		handler : {
			directory : {
				path : 'bower_components'
			}
		}
	}
];

// Add the route
server.route( routes );

// Start the server
server.start( function() {
     console.log( 'Server running at:', server.info.uri );
} );