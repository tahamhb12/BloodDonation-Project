<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodRequest extends Model
{
    protected $table = 'bloodrequest';
    protected $primaryKey = 'id';
     protected $fillable = [
          'userid',
          'bloodtype',
          'sexe',
          'city',
          'phonenumber',
          'description',
          'email',
      ];
  
    use HasFactory;
}
