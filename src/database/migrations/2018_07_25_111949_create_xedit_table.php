<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Xedit\Models\Enums\XeditType;


class CreateXeditTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('xedit', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 160);
            $table->string('slug', 200);
            $table->enum('type', array_values(XeditType::getConstants()));
            $table->unique(['title', 'type']);
            $table->longText('content');
            $table->timestamps();
        });

        Schema::create('xedit_container', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('layout_id');
            $table->string('slug', 160);
            $table->longText('content');
            $table->foreign('layout_id')->references('id')->on('xedit')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('xedit');
    }
}
