<?php

namespace Xedit;

use Illuminate\Support\ServiceProvider;

class XeditServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__ . '/resources/views', 'xedit');
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');

        $this->mergeConfigFrom(
            __DIR__ . '/config/xedit.php', 'xedit'
        );

        $this->publishes([
            __DIR__ . '/config/xedit.php' => config_path('xedit.php'),
        ], 'config');

        $this->publishes([
            __DIR__ . '/resources/xedit' => public_path('vendor/xedit'),
        ], 'xedit');

        $this->publishes([
            __DIR__ . '/resources/lang/xedit.php' => resource_path('lang/en/xedit.php'),
            __DIR__ . '/resources/lang/xedit.php' => resource_path('lang/es/xedit.php'),
        ], 'langs');
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
