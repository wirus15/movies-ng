(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config(jsoProvider) {
        jsoProvider.configure({
            baseUrl: 'https://api-v2launch.trakt.tv',
            client_id: '46850385b8b30f9c03d3f9ee4d7af98825d08a868039d4cd495b757225dd3d08',
            clientSecret: 'f5c3f0c3c7f825f73e689488ae03c5dda18425f472f4e3890d69c709dd5a683f'
        });
    }

})();
