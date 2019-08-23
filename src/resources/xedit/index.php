<?php

require __DIR__ . '/../../../vendor/autoload.php';
(\Dotenv\Dotenv::create(__DIR__ . '/../../../'))->load();

?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>XEdit</title>
    <base href="./">
    <script>
    if (global === undefined) {
        var global = window;
    }
    </script>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body>
    <script>
    window.$xdam = {
        token: '<?php echo $_GET['token']['value'] ?>',
        base_url: '<?php echo env('XEDIT_API_URL') ?>/',
        endpoints: {
            resources: {
                list: 'resources/dam',
                get: 'resources/%(id)s',
                post: 'resources',
                put: 'resources/%(id)s',
                delete: 'resources/%(id)s'
            }
        },
        settings: {
            list: {
                model: {
                    id: 'resource_id',
                    title: 'name',
                    hash: 'id',
                    size: null,
                    type: 'type',
                    image: 'preview',
                    context: 'resource_context'
                },
                items: {
                    type: '%s',
                    title: '%s',
                    placeholder: {
                        image: 'https://via.placeholder.com/200/7ec9b8/ffffff?text=Image',
                        audio: 'https://via.placeholder.com/200/ef680e/ffffff?text=Audio',
                        video: 'https://via.placeholder.com/200/af8282/ffffff?text=Video',
                        pdf: 'https://via.placeholder.com/200/5273a8/ffffff?text=pdf',
                        default: 'https://via.placeholder.com/200/5ab1c9/ffffff?text=Other'
                    },
                    actions: {
                        edit: false,
                        download: false,
                        delete: false,
                        select: true
                    }
                }
            },
            facets: false
        },
        form: [{
            name: 'main',
            fields: [{
                    type: 'dropdown',
                    object: {
                        realName: 'items',
                        key: 'items',
                        label: 'Seleccione una palabra',
                        multi: true,
                        searchable: true,
                        fetchable: true,
                        endpoint: '<?php echo env('XEDIT_API_URL') ?>items?limit=0&api_token=<?php echo $_GET['token']['value'] ?>',
                        order: 1,
                        options: [],
                        map: {
                            key: 'id',
                            value: 'title'
                        }
                    }
                },
                {
                    type: 'dropdown',
                    object: {
                        key: 'category',
                        label: 'Seleccione un tipo',
                        options: [{
                                key: 'investigation',
                                value: 'Investigación'
                            },
                            {
                                key: 'activation',
                                value: 'Activación'
                            }
                        ],
                        order: 2
                    }
                },
                {
                    type: 'dropdown',
                    object: {
                        realName: 'license',
                        key: 'license_id',
                        label: 'Seleccione una licencia',
                        multi: false,
                        searchable: true,
                        fetchable: true,
                        endpoint: '<?php echo env('XEDIT_API_URL') ?>licenses?limit=0&api_token=<?php echo $_GET['token']['value'] ?>',
                        order: 3,
                        options: [],
                        map: {
                            key: 'id',
                            value: 'title'
                        }
                    }
                },
                {
                    type: 'text-area',
                    object: {
                        realName: 'license_desc',
                        key: 'license_desc',
                        label: 'Licencia',
                        order: 4
                    }
                }
            ]
        }]
    };
    </script>
    <app-root>Loading...</app-root>
    <script type="text/javascript" src="runtime.js"></script>
    <script type="text/javascript" src="polyfills.js"></script>
    <script type="text/javascript" src="styles.js"></script>
    <script type="text/javascript" src="scripts.js"></script>
    <script type="text/javascript" src="vendor.js"></script>
    <script type="text/javascript" src="main.js"></script>
</body>

</html>