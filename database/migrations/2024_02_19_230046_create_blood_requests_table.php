<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bloodrequest', function (Blueprint $table) {
            $table->id();
            $table->integer('userid');
            $table->string('bloodtype');
            $table->string('sexe');
            $table->string('city');
            $table->string('phonenumber');
            $table->string('description');
            $table->string('email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bloodrequest');
    }
};
