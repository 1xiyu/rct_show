const config  = require( './webpack.build' );
const webpack = require( 'webpack' );
const util = require( './util' );
webpack( config, function( err, stats ) {
    if (err) {
        util.logErrors(err);
    }
    // show build info to console
    console.log( stats.toString( { chunks : false, color : true } ) );
} );