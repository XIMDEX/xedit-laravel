<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

header('Accept', 'application/json');


Route::group(['prefix' => 'api/v1/xedit'], function () {
    Route::get('/', ['as' => 'api.xedit.show', 'uses' => 'Xedit\Http\Controllers\Api\XeditController@show']);
    Route::post('/', ['as' => 'api.xedit.show', 'uses' => 'Xedit\Http\Controllers\Api\XeditController@save']);
});
