( function () {
	function LeftNav () {
		this.Games = [
			'MU',
			'Ragnarok'
		];
	}

	angular
		.module( 'app.layout' )
		.controller( 'LeftNav', LeftNav );

} )( );